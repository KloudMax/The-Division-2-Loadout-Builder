
import { GearSlotId, GearSlotConfig, BrandData, BrandId, AttributeData, CoreAttributeId, MinorAttributeId, TalentData, TalentId, Loadout, CalculatedStats, GearSetData, GearSetId, CalculatedStatsBase, NamedItemInfo, GearModType, GearModData, GearModTypeData, SelectedModSlot, SkillNameId, SkillDefinition, SkillModSlotDefinition, SkillModOptionData, SelectedSkillState, SelectedSkillMod, WeaponStats, WeaponCategory, WeaponSlotId, WeaponSlotConfig, SelectedWeaponState, WeaponAttachmentCategory, WeaponAttachmentSlotDefinition, WeaponAttachmentOptionData, WeaponAttachmentOptionId, SelectedWeaponAttachment, SelectedGearPiece, ActiveSetInfo, SelectedModSlot as GearSelectedModSlot, SkillModOptionEffect, CalculatedStats as AppCalculatedStats, WeaponTalentData, WeaponTalentId, GearModId, ActiveWeaponTalentInfo, SpecializationId, SpecializationData, SpecializationBonus } from './types';

export const GEAR_SLOTS_CONFIG: GearSlotConfig[] = [
  { id: GearSlotId.Mask, name: 'Mask', canHaveTalent: false, maxModSlots: 1 },
  { id: GearSlotId.Chest, name: 'Chest Armor', canHaveTalent: true, maxModSlots: 1 },
  { id: GearSlotId.Backpack, name: 'Backpack', canHaveTalent: true, maxModSlots: 1 },
  { id: GearSlotId.Gloves, name: 'Gloves', canHaveTalent: false, maxModSlots: 0 },
  { id: GearSlotId.Holster, name: 'Holster', canHaveTalent: false, maxModSlots: 0 },
  { id: GearSlotId.Kneepads, name: 'Kneepads', canHaveTalent: false, maxModSlots: 0 },
];

export const WEAPON_SLOTS_CONFIG: WeaponSlotConfig[] = [
  { id: WeaponSlotId.Primary, name: 'Primary Weapon', supportedCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.MarksmanRifle, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.SubmachineGun] },
  { id: WeaponSlotId.Secondary, name: 'Secondary Weapon', supportedCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.MarksmanRifle, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.SubmachineGun] },
  { id: WeaponSlotId.Sidearm, name: 'Sidearm', supportedCategories: [WeaponCategory.Pistol] },
];

export const BRANDS_DATA: Record<BrandId, BrandData> = {
  fiveElevenTactical: {
    id: 'fiveElevenTactical', name: '5.11 Tactical', bonuses: [
      { pieces: 1, description: '+10% Health' },
      { pieces: 2, description: '+10% Incoming Repairs' },
      { pieces: 3, description: '+10% Hazard Protection' },
    ]
  },
  airaldiHoldings: {
    id: 'airaldiHoldings', name: 'Airaldi Holdings', bonuses: [
      { pieces: 1, description: '+10% Marksman Rifle Damage' },
      { pieces: 2, description: '+15% Headshot Damage' },
      { pieces: 3, description: '+5% Damage to Armor' },
    ]
  },
  alpsSummitArmaments: {
    id: 'alpsSummitArmaments', name: 'Alps Summit Armaments', bonuses: [
      { pieces: 1, description: '+10% Skill Haste' },
      { pieces: 2, description: '+10% Skill Repair' },
      { pieces: 3, description: '+15% Skill Duration' }, 
    ]
  },
  badgerTuff: {
    id: 'badgerTuff', name: 'Badger Tuff', bonuses: [
      { pieces: 1, description: '+10% Shotgun Damage' },
      { pieces: 2, description: '+5% Total Armor' },
      { pieces: 3, description: '+10% Armor on Kill' },
    ]
  },
  belstoneArmory: {
    id: 'belstoneArmory', name: 'Belstone Armory', bonuses: [
      { pieces: 1, description: '+1% Armor Regeneration' },
      { pieces: 2, description: '+10% Armor on Kill' },
      { pieces: 3, description: '+10% Incoming Repairs' },
    ]
  },
  brazosDeArcabuz: {
    id: 'brazosDeArcabuz', name: 'Brazos de Arcabuz', bonuses: [
      { pieces: 1, description: '+10% Skill Haste' },
      { pieces: 2, description: '+1 Skill Tier' },
      { pieces: 3, description: '+10% Magazine Size' },
    ]
  },
  ceskaVyroba: {
    id: 'ceskaVyroba', name: 'Česká Výroba s.r.o.', bonuses: [
      { pieces: 1, description: '+10% Critical Hit Chance' },
      { pieces: 2, description: '+10% Hazard Protection' },
      { pieces: 3, description: '+10% Health' },
    ]
  },
  chinaLightIndustries: {
    id: 'chinaLightIndustries', name: 'China Light Industries Corporation', bonuses: [
      { pieces: 1, description: '+10% Explosive Damage' }, 
      { pieces: 2, description: '+10% Skill Haste' },
      { pieces: 3, description: '+10% Status Effects' },
    ]
  },
  douglasAndHarding: {
    id: 'douglasAndHarding', name: 'Douglas & Harding', bonuses: [
      { pieces: 1, description: '+20% Stability' }, 
      { pieces: 2, description: '+20% Accuracy' }, 
      { pieces: 3, description: '+20% Headshot Damage' }, 
    ]
  },
  electrique: {
    id: 'electrique', name: 'Electrique', bonuses: [
      { pieces: 1, description: '+10% Status Effects' }, 
      { pieces: 2, description: '+10% Skill Haste' }, 
      { pieces: 3, description: '+20% Shock Resistance' },
    ]
  },
  empressInternational: {
    id: 'empressInternational', name: 'Empress International', bonuses: [
      { pieces: 1, description: '+10% Skill Health' }, 
      { pieces: 2, description: '+10% Skill Damage' },
      { pieces: 3, description: '+10% Skill Efficiency' }, 
    ]
  },
  fenrisGroup: {
    id: 'fenrisGroup', name: 'Fenris Group AB', bonuses: [
      { pieces: 1, description: '+10% Assault Rifle Damage' }, 
      { pieces: 2, description: '+10% Reload Speed' },
      { pieces: 3, description: '+10% Weapon Handling' },
    ]
  },
  gilaGuard: {
    id: 'gilaGuard', name: 'Gila Guard', bonuses: [
      { pieces: 1, description: '+5% Total Armor' },
      { pieces: 2, description: '+10% Health' },
      { pieces: 3, description: '+1% Armor Regeneration' },
    ]
  },
  golanGearLtd: {
    id: 'golanGearLtd', name: 'Golan Gear Ltd', bonuses: [
      { pieces: 1, description: '+10% Status Effects' },
      { pieces: 2, description: '+1% Armor Regeneration' },
      { pieces: 3, description: '+5% Total Armor' },
    ]
  },
  grupoSombra: {
    id: 'grupoSombra', name: 'Grupo Sombra S.A.', bonuses: [
      { pieces: 1, description: '+15% Critical Hit Damage' },
      { pieces: 2, description: '+15% Headshot Damage' },
      { pieces: 3, description: '+10% Critical Hit Chance' },
    ]
  },
  habsburgGuard: {
    id: 'habsburgGuard', name: 'Habsburg Guard', bonuses: [
      { pieces: 1, description: '+15% Headshot Damage' },
      { pieces: 2, description: '+10% Marksman Rifle Damage' },
      { pieces: 3, description: '+10% Status Effects' }, 
    ]
  },
  hanaU: {
    id: 'hanaU', name: 'Hana-U Corporation', bonuses: [
      { pieces: 1, description: '+10% Skill Haste' },
      { pieces: 2, description: '+10% Skill Damage' },
      { pieces: 3, description: '+5% Weapon Damage' },
    ]
  },
  murakamiIndustries: {
    id: 'murakamiIndustries', name: 'Murakami Industries', bonuses: [
      { pieces: 1, description: '+15% Skill Duration' },
      { pieces: 2, description: '+10% Skill Repair' },
      { pieces: 3, description: '+10% Skill Damage' },
    ]
  },
  overlordArmaments: {
    id: 'overlordArmaments', name: 'Overlord Armaments', bonuses: [
      { pieces: 1, description: '+10% Rifle Damage' }, 
      { pieces: 2, description: '+10% Weapon Handling' },
      { pieces: 3, description: '+10% Damage to Armor' },
    ]
  },
  palisadeSteelworks: {
    id: 'palisadeSteelworks', name: 'Palisade Steelworks', bonuses: [
      { pieces: 1, description: '+1 Skill Tier' },
      { pieces: 2, description: '+10% Armor on Kill' },
      { pieces: 3, description: '+10% Incoming Repairs' },
    ]
  },
  petrovDefenseGroup: {
    id: 'petrovDefenseGroup', name: 'Petrov Defense Group', bonuses: [
      { pieces: 1, description: '+10% LMG Damage' },
      { pieces: 2, description: '+10% Weapon Handling' },
      { pieces: 3, description: '+10% Ammo Capacity' },
    ]
  },
  providenceDefense: {
    id: 'providenceDefense', name: 'Providence Defense', bonuses: [
      { pieces: 1, description: '+15% Headshot Damage' },
      { pieces: 2, description: '+10% Critical Hit Chance' },
      { pieces: 3, description: '+15% Critical Hit Damage' },
    ]
  },
  richterAndKaiser: {
    id: 'richterAndKaiser', name: 'Richter & Kaiser GmbH', bonuses: [
      { pieces: 1, description: '+10% Incoming Repairs' },
      { pieces: 2, description: '+20% Explosive Resistance' },
      { pieces: 3, description: '+10% Armor' },
    ]
  },
  sokolovConcern: {
    id: 'sokolovConcern', name: 'Sokolov Concern', bonuses: [
      { pieces: 1, description: '+10% SMG Damage' },
      { pieces: 2, description: '+15% Critical Hit Damage' },
      { pieces: 3, description: '+10% Critical Hit Chance' },
    ]
  },
  uzinaGetica: {
    id: 'uzinaGetica', name: 'Uzina Getica', bonuses: [
      { pieces: 1, description: '+5% Total Armor' },
      { pieces: 2, description: '+10% Armor on Kill' },
      { pieces: 3, description: '+10% Hazard protection' },
    ]
  },
  walkerHarris: {
    id: 'walkerHarris', name: 'Walker, Harris & Co.', bonuses: [
      { pieces: 1, description: '+5% Weapon Damage' },
      { pieces: 2, description: '+5% Damage to Armor' }, 
      { pieces: 3, description: '+10% Damage to Health' }, 
    ]
  },
  wyvernWear: {
    id: 'wyvernWear', name: 'Wyvern Wear', bonuses: [
      { pieces: 1, description: '+10% Skill Damage' },
      { pieces: 2, description: '+15% Skill Duration' },
      { pieces: 3, description: '+10% Skill Repair' },
    ]
  },
  yaahlGear: {
    id: 'yaahlGear', name: 'Yaahl Gear', bonuses: [
      { pieces: 1, description: '+10% Hazard Protection' },
      { pieces: 2, description: '+5% Weapon Damage' }, 
      { pieces: 3, description: '+40% Pulse Resistance' },
    ]
  },
  exoticPlaceholderBrand: { id: 'exoticPlaceholderBrand', name: 'Exotic Piece', bonuses: [] }
};
export const ALL_BRANDS_LIST = Object.values(BRANDS_DATA);


export const GEAR_SETS_DATA: Record<GearSetId, GearSetData> = {
  hardWired: {
    id: 'hardWired', name: 'Hard Wired',
    bonuses: [
      { pieces: 2, description: '+15% Skill Haste' },
      { pieces: 3, description: '+15% Skill Damage & +15% Skill Repair' },
      { pieces: 4, talentName: 'Feedback Loop', description: "Whenever you use or cancel a skill, your other skill's cooldown is reduced by 30s. Increases total skill damage and repair by 10% for 20s. This can occur once every 20s." }
    ],
    chestTalent: { name: 'Positive Reinforcement', description: 'Increases Feedback Loop skill damage and repair bonus from 10% to 25%.' },
    backpackTalent: { name: 'Short Circuit', description: 'Decreases Feedback Loop cooldown from 20s to 10s.' }
  },
  ongoingDirective: {
    id: 'ongoingDirective', name: 'Ongoing Directive',
    bonuses: [
      { pieces: 2, description: '+15% Status Effects' },
      { pieces: 3, description: '+15% Reload Speed' },
      { pieces: 4, talentName: 'Rule of Engagement', description: 'Killing an enemy with a status effect drops hollow-point ammo. Hollow-point ammo amplifies weapon damage by 20% and applies bleed on hit.' }
    ],
    chestTalent: { name: 'Tragedy', description: 'Increases hollow-point ammo damage amplification from 20% to 30%.' },
    backpackTalent: { name: 'Trauma', description: 'Damaging an enemy applies bleed. Killing a bleeding enemy drops hollow-point ammo.' }
  },
  strikersBattlegear: {
    id: 'strikersBattlegear', name: "Striker's Battlegear",
    bonuses: [
      { pieces: 2, description: '+15% Weapon Handling' },
      { pieces: 3, description: '+15% Rate of Fire' },
      { pieces: 4, talentName: "Striker's Gamble", description: 'Weapon hits increase total weapon damage by 0.65%, stacking up to 100 times. 2 stacks are lost each second. Shots that hit the head add 2 stacks.' }
    ],
    chestTalent: { name: 'Press the Advantage', description: "Increases max stacks for Striker's Gamble from 100 to 200." },
    backpackTalent: { name: 'Risk Management', description: 'Increases Striker’s Gamble damage bonus from 0.65% to 1% per stack.' }
  },
  huntersFury: {
    id: 'huntersFury', name: "Hunter's Fury",
    bonuses: [
      { pieces: 2, description: '+15% SMG Damage & +15% Shotgun Damage' },
      { pieces: 3, description: '+20% Armor on Kill & +100% Health on Kill' },
      { pieces: 4, talentName: 'Apex Predator', description: 'Enemies within 15m receive a debuff, amplifying your weapon damage against them by 20%. Killing a debuffed enemy disorients other enemies within 5m and amplifies your weapon damage by 5% for 10s, stacking up to 5 times.' }
    ],
    chestTalent: { name: 'Endless Hunger', description: 'Increases the duration of Apex Predator stacks from 10s to 30s.' },
    backpackTalent: { name: 'Overwhelming Force', description: 'Increases the radius of disorient on Apex Predator kill from 5m to 10m.' }
  },
  heartbreaker: {
    id: 'heartbreaker', name: 'Heartbreaker',
    bonuses: [
      { pieces: 2, description: '+15% Assault Rifle Damage & +15% LMG Damage' },
      { pieces: 3, description: '+15% Weapon Handling' },
      { pieces: 4, talentName: 'Heartstopper', description: 'Headshots apply a pulse to the enemy for 10s. Headshots on pulsed enemies grant a stack of 1% bonus armor and 1% weapon damage, up to 50 stacks. Stacks decay at a rate of 1 per second.' }
    ],
    chestTalent: { name: 'Max Heartbeat', description: 'Increases Heartstopper max stacks from 50 to 100.' },
    backpackTalent: { name: 'Heartbreaker’s Vow', description: 'Heartstopper stacks now grant +2% bonus armor instead of 1%.' }
  },
   futureInitiative: {
    id: 'futureInitiative', name: 'Future Initiative',
    bonuses: [
      { pieces: 2, description: '+15% Skill Repair' },
      { pieces: 3, description: '+15% Skill Haste & +15% Skill Duration' },
      { pieces: 4, talentName: 'Ground Control', description: 'Increases you and your allies\' total weapon and skill damage by 15% when at full armor. When you repair an ally, you and all allies within 5m are also repaired for 60% of that amount.' }
    ],
    chestTalent: { name: 'Tactical Superiority', description: 'Increases Ground Control damage bonus from 15% to 25%.' },
    backpackTalent: { name: 'Strategic Combat Support', description: 'Increases the proxy repair from Ground Control from 60% to 120%.' }
  },
};
export const ALL_GEAR_SETS_LIST = Object.values(GEAR_SETS_DATA);

