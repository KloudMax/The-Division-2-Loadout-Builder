
import { useMemo } from 'react';
import { Loadout, CalculatedStats, BrandId, GearSetId, GearSlotId, CalculatedStatsBase, ActiveSetInfo, SelectedGearPiece, NamedItemInfo, GearModId, SelectedSkillState, SkillModOptionId, SkillNameId, SelectedWeaponState, WeaponSlotId, WeaponStats, WeaponCategory, ActiveWeaponTalentInfo } from '../types';
import { 
    INITIAL_CALCULATED_STATS, 
    BRANDS_DATA, 
    CORE_ATTRIBUTES_DATA, 
    MINOR_ATTRIBUTES_DATA, 
    GEAR_SETS_DATA, 
    NAMED_CHEST_ITEMS_DATA, 
    NAMED_BACKPACK_ITEMS_DATA, 
    NAMED_GLOVES_ITEMS_DATA, 
    NAMED_HOLSTER_ITEMS_DATA, 
    NAMED_KNEEPADS_ITEMS_DATA, 
    NAMED_MASK_ITEMS_DATA, 
    GEAR_MODS_DATA, 
    ALL_SKILL_MOD_OPTIONS_DATA, 
    SKILL_DEFINITIONS_DATA, 
    WEAPON_SLOTS_CONFIG, 
    ALL_WEAPON_ATTACHMENT_OPTIONS_DATA, 
    EXOTIC_WEAPON_NAMES, 
    EXOTIC_WEAPON_FIXED_MOD_BONUSES, 
    ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST, 
    ALL_LMG_WEAPON_DATA_LIST, 
    ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST, 
    ALL_RIFLE_WEAPON_DATA_LIST, 
    ALL_SHOTGUN_WEAPON_DATA_LIST, 
    ALL_PISTOL_WEAPON_DATA_LIST, 
    ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST, 
    WEAPON_TALENTS_DATA 
} from '../constants';


const parseStatValue = (description: string): { value: number, isPercentage: boolean } | null => {
  const match = description.match(/([+-]?\d*\.?\d+)\s*(%?)/);
  if (match) {
    return {
      value: parseFloat(match[1]),
      isPercentage: match[2] === '%',
    };
  }
  return null;
};

const getWeaponDefinition = (weaponInstanceId: string | null, weaponCategory: WeaponCategory | null): WeaponStats | undefined => {
  if (!weaponInstanceId || !weaponCategory) return undefined;
  let weaponList: WeaponStats[] = [];
  switch (weaponCategory) {
    case WeaponCategory.AssaultRifle: weaponList = ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST; break;
    case WeaponCategory.LightMachineGun: weaponList = ALL_LMG_WEAPON_DATA_LIST; break;
    case WeaponCategory.MarksmanRifle: weaponList = ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST; break;
    case WeaponCategory.Pistol: weaponList = ALL_PISTOL_WEAPON_DATA_LIST; break;
    case WeaponCategory.Rifle: weaponList = ALL_RIFLE_WEAPON_DATA_LIST; break;
    case WeaponCategory.Shotgun: weaponList = ALL_SHOTGUN_WEAPON_DATA_LIST; break;
    case WeaponCategory.SubmachineGun: weaponList = ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST; break;
    default: return undefined;
  }
  return weaponList.find(w => w.name === weaponInstanceId);
};


