
import { useMemo } from 'react';
import { Loadout, CalculatedStats, BrandId, GearSetId, GearSlotId, CalculatedStatsBase, ActiveSetInfo, SelectedGearPiece, NamedItemInfo, GearModId, SelectedSkillState, SkillModOptionId, SkillNameId, SelectedWeaponState, WeaponSlotId, WeaponStats, WeaponCategory, ActiveWeaponTalentInfo, SpecializationId } from '../types';
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
    WEAPON_TALENTS_DATA,
    SPECIALIZATIONS_DATA
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
                    if (namedItemInfo.id === 'picarosHolster') stats.weaponDamageBonus += 15; 
                    if (namedItemInfo.id === 'emperorsGuard') stats.armorRegen += (INITIAL_CALCULATED_STATS.armor * 0.01); 
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
                                    (stats as any)[statKey] += effect.value;
                                }
                            });
                        }
                    }
                });
            }
        }
    });

    // Weapons processing
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
                // Apply native weapon bonus (e.g., ARs +X% Dmg to Health)
                switch (weaponDef.weaponBonusType) {
                    case 'Health': stats.damageToHealth += weaponDef.weaponBonusValuePercent; break;
                    case 'Armor': stats.damageToArmor += weaponDef.weaponBonusValuePercent; break;
                    case 'OutOfCoverDamage': stats.damageToTargetsOutOfCover += weaponDef.weaponBonusValuePercent; break;
                    case 'HeadshotDamage': stats.headshotDamage += weaponDef.weaponBonusValuePercent; break;
                    case 'CriticalHitDamage': stats.criticalHitDamage += weaponDef.weaponBonusValuePercent; break;
                    case 'CriticalHitChance': stats.criticalHitChance += weaponDef.weaponBonusValuePercent; break;
                    // Note: Some weapon bonus types might directly refer to a weapon category damage,
                    // e.g., "AssaultRifleDamage". These are implicitly handled by selecting the weapon.
                    // The global `weaponDamageBonus` from cores/minors/brands enhances all.
                }

                // Add active weapon talent to stats display list (if not exotic with intrinsic talent)
                if (!isExotic && weaponState.talentId) {
                    const talentData = WEAPON_TALENTS_DATA[weaponState.talentId];
                    if (talentData) {
                        stats.activeWeaponTalents.push({
                            weaponSlot: wsConfig.id,
                            talentName: talentData.name,
                            description: talentData.description,
                        });
                    }
                }
                // Exotic talents are typically listed with the weapon description or are too complex for flat stat representation here.
            }
        }
    });

    // Brand Set Bonuses
    for (const brandId in brandCounts) {
      const count = brandCounts[brandId];
      const brandData = BRANDS_DATA[brandId as BrandId];
      if (brandData) {
        brandData.bonuses.forEach(bonus => {
          if (count >= bonus.pieces) {
            stats.brandSetBonuses.push({ name: `${brandData.name} (${bonus.pieces}pc)`, description: bonus.description });
            const parsed = parseStatValue(bonus.description);
            if (parsed) {
                if (bonus.description.toLowerCase().includes('health') && !bonus.description.toLowerCase().includes('on kill') && !bonus.description.toLowerCase().includes('skill health')) {
                    if (parsed.isPercentage) stats.health += (INITIAL_CALCULATED_STATS.health * (parsed.value / 100)); else stats.health += parsed.value;
                } else if (bonus.description.toLowerCase().includes('total armor') && !bonus.description.toLowerCase().includes('on kill')) {
                     if (parsed.isPercentage) stats.totalArmorBonus += parsed.value; else stats.armor += parsed.value;
                } else if (bonus.description.toLowerCase().includes('armor regen') && parsed.isPercentage) {
                    stats.armorRegen += (INITIAL_CALCULATED_STATS.armor * (parsed.value / 100)); // % of base armor
                } else if (bonus.description.toLowerCase().includes('armor on kill')) {
                    if (parsed.isPercentage) { /* Requires complex base armor calculation for this piece type */ } else stats.armorOnKill += parsed.value;
                } else if (bonus.description.toLowerCase().includes('crit chance')) {
                    stats.criticalHitChance += parsed.value;
                } else if (bonus.description.toLowerCase().includes('crit damage')) {
                    stats.criticalHitDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('headshot damage')) {
                    stats.headshotDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('weapon damage') && !bonus.description.toLowerCase().includes('rifle') && !bonus.description.toLowerCase().includes('smg')) { // Generic weapon damage
                    stats.weaponDamageBonus += parsed.value;
                } else if (bonus.description.toLowerCase().includes('skill damage')) {
                    stats.skillDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('skill haste') || bonus.description.toLowerCase().includes('cooldown reduction')) {
                    stats.skillHaste += parsed.value;
                } else if (bonus.description.toLowerCase().includes('status effects')) {
                    stats.statusEffects += parsed.value;
                } else if (bonus.description.toLowerCase().includes('hazard protection')) {
                    stats.hazardProtection += parsed.value;
                } else if (bonus.description.toLowerCase().includes('skill repair')) {
                    stats.skillRepair += parsed.value;
                } else if (bonus.description.toLowerCase().includes('skill duration')) {
                    stats.skillDuration += parsed.value;
                } else if (bonus.description.toLowerCase().includes('assault rifle damage')) {
                     stats.weaponDamageBonus += parsed.value; // Simplified, or could be specific AR stat
                } else if (bonus.description.toLowerCase().includes('lmg damage')) {
                    stats.lmgDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('marksman rifle damage')) {
                    stats.marksmanRifleDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('rifle damage')) {
                    stats.rifleDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('shotgun damage')) {
                    stats.shotgunDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('smg damage')) {
                    stats.smgDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('pistol damage')) {
                    stats.pistolDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('explosive damage')) {
                    stats.explosiveDamage += parsed.value;
                } else if (bonus.description.toLowerCase().includes('magazine size')) {
                    stats.magazineSize += parsed.value; // Assuming this is a percentage
                } else if (bonus.description.toLowerCase().includes('reload speed')) {
                    stats.reloadSpeed += parsed.value;
                }
                // Add more specific parsings as needed
            }
          }
        });
      }
    }
    // Apply totalArmorBonus accumulated from percentages to the base armor
    stats.armor += (INITIAL_CALCULATED_STATS.armor * (stats.totalArmorBonus / 100));
    stats.totalArmorBonus = 0; // Reset as it's now incorporated into stats.armor

    // Gear Set Bonuses
    for (const gearSetId in gearSetCounts) {
      const setData = gearSetCounts[gearSetId as GearSetId];
      const count = setData.count;
      const gearSetData = GEAR_SETS_DATA[gearSetId as GearSetId];
      if (gearSetData) {
        const activeSetInfo: ActiveSetInfo = {
          id: gearSetId as GearSetId,
          name: gearSetData.name,
          activeBonuses: [],
        };
        gearSetData.bonuses.forEach(bonus => {
          if (count >= bonus.pieces) {
            activeSetInfo.activeBonuses.push({ pieces: bonus.pieces, description: bonus.description });
            if (bonus.pieces < 4) { 
                const parsed = parseStatValue(bonus.description);
                if (parsed) {
                    if (bonus.description.toLowerCase().includes('skill haste')) stats.skillHaste += parsed.value;
                    else if (bonus.description.toLowerCase().includes('skill damage')) stats.skillDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('status effects')) stats.statusEffects += parsed.value;
                    else if (bonus.description.toLowerCase().includes('reload speed')) stats.reloadSpeed += parsed.value;
                    else if (bonus.description.toLowerCase().includes('ammo capacity')) stats.ammoCapacity += parsed.value;
                    else if (bonus.description.toLowerCase().includes('magazine size')) stats.magazineSize += parsed.value;
                    else if (bonus.description.toLowerCase().includes('marksman rifle damage')) stats.marksmanRifleDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('headshot damage')) stats.headshotDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('crit chance')) stats.criticalHitChance += parsed.value;
                    else if (bonus.description.toLowerCase().includes('crit damage')) stats.criticalHitDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('signature weapon damage')) stats.signatureWeaponDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('weapon damage') && bonus.pieces === 3 && gearSetId === 'tipOfTheSpear') stats.weaponDamageBonus += parsed.value; // Tip of the Spear 3pc
                    else if (bonus.description.toLowerCase().includes('total armor')) { if(parsed.isPercentage) stats.totalArmorBonus += parsed.value; else stats.armor += parsed.value; }
                    else if (bonus.description.toLowerCase().includes('armor regen') && parsed.isPercentage) stats.armorRegen += (INITIAL_CALCULATED_STATS.armor * (parsed.value/100));
                    else if (bonus.description.toLowerCase().includes('skill repair')) stats.skillRepair += parsed.value;
                    else if (bonus.description.toLowerCase().includes('skill duration')) stats.skillDuration += parsed.value;
                    else if (bonus.description.toLowerCase().includes('weapon handling')) stats.weaponHandling += parsed.value;
                    else if (bonus.description.toLowerCase().includes('rate of fire')) stats.rateOfFire += parsed.value;
                    else if (bonus.description.toLowerCase().includes('armor on kill')) { if(parsed.isPercentage) { /* complex */} else stats.armorOnKill += parsed.value; }
                    else if (bonus.description.toLowerCase().includes('disrupt resistance')) stats.disruptResistance += parsed.value;
                    else if (bonus.description.toLowerCase().includes('pulse resistance')) stats.pulseResistance += parsed.value;
                    else if (bonus.description.toLowerCase().includes('hazard protection')) stats.hazardProtection += parsed.value;
                    else if (bonus.description.toLowerCase().includes('smg damage')) stats.smgDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('shotgun damage')) stats.shotgunDamage += parsed.value;
                    else if (bonus.description.toLowerCase().includes('health on kill')) stats.healthOnKill += parsed.value; // Hunter's Fury
                }
            }
            if (bonus.pieces === 4 && bonus.talentName) {
              activeSetInfo.fourPieceTalent = { name: bonus.talentName, description: bonus.description };
            }
          }
        });

        if (count >= 4) {
            const hasChest = setData.pieces.some(p => p.slotId === GearSlotId.Chest && p.itemId === gearSetId);
            const hasBackpack = setData.pieces.some(p => p.slotId === GearSlotId.Backpack && p.itemId === gearSetId);

            if (hasChest && gearSetData.chestTalent) {
                activeSetInfo.activeChestTalent = gearSetData.chestTalent;
            }
            if (hasBackpack && gearSetData.backpackTalent) {
                activeSetInfo.activeBackpackTalent = gearSetData.backpackTalent;
            }
        }
        if (activeSetInfo.activeBonuses.length > 0) {
            stats.gearSetInfo.push(activeSetInfo);
        }
      }
    }
     // Re-apply totalArmorBonus from gear sets
    stats.armor += (INITIAL_CALCULATED_STATS.armor * (stats.totalArmorBonus / 100));


    // Specialization Bonuses
    if (loadout.selectedSpecializationId) {
        const specData = SPECIALIZATIONS_DATA[loadout.selectedSpecializationId];
        if (specData) {
            specData.bonuses.forEach(bonus => {
                stats.specializationBonuses.push({ name: specData.name, description: bonus.description });
                if (bonus.statEffect) {
                    const effect = bonus.statEffect;
                    const statKey = effect.stat as keyof CalculatedStatsBase;
                    if (typeof (stats as any)[statKey] === 'number') {
                        if (effect.stat === 'armorOnKill' && effect.isPercentage) {
                            (stats as any)[statKey] += (INITIAL_CALCULATED_STATS.armor * (effect.value / 100));
                        } else if (effect.stat === 'health' && effect.isPercentage) { 
                            (stats as any)[statKey] += (INITIAL_CALCULATED_STATS.health * (effect.value / 100));
                        } else {
                           (stats as any)[statKey] += effect.value;
                        }
                    }
                }
            });
        }
    }
    
    return stats;
  }, [loadout]);
};