export const CORE_ATTRIBUTES_DATA: Record<CoreAttributeId, AttributeData> = {
  weaponDamage: { id: 'weaponDamage', name: 'Weapon Damage', type: 'Core', color: 'red', statEffect: { stat: 'weaponDamageBonus', value: 15 }, description: '+15% Weapon Damage' },
  armor: { id: 'armor', name: 'Armor', type: 'Core', color: 'blue', statEffect: { stat: 'armor', value: 170000 }, description: '+170,000 Armor' },
  skillTier: { id: 'skillTier', name: 'Skill Tier', type: 'Core', color: 'yellow', statEffect: { stat: 'skillTiers', value: 1 }, description: '+1 Skill Tier' },
};
export const ALL_CORE_ATTRIBUTES_LIST = Object.values(CORE_ATTRIBUTES_DATA);

export const MINOR_ATTRIBUTES_DATA: Record<MinorAttributeId, AttributeData> = {
  critChance: { id: 'critChance', name: 'Critical Hit Chance', type: 'Minor', color: 'red', statEffect: { stat: 'criticalHitChance', value: 6 }, description: '+6% Critical Hit Chance' },
  critDamage: { id: 'critDamage', name: 'Critical Hit Damage', type: 'Minor', color: 'red', statEffect: { stat: 'criticalHitDamage', value: 12 }, description: '+12% Critical Hit Damage' },
  headshotDamage: { id: 'headshotDamage', name: 'Headshot Damage', type: 'Minor', color: 'red', statEffect: { stat: 'headshotDamage', value: 10 }, description: '+10% Headshot Damage' },
  weaponHandling: { id: 'weaponHandling', name: 'Weapon Handling', type: 'Minor', color: 'red', statEffect: { stat: 'weaponHandling', value: 8 }, description: '+8% Weapon Handling' },
  
  armorRegen: { id: 'armorRegen', name: 'Armor Regeneration', type: 'Minor', color: 'blue', statEffect: { stat: 'armorRegen', value: 4925 }, description: '+4,925 Armor/s' },
  health: { id: 'health', name: 'Health', type: 'Minor', color: 'blue', statEffect: { stat: 'health', value: 18000 }, description: '+18,000 Health' },
  hazardProtection: { id: 'hazardProtection', name: 'Hazard Protection', type: 'Minor', color: 'blue', statEffect: { stat: 'hazardProtection', value: 10 }, description: '+10% Hazard Protection' },
  explosiveResistance: { id: 'explosiveResistance', name: 'Explosive Resistance', type: 'Minor', color: 'blue', statEffect: { stat: 'explosiveDamage', value: 10, isPercentage: true }, description: '+10% Explosive Resistance'},

  skillHaste: { id: 'skillHaste', name: 'Skill Haste', type: 'Minor', color: 'yellow', statEffect: { stat: 'skillHaste', value: 12 }, description: '+12% Skill Haste' },
  skillDamage: { id: 'skillDamage', name: 'Skill Damage', type: 'Minor', color: 'yellow', statEffect: { stat: 'skillDamage', value: 10 }, description: '+10% Skill Damage' },
  skillRepair: { id: 'skillRepair', name: 'Repair Skills', type: 'Minor', color: 'yellow', statEffect: { stat: 'skillRepair', value: 20 }, description: '+20% Repair Skills' },
  statusEffects: { id: 'statusEffects', name: 'Status Effects', type: 'Minor', color: 'yellow', statEffect: { stat: 'statusEffects', value: 10 }, description: '+10% Status Effects' },
};
export const ALL_MINOR_ATTRIBUTES_LIST = Object.values(MINOR_ATTRIBUTES_DATA);