export const useCalculatedStats = (loadout: Loadout): CalculatedStats => {
  return useMemo(() => {
    const stats: CalculatedStats = JSON.parse(JSON.stringify(INITIAL_CALCULATED_STATS));
    const brandCounts: Record<BrandId, number> = {};
    const gearSetCounts: Record<GearSetId, { count: number, pieces: SelectedGearPiece[] }> = {};

    Object.values(GearSlotId).forEach(slotIdValue => {
        const piece = loadout[slotIdValue] as SelectedGearPiece;
        if (piece && piece.itemId) {
            if (piece.itemType === 'brand') {
                brandCounts[piece.itemId as BrandId] = (brandCounts[piece.itemId as BrandId] || 0) + 1;
            } else if (piece.itemType === 'gearset') {
                if (!gearSetCounts[piece.itemId as GearSetId]) {
                    gearSetCounts[piece.itemId as GearSetId] = { count: 0, pieces: [] };
                }
                gearSetCounts[piece.itemId as GearSetId].count++;
                gearSetCounts[piece.itemId as GearSetId].pieces.push(piece);
            } else if (piece.itemType === 'nameditem') {
                let namedItemInfo: NamedItemInfo | undefined;
                switch(piece.slotId) {
                    case GearSlotId.Chest: namedItemInfo = NAMED_CHEST_ITEMS_DATA[piece.itemId as string]; break;
                    case GearSlotId.Backpack: namedItemInfo = NAMED_BACKPACK_ITEMS_DATA[piece.itemId as string]; break;
                    case GearSlotId.Gloves: namedItemInfo = NAMED_GLOVES_ITEMS_DATA[piece.itemId as string]; break;
                    case GearSlotId.Holster: namedItemInfo = NAMED_HOLSTER_ITEMS_DATA[piece.itemId as string]; break;
                    case GearSlotId.Kneepads: namedItemInfo = NAMED_KNEEPADS_ITEMS_DATA[piece.itemId as string]; break;
                    case GearSlotId.Mask: namedItemInfo = NAMED_MASK_ITEMS_DATA[piece.itemId as string]; break;
                }
                if (namedItemInfo) {
                    brandCounts[namedItemInfo.brandId] = (brandCounts[namedItemInfo.brandId] || 0) + 1;
                    // Specific named item stat additions (examples)
                    if (namedItemInfo.id === 'contractorsGloves') stats.damageToArmor += 8;
                    if (namedItemInfo.id === 'foxsPrayer') stats.damageToTargetsOutOfCover += 8;
                    if (namedItemInfo.id === 'theHollowMan') stats.damageToHealth += 10;
                    if (namedItemInfo.id === 'picarosHolster') stats.weaponDamageBonus += 15; // This is a special core-like attribute
                    if (namedItemInfo.id === 'emperorsGuard') stats.armorRegen += (INITIAL_CALCULATED_STATS.armor * 0.01); // 1% of base armor
                }
            }
        }

        if (piece && piece.coreAttributeId && CORE_ATTRIBUTES_DATA[piece.coreAttributeId]?.statEffect) {
            const effect = CORE_ATTRIBUTES_DATA[piece.coreAttributeId].statEffect!;
            const statKey = effect.stat as keyof CalculatedStatsBase;
            if (typeof (stats as any)[statKey] === 'number') { (stats as any)[statKey] += effect.value; }
        }
        if (piece) {
            piece.minorAttributeIds.forEach(attrId => {
                if (attrId && MINOR_ATTRIBUTES_DATA[attrId]?.statEffect) {
                    const effect = MINOR_ATTRIBUTES_DATA[attrId].statEffect!;
                    const statKey = effect.stat as keyof CalculatedStatsBase;
                    if (typeof (stats as any)[statKey] === 'number') { (stats as any)[statKey] += effect.value; }
                }
            });
            piece.modSlots.forEach(modSlot => {
                if (modSlot.modId && GEAR_MODS_DATA[modSlot.modId]?.statEffect) {
                    const effect = GEAR_MODS_DATA[modSlot.modId].statEffect;
                    const statKey = effect.stat as keyof CalculatedStatsBase;
                    if (typeof (stats as any)[statKey] === 'number') { (stats as any)[statKey] += effect.value; }
                }
            });
        }
    });
    
    // Skills processing
    (['skill1', 'skill2'] as const).forEach(skillSlotKey => {
        const skill = loadout[skillSlotKey] as SelectedSkillState;
        if (skill.skillId && skill.modSelections) {
            const skillDef = SKILL_DEFINITIONS_DATA[skill.skillId];
            if(skillDef) {
                skill.modSelections.forEach(modSelection => {
                    if (modSelection.selectedModOptionId) {
                        const modOptionData = ALL_SKILL_MOD_OPTIONS_DATA.find(opt => opt.id === modSelection.selectedModOptionId);
                        if (modOptionData && modOptionData.effects) {
                            modOptionData.effects.forEach(effect => {
                                const statKey = effect.stat as keyof CalculatedStatsBase;
                                if (typeof (stats as any)[statKey] === 'number') {
                                    (stats as any)[statKey] += effect.value; // Assuming direct addition for simplicity
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    // Weapons processing (including weapon talents)
    WEAPON_SLOTS_CONFIG.forEach(wsConfig => {
        const weaponState = loadout[wsConfig.id] as SelectedWeaponState;
        if (weaponState.weaponInstanceId && weaponState.weaponCategory) {
            const weaponDef = getWeaponDefinition(weaponState.weaponInstanceId, weaponState.weaponCategory);
            const isExotic = weaponDef ? EXOTIC_WEAPON_NAMES.includes(weaponDef.name) : false;

            if(isExotic && weaponDef && EXOTIC_WEAPON_FIXED_MOD_BONUSES[weaponDef.name]) {
                EXOTIC_WEAPON_FIXED_MOD_BONUSES[weaponDef.name].forEach(effect => {
                    const statKey = effect.stat as keyof CalculatedStatsBase;
                    if (typeof (stats as any)[statKey] === 'number') {
                        (stats as any)[statKey] += effect.value;
                    }
                });
            } else if (!isExotic) {
                weaponState.attachmentSelections.forEach(attSelection => {
                    if (attSelection.selectedAttachmentOptionId) {
                        const attOptionData = ALL_WEAPON_ATTACHMENT_OPTIONS_DATA.find(opt => opt.id === attSelection.selectedAttachmentOptionId);
                        if (attOptionData && attOptionData.effects) {
                            attOptionData.effects.forEach(effect => {
                                const statKey = effect.stat as keyof CalculatedStatsBase;
                                if (typeof (stats as any)[statKey] === 'number') {
                                    (stats as any)[statKey] += effect.value;
                                }
                            });
                        }
                    }
                });
            }

            if (weaponDef) {
                switch (weaponDef.weaponBonusType) {
                    case 'Health': stats.damageToHealth += weaponDef.weaponBonusValuePercent; break;
                    case 'Armor': stats.damageToArmor += weaponDef.weaponBonusValuePercent; break;
                    case 'OutOfCoverDamage': stats.damageToTargetsOutOfCover += weaponDef.weaponBonusValuePercent; break;
                    case 'HeadshotDamage': stats.headshotDamage += weaponDef.weaponBonusValuePercent; break;
                    case 'CriticalHitDamage': stats.criticalHitDamage += weaponDef.weaponBonusValuePercent; break;
                    case 'DamageToArmor': stats.damageToArmor += weaponDef.weaponBonusValuePercent; break;
                    case 'CriticalHitChance': stats.criticalHitChance += weaponDef.weaponBonusValuePercent; break;
                }
            }
            
            // Add selected weapon talent to stats
            if (weaponState.talentId && WEAPON_TALENTS_DATA[weaponState.talentId] && weaponDef && !isExotic) {
                const talentData = WEAPON_TALENTS_DATA[weaponState.talentId];
                stats.activeWeaponTalents.push({
                    weaponSlot: wsConfig.id,
                    talentName: talentData.name,
                    description: talentData.description,
                });
            }
        }
    });


    // Apply Brand Set Bonuses
    for (const brandId in brandCounts) {
      const count = brandCounts[brandId];
      const brandData = BRANDS_DATA[brandId];
      if (brandData) {
        brandData.bonuses.forEach(bonus => {
          if (count >= bonus.pieces) {
            stats.brandSetBonuses.push({ name: `${brandData.name} (${bonus.pieces}pc)`, description: bonus.description });
            const parsed = parseStatValue(bonus.description);
            if (parsed) {
              if (bonus.description.includes('Health') && !bonus.description.includes('Skill Health')) stats.health += parsed.isPercentage ? (INITIAL_CALCULATED_STATS.health * parsed.value / 100) : parsed.value;
              else if (bonus.description.includes('Armor Regen')) stats.armorRegen += parsed.isPercentage ? (INITIAL_CALCULATED_STATS.armor * parsed.value / 100) : parsed.value;
              else if (bonus.description.includes('Total Armor')) stats.totalArmorBonus += parsed.value; 
              else if (bonus.description.includes('Weapon Damage') && !bonus.description.includes('Signature')) stats.weaponDamageBonus += parsed.value;
              else if (bonus.description.includes('Critical Hit Chance')) stats.criticalHitChance += parsed.value;
              else if (bonus.description.includes('Critical Hit Damage')) stats.criticalHitDamage += parsed.value;
              else if (bonus.description.includes('Headshot Damage')) stats.headshotDamage += parsed.value;
              else if (bonus.description.includes('Skill Haste') || bonus.description.includes('Cooldown Reduction')) stats.skillHaste += parsed.value;
              else if (bonus.description.includes('Skill Damage')) stats.skillDamage += parsed.value;
              else if (bonus.description.includes('Skill Repair')) stats.skillRepair += parsed.value;
              else if (bonus.description.includes('Status Effects')) stats.statusEffects += parsed.value;
              else if (bonus.description.includes('Hazard Protection')) stats.hazardProtection += parsed.value;
              else if (bonus.description.includes('Marksman Rifle Damage')) stats.marksmanRifleDamage += parsed.value;
              else if (bonus.description.includes('SMG Damage')) stats.smgDamage += parsed.value;
              else if (bonus.description.includes('Shotgun Damage')) stats.shotgunDamage += parsed.value;
              else if (bonus.description.includes('Rifle Damage')) stats.rifleDamage += parsed.value;
              else if (bonus.description.includes('LMG Damage')) stats.lmgDamage += parsed.value;
              else if (bonus.description.includes('Pistol Damage')) stats.pistolDamage += parsed.value;
              else if (bonus.description.includes('Skill Tier')) stats.skillTiers += parsed.value;
              else if (bonus.description.includes('Reload Speed')) stats.reloadSpeed += parsed.value;
              else if (bonus.description.includes('Ammo Capacity')) stats.ammoCapacity += parsed.value;
              else if (bonus.description.includes('Magazine Size')) stats.magazineSize += parsed.value;
              else if (bonus.description.includes('Weapon Handling') || bonus.description.includes('Stability') || bonus.description.includes('Accuracy')) stats.weaponHandling += parsed.value;
              else if (bonus.description.includes('Armor on Kill')) stats.armorOnKill += parsed.value;
              else if (bonus.description.includes('Signature Weapon Damage')) stats.signatureWeaponDamage += parsed.value;
              else if (bonus.description.includes('Damage to Armor')) stats.damageToArmor += parsed.value;
              else if (bonus.description.includes('Damage to Health')) stats.damageToHealth += parsed.value;
              else if (bonus.description.includes('Incoming Repairs') || bonus.description.includes('Extra Incoming Healing')) stats.incomingRepairs += parsed.value;
              else if (bonus.description.includes('Skill Duration')) stats.skillDuration += parsed.value;
            }
          }
        });
      }
    }
    
    stats.armor += INITIAL_CALCULATED_STATS.armor * (stats.totalArmorBonus / 100);


    for (const gearSetId in gearSetCounts) {
      const { count, pieces } = gearSetCounts[gearSetId];
      const setData = GEAR_SETS_DATA[gearSetId];
      if (setData) {
        const activeSet: ActiveSetInfo = { id: gearSetId as GearSetId, name: setData.name, activeBonuses: [] };
        setData.bonuses.forEach(bonus => {
          if (count >= bonus.pieces) {
            activeSet.activeBonuses.push({ pieces: bonus.pieces, description: bonus.description });
            const parsed = parseStatValue(bonus.description);
            if (parsed) {
              if (bonus.description.includes('Skill Haste')) stats.skillHaste += parsed.value;
              else if (bonus.description.includes('Skill Damage')) stats.skillDamage += parsed.value;
              else if (bonus.description.includes('Skill Repair')) stats.skillRepair += parsed.value;
              else if (bonus.description.includes('Status Effects')) stats.statusEffects += parsed.value;
              else if (bonus.description.includes('Reload Speed')) stats.reloadSpeed += parsed.value;
              else if (bonus.description.includes('Ammo Capacity')) stats.ammoCapacity += parsed.value;
              else if (bonus.description.includes('Magazine Size')) stats.magazineSize += parsed.value;
              else if (bonus.description.includes('Marksman Rifle Damage')) stats.marksmanRifleDamage += parsed.value;
              else if (bonus.description.includes('Headshot Damage')) stats.headshotDamage += parsed.value;
              else if (bonus.description.includes('Critical Hit Chance')) stats.criticalHitChance += parsed.value;
              else if (bonus.description.includes('Critical Hit Damage')) stats.criticalHitDamage += parsed.value;
              else if (bonus.description.includes('Signature Weapon Damage')) stats.signatureWeaponDamage += parsed.value;
              else if (bonus.description.includes('Weapon Damage') && !bonus.description.includes('Signature')) stats.weaponDamageBonus += parsed.value;
              else if (bonus.description.includes('Total Armor')) stats.armor += INITIAL_CALCULATED_STATS.armor * (parsed.value / 100);
              else if (bonus.description.includes('armor/sec regeneration')) stats.armorRegen += INITIAL_CALCULATED_STATS.armor * (parsed.value / 100) ; 
              else if (bonus.description.includes('Shield health')) stats.shieldHealth += parsed.value; 
              else if (bonus.description.includes('Skill Duration')) stats.skillDuration += parsed.value;
              else if (bonus.description.includes('Cooldown Reduction')) stats.skillHaste += parsed.value; 
              else if (bonus.description.includes('Weapon Handling')) stats.weaponHandling += parsed.value;
              else if (bonus.description.includes('Rate of Fire')) stats.rateOfFire += parsed.value;
              else if (bonus.description.includes('Armor on Kill')) stats.armorOnKill += parsed.value; 
              else if (bonus.description.includes('Disrupt Resistance')) stats.disruptResistance += parsed.value;
              else if (bonus.description.includes('Pulse Resistance')) stats.pulseResistance += parsed.value;
              else if (bonus.description.includes('Hazard Protection')) stats.hazardProtection += parsed.value;
              else if (bonus.description.includes('SMG Damage')) stats.smgDamage += parsed.value;
              else if (bonus.description.includes('Shotgun Damage')) stats.shotgunDamage += parsed.value;
              else if (bonus.description.includes('Health on Kill')) stats.healthOnKill += parsed.value; 
            }

            if (bonus.pieces === 4 && setData.bonuses[2].talentName) {
                 activeSet.fourPieceTalent = { name: setData.bonuses[2].talentName, description: setData.bonuses[2].description};
            }
          }
        });
        const hasChest = pieces.some(p => p.slotId === GearSlotId.Chest);
        const hasBackpack = pieces.some(p => p.slotId === GearSlotId.Backpack);

        if (count >= 4) { 
            if (hasChest && setData.chestTalent) activeSet.activeChestTalent = setData.chestTalent;
            if (hasBackpack && setData.backpackTalent) activeSet.activeBackpackTalent = setData.backpackTalent;
        }

        if (activeSet.activeBonuses.length > 0) {
          stats.gearSetInfo.push(activeSet);
        }
      }
    }
    
    stats.criticalHitChance = Math.min(stats.criticalHitChance, 60);

    return stats;
  }, [loadout]);
};
