
import React from 'react';
import { CalculatedStats, GearSetTalent, ActiveSetInfo, SelectedSkillState, SkillNameId, CalculatedStatsBase, WeaponSlotId } from '../types';
import { SKILL_DEFINITIONS_DATA, WEAPON_SLOTS_CONFIG } from '../constants';


interface StatsDisplayProps {
  stats: CalculatedStats;
  skill1State: SelectedSkillState; 
  skill2State: SelectedSkillState;
}

const StatItem: React.FC<{ label: string; value: string | number; unit?: string; colorClass?: string; smallText?: boolean }> = ({ label, value, unit = '', colorClass = 'text-gray-100', smallText = false }) => (
  <div className={`flex justify-between items-center py-1.5 border-b border-gray-700 last:border-b-0 ${smallText ? 'text-xs' : 'text-sm'}`}>
    <span className={smallText ? 'text-gray-400' : 'text-gray-300'}>{label}</span>
    <span className={`font-semibold ${colorClass}`}>{value}{unit}</span>
  </div>
);

const TalentDisplay: React.FC<{talent: GearSetTalent, type: string, colorClass?: string}> = ({ talent, type, colorClass = 'text-purple-400'}) => (
  <div className="mt-2 p-2 bg-gray-750 rounded border border-gray-600">
    <h4 className={`font-semibold ${colorClass}`}>{talent.name} <span className="text-xs text-gray-400">({type})</span></h4>
    <p className="text-xs text-gray-300">{talent.description}</p>
  </div>
);

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, skill1State, skill2State }) => {

  const renderSkillModStats = (skillId: SkillNameId | null, skillStats: CalculatedStatsBase) => {
    if (!skillId) return null;
    const skillDef = SKILL_DEFINITIONS_DATA[skillId];
    if (!skillDef) return null;

    let relevantStats: JSX.Element[] = [];

    switch (skillId) {
      case SkillNameId.ChemLauncher:
        relevantStats = [
          <StatItem key="clbs" label="Burn Strength" value={skillStats.chemLauncherBurnStrength} unit="%" smallText />,
          <StatItem key="cldmg" label="Damage" value={skillStats.chemLauncherDamage} unit="%" smallText />,
          <StatItem key="cleh" label="Ensnare Health" value={skillStats.chemLauncherEnsnareHealth} unit="%" smallText />,
          <StatItem key="cled" label="Ensnare Duration" value={skillStats.chemLauncherEnsnareDuration} unit="%" smallText />,
          <StatItem key="clh" label="Heal" value={skillStats.chemLauncherHeal} unit="%" smallText />,
          <StatItem key="cla" label="Ammo" value={skillStats.chemLauncherAmmo} smallText />,
          <StatItem key="cldur" label="Duration" value={skillStats.chemLauncherDuration} unit="%" smallText />,
          <StatItem key="clr" label="Radius" value={skillStats.chemLauncherRadius} unit="%" smallText />,
          <StatItem key="clsh" label="Skill Haste (Chem)" value={skillStats.chemLauncherSkillHaste} unit="%" smallText />,
        ];
        break;
      case SkillNameId.Decoy:
        relevantStats = [
          <StatItem key="dch" label="Health" value={skillStats.decoyHealth} unit="%" smallText />,
          <StatItem key="dcdur" label="Duration" value={skillStats.decoyDuration} unit="%" smallText />,
          <StatItem key="dcdd" label="Deflect Duration" value={skillStats.decoyDeflectDuration} unit="%" smallText />,
        ];
        break;
      case SkillNameId.Drone:
        relevantStats = [
            <StatItem key="drar" label="Armor Repair" value={skillStats.droneArmorRepair} unit="%" smallText />,
            <StatItem key="drdmg" label="Damage" value={skillStats.droneDamage} unit="%" smallText />,
            <StatItem key="drdr" label="Damage Reduction" value={skillStats.droneDamageReduction} unit="%" smallText />,
            <StatItem key="dreb" label="Extra Bombs" value={skillStats.droneExtraBombs} smallText />,
            <StatItem key="drh" label="Health" value={skillStats.droneHealth} unit="%" smallText />,
            <StatItem key="drsr" label="Scan Range" value={skillStats.droneScanRange} unit="%" smallText />,
        ];
        break;
      case SkillNameId.Firefly:
        relevantStats = [
            <StatItem key="ffbed" label="Blind Effect Duration" value={skillStats.fireflyBlindEffectDuration} unit="%" smallText />,
            <StatItem key="ffdmg" label="Damage" value={skillStats.fireflyDamage} unit="%" smallText />,
            <StatItem key="ffs" label="Speed" value={skillStats.fireflySpeed} unit="%" smallText />,
            <StatItem key="ffsh" label="Skill Haste (Firefly)" value={skillStats.fireflySkillHaste} unit="%" smallText />,
            <StatItem key="ffmt" label="Max Targets" value={skillStats.fireflyMaxTargets} smallText />,
        ];
        break;
      case SkillNameId.Hive:
        relevantStats = [
            <StatItem key="hivdmg" label="Damage" value={skillStats.hiveDamage} unit="%" smallText />,
            <StatItem key="hivh" label="Healing" value={skillStats.hiveHealing} unit="%" smallText />,
            <StatItem key="hivra" label="Revived Armor" value={skillStats.hiveRevivedArmor} unit="%" smallText />,
            <StatItem key="hivse" label="Stim Efficiency" value={skillStats.hiveStimEfficiency} unit="%" smallText />,
            <StatItem key="hivr" label="Radius" value={skillStats.hiveRadius} unit="%" smallText />,
            <StatItem key="hivrc" label="Repair Charges" value={skillStats.hiveRepairCharges} smallText />,
            <StatItem key="hivsc" label="Stim Charges" value={skillStats.hiveStimCharges} smallText />,
            <StatItem key="hivstc" label="Stinger Charges" value={skillStats.hiveStingerCharges} smallText />,
            <StatItem key="hivdur" label="Duration" value={skillStats.hiveDuration} unit="%" smallText />,
            <StatItem key="hivhealth" label="Health" value={skillStats.hiveHealth} unit="%" smallText />,
        ];
        break;
      case SkillNameId.Pulse:
        relevantStats = [
            <StatItem key="plscs" label="Cone Size" value={skillStats.pulseConeSize} unit="%" smallText />,
            <StatItem key="plsr" label="Radius" value={skillStats.pulseRadius} unit="%" smallText />,
            <StatItem key="plsed" label="Effect Duration" value={skillStats.pulseEffectDuration} unit="%" smallText />,
            <StatItem key="plshlth" label="Health" value={skillStats.pulseHealth} unit="%" smallText />,
            <StatItem key="plssh" label="Skill Haste (Pulse)" value={skillStats.pulseSkillHaste} unit="%" smallText />,
        ];
        break;
      case SkillNameId.SeekerMine:
        relevantStats = [
            <StatItem key="smdmg" label="Damage" value={skillStats.seekerMineDamage} unit="%" smallText />,
            <StatItem key="smr" label="Radius" value={skillStats.seekerMineRadius} unit="%" smallText />,
            <StatItem key="smsh" label="Skill Haste (Seeker)" value={skillStats.seekerMineSkillHaste} unit="%" smallText />,
            <StatItem key="smh" label="Healing" value={skillStats.seekerMineHealing} unit="%" smallText />,
            <StatItem key="smcm" label="Cluster Mines" value={skillStats.seekerMineClusterMines} smallText />,
            <StatItem key="smhealth" label="Health" value={skillStats.seekerMineHealth} unit="%" smallText />,
        ];
        break;
      case SkillNameId.Shield:
        relevantStats = [
            <StatItem key="shdbpe" label="Damage Bonus (Per Enemy)" value={skillStats.shieldDamageBonusPerEnemy} unit="%" smallText />,
            <StatItem key="shddd" label="Deflector Damage" value={skillStats.shieldDeflectorDamage} unit="%" smallText />,
            <StatItem key="shdhr" label="Holstered Regen" value={skillStats.shieldHolsteredRegeneration} unit="%" smallText />,
            <StatItem key="shdhealth" label="Shield Health" value={skillStats.shieldHealth} unit="%" smallText />,
            <StatItem key="shdar" label="Active Regen" value={skillStats.shieldActiveRegeneration} unit="%" smallText />,
        ];
        break;
      default:
        return null;
    }
    
    const filteredRelevantStats = relevantStats.filter(stat => {
        const value = (stat.props as any).value;
        return typeof value === 'number' && value !== 0;
      });

    if (filteredRelevantStats.length === 0) return null;

    return (
      <div className="mt-2 p-2 bg-gray-750 rounded border border-gray-600">
        <h4 className="font-semibold text-orange-200 text-sm">{skillDef.name} Mod Stats</h4>
        <div className="space-y-0.5 mt-1">
            {filteredRelevantStats}
        </div>
      </div>
    );
  };


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-xl font-semibold text-orange-400 mb-4">Loadout Stats</h2>
      
      <h3 className="text-md font-semibold text-orange-300 mt-3 mb-1">Combat Stats</h3>
      <div className="space-y-1">
        <StatItem label="Weapon Damage Bonus" value={stats.weaponDamageBonus} unit="%" colorClass="text-red-400" />
        <StatItem label="Critical Hit Chance" value={stats.criticalHitChance} unit="%" colorClass="text-red-400" />
        <StatItem label="Critical Hit Damage" value={stats.criticalHitDamage} unit="%" colorClass="text-red-400" />
        <StatItem label="Headshot Damage" value={stats.headshotDamage} unit="%" colorClass="text-red-400" />
        <StatItem label="Marksman Rifle Dmg" value={stats.marksmanRifleDamage} unit="%" colorClass="text-red-400" />
        <StatItem label="SMG Dmg" value={stats.smgDamage} unit="%" colorClass="text-red-400" />
        <StatItem label="Shotgun Dmg" value={stats.shotgunDamage} unit="%" colorClass="text-red-400" />
        <StatItem label="Damage to Armor" value={stats.damageToArmor} unit="%" colorClass="text-red-400" />
        <StatItem label="Damage to Health" value={stats.damageToHealth} unit="%" colorClass="text-red-400" />
        <StatItem label="Dmg to Target Out of Cover" value={stats.damageToTargetsOutOfCover} unit="%" colorClass="text-red-400" />
      </div>

      <h3 className="text-md font-semibold text-orange-300 mt-3 mb-1">Defensive Stats</h3>
      <div className="space-y-1">
        <StatItem label="Total Armor" value={stats.armor.toLocaleString()} colorClass="text-blue-400" />
        <StatItem label="Total Health" value={stats.health.toLocaleString()} colorClass="text-blue-400" />
        <StatItem label="Armor Regeneration" value={stats.armorRegen.toLocaleString()} unit="/s" colorClass="text-blue-400" />
        <StatItem label="Armor On Kill" value={stats.armorOnKill.toLocaleString()} colorClass="text-blue-400" />
        <StatItem label="Health On Kill" value={stats.healthOnKill.toLocaleString()} colorClass="text-blue-400" />
        <StatItem label="Protection from Elites" value={stats.protectionFromElites} unit="%" colorClass="text-blue-400" />
        <StatItem label="Hazard Protection (from Minor Attr.)" value={stats.hazardProtection} unit="%" colorClass="text-blue-400" />
        <StatItem label="Incoming Repairs" value={stats.incomingRepairs} unit="%" colorClass="text-blue-400" />
        <StatItem label="Bleed Resistance" value={stats.bleedResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Blind/Deaf Resistance" value={stats.blindDeafResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Burn Resistance" value={stats.burnResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Disorient Resistance" value={stats.disorientResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Disrupt Resistance" value={stats.disruptResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Ensnare Resistance" value={stats.ensnareResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Shock Resistance" value={stats.shockResistance} unit="%" colorClass="text-blue-400" />
        <StatItem label="Pulse Resistance" value={stats.pulseResistance} unit="%" colorClass="text-blue-400" />
      </div>

      <h3 className="text-md font-semibold text-orange-300 mt-3 mb-1">Global Skill Stats</h3>
      <div className="space-y-1">
        <StatItem label="Skill Tiers" value={stats.skillTiers} colorClass="text-yellow-400" />
        <StatItem label="Skill Damage (Global)" value={stats.skillDamage} unit="%" colorClass="text-yellow-400" />
        <StatItem label="Skill Haste (Global)" value={stats.skillHaste} unit="%" colorClass="text-yellow-400" />
        <StatItem label="Skill Repair (Global)" value={stats.skillRepair} unit="%" colorClass="text-yellow-400" />
        <StatItem label="Skill Duration (Global)" value={stats.skillDuration} unit="%" colorClass="text-yellow-400" />
        <StatItem label="Status Effects (Global)" value={stats.statusEffects} unit="%" colorClass="text-yellow-400" />
      </div>
      
      {skill1State?.skillId && (
        <div className="mt-3">
           {renderSkillModStats(skill1State.skillId, stats)}
        </div>
      )}
      {skill2State?.skillId && skill1State?.skillId !== skill2State?.skillId && (
         <div className="mt-1">
           {renderSkillModStats(skill2State.skillId, stats)}
        </div>
      )}


      <h3 className="text-md font-semibold text-orange-300 mt-3 mb-1">Utility Stats</h3>
      <div className="space-y-1">
        <StatItem label="Reload Speed" value={stats.reloadSpeed} unit="%" />
        <StatItem label="Weapon Handling" value={stats.weaponHandling} unit="%" />
        <StatItem label="Rate of Fire" value={stats.rateOfFire} unit="%" />
        <StatItem label="Ammo Capacity" value={stats.ammoCapacity} unit="%" />
        <StatItem label="Magazine Size" value={stats.magazineSize} unit="%" />
        <StatItem label="Signature Weapon Dmg" value={stats.signatureWeaponDamage} unit="%" />
      </div>

      {stats.brandSetBonuses.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-700">
          <h3 className="text-md font-semibold text-yellow-400 mb-2">Active Brand Bonuses</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {stats.brandSetBonuses.map((bonus, index) => (
              <li key={index}><span className="font-medium text-yellow-300">{bonus.name}</span>: {bonus.description.substring(bonus.description.indexOf(': ') + 2)}</li>
            ))}
          </ul>
        </div>
      )}

      {stats.gearSetInfo.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-700">
          <h3 className="text-md font-semibold text-emerald-400 mb-2">Active Gear Set Bonuses</h3>
          {stats.gearSetInfo.map((set) => (
            <div key={set.id} className="mb-3 p-3 bg-gray-850 rounded">
              <h4 className="font-semibold text-emerald-300">{set.name}</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-1">
                {set.activeBonuses.map(b => (
                  <li key={`${set.id}-${b.pieces}`}>
                    <span className="font-medium">{b.pieces}-Piece:</span> {b.description}
                  </li>
                ))}
              </ul>
              {set.fourPieceTalent && <TalentDisplay talent={set.fourPieceTalent} type="4-Piece Set Talent" colorClass="text-emerald-400"/>}
              {set.activeChestTalent && <TalentDisplay talent={set.activeChestTalent} type="Chest Set Talent" colorClass="text-emerald-500" />}
              {set.activeBackpackTalent && <TalentDisplay talent={set.activeBackpackTalent} type="Backpack Set Talent" colorClass="text-emerald-500"/>}
            </div>
          ))}
        </div>
      )}

      {stats.activeWeaponTalents.length > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-700">
          <h3 className="text-md font-semibold text-purple-400 mb-2">Active Weapon Talents</h3>
          {stats.activeWeaponTalents.map((talentInfo, index) => {
            const weaponSlotConfig = WEAPON_SLOTS_CONFIG.find(wsc => wsc.id === talentInfo.weaponSlot);
            const slotDisplayName = weaponSlotConfig ? weaponSlotConfig.name : talentInfo.weaponSlot;
            return (
                <div key={index} className="mb-3 p-3 bg-gray-850 rounded">
                    <h4 className="font-semibold text-purple-300">
                        {slotDisplayName}: <span className="text-purple-200">{talentInfo.talentName}</span>
                    </h4>
                    <p className="text-xs text-gray-300 mt-1">{talentInfo.description}</p>
                </div>
            );
          })}
        </div>
      )}


      <p className="text-xs text-gray-500 mt-6">Note: Complex talent interactions, diminishing returns, and some specific named item effects are not fully simulated. Base stats are approximate for Lvl 40. Resistances from mods are additive.</p>
    </div>
  );
};

export default StatsDisplay;