export const TALENTS_DATA: Record<TalentId, TalentData> = {
  // --- CHEST TALENTS ---
  // Standard
  braced: { id: 'braced', name: 'Braced', type: 'Chest', color: 'purple', description: 'While in cover, weapon handling is increased by +45%.' },
  efficient: { id: 'efficient', name: 'Efficient', type: 'Chest', color: 'purple', description: 'Using an armor kit has a 50% chance to not consume the armor kit. Specialization Armor Kit bonuses are not applied when this happens.' },
  explosiveDelivery: { id: 'explosiveDelivery', name: 'Explosive Delivery', type: 'Chest', color: 'purple', description: 'Throwing a skill has a 100% chance to create an explosion, dealing 25-100% of your grenade damage depending on the distance of the throw.' },
  focus: { id: 'focus', name: 'Focus', type: 'Chest', color: 'purple', description: 'While aiming down sights with a scope (8x or higher), weapon damage is increased by 5% every second up to 50%.' },
  glassCannon: { id: 'glassCannon', name: 'Glass Cannon', type: 'Chest', color: 'purple', description: 'All damage you deal is amplified by 25%. All damage you take is amplified by 50%.' },
  gunslinger: { id: 'gunslinger', name: 'Gunslinger', type: 'Chest', color: 'purple', description: 'Weapon swapping increases total weapon damage by 20% for 5s. This buff is lost for 5s if you swap your weapon while it is active.' },
  headhunter: { id: 'headhunter', name: 'Headhunter', type: 'Chest', color: 'purple', description: "After killing an enemy with a headshot, your next weapon hit within 30s deals an additional 125% of that killing blow's damage." },
  intimidate: { id: 'intimidate', name: 'Intimidate', type: 'Chest', color: 'purple', description: 'While you have bonus armor, gain 35% amplified total weapon damage to enemies within 10m.' },
  kineticMomentum: { id: 'kineticMomentum', name: 'Kinetic Momentum', type: 'Chest', color: 'purple', description: 'When in combat, generates a stack of 1.5% Total Skill Damage every second, up to 15 stacks. When out of combat, generates a stack of 3% Total Skill Repair every second, up to 15 stacks.' },
  madBomber: { id: 'madBomber', name: 'Mad Bomber', type: 'Chest', color: 'purple', description: 'Grenade radius is increased by +50%. Grenades that kill an enemy are refunded.' },
  overwatch: { id: 'overwatch', name: 'Overwatch', type: 'Chest', color: 'purple', description: 'After staying in cover for 10s, increase total weapon and skill damage by 12% for you and your allies. This buff is lost when you exit cover.' },
  spark: { id: 'spark', name: 'Spark', type: 'Chest', color: 'purple', description: 'Damaging an enemy with a skill increases total weapon damage by 15% for 15s.' },
  spotter: { id: 'spotter', name: 'Spotter', type: 'Chest', color: 'purple', description: 'Amplifies total weapon and skill damage by 15% to pulsed enemies.' },
  tagTeam: { id: 'tagTeam', name: 'Tag Team', type: 'Chest', color: 'purple', description: 'The last enemy you have damaged with a skill is marked. Hitting that enemy with a weapon will consume the mark and refresh the cooldowns of your skills by 6s. Cooldown: 4s.' },
  tamperProof: { id: 'tamperProof', name: 'Tamper Proof', type: 'Chest', color: 'purple', description: 'Enemies that walk within 3m of your hive, turret, or remote pulse are shocked. Arm time: 2s.' },
  trauma: { id: 'trauma', name: 'Trauma', type: 'Chest', color: 'purple', description: 'Applying blind, bleed, or burn to an enemy also applies it to all other enemies within 8m. Cooldown: 30s.' },
  unbreakable: { id: 'unbreakable', name: 'Unbreakable', type: 'Chest', color: 'purple', description: 'When your armor is depleted, repair 95% of your armor. Cooldown: 60s.' },
  vanguard: { id: 'vanguard', name: 'Vanguard', type: 'Chest', color: 'purple', description: 'Deploying a shield makes it invulnerable for 5s and grants 40% of your armor as bonus armor to all other allies for 20s. Cooldown: 25s.' },
  
  // Perfect
  perfectlyBraced: { id: 'perfectlyBraced', name: 'Perfectly Braced', type: 'Chest', color: 'gold', description: 'While in cover, weapon handling is increased by +60%.' },
  perfectlyEfficient: { id: 'perfectlyEfficient', name: 'Perfectly Efficient', type: 'Chest', color: 'gold', description: 'Using an armor kit has a 75% chance to not consume the armor kit. Specialization Armor Kit bonuses are not applied when this happens.' },
  perfectFocus: { id: 'perfectFocus', name: 'Perfect Focus', type: 'Chest', color: 'gold', description: 'While aiming down sights with a scope (8x or higher), weapon damage is increased by 6% every second up to 60%.' },
  perfectGlassCannon: { id: 'perfectGlassCannon', name: 'Perfect Glass Cannon', type: 'Chest', color: 'gold', description: 'All damage you deal is amplified by 30%. All damage you take is amplified by 60%.' },
  perfectHeadhunter: { id: 'perfectHeadhunter', name: 'Perfect Headhunter', type: 'Chest', color: 'gold', description: "After killing an enemy with a headshot, your next weapon hit within 30s deals an additional 150% of that killing blow's damage." },
  perfectIntimidate: { id: 'perfectIntimidate', name: 'Perfect Intimidate', type: 'Chest', color: 'gold', description: 'While you have bonus armor, gain 40% amplified total weapon damage to enemies within 10m.' },
  perfectlyMadBomber: { id: 'perfectlyMadBomber', name: 'Perfectly Mad Bomber', type: 'Chest', color: 'gold', description: 'Grenade radius is increased by +75%. Grenades that kill an enemy are refunded.' },
  perfectOverwatch: { id: 'perfectOverwatch', name: 'Perfect Overwatch', type: 'Chest', color: 'gold', description: 'After staying in cover for 8s, increase total weapon and skill damage by 15% for you and your allies. This buff is lost when you exit cover.' },
  perfectSpark: { id: 'perfectSpark', name: 'Perfect Spark', type: 'Chest', color: 'gold', description: 'Damaging an enemy with a skill increases total weapon damage by 20% for 15s.' },
  perfectSpotter: { id: 'perfectSpotter', name: 'Perfect Spotter', type: 'Chest', color: 'gold', description: 'Amplifies total weapon and skill damage by 20% to pulsed enemies.' },
  perfectlyTagTeam: { id: 'perfectlyTagTeam', name: 'Perfectly Tag Team', type: 'Chest', color: 'gold', description: 'The last enemy you have damaged with a skill is marked. Hitting that enemy with a weapon will consume the mark and refresh the cooldowns of your skills by 9s. Cooldown: 4s.' },
  perfectTrauma: { id: 'perfectTrauma', name: 'Perfect Trauma', type: 'Chest', color: 'gold', description: 'Applying blind, bleed, or burn to an enemy also applies it to all other enemies within 10m. Cooldown: 20s.' },
  perfectUnbreakable: { id: 'perfectUnbreakable', name: 'Perfect Unbreakable', type: 'Chest', color: 'gold', description: 'When your armor is depleted, repair 100% of your armor. Cooldown: 55s.' },
  perfectlyVanguard: { id: 'perfectlyVanguard', name: 'Perfectly Vanguard', type: 'Chest', color: 'gold', description: 'Deploying a shield makes it invulnerable for 5s and grants 45% of your armor as bonus armor to all other allies for 20s. Cooldown: 25s.' },

  // --- BACKPACK TALENTS ---
  // Standard
  adrenalineRush: { id: 'adrenalineRush', name: 'Adrenaline Rush', type: 'Backpack', color: 'purple', description: 'When you are within 10m of an enemy, gain 20% bonus armor for 5s. Stacks up to 3 times. Cooldown: 5s.' },
  bloodlust: { id: 'bloodlust', name: 'Bloodlust', type: 'Backpack', color: 'purple', description: 'Swapping weapons within 3s of a kill grants +35% weapon damage for 10s.' },
  calculated: { id: 'calculated', name: 'Calculated', type: 'Backpack', color: 'purple', description: 'Kills from cover reduce skill cooldowns by 10%.' },
  companion: { id: 'companion', name: 'Companion', type: 'Backpack', color: 'purple', description: 'While you are within 5m of an ally or skill, total weapon damage is increased by 15%.' },
  composure: { id: 'composure', name: 'Composure', type: 'Backpack', color: 'purple', description: 'While in cover, increases total weapon damage by 15%.' },
  concussion: { id: 'concussion', name: 'Concussion', type: 'Backpack', color: 'purple', description: 'Headshots grant +10% weapon damage for 1.5s. Headshot kills grant +15% weapon damage for 5s.' },
  creepingDeath: { id: 'creepingDeath', name: 'Creeping Death', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy spreads it to another enemy within 8m. Cooldown: 15s.' },
  energize: { id: 'energize', name: 'Energize', type: 'Backpack', color: 'purple', description: 'Using an armor kit grants +1 skill tier for 15s. If you are already at skill tier 6, you get overcharge. Cooldown: 60s.' },
  galvanize: { id: 'galvanize', name: 'Galvanize', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy grants 40% of your armor as bonus armor to you and all allies within 20m for 10s.' },
  leadership: { id: 'leadership', name: 'Leadership', type: 'Backpack', color: 'purple', description: 'Performing a cover to cover move increases total weapon damage for you and your allies by 12% for 10s.' },
  opportunistic: { id: 'opportunistic', name: 'Opportunistic', type: 'Backpack', color: 'purple', description: 'Damaging an enemy with a shotgun or marksman rifle amplifies the damage they take by 10% from all sources for 5s.' },
  overclock: { id: 'overclock', name: 'Overclock', type: 'Backpack', color: 'purple', description: 'Allies within 7m of your deployed skills gain +25% reload speed and reduce their active cooldowns by 0.2s each second.' },
  powerGrab: { id: 'powerGrab', name: 'Power Grab', type: 'Backpack', color: 'purple', description: 'Killing an enemy with a skill grants a stack. Each stack grants +3% skill haste. Max stacks: 10.' },
  protector: { id: 'protector', name: 'Protector', type: 'Backpack', color: 'purple', description: 'When your shield is damaged, you gain +5% bonus armor and all other allies gain +15% of your armor as bonus armor for 3s. Cooldown: 3s.' },
  safeguard: { id: 'safeguard', name: 'Safeguard', type: 'Backpack', color: 'purple', description: 'While at full armor, increases total skill repair by 100%.' },
  shockAndAwe: { id: 'shockAndAwe', name: 'Shock and Awe', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy increases total skill damage and repair by 20% for 20s.' },
  unstoppableForce: { id: 'unstoppableForce', name: 'Unstoppable Force', type: 'Backpack', color: 'purple', description: 'Killing an enemy increases total weapon damage by 5% for 15s. Stacks up to 5 times.' },
  versatile: { id: 'versatile', name: 'Versatile', type: 'Backpack', color: 'purple', description: 'Amplifies total weapon damage for 10s when swapping between your primary and secondary weapons. If you swap from your primary weapon to your secondary weapon, you gain 35% amplified weapon damage to enemies within 15m. If you swap from your secondary weapon to your primary weapon, you gain 35% amplified weapon damage to enemies further than 25m.' },
  vigilance: { id: 'vigilance', name: 'Vigilance', type: 'Backpack', color: 'purple', description: 'Increases total weapon damage by 25%. Taking damage disables this buff for 4s.' },
  wicked: { id: 'wicked', name: 'Wicked', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy grants +18% weapon damage for 27s.' },

  // Perfect
  perfectAdrenalineRush: { id: 'perfectAdrenalineRush', name: 'Perfect Adrenaline Rush', type: 'Backpack', color: 'gold', description: 'When you are within 10m of an enemy, gain 23% bonus armor for 5s. Stacks up to 3 times. Cooldown: 5s.' },
  perfectBloodlust: { id: 'perfectBloodlust', name: 'Perfect Bloodlust', type: 'Backpack', color: 'gold', description: 'Swapping weapons within 3s of a kill grants +40% weapon damage for 10s.' },
  perfectCalculated: { id: 'perfectCalculated', name: 'Perfect Calculated', type: 'Backpack', color: 'gold', description: 'Kills from cover reduce skill cooldowns by 15%.' },
  perfectCompanion: { id: 'perfectCompanion', name: 'Perfect Companion', type: 'Backpack', color: 'gold', description: 'While you are within 7m of an ally or skill, total weapon damage is increased by 20%.' },
  perfectComposure: { id: 'perfectComposure', name: 'Perfect Composure', type: 'Backpack', color: 'gold', description: 'While in cover, increases total weapon damage by 20%.' },
  perfectEnergize: { id: 'perfectEnergize', name: 'Perfect Energize', type: 'Backpack', color: 'gold', description: 'Using an armor kit grants +2 skill tiers for 15s. If you are already at skill tier 6, you get overcharge. Cooldown: 60s.' },
  perfectOpportunistic: { id: 'perfectOpportunistic', name: 'Perfect Opportunistic', type: 'Backpack', color: 'gold', description: 'Damaging an enemy with a shotgun or marksman rifle amplifies the damage they take by 15% from all sources for 5s.' },
  perfectProtector: { id: 'perfectProtector', name: 'Perfect Protector', type: 'Backpack', color: 'gold', description: 'When your shield is damaged, you gain +10% bonus armor and all other allies gain +20% of your armor as bonus armor for 3s. Cooldown: 3s.' },
  perfectSafeguard: { id: 'perfectSafeguard', name: 'Perfect Safeguard', type: 'Backpack', color: 'gold', description: 'While at full armor, increases total skill repair by 125%.' },
  perfectShockAndAwe: { id: 'perfectShockAndAwe', name: 'Perfect Shock and Awe', type: 'Backpack', color: 'gold', description: 'Applying a status effect to an enemy increases total skill damage and repair by 25% for 27s.' },
  perfectVigilance: { id: 'perfectVigilance', name: 'Perfect Vigilance', type: 'Backpack', color: 'gold', description: 'Increases total weapon damage by 25%. Taking damage disables this buff for 3s.' },
  perfectWicked: { id: 'perfectWicked', name: 'Perfect Wicked', type: 'Backpack', color: 'gold', description: 'Applying a status effect to an enemy grants +20% weapon damage for 27s.' },
  theGift: { id: 'theGift', name: 'The Gift', type: 'Backpack', color: 'gold', description: 'Perfect Vigilance' },

  // --- MASK TALENTS ---
  packInstincts: { id: 'packInstincts', name: 'Pack Instincts', type: 'Mask', color: 'gold', description: "You and your allies gain bonus damage based on the distance to the last enemy you hit. 0-5m: +25% CHC. 5-15m: +10% CHC, +10% CHD. 15-25m: +25% CHD. 25m+: +20% Headshot Damage." },
  hollowMan: { id: 'hollowMan', name: 'The Hollow Man', type: 'Mask', color: 'gold', description: 'Perfectly Drained: +20% Damage to Health' },
  punchDrunk: { id: 'punchDrunk', name: 'Punch Drunk', type: 'Mask', color: 'gold', description: 'Perfect Concussion: +20% Headshot Damage' },
  nightwatcher: { id: 'nightwatcher', name: 'Nightwatcher', type: 'Mask', color: 'gold', description: 'Perfect Spotter Pulse: +100% Scanner Pulse Haste'},
};
export const ALL_TALENTS_LIST = Object.values(TALENTS_DATA);

export const NAMED_MASK_ITEMS_DATA: Record<string, NamedItemInfo> = {
  coyotesMask: { id: 'coyotesMask', name: "Coyote's Mask", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Mask, talentId: 'packInstincts', coreAttributeHint: 'weaponDamage' },
  theHollowMan: { id: 'theHollowMan', name: 'The Hollow Man', brandId: 'yaahlGear', slot: GearSlotId.Mask, talentId: null, coreAttributeHint: 'skillTier', specialAttributeDescription: 'Perfect Damage to Health (+20%)' },
  punchDrunk: { id: 'punchDrunk', name: 'Punch Drunk', brandId: 'douglasAndHarding', slot: GearSlotId.Mask, talentId: 'punchDrunk', coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Perfect Concussion (+20% Headshot Damage)'},
  nightwatcher: { id: 'nightwatcher', name: 'Nightwatcher', brandId: 'gilaGuard', slot: GearSlotId.Mask, talentId: null, coreAttributeHint: 'armor', specialAttributeDescription: 'Perfect Spotter Pulse (+100% Scanner Pulse Haste)'},
};
export const ALL_NAMED_MASK_ITEMS_LIST = Object.values(NAMED_MASK_ITEMS_DATA);

export const NAMED_CHEST_ITEMS_DATA: Record<string, NamedItemInfo> = {
  theSacrifice: { id: 'theSacrifice', name: 'The Sacrifice', brandId: 'providenceDefense', slot: GearSlotId.Chest, talentId: 'perfectGlassCannon', coreAttributeHint: 'weaponDamage' },
  pointman: { id: 'pointman', name: 'Pointman', brandId: 'gilaGuard', slot: GearSlotId.Chest, talentId: 'perfectlyVanguard', coreAttributeHint: 'armor' },
  vedmedytsa: { id: 'vedmedytsa', name: 'Vedmedytsa Vest', brandId: 'petrovDefenseGroup', slot: GearSlotId.Chest, talentId: 'perfectlyEfficient', coreAttributeHint: 'armor' },
  pristineExample: { id: 'pristineExample', name: 'Pristine Example', brandId: 'airaldiHoldings', slot: GearSlotId.Chest, talentId: 'perfectFocus', coreAttributeHint: 'weaponDamage' },
  chainkiller: { id: 'chainkiller', name: 'The Chainkiller', brandId: 'walkerHarris', slot: GearSlotId.Chest, talentId: 'perfectHeadhunter', coreAttributeHint: 'weaponDamage' },
  hunterKiller: { id: 'hunterKiller', name: 'Hunter-Killer', brandId: 'golanGearLtd', slot: GearSlotId.Chest, talentId: 'perfectIntimidate', coreAttributeHint: 'weaponDamage' },
  percussiveMaintenance: { id: 'percussiveMaintenance', name: 'Percussive Maintenance', brandId: 'chinaLightIndustries', slot: GearSlotId.Chest, talentId: 'perfectlyMadBomber', coreAttributeHint: 'skillTier' },
  ferociousCalm: { id: 'ferociousCalm', name: 'Ferocious Calm', brandId: 'fenrisGroup', slot: GearSlotId.Chest, talentId: 'perfectOverwatch', coreAttributeHint: 'weaponDamage' },
  doorKickersKnock: { id: 'doorKickersKnock', name: "Door-Kicker's Knock", brandId: 'hanaU', slot: GearSlotId.Chest, talentId: 'perfectSpark', coreAttributeHint: 'skillTier' },
  theCloser: { id: 'theCloser', name: 'The Closer', brandId: 'grupoSombra', slot: GearSlotId.Chest, talentId: 'perfectSpotter', coreAttributeHint: 'weaponDamage' },
  caesarsGuard: { id: 'caesarsGuard', name: "Caesar's Guard", brandId: 'empressInternational', slot: GearSlotId.Chest, talentId: 'perfectlyTagTeam', coreAttributeHint: 'skillTier' },
  zeroFs: { id: 'zeroFs', name: "Zero F's", brandId: 'badgerTuff', slot: GearSlotId.Chest, talentId: 'perfectTrauma', coreAttributeHint: 'armor' },
  tardigrade: { id: 'tardigrade', name: 'Tardigrade Armor System', brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Chest, talentId: 'perfectUnbreakable', coreAttributeHint: 'armor' },
};
export const ALL_NAMED_CHEST_ITEMS_LIST = Object.values(NAMED_CHEST_ITEMS_DATA);

export const NAMED_BACKPACK_ITEMS_DATA: Record<string, NamedItemInfo> = {
  theGift: { id: 'theGift', name: 'The Gift', brandId: 'providenceDefense', slot: GearSlotId.Backpack, talentId: 'perfectVigilance', coreAttributeHint: 'weaponDamage' },
  matador: { id: 'matador', name: 'Matador', brandId: 'walkerHarris', slot: GearSlotId.Backpack, talentId: 'perfectAdrenalineRush', coreAttributeHint: 'weaponDamage' },
  anarchistsCookbook: { id: 'anarchistsCookbook', name: "Anarchist's Cookbook", brandId: 'golanGearLtd', slot: GearSlotId.Backpack, talentId: 'perfectBloodlust', coreAttributeHint: 'skillTier' },
  theSendOff: { id: 'theSendOff', name: 'The Send-Off', brandId: 'alpsSummitArmaments', slot: GearSlotId.Backpack, talentId: 'perfectCalculated', coreAttributeHint: 'skillTier' },
  strategicAlignment: { id: 'strategicAlignment', name: 'Strategic Alignment', brandId: 'airaldiHoldings', slot: GearSlotId.Backpack, talentId: 'perfectCompanion', coreAttributeHint: 'weaponDamage' },
  liquidEngineer: { id: 'liquidEngineer', name: 'Liquid Engineer', brandId: 'belstoneArmory', slot: GearSlotId.Backpack, talentId: 'perfectEnergize', coreAttributeHint: 'armor' },
  theTsunami: { id: 'theTsunami', name: 'The Tsunami', brandId: 'badgerTuff', slot: GearSlotId.Backpack, talentId: 'perfectOpportunistic', coreAttributeHint: 'weaponDamage' },
  theSetup: { id: 'theSetup', name: 'The Setup', brandId: 'richterAndKaiser', slot: GearSlotId.Backpack, talentId: 'perfectProtector', coreAttributeHint: 'skillTier' },
  forceMultiplier: { id: 'forceMultiplier', name: 'Force Multiplier', brandId: 'hanaU', slot: GearSlotId.Backpack, talentId: 'perfectSafeguard', coreAttributeHint: 'skillTier' },
  devilsDue: { id: 'devilsDue', name: "Devil's Due", brandId: 'ceskaVyroba', slot: GearSlotId.Backpack, talentId: 'perfectShockAndAwe', coreAttributeHint: 'weaponDamage' },
  clawsOut: { id: 'clawsOut', name: 'Claws Out', brandId: 'wyvernWear', slot: GearSlotId.Backpack, talentId: 'perfectWicked', coreAttributeHint: 'skillTier' },
};
export const ALL_NAMED_BACKPACK_ITEMS_LIST = Object.values(NAMED_BACKPACK_ITEMS_DATA);

export const NAMED_GLOVES_ITEMS_DATA: Record<string, NamedItemInfo> = {
  contractorsGloves: { id: 'contractorsGloves', name: "Contractor's Gloves", brandId: 'petrovDefenseGroup', slot: GearSlotId.Gloves, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Damage to Armor (+8%)' },
};
export const ALL_NAMED_GLOVES_ITEMS_LIST = Object.values(NAMED_GLOVES_ITEMS_DATA);

export const NAMED_HOLSTER_ITEMS_DATA: Record<string, NamedItemInfo> = {
  picarosHolster: { id: 'picarosHolster', name: "Picaro's Holster", brandId: 'brazosDeArcabuz', slot: GearSlotId.Holster, talentId: null, coreAttributeHint: 'armor', specialAttributeDescription: '+15% Weapon Damage' },
};
export const ALL_NAMED_HOLSTER_ITEMS_LIST = Object.values(NAMED_HOLSTER_ITEMS_DATA);

export const NAMED_KNEEPADS_ITEMS_DATA: Record<string, NamedItemInfo> = {
  foxsPrayer: { id: 'foxsPrayer', name: "Fox's Prayer", brandId: 'overlordArmaments', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Damage to Targets out of Cover (+8%)' },
  emperorsGuard: { id: 'emperorsGuard', name: "Emperor's Guard", brandId: 'murakamiIndustries', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'armor', specialAttributeDescription: 'Armor Regeneration (+1%)'},
};
export const ALL_NAMED_KNEEPADS_ITEMS_LIST = Object.values(NAMED_KNEEPADS_ITEMS_DATA);

export const ALL_NAMED_ITEMS_DATA: Record<string, NamedItemInfo> = {
  ...NAMED_MASK_ITEMS_DATA,
  ...NAMED_CHEST_ITEMS_DATA,
  ...NAMED_BACKPACK_ITEMS_DATA,
  ...NAMED_GLOVES_ITEMS_DATA,
  ...NAMED_HOLSTER_ITEMS_DATA,
  ...NAMED_KNEEPADS_ITEMS_DATA,
};

export const GEAR_MOD_TYPES_DATA: Record<GearModType, GearModTypeData> = {
  [GearModType.Offensive]: { id: GearModType.Offensive, name: 'Offensive System', color: 'red' },
  [GearModType.Defensive]: { id: GearModType.Defensive, name: 'Defensive System', color: 'blue' },
  [GearModType.Utility]: { id: GearModType.Utility, name: 'Utility System', color: 'yellow' },
};
export const ALL_GEAR_MOD_TYPES_LIST = Object.values(GEAR_MOD_TYPES_DATA);

export const GEAR_MODS_DATA: Record<GearModId, GearModData> = {
  // Offensive
  chcMod: { id: 'chcMod', name: 'Critical Hit Chance', type: GearModType.Offensive, color: 'red', description: '+6% Critical Hit Chance', statEffect: { stat: 'criticalHitChance', value: 6 } },
  chdMod: { id: 'chdMod', name: 'Critical Hit Damage', type: GearModType.Offensive, color: 'red', description: '+12% Critical Hit Damage', statEffect: { stat: 'criticalHitDamage', value: 12 } },
  hsdMod: { id: 'hsdMod', name: 'Headshot Damage', type: GearModType.Offensive, color: 'red', description: '+10% Headshot Damage', statEffect: { stat: 'headshotDamage', value: 10 } },
  // Defensive
  armorOnKillMod: { id: 'armorOnKillMod', name: 'Armor on Kill', type: GearModType.Defensive, color: 'blue', description: '+10% Armor on Kill', statEffect: { stat: 'armorOnKill', value: 18000 } },
  pfeMod: { id: 'pfeMod', name: 'Protection From Elites', type: GearModType.Defensive, color: 'blue', description: '+13% Protection From Elites', statEffect: { stat: 'protectionFromElites', value: 13 } },
  // Utility
  skillHasteMod: { id: 'skillHasteMod', name: 'Skill Haste', type: GearModType.Utility, color: 'yellow', description: '+12% Skill Haste', statEffect: { stat: 'skillHaste', value: 12 } },
};
export const ALL_GEAR_MODS_LIST = Object.values(GEAR_MODS_DATA);

export const SKILL_DEFINITIONS_DATA: Record<SkillNameId, SkillDefinition> = {
  [SkillNameId.Pulse]: { 
    id: SkillNameId.Pulse, name: 'Pulse', 
    variants: [
        { id: 'pulse_scanner', name: 'Scanner', description: 'Pulses the surrounding area for hostiles and highlights them. Can be deployed or thrown.' },
        { id: 'pulse_remote', name: 'Remote', description: 'A small, throwable pulse device that continuously scans for hostiles in its vicinity.' },
        { id: 'pulse_jammer', name: 'Jammer', description: 'A pulse that overwhelms and disrupts hostile electronics, and can disable skill proxies.' },
        { id: 'pulse_banshee', name: 'Banshee (Gunner)', description: 'Unleashes a confusing pulse from the agent. This pulse can be charged for a greater range.' }
    ],
    modSlots: [{id: 'pulse_mod_1', name: 'Mod Slot 1'}, {id: 'pulse_mod_2', name: 'Mod Slot 2'}, {id: 'pulse_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Turret]: { 
    id: SkillNameId.Turret, name: 'Turret', 
    variants: [
        { id: 'turret_assault', name: 'Assault', description: 'A micro-turret that automatically tracks and attacks hostile targets.' },
        { id: 'turret_incinerator', name: 'Incinerator', description: 'A short-range turret that projects a cone of fire. The operator can manually select targets.' },
        { id: 'turret_sniper', name: 'Sniper', description: 'A semi-automatic, long-range turret that fires high-caliber rounds. The operator must manually select targets.' },
        { id: 'turret_artillery', name: 'Artillery (Demolitionist)', description: 'A deployable mortar that launches explosives at designated target locations.' }
    ],
    modSlots: [{id: 'turret_mod_1', name: 'Mod Slot 1'}, {id: 'turret_mod_2', name: 'Mod Slot 2'}, {id: 'turret_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Hive]: { 
    id: SkillNameId.Hive, name: 'Hive', 
    variants: [
        { id: 'hive_stinger', name: 'Stinger', description: 'Deploys a hive of micro-drones that swarm nearby hostiles, inflicting damage and targeting weak points.' },
        { id: 'hive_restorer', name: 'Restorer', description: 'Deploys a hive that sends out small drones to repair allies\' armor.' },
        { id: 'hive_booster', name: 'Booster', description: 'Sends out micro-drones that administer a stimulant to nearby allies, increasing their weapon handling and combat effectiveness.' },
        { id: 'hive_reviver', name: 'Reviver', description: 'Deploys a hive that can revive downed allies within a certain radius.' },
        { id: 'hive_artificer', name: 'Artificer (Technician)', description: 'A hive that buffs friendly skills. It can also repair friendly skills.' }
    ],
    modSlots: [{id: 'hive_mod_1', name: 'Mod Slot 1'}, {id: 'hive_mod_2', name: 'Mod Slot 2'}, {id: 'hive_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.ChemLauncher]: { 
    id: SkillNameId.ChemLauncher, name: 'Chem Launcher', 
    variants: [
        { id: 'chem_reinforcer', name: 'Reinforcer', description: 'Fires a canister that disperses a cloud of gas that repairs allies\' armor upon impact.' },
        { id: 'chem_firestarter', name: 'Firestarter', description: 'Fires a canister that creates a cloud of flammable gas. This gas can be ignited by any spark.' },
        { id: 'chem_riot_foam', name: 'Riot Foam', description: 'Fires a canister that disperses a cloud of riot foam, which immobilizes enemies.' },
        { id: 'chem_oxidizer', name: 'Oxidizer', description: 'Fires a canister that disperses a cloud of corrosive chemicals, which damage enemy armor, skill proxies and cause damage over time.' }
    ],
    modSlots: [{id: 'chem_mod_1', name: 'Mod Slot 1'}, {id: 'chem_mod_2', name: 'Mod Slot 2'}, {id: 'chem_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Firefly]: { 
    id: SkillNameId.Firefly, name: 'Firefly', 
    variants: [
        { id: 'firefly_blinder', name: 'Blinder', description: 'The Firefly blinds enemies it flies over, preventing them from fighting back.' },
        { id: 'firefly_burster', name: 'Burster', description: 'Attaches small explosive charges to multiple targets that detonate if they get too close to each other.' },
        { id: 'firefly_demolisher', name: 'Demolisher', description: 'The Firefly targets and destroys enemy weak points, skill proxies, and environmental explosives.' }
    ],
    modSlots: [{id: 'firefly_mod_1', name: 'Mod Slot 1'}, {id: 'firefly_mod_2', name: 'Mod Slot 2'}, {id: 'firefly_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.SeekerMine]: { 
    id: SkillNameId.SeekerMine, name: 'Seeker Mine', 
    variants: [
        { id: 'seeker_explosive', name: 'Explosive', description: 'A mine that seeks out a hostile and explodes on impact.' },
        { id: 'seeker_airburst', name: 'Airburst', description: 'A mine that is launched into the air and explodes, setting enemies on fire.' },
        { id: 'seeker_cluster', name: 'Cluster', description: 'A mine that splits into multiple smaller mines, each seeking a different target.' },
        { id: 'seeker_mender', name: 'Mender (Survivalist)', description: 'A mine that follows a friendly target, repairing their armor.' }
    ],
    modSlots: [{id: 'seeker_mod_1', name: 'Mod Slot 1'}, {id: 'seeker_mod_2', name: 'Mod Slot 2'}, {id: 'seeker_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Drone]: { 
    id: SkillNameId.Drone, name: 'Drone', 
    variants: [
        { id: 'drone_striker', name: 'Striker', description: 'A drone that tracks and continuously fires at a specific target.' },
        { id: 'drone_defender', name: 'Defender', description: 'A drone that deflects incoming fire from a small area.' },
        { id: 'drone_bombardier', name: 'Bombardier', description: 'A drone that flies to a specific location and drops a payload of micro-bombs.' },
        { id: 'drone_fixer', name: 'Fixer', description: 'A drone that repairs a friendly target\'s armor over time.' },
        { id: 'drone_tactician', name: 'Tactician (Sharpshooter)', description: 'A drone that provides reconnaissance at a target location.' }
    ],
    modSlots: [{id: 'drone_mod_1', name: 'Mod Slot 1'}, {id: 'drone_mod_2', name: 'Mod Slot 2'}, {id: 'drone_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Shield]: { 
    id: SkillNameId.Shield, name: 'Shield', 
    variants: [
        { id: 'shield_ballistic', name: 'Ballistic Shield', description: 'A full-body shield that provides maximum protection, but only allows the use of a sidearm.' },
        { id: 'shield_crusader', name: 'Crusader Shield', description: 'A lighter shield that allows the use of primary weapons, but does not cover the entire body.' },
        { id: 'shield_deflector', name: 'Deflector Shield', description: 'A shield that deflects incoming bullets to a nearby target.' },
        { id: 'shield_striker', name: 'Striker (Firewall)', description: 'A shield that provides a damage buff to the user and nearby allies.' }
    ],
    modSlots: [{id: 'shield_mod_1', name: 'Mod Slot 1'}, {id: 'shield_mod_2', name: 'Mod Slot 2'}, {id: 'shield_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.StickyBomb]: { 
    id: SkillNameId.StickyBomb, name: 'Sticky Bomb', 
    variants: [
        { id: 'sticky_explosive', name: 'Explosive', description: 'A bomb that sticks to a surface and can be remotely detonated.' },
        { id: 'sticky_burn', name: 'Burn', description: 'A bomb that ignites a large area on fire.' },
        { id: 'sticky_emp', name: 'EMP', description: 'A bomb that emits an EMP pulse, disabling hostile electronics.' }
    ],
    modSlots: [{id: 'sticky_mod_1', name: 'Mod Slot 1'}, {id: 'sticky_mod_2', name: 'Mod Slot 2'}, {id: 'sticky_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Decoy]: { 
    id: SkillNameId.Decoy, name: 'Decoy', 
    variants: [
        { id: 'decoy_decoy', name: 'Decoy', description: 'Deploys a holographic decoy that draws enemy fire.' },
        { id: 'decoy_holographic', name: 'Holographic', description: 'An improved decoy with more health and a longer duration that provides threat.' }
    ],
    modSlots: [{id: 'decoy_mod_1', name: 'Mod Slot 1'}, {id: 'decoy_mod_2', name: 'Mod Slot 2'}, {id: 'decoy_mod_3', name: 'Mod Slot 3'}] 
  },
  [SkillNameId.Trap]: { 
    id: SkillNameId.Trap, name: 'Trap', 
    variants: [
        { id: 'trap_shock', name: 'Shock Trap', description: 'Deploys a small trap that shocks enemies who enter its radius.' },
        { id: 'trap_repair', name: 'Repair Trap', description: 'Deploys a trap that repairs allies who enter its radius.' }
    ],
    modSlots: [{id: 'trap_mod_1', name: 'Mod Slot 1'}, {id: 'trap_mod_2', name: 'Mod Slot 2'}, {id: 'trap_mod_3', name: 'Mod Slot 3'}] 
  },
};
export const ALL_SKILL_DEFINITIONS_LIST = Object.values(SKILL_DEFINITIONS_DATA);

type ModTemplate = Omit<SkillModOptionData, 'id' | 'skillId' | 'slotDefinitionId'>;

const GENERIC_SKILL_MOD_TEMPLATES: ModTemplate[] = [
    { attributeName: 'Skill Haste', valueString: '+10%', effects: [{ stat: 'skillHaste', value: 10, isPercentage: true }] },
    { attributeName: 'Skill Damage', valueString: '+10%', effects: [{ stat: 'skillDamage', value: 10, isPercentage: true }] },
    { attributeName: 'Skill Duration', valueString: '+10%', effects: [{ stat: 'skillDuration', value: 10, isPercentage: true }] },
    { attributeName: 'Repair Skills', valueString: '+10%', effects: [{ stat: 'skillRepair', value: 10, isPercentage: true }] },
    { attributeName: 'Status Effects', valueString: '+10%', effects: [{ stat: 'statusEffects', value: 10, isPercentage: true }] },
];

const SKILL_SPECIFIC_MOD_TEMPLATES: Partial<Record<SkillNameId, ModTemplate[]>> = {
    [SkillNameId.Pulse]: [
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'pulseRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Effect Duration', valueString: '+10%', effects: [{ stat: 'pulseEffectDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Charges', valueString: '+1', effects: [{ stat: 'pulseCharges', value: 1 }] },
    ],
    [SkillNameId.Turret]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'turretDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'turretHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Duration', valueString: '+10%', effects: [{ stat: 'turretDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Ammo', valueString: '+3', effects: [{ stat: 'turretAmmo', value: 3 }] },
    ],
    [SkillNameId.Hive]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'hiveDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Healing', valueString: '+10%', effects: [{ stat: 'hiveHealing', value: 10, isPercentage: true }] },
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'hiveRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Duration', valueString: '+10%', effects: [{ stat: 'hiveDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'hiveHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Charges', valueString: '+4', effects: [{ stat: 'hiveStingerCharges', value: 4 }] },
    ],
    [SkillNameId.ChemLauncher]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'chemLauncherDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Heal', valueString: '+10%', effects: [{ stat: 'chemLauncherHeal', value: 10, isPercentage: true }] },
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'chemLauncherRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Ensnare Health', valueString: '+10%', effects: [{ stat: 'chemLauncherEnsnareHealth', value: 10, isPercentage: true }] },
        { attributeName: 'Ammo', valueString: '+1', effects: [{ stat: 'chemLauncherAmmo', value: 1 }] },
    ],
    [SkillNameId.Firefly]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'fireflyDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'fireflyHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Speed', valueString: '+10%', effects: [{ stat: 'fireflySpeed', value: 10, isPercentage: true }] },
        { attributeName: 'Max Targets', valueString: '+1', effects: [{ stat: 'fireflyMaxTargets', value: 1 }] },
    ],
    [SkillNameId.SeekerMine]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'seekerMineDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'seekerMineHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'seekerMineRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Healing', valueString: '+10%', effects: [{ stat: 'seekerMineHealing', value: 10, isPercentage: true }] },
    ],
    [SkillNameId.Drone]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'droneDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'droneHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Duration', valueString: '+10%', effects: [{ stat: 'droneDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Armor Repair', valueString: '+10%', effects: [{ stat: 'droneArmorRepair', value: 10, isPercentage: true }] },
    ],
    [SkillNameId.Shield]: [
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'shieldHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Active Regen', valueString: '+10%', effects: [{ stat: 'shieldActiveRegeneration', value: 10, isPercentage: true }] },
        { attributeName: 'Holstered Regen', valueString: '+10%', effects: [{ stat: 'shieldHolsteredRegeneration', value: 10, isPercentage: true }] },
        { attributeName: 'Deflector Damage', valueString: '+10%', effects: [{ stat: 'shieldDeflectorDamage', value: 10, isPercentage: true }] },
    ],
    [SkillNameId.StickyBomb]: [
        { attributeName: 'Damage', valueString: '+10%', effects: [{ stat: 'stickyBombDamage', value: 10, isPercentage: true }] },
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'stickyBombRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Effect Duration', valueString: '+10%', effects: [{ stat: 'stickyBombEffectDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Ammo', valueString: '+1', effects: [{ stat: 'stickyBombAmmo', value: 1 }] },
    ],
    [SkillNameId.Decoy]: [
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'decoyHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Duration', valueString: '+10%', effects: [{ stat: 'decoyDuration', value: 10, isPercentage: true }] },
    ],
    [SkillNameId.Trap]: [
        { attributeName: 'Health', valueString: '+20%', effects: [{ stat: 'trapHealth', value: 20, isPercentage: true }] },
        { attributeName: 'Radius', valueString: '+10%', effects: [{ stat: 'trapRadius', value: 10, isPercentage: true }] },
        { attributeName: 'Effect Duration', valueString: '+10%', effects: [{ stat: 'trapEffectDuration', value: 10, isPercentage: true }] },
        { attributeName: 'Charges', valueString: '+1', effects: [{ stat: 'trapCharges', value: 1 }] },
    ]
};

const generateAllSkillModOptions = (): SkillModOptionData[] => {
  const allMods: SkillModOptionData[] = [];
  for (const skill of Object.values(SKILL_DEFINITIONS_DATA)) {
    const applicableTemplates = [
      ...GENERIC_SKILL_MOD_TEMPLATES,
      ...(SKILL_SPECIFIC_MOD_TEMPLATES[skill.id] || [])
    ];
    for (const slot of skill.modSlots) {
      for (const template of applicableTemplates) {
        allMods.push({
          id: `${skill.id}_${slot.id}_${template.attributeName.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
          skillId: skill.id,
          slotDefinitionId: slot.id,
          ...template
        });
      }
    }
  }
  return allMods;
};
export const ALL_SKILL_MOD_OPTIONS_DATA: SkillModOptionData[] = generateAllSkillModOptions();


export const WEAPON_TALENTS_DATA: Record<WeaponTalentId, WeaponTalentData> = {
  optimist: { id: 'optimist', name: 'Optimist', applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun], description: 'Weapon damage is increased by +3% for every 10% ammo missing from the magazine.' },
  strained: { id: 'strained', name: 'Strained', applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun], description: 'Gain +10% critical hit damage for every 0.5 seconds you are firing. Stacks up to 5 times.' },
  ranger: { id: 'ranger', name: 'Ranger', applicableCategories: [WeaponCategory.Rifle, WeaponCategory.AssaultRifle], description: 'Amplifies weapon damage by 2% for every 5 meters you are from your target.' },
};
export const ALL_WEAPON_TALENTS_LIST = Object.values(WEAPON_TALENTS_DATA);

export const WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY: Record<WeaponCategory, WeaponAttachmentSlotDefinition[]> = {
  [WeaponCategory.AssaultRifle]: [ { id: 'ar_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic }, { id: 'ar_muzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle } ],
  [WeaponCategory.LightMachineGun]: [ { id: 'lmg_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic } ],
  [WeaponCategory.MarksmanRifle]: [ { id: 'mmr_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic } ],
  [WeaponCategory.Pistol]: [ { id: 'pistol_muzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle } ],
  [WeaponCategory.Rifle]: [ { id: 'rifle_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic } ],
  [WeaponCategory.Shotgun]: [ { id: 'shotgun_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic } ],
  [WeaponCategory.SubmachineGun]: [ { id: 'smg_optic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic } ],
};

export const ALL_WEAPON_ATTACHMENT_OPTIONS_DATA: WeaponAttachmentOptionData[] = [
  { id: 'optic_chc', name: 'Red Dot Sight', attachmentCategory: WeaponAttachmentCategory.Optic, applicableWeaponCategories: [WeaponCategory.AssaultRifle], valueString: '+5% CHC', effects: [{ stat: 'criticalHitChance', value: 5 }] },
  { id: 'muzzle_chd', name: 'Compensator', attachmentCategory: WeaponAttachmentCategory.Muzzle, applicableWeaponCategories: [WeaponCategory.AssaultRifle], valueString: '+10% CHD', effects: [{ stat: 'criticalHitDamage', value: 10 }] },
];

export const EXOTIC_WEAPON_NAMES: string[] = ['Eagle Bearer', 'Chameleon', 'The Bighorn', "St. Elmo's Engine", 'Diamondback', 'Ruthless', 'Merciless', 'The Ravenous', 'Pestilence', 'Bullet King', 'Bluescreen', 'Mantis', 'Dread Edict', 'Nemesis', 'Sacrum Imperium', 'Ouroboros', 'Backfire', 'Lady Death', 'The Chatterbox', 'Sweet Dreams', 'The Lullaby', 'Scorpio', 'Regulus', 'Busy Little Bee', 'Liberty'];
export const EXOTIC_WEAPON_FIXED_MOD_BONUSES: Record<string, SkillModOptionEffect[]> = {
  'Eagle Bearer': [{ stat: 'weaponHandling', value: 10 }, { stat: 'criticalHitDamage', value: 10 }],
  'Chameleon': [{ stat: 'criticalHitChance', value: 15 }, { stat: 'weaponHandling', value: 20 }],
  'The Bighorn': [{ stat: 'criticalHitDamage', value: 15 }, { stat: 'headshotDamage', value: 10 }],
  "St. Elmo's Engine": [{ stat: 'criticalHitChance', value: 10 }, { stat: 'criticalHitDamage', value: 10 }],
  'Diamondback': [{ stat: 'headshotDamage', value: 15 }, { stat: 'weaponHandling', value: 15 }],
  'Ruthless': [{ stat: 'criticalHitChance', value: 5 }, { stat: 'explosiveDamage', value: 10 }],
  'Merciless': [{ stat: 'criticalHitChance', value: 5 }, { stat: 'explosiveDamage', value: 10 }],
  'The Ravenous': [{ stat: 'damageToArmor', value: 10 }, { stat: 'reloadSpeed', value: 10 }],
  'Pestilence': [{ stat: 'weaponHandling', value: 10 }, { stat: 'damageToArmor', value: 10 }],
  'Bullet King': [{ stat: 'damageToArmor', value: 10 }, { stat: 'weaponHandling', value: 15 }],
  'Bluescreen': [{ stat: 'statusEffects', value: 10 }, { stat: 'skillHaste', value: 10 }],
  'Mantis': [{ stat: 'headshotDamage', value: 25 }, { stat: 'weaponHandling', value: 10 }],
  'Dread Edict': [{ stat: 'weaponHandling', value: 15 }, { stat: 'damageToArmor', value: 10 }],
  'Nemesis': [{ stat: 'headshotDamage', value: 25 }, { stat: 'weaponHandling', value: 15 }],
  'Sacrum Imperium': [{ stat: 'headshotDamage', value: 20 }, { stat: 'damageToArmor', value: 10 }],
  'Ouroboros': [{ stat: 'criticalHitChance', value: 10 }, { stat: 'weaponHandling', value: 15 }],
  'Backfire': [{ stat: 'criticalHitDamage', value: 15 }, { stat: 'reloadSpeed', value: 10 }],
  'Lady Death': [{ stat: 'weaponHandling', value: 20 }, { stat: 'damageToArmor', value: 5 }],
  'The Chatterbox': [{ stat: 'rateOfFire', value: 10 }, { stat: 'reloadSpeed', value: 15 }],
  'Sweet Dreams': [{ stat: 'weaponHandling', value: 15 }, { stat: 'damageToArmor', value: 10 }],
  'The Lullaby': [{ stat: 'weaponHandling', value: 15 }, { stat: 'damageToArmor', value: 10 }],
  'Scorpio': [{ stat: 'weaponHandling', value: 15 }, { stat: 'criticalHitChance', value: 5 }],
  'Regulus': [{ stat: 'headshotDamage', value: 20 }, { stat: 'weaponHandling', value: 15 }],
  'Busy Little Bee': [{ stat: 'weaponHandling', value: 15 }, { stat: 'reloadSpeed', value: 10 }],
  'Liberty': [{ stat: 'weaponHandling', value: 15 }, { stat: 'skillRepair', value: 10 }],
};

const commonAR: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg'> = { category: WeaponCategory.AssaultRifle, optimalRange: 28, dropOffEnd: 40, zeroDamageRange: 70, rpm: 750, magSize: 30, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2600, headshotMultiplier: 1.5, weaponBonusType: 'DamageToHealth', weaponBonusValuePercent: 21 };
export const ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
  // ACR Family
  { ...commonAR, family: 'ACR', name: 'ACR', rpm: 700, level40Dmg: 96000, level40MinDmg: 81000, wt5Dmg: 41000 },
  
  // AK-M Family
  { ...commonAR, family: 'AK-M', name: 'AK-M', level40Dmg: 110000, level40MinDmg: 90000, wt5Dmg: 45000, rpm: 600 },
  { ...commonAR, family: 'AK-M', name: 'Manic', level40Dmg: 110000, level40MinDmg: 90000, wt5Dmg: 45000, rpm: 600, description: 'Named Talent: Perfect Overflow' },
  
  // AUG Family
  { ...commonAR, family: 'AUG', name: 'AUG A3 CQC', rpm: 700, magSize: 30, level40Dmg: 97000, level40MinDmg: 82000, wt5Dmg: 42000 },
  { ...commonAR, family: 'AUG', name: 'The Bighorn', rpm: 400, magSize: 40, level40Dmg: 135000, level40MinDmg: 115000, wt5Dmg: 55000, description: 'Exotic: Scoped AR / Unscoped Rifle hybrid' },
  { ...commonAR, family: 'AUG', name: 'Invisible Hand', rpm: 700, magSize: 30, level40Dmg: 97000, level40MinDmg: 82000, wt5Dmg: 42000, description: 'Named Talent: Perfect Allegro' },

  // Carbine 7 Family
  { ...commonAR, family: 'Carbine 7', name: 'Carbine 7', rpm: 790, magSize: 30, level40Dmg: 93000, level40MinDmg: 78000, wt5Dmg: 39500, description: 'Comes with Overflowing talent slot.' },
  { ...commonAR, family: 'Carbine 7', name: 'The Drill', rpm: 790, magSize: 30, level40Dmg: 93000, level40MinDmg: 78000, wt5Dmg: 39500, description: 'Named variant of Carbine 7' },

  // Chameleon (Exotic)
  { ...commonAR, family: 'Chameleon', name: 'Chameleon', rpm: 900, magSize: 50, level40Dmg: 85000, level40MinDmg: 70000, wt5Dmg: 35000, description: 'Exotic Talent: Adaptive Instincts' },

  // CTAR-21 Family
  { ...commonAR, family: 'CTAR-21', name: 'CTAR-21', rpm: 900, magSize: 30, level40Dmg: 89000, level40MinDmg: 74000, wt5Dmg: 37500 },
  { ...commonAR, family: 'CTAR-21', name: 'The Railsplitter', rpm: 900, magSize: 30, level40Dmg: 89000, level40MinDmg: 74000, wt5Dmg: 37500, description: 'Named Talent: Perfectly Accurate' },
  
  // Eagle Bearer (Exotic)
  { ...commonAR, family: 'Eagle Bearer', name: 'Eagle Bearer', level40Dmg: 120000, level40MinDmg: 100000, wt5Dmg: 50000, description: 'Exotic Talent: Eagle\'s Strike' },
  
  // F2000 Family
  { ...commonAR, family: 'F2000', name: 'F2000', rpm: 900, magSize: 30, level40Dmg: 88000, level40MinDmg: 73000, wt5Dmg: 37000 },
  { ...commonAR, family: 'F2000', name: 'Shield Splinterer', rpm: 950, magSize: 30, level40Dmg: 88000, level40MinDmg: 73000, wt5Dmg: 37000, description: 'Named Talent: Perfect Perpetuation' },

  // FAL Family
  { ...commonAR, family: 'FAL', name: 'FAL', rpm: 650, magSize: 20, level40Dmg: 115000, level40MinDmg: 95000, wt5Dmg: 48000 },
  { ...commonAR, family: 'FAL', name: 'Strega', rpm: 650, magSize: 20, level40Dmg: 115000, level40MinDmg: 95000, wt5Dmg: 48000, description: 'Named variant of FAL' },

  // FAMAS 2010 Family
  { ...commonAR, family: 'FAMAS 2010', name: 'FAMAS 2010', level40Dmg: 90000, level40MinDmg: 75000, wt5Dmg: 38000, rpm: 900 },
  { ...commonAR, family: 'FAMAS 2010', name: 'Burn Out', rpm: 900, level40Dmg: 90000, level40MinDmg: 75000, wt5Dmg: 38000, description: 'Named Talent: Perfect On Empty' },

  // G36 Family
  { ...commonAR, family: 'G36', name: 'G36 C', rpm: 750, level40Dmg: 93000, level40MinDmg: 78000, wt5Dmg: 39500 },
  { ...commonAR, family: 'G36', name: 'Born Great', rpm: 750, level40Dmg: 93000, level40MinDmg: 78000, wt5Dmg: 39500, description: 'Named Talent: Perfect Stabilize' },
  
  // Honey Badger Family
  { ...commonAR, family: 'Honey Badger', name: 'Honey Badger', rpm: 790, magSize: 30, level40Dmg: 92000, level40MinDmg: 77000, wt5Dmg: 39000 },
  { ...commonAR, family: 'Honey Badger', name: 'Savage Wolverine', rpm: 790, magSize: 30, level40Dmg: 92000, level40MinDmg: 77000, wt5Dmg: 39000, description: 'Named Talent: Perfectly Close & Personal' },

  // MK16 Family
  { ...commonAR, family: 'MK16', name: 'MK16', rpm: 625, level40Dmg: 105000, level40MinDmg: 88000, wt5Dmg: 44000 },
  
  // P416 Family
  { ...commonAR, family: 'P416', name: 'P416', rpm: 750, level40Dmg: 94000, level40MinDmg: 79000, wt5Dmg: 39000 },
  { ...commonAR, family: 'P416', name: 'Glory Daze', rpm: 750, level40Dmg: 94000, level40MinDmg: 79000, wt5Dmg: 39000, description: 'Named Talent: Perfectly Nearsighted' },
  
  // PDR Family
  { ...commonAR, family: 'PDR', name: 'PDR', rpm: 850, magSize: 30, level40Dmg: 91000, level40MinDmg: 76000, wt5Dmg: 38500 },

  // Police M4 Family
  { ...commonAR, family: 'Police M4', name: 'Police M4', level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000, rpm: 850 },
  { ...commonAR, family: 'Police M4', name: 'Pyromaniac', level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000, rpm: 850, description: 'Named Talent: Perfectly Ignited' },

  // SIG 556 Family
  { ...commonAR, family: 'SIG 556', name: 'SIG 556', rpm: 650, magSize: 30, level40Dmg: 108000, level40MinDmg: 91000, wt5Dmg: 46000 },
  
  // St. Elmo's Engine (Exotic)
  { ...commonAR, family: 'St. Elmo\'s Engine', name: 'St. Elmo\'s Engine', rpm: 750, magSize: 70, level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000, description: 'Exotic Talent: Actum Est' },

  // TKB-408 Family
  { ...commonAR, family: 'TKB-408', name: 'TKB-408', rpm: 600, magSize: 30, level40Dmg: 112000, level40MinDmg: 94000, wt5Dmg: 47000 },
  { ...commonAR, family: 'TKB-408', name: 'Kingbreaker', rpm: 600, magSize: 30, level40Dmg: 112000, level40MinDmg: 94000, wt5Dmg: 47000, description: 'Named Talent: Perfect Flatline' },
];

const commonLMG: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg' | 'rpm' | 'magSize' | 'reloadSpeedMs' | 'reloadSpeedFromEmptyMs'> = { category: WeaponCategory.LightMachineGun, optimalRange: 35, dropOffEnd: 70, zeroDamageRange: 100, headshotMultiplier: 1.6, weaponBonusType: 'DamageToTargetsOutOfCover', weaponBonusValuePercent: 12 };
export const ALL_LMG_WEAPON_DATA_LIST: WeaponStats[] = [
  // GR9 Family
  { ...commonLMG, family: 'GR9', name: 'GR9', rpm: 900, magSize: 50, reloadSpeedMs: 3200, reloadSpeedFromEmptyMs: 3800, level40Dmg: 90000, level40MinDmg: 75000, wt5Dmg: 38000 },
  { ...commonLMG, family: 'GR9', name: 'Cricket', rpm: 900, magSize: 50, reloadSpeedMs: 3200, reloadSpeedFromEmptyMs: 3800, level40Dmg: 90000, level40MinDmg: 75000, wt5Dmg: 38000, description: 'Named variant of GR9' },
  { ...commonLMG, family: 'GR9', name: 'Dare', rpm: 900, magSize: 50, reloadSpeedMs: 3200, reloadSpeedFromEmptyMs: 3800, level40Dmg: 90000, level40MinDmg: 75000, wt5Dmg: 38000, description: 'Named Talent: Perfect Flatline' },
  
  // IMI Negev Family
  { ...commonLMG, family: 'IMI Negev', name: 'IMI Negev', rpm: 850, magSize: 100, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000 },
  { ...commonLMG, family: 'IMI Negev', name: 'Bullet King', rpm: 850, magSize: 100, reloadSpeedMs: null, reloadSpeedFromEmptyMs: null, level40Dmg: 98000, level40MinDmg: 82000, wt5Dmg: 41000, description: 'Exotic Talent: Bullet Hell - Never needs to be reloaded.' },
  { ...commonLMG, family: 'IMI Negev', name: 'Carnage', rpm: 850, magSize: 100, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000, description: 'Named Talent: Perfect Sadist' },
  
  // L86 LSW Family
  { ...commonLMG, family: 'L86 LSW', name: 'L86 LSW', rpm: 610, magSize: 50, reloadSpeedMs: 3500, reloadSpeedFromEmptyMs: 4000, level40Dmg: 120000, level40MinDmg: 100000, wt5Dmg: 50000 },
  { ...commonLMG, family: 'L86 LSW', name: 'Tabula Rasa', rpm: 610, magSize: 50, reloadSpeedMs: 3500, reloadSpeedFromEmptyMs: 4000, level40Dmg: 120000, level40MinDmg: 100000, wt5Dmg: 50000, description: 'Named Talent: Perfect Stability' },

  // M60 Family
  { ...commonLMG, family: 'M60', name: 'M60', rpm: 500, magSize: 100, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5800, level40Dmg: 130000, level40MinDmg: 110000, wt5Dmg: 55000 },
  { ...commonLMG, family: 'M60', name: 'Good Times', rpm: 500, magSize: 100, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5800, level40Dmg: 130000, level40MinDmg: 110000, wt5Dmg: 55000, description: 'Named Talent: Perfect Fast Hands' },

  // M249 B Family
  { ...commonLMG, family: 'M249 B', name: 'M249 B', rpm: 650, magSize: 100, reloadSpeedMs: 5200, reloadSpeedFromEmptyMs: 6000, level40Dmg: 110000, level40MinDmg: 92000, wt5Dmg: 46000 },
  { ...commonLMG, family: 'M249 B', name: 'Black Friday', rpm: 650, magSize: 100, reloadSpeedMs: 5200, reloadSpeedFromEmptyMs: 6000, level40Dmg: 110000, level40MinDmg: 92000, wt5Dmg: 46000, description: 'Named variant of M249 B' },
  { ...commonLMG, family: 'M249 B', name: 'Pestilence', rpm: 650, magSize: 100, reloadSpeedMs: 5200, reloadSpeedFromEmptyMs: 6000, level40Dmg: 115000, level40MinDmg: 95000, wt5Dmg: 48000, description: 'Exotic Talent: Plague of the Outcasts' },
  { ...commonLMG, family: 'M249 B', name: 'The Stinger', rpm: 650, magSize: 100, reloadSpeedMs: 5200, reloadSpeedFromEmptyMs: 6000, level40Dmg: 110000, level40MinDmg: 92000, wt5Dmg: 46000, description: 'Named variant of M249 B' },
  
  // MG5 Family
  { ...commonLMG, family: 'MG5', name: 'Infantry MG5', rpm: 800, magSize: 50, reloadSpeedMs: 4500, reloadSpeedFromEmptyMs: 5000, level40Dmg: 100000, level40MinDmg: 85000, wt5Dmg: 42000 },
  { ...commonLMG, family: 'MG5', name: 'Big Show', rpm: 800, magSize: 50, reloadSpeedMs: 4500, reloadSpeedFromEmptyMs: 5000, level40Dmg: 100000, level40MinDmg: 85000, wt5Dmg: 42000, description: 'Named variant of MG5' },
  { ...commonLMG, family: 'MG5', name: 'Iron Lung', rpm: 800, magSize: 50, reloadSpeedMs: 4500, reloadSpeedFromEmptyMs: 5000, level40Dmg: 100000, level40MinDmg: 85000, wt5Dmg: 42000, description: 'Named Talent: Perfect Contagion' },
  { ...commonLMG, family: 'MG5', name: 'Sleipnir', rpm: 800, magSize: 50, reloadSpeedMs: 4500, reloadSpeedFromEmptyMs: 5000, level40Dmg: 100000, level40MinDmg: 85000, wt5Dmg: 42000, description: 'Named variant of MG5' },
  
  // RPK-74 Family
  { ...commonLMG, family: 'RPK-74', name: 'RPK-74', rpm: 650, magSize: 45, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, level40Dmg: 125000, level40MinDmg: 105000, wt5Dmg: 52000 },
  { ...commonLMG, family: 'RPK-74', name: 'New Reliable', rpm: 650, magSize: 45, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, level40Dmg: 125000, level40MinDmg: 105000, wt5Dmg: 52000, description: 'Named Talent: Perfect Steady Handed' },
  { ...commonLMG, family: 'RPK-74', name: 'Rusty', rpm: 650, magSize: 45, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, level40Dmg: 125000, level40MinDmg: 105000, wt5Dmg: 52000, description: 'Named variant of RPK-74' },
  
  // Stoner LAMG Family
  { ...commonLMG, family: 'Stoner LAMG', name: 'Stoner LAMG', rpm: 580, magSize: 150, reloadSpeedMs: 5500, reloadSpeedFromEmptyMs: 6200, level40Dmg: 115000, level40MinDmg: 96000, wt5Dmg: 48000 },
  { ...commonLMG, family: 'Stoner LAMG', name: 'Bluescreen', rpm: 580, magSize: 150, reloadSpeedMs: 5500, reloadSpeedFromEmptyMs: 6200, level40Dmg: 120000, level40MinDmg: 100000, wt5Dmg: 50000, description: 'Exotic Talent: Disruptor Rounds' },
  { ...commonLMG, family: 'Stoner LAMG', name: 'Quiet Roar', rpm: 580, magSize: 150, reloadSpeedMs: 5500, reloadSpeedFromEmptyMs: 6200, level40Dmg: 115000, level40MinDmg: 96000, wt5Dmg: 48000, description: 'Named Talent: Perfect Overwhelm' },
];

const commonMMR: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg' | 'rpm' | 'magSize' | 'reloadSpeedMs' | 'reloadSpeedFromEmptyMs'> = { category: WeaponCategory.MarksmanRifle, optimalRange: 60, dropOffEnd: 120, zeroDamageRange: 200, headshotMultiplier: 3.0, weaponBonusType: 'HeadshotDamage', weaponBonusValuePercent: 135 };
export const ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
  // M44 Family
  { ...commonMMR, family: 'M44', name: 'Custom M44', rpm: 50, magSize: 5, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3100, level40Dmg: 520000, level40MinDmg: 460000, wt5Dmg: 210000 },
  { ...commonMMR, family: 'M44', name: 'The White Death', rpm: 50, magSize: 5, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3100, level40Dmg: 520000, level40MinDmg: 460000, wt5Dmg: 210000, description: "Named Talent: Perfect Headhunter" },
  { ...commonMMR, family: 'M44', name: 'Oh Carol', rpm: 50, magSize: 5, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3100, level40Dmg: 520000, level40MinDmg: 460000, wt5Dmg: 210000, description: "Named Talent: Perfect Lucky Shot" },
  
  // SRS Family
  { ...commonMMR, family: 'SRS', name: 'SRS A1', rpm: 45, magSize: 7, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3300, level40Dmg: 550000, level40MinDmg: 490000, wt5Dmg: 220000 },
  { ...commonMMR, family: 'SRS', name: 'Mantis', rpm: 45, magSize: 7, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3300, level40Dmg: 580000, level40MinDmg: 510000, wt5Dmg: 235000, description: "Exotic Talent: In Plain Sight" },
  { ...commonMMR, family: 'SRS', name: 'Pinprick', rpm: 45, magSize: 7, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3300, level40Dmg: 550000, level40MinDmg: 490000, wt5Dmg: 220000, description: "Named Talent: Perfect First Blood" },

  // SVD Family
  { ...commonMMR, family: 'SVD', name: 'Paratrooper SVD', rpm: 260, magSize: 10, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 280000, level40MinDmg: 240000, wt5Dmg: 120000 },
  { ...commonMMR, family: 'SVD', name: 'Commando', rpm: 260, magSize: 10, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 280000, level40MinDmg: 240000, wt5Dmg: 120000, description: "Named Talent: Perfect Naked" },
  { ...commonMMR, family: 'SVD', name: 'Dread Edict', rpm: 260, magSize: 10, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 300000, level40MinDmg: 250000, wt5Dmg: 130000, description: "Exotic Talent: The Culling" },

  // M700 Family
  { ...commonMMR, family: 'M700', name: 'M700 Carbon', rpm: 55, magSize: 5, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 3000, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 200000 },
  { ...commonMMR, family: 'M700', name: 'M700 Tactical', rpm: 55, magSize: 7, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 3000, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 200000 },
  { ...commonMMR, family: 'M700', name: 'Ekim\'s Long Stick', rpm: 55, magSize: 7, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 3000, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 200000, description: "Named Talent: Perfect Ranger" },
  { ...commonMMR, family: 'M700', name: 'Brutus', rpm: 55, magSize: 7, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 3000, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 200000, description: "Named variant of M700" },

  // SR-1 Family
  { ...commonMMR, family: 'SR-1', name: 'SR-1', rpm: 200, magSize: 15, reloadSpeedMs: 2400, reloadSpeedFromEmptyMs: 2800, level40Dmg: 320000, level40MinDmg: 280000, wt5Dmg: 140000 },
  { ...commonMMR, family: 'SR-1', name: 'Adrestia SR-1', rpm: 200, magSize: 15, reloadSpeedMs: 2400, reloadSpeedFromEmptyMs: 2800, level40Dmg: 320000, level40MinDmg: 280000, wt5Dmg: 140000, description: "Named Talent: Perfect Synchronicity" },
  { ...commonMMR, family: 'SR-1', name: 'Designated Hitter', rpm: 200, magSize: 15, reloadSpeedMs: 2400, reloadSpeedFromEmptyMs: 2800, level40Dmg: 320000, level40MinDmg: 280000, wt5Dmg: 140000, description: "Named Talent: Perfect Boomerang" },

  // SOCOM Mk20 SSR Family
  { ...commonMMR, family: 'SOCOM Mk20 SSR', name: 'SOCOM Mk20 SSR', rpm: 275, magSize: 20, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3000, level40Dmg: 260000, level40MinDmg: 220000, wt5Dmg: 110000 },
  { ...commonMMR, family: 'SOCOM Mk20 SSR', name: 'The Darkness', rpm: 275, magSize: 20, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3000, level40Dmg: 260000, level40MinDmg: 220000, wt5Dmg: 110000, description: "Named Talent: Perfect Perpetuation" },

  // Tactical .308 Family
  { ...commonMMR, family: 'Tactical .308', name: 'Tactical .308', rpm: 60, magSize: 10, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 480000, level40MinDmg: 420000, wt5Dmg: 190000 },
  { ...commonMMR, family: 'Tactical .308', name: 'Scalpel', rpm: 60, magSize: 10, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 480000, level40MinDmg: 420000, wt5Dmg: 190000, description: "Named Talent: Perfect Future Shock" },

  // G28 Family
  { ...commonMMR, family: 'G28', name: 'G28', rpm: 275, magSize: 10, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 270000, level40MinDmg: 230000, wt5Dmg: 115000 },
  { ...commonMMR, family: 'G28', name: 'Relic', rpm: 275, magSize: 10, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 270000, level40MinDmg: 230000, wt5Dmg: 115000, description: "Named Talent: Perfect Headhunter" },
  { ...commonMMR, family: 'G28', name: 'Sacrum Imperium', rpm: 275, magSize: 10, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 290000, level40MinDmg: 245000, wt5Dmg: 125000, description: "Exotic Talent: The Traitor" },
  
  // Nemesis (Exotic)
  { ...commonMMR, family: 'Nemesis', name: 'Nemesis', rpm: 20, magSize: 5, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, level40Dmg: 800000, level40MinDmg: 700000, wt5Dmg: 350000, description: "Exotic Talent: Counter-Sniper" },
];

const commonRifle: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg' | 'rpm' | 'magSize'> = { category: WeaponCategory.Rifle, optimalRange: 32, dropOffEnd: 60, zeroDamageRange: 80, reloadSpeedMs: 2400, reloadSpeedFromEmptyMs: 2800, headshotMultiplier: 1.7, weaponBonusType: 'CriticalHitDamage', weaponBonusValuePercent: 10 };
export const ALL_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
    // 1886 Family
    { ...commonRifle, family: '1886', name: '1886', rpm: 100, magSize: 5, level40Dmg: 450000, level40MinDmg: 400000, wt5Dmg: 210000 },
    { ...commonRifle, family: '1886', name: 'The Virginian', rpm: 100, magSize: 5, level40Dmg: 450000, level40MinDmg: 400000, wt5Dmg: 210000, description: 'Named Talent: Perfect Boomerang' },
    { ...commonRifle, family: '1886', name: 'Diamondback', rpm: 100, magSize: 5, level40Dmg: 480000, level40MinDmg: 420000, wt5Dmg: 225000, description: 'Exotic Talent: Agonizing Bite' },

    // ACR SS Family
    { ...commonRifle, family: 'ACR SS', name: 'ACR SS', rpm: 320, magSize: 20, level40Dmg: 200000, level40MinDmg: 170000, wt5Dmg: 95000 },
    
    // LVOA-C Family
    { ...commonRifle, family: 'LVOA-C', name: 'LVOA-C', rpm: 400, magSize: 30, level40Dmg: 180000, level40MinDmg: 150000, wt5Dmg: 85000 },
    { ...commonRifle, family: 'LVOA-C', name: 'Lightweight M4', rpm: 420, magSize: 30, level40Dmg: 175000, level40MinDmg: 148000, wt5Dmg: 83000 },
    { ...commonRifle, family: 'LVOA-C', name: 'Surge', rpm: 400, magSize: 30, level40Dmg: 180000, level40MinDmg: 150000, wt5Dmg: 85000, description: 'Named Talent: Perfect Spike' },

    // M1A Family
    { ...commonRifle, family: 'M1A', name: 'Classic M1A', rpm: 300, magSize: 10, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 110000 },
    { ...commonRifle, family: 'M1A', name: 'SOCOM M1A', rpm: 320, magSize: 15, level40Dmg: 240000, level40MinDmg: 210000, wt5Dmg: 105000 },
    { ...commonRifle, family: 'M1A', name: "Baker's Dozen", rpm: 300, magSize: 10, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 110000, description: 'Named Talent: Perfect Lucky Shot' },
    { ...commonRifle, family: 'M1A', name: 'Stage Left', rpm: 300, magSize: 10, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 110000, description: 'Named Talent: Perfect Sighted' },
    { ...commonRifle, family: 'M1A', name: 'Doctor Home', rpm: 320, magSize: 15, level40Dmg: 240000, level40MinDmg: 210000, wt5Dmg: 105000, description: 'Exotic Talent: Doctor Home' },
    
    // M16A2 Family
    { ...commonRifle, family: 'M16A2', name: 'M16A2', rpm: 450, magSize: 30, level40Dmg: 160000, level40MinDmg: 135000, wt5Dmg: 80000, description: 'Burst Fire' },
    { ...commonRifle, family: 'M16A2', name: 'Whisper', rpm: 450, magSize: 30, level40Dmg: 160000, level40MinDmg: 135000, wt5Dmg: 80000, description: 'Named Talent: Perfect Focused' },

    // Merciless/Ruthless (Exotic)
    { ...commonRifle, family: 'Merciless', name: 'Merciless', rpm: 400, magSize: 30, level40Dmg: 190000, level40MinDmg: 160000, wt5Dmg: 90000, description: 'Exotic Talent: Binary Trigger' },
    { ...commonRifle, family: 'Merciless', name: 'Ruthless', rpm: 400, magSize: 30, level40Dmg: 190000, level40MinDmg: 160000, wt5Dmg: 90000, description: 'Exotic Talent: Binary Trigger (reskin)' },

    // Mk17 Family
    { ...commonRifle, family: 'Mk17', name: 'Police Mk17', rpm: 275, magSize: 20, level40Dmg: 260000, level40MinDmg: 230000, wt5Dmg: 115000 },
    { ...commonRifle, family: 'Mk17', name: 'Everlasting Gaze', rpm: 275, magSize: 20, level40Dmg: 260000, level40MinDmg: 230000, wt5Dmg: 115000, description: 'Named Talent: Perfect Perpetuation' },
    
    // Resolute Mk47 Family
    { ...commonRifle, family: 'Resolute Mk47', name: 'Resolute Mk47', rpm: 400, magSize: 30, level40Dmg: 170000, level40MinDmg: 145000, wt5Dmg: 82000, description: 'Burst Fire' },
    { ...commonRifle, family: 'Resolute Mk47', name: 'Harmony', rpm: 400, magSize: 30, level40Dmg: 170000, level40MinDmg: 145000, wt5Dmg: 82000, description: 'Named Talent: Perfectly In Sync' },

    // SIG 716 Family
    { ...commonRifle, family: 'SIG 716', name: 'SIG 716', rpm: 275, magSize: 20, level40Dmg: 255000, level40MinDmg: 225000, wt5Dmg: 112000 },
    { ...commonRifle, family: 'SIG 716', name: "Artist's Tool", rpm: 275, magSize: 20, level40Dmg: 255000, level40MinDmg: 225000, wt5Dmg: 112000, description: 'Named Talent: Perfect Ranger' },

    // The Ravenous (Exotic)
    { ...commonRifle, family: 'The Ravenous', name: 'The Ravenous', rpm: 200, magSize: 2, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 250000, description: 'Exotic Talent: Geri and Freki' },

    // UIC15 MOD2 Family
    { ...commonRifle, family: 'UIC15 MOD2', name: 'UIC15 MOD2', rpm: 350, magSize: 20, level40Dmg: 195000, level40MinDmg: 165000, wt5Dmg: 92000 },

    // Urban MDR Family
    { ...commonRifle, family: 'Urban MDR', name: 'Urban MDR', rpm: 350, magSize: 30, level40Dmg: 185000, level40MinDmg: 155000, wt5Dmg: 88000 },
    { ...commonRifle, family: 'Urban MDR', name: 'Vindicator', rpm: 350, magSize: 30, level40Dmg: 185000, level40MinDmg: 155000, wt5Dmg: 88000, description: 'Named Talent: Perfect Flatline' },

    // USC .45 ACP Family
    { ...commonRifle, family: 'USC .45 ACP', name: 'USC .45 ACP', rpm: 450, magSize: 20, level40Dmg: 150000, level40MinDmg: 125000, wt5Dmg: 75000 },
];
export const ALL_SHOTGUN_WEAPON_DATA_LIST: WeaponStats[] = [
  // ACS-12 Family
  { category: WeaponCategory.Shotgun, family: 'ACS-12', name: 'ACS-12', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 300, magSize: 20, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 180000, level40MinDmg: 150000, wt5Dmg: 80000 },
  { category: WeaponCategory.Shotgun, family: 'ACS-12', name: "Lefty", optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 300, magSize: 20, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 180000, level40MinDmg: 150000, wt5Dmg: 80000, description: "Named variant of ACS-12" },
  { category: WeaponCategory.Shotgun, family: 'ACS-12', name: "Rock n' Roll", optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 300, magSize: 30, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 180000, level40MinDmg: 150000, wt5Dmg: 80000, description: "Named Talent: Perfect Extra" },

  // Double Barrel Family
  { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Double Barrel Shotgun', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 200, magSize: 2, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 650000, level40MinDmg: 580000, wt5Dmg: 290000 },
  { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Boomstick', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 200, magSize: 2, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 650000, level40MinDmg: 580000, wt5Dmg: 290000, description: 'Named Talent: Perfect Rooted' },
  { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Double Barrel Sawed Off', optimalRange: 8, dropOffEnd: 15, zeroDamageRange: 30, rpm: 200, magSize: 2, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 700000, level40MinDmg: 620000, wt5Dmg: 310000 },
  { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Backup Boomstick', optimalRange: 8, dropOffEnd: 15, zeroDamageRange: 30, rpm: 200, magSize: 2, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 700000, level40MinDmg: 620000, wt5Dmg: 310000, description: 'Named variant of Sawed Off' },
  { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Firestarter', optimalRange: 8, dropOffEnd: 15, zeroDamageRange: 30, rpm: 200, magSize: 2, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 700000, level40MinDmg: 620000, wt5Dmg: 310000, description: 'Named variant of Sawed Off' },

  // KSG Family
  { category: WeaponCategory.Shotgun, family: 'KSG', name: 'KSG', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 80, magSize: 12, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 550000, level40MinDmg: 490000, wt5Dmg: 240000 },
  { category: WeaponCategory.Shotgun, family: 'KSG', name: 'Overlord', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 80, magSize: 12, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 550000, level40MinDmg: 490000, wt5Dmg: 240000, description: "Named variant of KSG" },
  { category: WeaponCategory.Shotgun, family: 'KSG', name: 'The Send-Off', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 80, magSize: 12, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 550000, level40MinDmg: 490000, wt5Dmg: 240000, description: 'Named Talent: Perfect Rooted' },

  // M870 Family
  { category: WeaponCategory.Shotgun, family: 'M870', name: 'M870 Express', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 70, magSize: 5, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 600000, level40MinDmg: 550000, wt5Dmg: 250000 },
  { category: WeaponCategory.Shotgun, family: 'M870', name: 'Cuelebre', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 70, magSize: 5, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 600000, level40MinDmg: 550000, wt5Dmg: 250000, description: 'Named Talent: Perfect Ignited' },

  // SASG-12 Family
  { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'SASG-12', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 180, magSize: 7, reloadSpeedMs: 3200, reloadSpeedFromEmptyMs: 3600, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 350000, level40MinDmg: 300000, wt5Dmg: 150000 },
  { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'Tsunami', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 180, magSize: 7, reloadSpeedMs: 3200, reloadSpeedFromEmptyMs: 3600, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 350000, level40MinDmg: 300000, wt5Dmg: 150000, description: 'Named Talent: Perfect Pummel' },

  // SIX12 Family
  { category: WeaponCategory.Shotgun, family: 'SIX12', name: 'SIX12', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 200, magSize: 6, reloadSpeedMs: 2900, reloadSpeedFromEmptyMs: 3300, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 380000, level40MinDmg: 330000, wt5Dmg: 160000 },
  { category: WeaponCategory.Shotgun, family: 'SIX12', name: 'The Mop', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 200, magSize: 6, reloadSpeedMs: 2900, reloadSpeedFromEmptyMs: 3300, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 380000, level40MinDmg: 330000, wt5Dmg: 160000, description: 'Named Talent: Perfect Preservation' },
  { category: WeaponCategory.Shotgun, family: 'SIX12', name: 'Scorpio', optimalRange: 12, dropOffEnd: 22, zeroDamageRange: 40, rpm: 130, magSize: 7, reloadSpeedMs: 2900, reloadSpeedFromEmptyMs: 3300, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 400000, level40MinDmg: 350000, wt5Dmg: 180000, description: 'Exotic Talent: Septic Shock' },

  // SPAS-12 Family
  { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'SPAS-12', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 160, magSize: 8, reloadSpeedMs: 3800, reloadSpeedFromEmptyMs: 4200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 420000, level40MinDmg: 370000, wt5Dmg: 190000 },
  { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'Thorn', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 160, magSize: 8, reloadSpeedMs: 3800, reloadSpeedFromEmptyMs: 4200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 420000, level40MinDmg: 370000, wt5Dmg: 190000, description: 'Named variant of SPAS-12' },
  { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'Sweet Dreams', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 100, magSize: 8, reloadSpeedMs: 3800, reloadSpeedFromEmptyMs: 4200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 450000, level40MinDmg: 400000, wt5Dmg: 210000, description: 'Exotic Talent: Sandman' },
  { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'The Lullaby', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 100, magSize: 8, reloadSpeedMs: 3800, reloadSpeedFromEmptyMs: 4200, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 450000, level40MinDmg: 400000, wt5Dmg: 210000, description: 'Exotic Talent: Evasive (reskin)' },

  // Super 90 Family
  { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Super 90', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 160, magSize: 8, reloadSpeedMs: 3700, reloadSpeedFromEmptyMs: 4100, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 400000, level40MinDmg: 350000, wt5Dmg: 180000 },
  { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Enforcer', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 160, magSize: 8, reloadSpeedMs: 3700, reloadSpeedFromEmptyMs: 4100, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 400000, level40MinDmg: 350000, wt5Dmg: 180000, description: 'Named variant of Super 90' },
  { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Like Glue', optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 40, rpm: 160, magSize: 8, reloadSpeedMs: 3700, reloadSpeedFromEmptyMs: 4100, headshotMultiplier: 1.2, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 400000, level40MinDmg: 350000, wt5Dmg: 180000, description: 'Named Talent: Perfect Stabilize' },
];

const commonPistol: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg' | 'rpm' | 'magSize' | 'reloadSpeedMs' | 'reloadSpeedFromEmptyMs'> = { category: WeaponCategory.Pistol, optimalRange: 15, dropOffEnd: 30, zeroDamageRange: 50, headshotMultiplier: 1.3, weaponBonusType: 'DamageToHealth', weaponBonusValuePercent: 10 };
export const ALL_PISTOL_WEAPON_DATA_LIST: WeaponStats[] = [
  // 686 Magnum Family
  { ...commonPistol, family: '686 Magnum', name: '686 Magnum', rpm: 150, magSize: 6, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2500, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 120000 },
  { ...commonPistol, family: '686 Magnum', name: 'The Harvest', rpm: 150, magSize: 6, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2500, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 120000, description: "Named variant of 686 Magnum" },
  { ...commonPistol, family: '686 Magnum', name: 'Orbit', rpm: 150, magSize: 6, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2500, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 120000, description: "Named Talent: Perfect Finisher" },
  { ...commonPistol, family: '686 Magnum', name: 'Prophet', rpm: 150, magSize: 6, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2500, level40Dmg: 250000, level40MinDmg: 220000, wt5Dmg: 120000, description: "Named Talent: Perfectly Determined" },
  { ...commonPistol, family: '686 Magnum', name: 'Regulus', rpm: 150, magSize: 6, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2500, level40Dmg: 280000, level40MinDmg: 250000, wt5Dmg: 140000, description: "Exotic Talent: Regicide" },

  // 93R Family
  { ...commonPistol, family: '93R', name: '93R', rpm: 900, magSize: 20, reloadSpeedMs: 1800, reloadSpeedFromEmptyMs: 2100, level40Dmg: 60000, level40MinDmg: 50000, wt5Dmg: 28000, description: "Burst fire" },
  { ...commonPistol, family: '93R', name: 'Sharpshooter 93R', rpm: 900, magSize: 20, reloadSpeedMs: 1800, reloadSpeedFromEmptyMs: 2100, level40Dmg: 60000, level40MinDmg: 50000, wt5Dmg: 28000, description: "Sharpshooter Specialization Sidearm" },
  
  // D50 Family
  { ...commonPistol, family: 'D50', name: 'D50', rpm: 150, magSize: 8, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2600, level40Dmg: 280000, level40MinDmg: 250000, wt5Dmg: 135000 },
  { ...commonPistol, family: 'D50', name: 'Liberty', rpm: 150, magSize: 8, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2600, level40Dmg: 300000, level40MinDmg: 260000, wt5Dmg: 145000, description: "Exotic Talent: Liberty or Death" },
  { ...commonPistol, family: 'D50', name: 'Survivalist D50', rpm: 150, magSize: 8, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2600, level40Dmg: 280000, level40MinDmg: 250000, wt5Dmg: 135000, description: "Survivalist Specialization Sidearm" },

  // Diceros Family
  { ...commonPistol, family: 'Diceros', name: 'Diceros', rpm: 160, magSize: 6, reloadSpeedMs: 2100, reloadSpeedFromEmptyMs: 2400, level40Dmg: 240000, level40MinDmg: 210000, wt5Dmg: 115000 },
  { ...commonPistol, family: 'Diceros', name: 'Diceros Special', rpm: 160, magSize: 6, reloadSpeedMs: 2100, reloadSpeedFromEmptyMs: 2400, level40Dmg: 240000, level40MinDmg: 210000, wt5Dmg: 115000, description: "Technician Specialization Sidearm" },
  
  // KARD Family
  { ...commonPistol, family: 'KARD', name: 'KARD-45', rpm: 350, magSize: 10, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 38000 },
  { ...commonPistol, family: 'KARD', name: 'TDI "Kard" Custom', rpm: 350, magSize: 10, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 38000, description: "Named Talent: Perfect Future Shock" },

  // M9 Family
  { ...commonPistol, family: 'M9', name: 'M9', rpm: 350, magSize: 15, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 75000, level40MinDmg: 65000, wt5Dmg: 34000 },
  { ...commonPistol, family: 'M9', name: 'Mosquito', rpm: 350, magSize: 15, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 75000, level40MinDmg: 65000, wt5Dmg: 34000, description: "Named variant of M9" },
  
  // M1911 Family
  { ...commonPistol, family: 'M1911', name: 'M1911', rpm: 300, magSize: 7, reloadSpeedMs: 1500, reloadSpeedFromEmptyMs: 1800, level40Dmg: 80000, level40MinDmg: 70000, wt5Dmg: 35000 },
  { ...commonPistol, family: 'M1911', name: 'Mozambique Special', rpm: 300, magSize: 7, reloadSpeedMs: 1500, reloadSpeedFromEmptyMs: 1800, level40Dmg: 80000, level40MinDmg: 70000, wt5Dmg: 35000, description: "Demolitionist Specialization Sidearm" },
  
  // Maxim 9 Family
  { ...commonPistol, family: 'Maxim 9', name: 'Maxim 9', rpm: 400, magSize: 12, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, level40Dmg: 78000, level40MinDmg: 68000, wt5Dmg: 35000 },

  // P320 XCompact
  { ...commonPistol, family: 'P320 XCompact', name: 'P320 XCompact', rpm: 400, magSize: 15, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, level40Dmg: 76000, level40MinDmg: 66000, wt5Dmg: 34500 },
  
  // PF45 Family
  { ...commonPistol, family: 'PF45', name: 'PF45', rpm: 400, magSize: 12, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 82000, level40MinDmg: 71000, wt5Dmg: 36000 },
  { ...commonPistol, family: 'PF45', name: 'Lightning Rod', rpm: 400, magSize: 12, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 82000, level40MinDmg: 71000, wt5Dmg: 36000, description: "Named variant of PF45" },
  { ...commonPistol, family: 'PF45', name: 'Busy Little Bee', rpm: 400, magSize: 12, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 88000, level40MinDmg: 76000, wt5Dmg: 39000, description: "Exotic Talent: Busy Little Bee" },
  
  // Px4 Storm Family
  { ...commonPistol, family: 'Px4 Storm', name: 'Px4 Storm Type T', rpm: 380, magSize: 17, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, level40Dmg: 72000, level40MinDmg: 62000, wt5Dmg: 33000 },
  
  // X-45 Family
  { ...commonPistol, family: 'X-45', name: 'X-45', rpm: 420, magSize: 10, reloadSpeedMs: 1600, reloadSpeedFromEmptyMs: 1900, level40Dmg: 79000, level40MinDmg: 69000, wt5Dmg: 35500 },
];

const commonSMG: Omit<WeaponStats, 'family' | 'name' | 'level40Dmg' | 'level40MinDmg' | 'wt5Dmg' | 'rpm' | 'magSize' | 'reloadSpeedMs' | 'reloadSpeedFromEmptyMs'> = { category: WeaponCategory.SubmachineGun, optimalRange: 15, dropOffEnd: 25, zeroDamageRange: 50, headshotMultiplier: 1.25, weaponBonusType: 'CriticalHitChance', weaponBonusValuePercent: 21 };
export const ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST: WeaponStats[] = [
    // AUG A3 Family
    { ...commonSMG, family: 'AUG A3', name: 'AUG A3 Para XS', rpm: 700, magSize: 25, reloadSpeedMs: 2100, reloadSpeedFromEmptyMs: 2500, level40Dmg: 92000, level40MinDmg: 78000, wt5Dmg: 38000 },

    // CMMG Banshee Family
    { ...commonSMG, family: 'CMMG Banshee', name: 'CMMG Banshee', rpm: 900, magSize: 32, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 88000, level40MinDmg: 74000, wt5Dmg: 36000 },
    { ...commonSMG, family: 'CMMG Banshee', name: 'The Grudge', rpm: 900, magSize: 32, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 88000, level40MinDmg: 74000, wt5Dmg: 36000, description: "Named Talent: Perfect Vindictive" },
    { ...commonSMG, family: 'CMMG Banshee', name: 'Lady Death', rpm: 900, magSize: 32, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 95000, level40MinDmg: 80000, wt5Dmg: 40000, description: "Exotic Talent: Breathe Free" },

    // M1928 / Tommy Gun Family
    { ...commonSMG, family: 'M1928', name: 'M1928', rpm: 800, magSize: 50, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, level40Dmg: 90000, level40MinDmg: 76000, wt5Dmg: 37000 },
    { ...commonSMG, family: 'M1928', name: 'Grown Great', rpm: 800, magSize: 50, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, level40Dmg: 90000, level40MinDmg: 76000, wt5Dmg: 37000, description: "Named variant of M1928" },
    { ...commonSMG, family: 'M1928', name: 'The Sleigher', rpm: 800, magSize: 50, reloadSpeedMs: 2800, reloadSpeedFromEmptyMs: 3200, level40Dmg: 90000, level40MinDmg: 76000, wt5Dmg: 37000, description: "Named variant of M1928" },

    // MP5 Family
    { ...commonSMG, family: 'MP5', name: 'MP5 ST', rpm: 800, magSize: 32, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2600, level40Dmg: 89000, level40MinDmg: 75000, wt5Dmg: 36500 },
    { ...commonSMG, family: 'MP5', name: 'Cabaret', rpm: 800, magSize: 32, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2600, level40Dmg: 89000, level40MinDmg: 75000, wt5Dmg: 36500, description: "Named Talent: Perfect Measured" },
    
    // MP7 Family
    { ...commonSMG, family: 'MP7', name: 'MP7', rpm: 950, magSize: 40, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 35000 },
    { ...commonSMG, family: 'MP7', name: 'Swap Chain', rpm: 950, magSize: 40, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 35000, description: "Named Talent: Perfect Unwavering" },
    { ...commonSMG, family: 'MP7', name: 'Oxpecker', rpm: 950, magSize: 40, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 35000, description: "Named variant of MP7" },

    // MPX Family
    { ...commonSMG, family: 'MPX', name: 'MPX', rpm: 850, magSize: 30, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 87000, level40MinDmg: 73000, wt5Dmg: 35500 },
    { ...commonSMG, family: 'MPX', name: 'Backfire', rpm: 850, magSize: 50, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 94000, level40MinDmg: 79000, wt5Dmg: 39000, description: "Exotic Talent: Payment in Kind" },
    { ...commonSMG, family: 'MPX', name: 'The Apartment', rpm: 850, magSize: 30, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 87000, level40MinDmg: 73000, wt5Dmg: 35500, description: "Named Talent: Perfect Measured" },
    { ...commonSMG, family: 'MPX', name: 'Safety Distance', rpm: 850, magSize: 30, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2400, level40Dmg: 87000, level40MinDmg: 73000, wt5Dmg: 35500, description: "Named Talent: Perfect Outsider" },

    // P90 Family
    { ...commonSMG, family: 'P90', name: 'P90', rpm: 850, magSize: 50, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3000, level40Dmg: 86000, level40MinDmg: 72000, wt5Dmg: 35000 },
    { ...commonSMG, family: 'P90', name: 'The Chatterbox', rpm: 850, magSize: 60, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3000, level40Dmg: 90000, level40MinDmg: 76000, wt5Dmg: 37000, description: "Exotic Talent: Incessant Chatter" },
    { ...commonSMG, family: 'P90', name: "Emeline's Guard", rpm: 850, magSize: 50, reloadSpeedMs: 2600, reloadSpeedFromEmptyMs: 3000, level40Dmg: 86000, level40MinDmg: 72000, wt5Dmg: 35000, description: "Named Talent: Perfect Preservation" },

    // PP-19 Family
    { ...commonSMG, family: 'PP-19', name: 'PP-19', rpm: 700, magSize: 53, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 93000, level40MinDmg: 79000, wt5Dmg: 38500 },
    { ...commonSMG, family: 'PP-19', name: 'Cold Relations', rpm: 700, magSize: 53, reloadSpeedMs: 2300, reloadSpeedFromEmptyMs: 2700, level40Dmg: 93000, level40MinDmg: 79000, wt5Dmg: 38500, description: "Named Talent: Perfect Strained" },

    // SMG-9 Family
    { ...commonSMG, family: 'SMG-9', name: 'SMG-9', rpm: 825, magSize: 32, reloadSpeedMs: 1900, reloadSpeedFromEmptyMs: 2300, level40Dmg: 88000, level40MinDmg: 74000, wt5Dmg: 36000 },
    
    // T821 Family
    { ...commonSMG, family: 'T821', name: 'T821', rpm: 650, magSize: 32, reloadSpeedMs: 2400, reloadSpeedFromEmptyMs: 2800, level40Dmg: 96000, level40MinDmg: 81000, wt5Dmg: 40000 },
    
    // UMP-45 Family
    { ...commonSMG, family: 'UMP-45', name: 'Police UMP-45', rpm: 600, magSize: 25, reloadSpeedMs: 2500, reloadSpeedFromEmptyMs: 2900, level40Dmg: 98000, level40MinDmg: 83000, wt5Dmg: 41000 },
    
    // Vector Family
    { ...commonSMG, family: 'Vector', name: 'Vector SBR .45 ACP', rpm: 1200, magSize: 25, reloadSpeedMs: 1800, reloadSpeedFromEmptyMs: 2100, level40Dmg: 82000, level40MinDmg: 69000, wt5Dmg: 34000 },
    { ...commonSMG, family: 'Vector', name: 'Dark Winter', rpm: 1200, magSize: 40, reloadSpeedMs: 1800, reloadSpeedFromEmptyMs: 2100, level40Dmg: 82000, level40MinDmg: 69000, wt5Dmg: 34000, description: "Named Talent: Perfect Killer" },
    { ...commonSMG, family: 'Vector', name: 'Ouroboros', rpm: 1500, magSize: 50, reloadSpeedMs: 1800, reloadSpeedFromEmptyMs: 2100, level40Dmg: 85000, level40MinDmg: 72000, wt5Dmg: 35000, description: "Exotic Talent: Rule Them All" },
];

export const SPECIALIZATIONS_DATA: Record<SpecializationId, SpecializationData> = {
  sharpshooter: {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    signatureWeapon: 'TAC-50 C Rifle',
    bonuses: [
      { description: '+15% Headshot Damage', statEffect: { stat: 'headshotDamage', value: 15 } },
      { description: 'Group members gain +10% headshot damage when they are closer to your target than you are.' },
      { description: 'Immunity to flashbangs and concussion grenades.' },
    ],
    skillVariants: ['Tactician Drone'],
    description: 'A specialization for marksmen who can change the tide of a battle from a safe distance.'
  },
  demolitionist: {
    id: 'demolitionist',
    name: 'Demolitionist',
    signatureWeapon: 'M32A1 Multi-shot Grenade Launcher',
    bonuses: [
      { description: '+15% Explosive Damage', statEffect: { stat: 'explosiveDamage', value: 15 } },
      { description: 'Grants a grenade every 60 seconds.' },
      { description: 'Grants +5% damage to targets out of cover for the group.' },
    ],
    skillVariants: ['Artillery Turret'],
    description: 'A specialist in chaos, the Demolitionist focuses on disrupting enemy plans and entrenched positions using a signature grenade launcher.'
  },
  technician: {
    id: 'technician',
    name: 'Technician',
    signatureWeapon: 'P-017 Launcher',
    bonuses: [
      { description: '+1 Skill Tier' , statEffect: { stat: 'skillTiers', value: 1 }},
      { description: '+15% Skill Damage', statEffect: { stat: 'skillDamage', value: 15 } },
      { description: 'Immunity to shock and disruption.' },
    ],
    skillVariants: ['Artificer Hive'],
    description: 'A specialist who excels at deploying and enhancing skills on the battlefield.'
  },
   firewall: {
    id: 'firewall',
    name: 'Firewall',
    signatureWeapon: 'K8-JetStream Flamethrower',
    bonuses: [
        { description: '+10% Burn Duration', statEffect: {stat: 'statusEffects', value: 10}}, // Approximated
        { description: '+10% Health on Kill', statEffect: {stat: 'healthOnKill', value: 10, isPercentage: true}},
        { description: 'Gain +10% damage to enemies within 10m.'}
    ],
    skillVariants: ['Striker Shield'],
    description: 'A close-quarters specialist that uses a flamethrower to burn enemies and control the battlefield.'
  },
};
export const ALL_SPECIALIZATIONS_LIST = Object.values(SPECIALIZATIONS_DATA);


export const INITIAL_CALCULATED_STATS: CalculatedStats = {
  // Brand/Set Info
  brandSetBonuses: [],
  gearSetInfo: [],
  activeWeaponTalents: [],
  specializationBonuses: [],

  // Core Combat Stats
  weaponDamageBonus: 0,
  criticalHitChance: 5, // Base 5%
  criticalHitDamage: 25, // Base 25%
  headshotDamage: 0,
  damageToArmor: 0,
  damageToHealth: 0,
  damageToTargetsOutOfCover: 0,

  // Defensive Stats
  armor: 726000, // Approximate base armor for a Lvl 40 character with no bonuses
  health: 250000, // Approximate base health
  armorRegen: 0,
  armorOnKill: 0,
  healthOnKill: 0,
  protectionFromElites: 0,
  hazardProtection: 0,
  incomingRepairs: 0,
  
  // Resistance Stats
  explosiveResistance: 0,
  disruptResistance: 0,
  pulseResistance: 0,
  bleedResistance: 0,
  blindDeafResistance: 0,
  burnResistance: 0,
  disorientResistance: 0,
  ensnareResistance: 0,
  shockResistance: 0,
  
  // Global Skill Stats
  skillTiers: 0,
  skillDamage: 0,
  skillHaste: 0,
  skillRepair: 0,
  skillDuration: 0,
  statusEffects: 0,
  explosiveDamage: 0,

  // Utility & Weapon Stats
  reloadSpeed: 0,
  ammoCapacity: 0,
  magazineSize: 0,
  weaponHandling: 0,
  rateOfFire: 0,
  
  // Specialization
  signatureWeaponDamage: 0,

  // Weapon-specific Damage
  marksmanRifleDamage: 0,
  smgDamage: 0,
  shotgunDamage: 0,
  rifleDamage: 0, 
  lmgDamage: 0, 
  pistolDamage: 0, 
  
  // --- Skill Platform Specific Stats ---
  pulseConeSize: 0,
  pulseRadius: 0,
  pulseEffectDuration: 0,
  pulseHealth: 0,
  pulseSkillHaste: 0,
  pulseCharges: 0,

  turretDamage: 0,
  turretDuration: 0,
  turretHealth: 0,
  turretAmmo: 0,

  hiveDamage: 0,
  hiveHealing: 0,
  hiveRevivedArmor: 0,
  hiveStimEfficiency: 0,
  hiveRadius: 0,
  hiveRepairCharges: 0,
  hiveStimCharges: 0,
  hiveStingerCharges: 0,
  hiveDuration: 0,
  hiveHealth: 0,

  chemLauncherBurnStrength: 0,
  chemLauncherDamage: 0,
  chemLauncherEnsnareHealth: 0,
  chemLauncherEnsnareDuration: 0,
  chemLauncherHeal: 0,
  chemLauncherAmmo: 0,
  chemLauncherDuration: 0,
  chemLauncherRadius: 0,
  chemLauncherSkillHaste: 0,

  fireflyBlindEffectDuration: 0,
  fireflyDamage: 0,
  fireflySpeed: 0,
  fireflySkillHaste: 0,
  fireflyMaxTargets: 0,
  fireflyHealth: 0,

  seekerMineDamage: 0,
  seekerMineRadius: 0,
  seekerMineSkillHaste: 0,
  seekerMineHealing: 0,
  seekerMineClusterMines: 0,
  seekerMineHealth: 0,
  seekerMineDuration: 0,

  droneArmorRepair: 0,
  droneDamage: 0,
  droneDuration: 0,
  droneHealth: 0,
  droneSkillHaste: 0,
  droneDamageReduction: 0,
  droneExtraBombs: 0,
  droneScanRange: 0,

  shieldDamageBonusPerEnemy: 0,
  shieldDeflectorDamage: 0,
  shieldHolsteredRegeneration: 0,
  shieldHealth: 0,
  shieldActiveRegeneration: 0,

  stickyBombDamage: 0,
  stickyBombEffectDuration: 0,
  stickyBombRadius: 0,
  stickyBombAmmo: 0,

  decoyHealth: 0,
  decoyDuration: 0,
  decoyDeflectDuration: 0,
  decoySkillHaste: 0,

  trapHealth: 0,
  trapEffectDuration: 0,
  trapRadius: 0,
  trapCharges: 0,

  // --- Temporary Calculation fields ---
  totalArmorBonus: 0,
};
