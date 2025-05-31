
import { GearSlotId, GearSlotConfig, BrandData, BrandId, AttributeData, CoreAttributeId, MinorAttributeId, TalentData, TalentId, Loadout, CalculatedStats, GearSetData, GearSetId, CalculatedStatsBase, NamedItemInfo, GearModType, GearModData, GearModTypeData, SelectedModSlot, SkillNameId, SkillDefinition, SkillModSlotDefinition, SkillModOptionData, SelectedSkillState, SelectedSkillMod, WeaponStats, WeaponCategory, WeaponSlotId, WeaponSlotConfig, SelectedWeaponState, WeaponAttachmentCategory, WeaponAttachmentSlotDefinition, WeaponAttachmentOptionData, WeaponAttachmentOptionId, SelectedWeaponAttachment, SelectedGearPiece, ActiveSetInfo, SelectedModSlot as GearSelectedModSlot, SkillModOptionEffect, CalculatedStats as AppCalculatedStats, WeaponTalentData, WeaponTalentId, GearModId, ActiveWeaponTalentInfo } from './types';

export const GEAR_SLOTS_CONFIG: GearSlotConfig[] = [
  { id: GearSlotId.Mask, name: 'Mask', canHaveTalent: false, maxModSlots: 1 },
  { id: GearSlotId.Chest, name: 'Chest Armor', canHaveTalent: true, maxModSlots: 1 },
  { id: GearSlotId.Holster, name: 'Holster', canHaveTalent: false, maxModSlots: 1 },
  { id: GearSlotId.Backpack, name: 'Backpack', canHaveTalent: true, maxModSlots: 1 },
  { id: GearSlotId.Gloves, name: 'Gloves', canHaveTalent: false, maxModSlots: 1 },
  { id: GearSlotId.Kneepads, name: 'Kneepads', canHaveTalent: false, maxModSlots: 1 },
];

export const WEAPON_SLOTS_CONFIG: WeaponSlotConfig[] = [
  { id: WeaponSlotId.Primary, name: 'Primary Weapon', supportedCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.MarksmanRifle, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.SubmachineGun] },
  { id: WeaponSlotId.Secondary, name: 'Secondary Weapon', supportedCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.MarksmanRifle, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.SubmachineGun] },
  { id: WeaponSlotId.Sidearm, name: 'Sidearm', supportedCategories: [WeaponCategory.Pistol] },
];

export const BRANDS_DATA: Record<BrandId, BrandData> = {
  fiveElevenTactical: {
    id: 'fiveElevenTactical', name: '5.11 Tactical', bonuses: [
      { pieces: 1, description: '10% Health' },
      { pieces: 2, description: '20% Extra Incoming Healing' },
      { pieces: 3, description: '10% Hazard Protection' },
    ]
  },
  airaldiHoldings: {
    id: 'airaldiHoldings', name: 'Airaldi Holdings', bonuses: [
      { pieces: 1, description: '10% Marksman Rifle Damage' },
      { pieces: 2, description: '15% Headshot Damage' },
      { pieces: 3, description: '5% Damage to Armor' },
    ]
  },
  alpsSummitArmaments: {
    id: 'alpsSummitArmaments', name: 'Alps Summit Armaments', bonuses: [
      { pieces: 1, description: '20% Skill Repair' },
      { pieces: 2, description: '20% Skill Duration' },
      { pieces: 3, description: '10% Cooldown Reduction' }, 
    ]
  },
  badgerTuff: {
    id: 'badgerTuff', name: 'Badger Tuff', bonuses: [
      { pieces: 1, description: '10% Shotgun Damage' },
      { pieces: 2, description: '5% Total Armor' },
      { pieces: 3, description: '10% Armor on Kill' },
    ]
  },
  belstoneArmory: {
    id: 'belstoneArmory', name: 'Belstone Armory', bonuses: [
      { pieces: 1, description: '1% Armor Regen' },
      { pieces: 2, description: '10% Armor on Kill' },
      { pieces: 3, description: '20% incoming repairs' }, 
    ]
  },
  brazosDeArcabuz: {
    id: 'brazosDeArcabuz', name: 'Brazos de Arcabuz', bonuses: [
      { pieces: 1, description: '10% Skill Haste' },
      { pieces: 2, description: '1 Skill Tier' },
      { pieces: 3, description: '20% Magazine Size' },
    ]
  },
  ceskaVyroba: {
    id: 'ceskaVyroba', name: 'Česká Výroba s.r.o.', bonuses: [
      { pieces: 1, description: '10% Critical Hit Chance' },
      { pieces: 2, description: '10% Hazard Protection' },
      { pieces: 3, description: '10% Health' },
    ]
  },
  chinaLightIndustries: {
    id: 'chinaLightIndustries', name: 'China Light Industries Corporation', bonuses: [
      { pieces: 1, description: '15% Explosive Damage' }, 
      { pieces: 2, description: '10% Cooldown Reduction' },
      { pieces: 3, description: '10% Status Effects' },
    ]
  },
  douglasAndHarding: {
    id: 'douglasAndHarding', name: 'Douglas & Harding', bonuses: [
      { pieces: 1, description: '20% Pistol Damage' }, 
      { pieces: 2, description: '20% Stability' }, 
      { pieces: 3, description: '20% Accuracy' }, 
    ]
  },
  electrique: {
    id: 'electrique', name: 'Electrique', bonuses: [
      { pieces: 1, description: '10% Status effect Damage' }, 
      { pieces: 2, description: '20% Electricity Protection' }, 
      { pieces: 3, description: '10% SMG Damage' },
    ]
  },
  empressInternational: {
    id: 'empressInternational', name: 'Empress International', bonuses: [
      { pieces: 1, description: '10% Skill Health' }, 
      { pieces: 2, description: '10% Skill Damage' },
      { pieces: 3, description: '10% Skill Efficiency' }, 
    ]
  },
  fenrisGroup: {
    id: 'fenrisGroup', name: 'Fenris Group AB', bonuses: [
      { pieces: 1, description: '10% Assault Rifle Damage' }, 
      { pieces: 2, description: '20% Reload Speed' },
      { pieces: 3, description: '20% Stability' },
    ]
  },
  gilaGuard: {
    id: 'gilaGuard', name: 'Gila Guard', bonuses: [
      { pieces: 1, description: '5% Total Armor' },
      { pieces: 2, description: '10% Health' },
      { pieces: 3, description: '1% Armor / sec Regeneration' },
    ]
  },
  golanGearLtd: {
    id: 'golanGearLtd', name: 'Golan Gear Ltd', bonuses: [
      { pieces: 1, description: '10% Status Effects' },
      { pieces: 2, description: '1% Armor / sec Regeneration' },
      { pieces: 3, description: '5% Total Armor' },
    ]
  },
  grupoSombra: {
    id: 'grupoSombra', name: 'Grupo Sombra S.A.', bonuses: [
      { pieces: 1, description: '15% Critical Hit Damage' },
      { pieces: 2, description: '15% Explosive Damage' },
      { pieces: 3, description: '15% Headshot Damage' },
    ]
  },
  habsburgGuard: {
    id: 'habsburgGuard', name: 'Habsburg Guard', bonuses: [
      { pieces: 1, description: '15% Headshot Damage' },
      { pieces: 2, description: '15% Marksman Rifle Damage' },
      { pieces: 3, description: '10% Status Effect' }, 
    ]
  },
  hanaU: {
    id: 'hanaU', name: 'Hana-U Corporation', bonuses: [
      { pieces: 1, description: '10% Cooldown Reduction' },
      { pieces: 2, description: '10% Skill Damage' },
      { pieces: 3, description: '5% Weapon Damage' },
    ]
  },
  imminenceArmaments: { 
    id: 'imminenceArmaments', name: 'Imminence Armaments', bonuses: [
      { pieces: 1, description: '+5% Weapon Damage' },
      { pieces: 2, description: '+100% Increased Threat' },
      { pieces: 3, description: '+60% Pistol Damage' },
    ]
  },
  legatusSPA: {
    id: 'legatusSPA', name: 'Legatus S.p.A.', bonuses: [
      { pieces: 1, description: '30% Swap Speed' }, 
      { pieces: 2, description: '70% Optimal Range' }, 
      { pieces: 3, description: '15% Weapon Damage' },
    ]
  },
  lengmo: {
    id: 'lengmo', name: 'Lengmo', bonuses: [
      { pieces: 1, description: '20% Explosive resistance' }, 
      { pieces: 2, description: '20% Skill Health' },
      { pieces: 3, description: '30% LMG Damage' }, 
    ]
  },
  murakamiIndustries: {
    id: 'murakamiIndustries', name: 'Murakami Industries', bonuses: [
      { pieces: 1, description: '20% Skill Duration' },
      { pieces: 2, description: '20% Skill Repair' },
      { pieces: 3, description: '10% Skill Damage' },
    ]
  },
  overlordArmaments: {
    id: 'overlordArmaments', name: 'Overlord Armaments', bonuses: [
      { pieces: 1, description: '10% Rifle Damage' }, 
      { pieces: 2, description: '20% Accuracy' },
      { pieces: 3, description: '10% Weapon Handling' },
    ]
  },
  palisadeSteelworks: {
    id: 'palisadeSteelworks', name: 'Palisade Steelworks', bonuses: [
      { pieces: 1, description: '10% Armor on Kill' },
      { pieces: 2, description: '60% Health' },
      { pieces: 3, description: '1 Skill Tier' },
    ]
  },
  petrovDefenseGroup: {
    id: 'petrovDefenseGroup', name: 'Petrov Defense Group', bonuses: [
      { pieces: 1, description: '10% LMG Damage' },
      { pieces: 2, description: '10% Weapon Handling' },
      { pieces: 3, description: '20% Ammo Capacity' },
    ]
  },
  providenceDefense: {
    id: 'providenceDefense', name: 'Providence Defense', bonuses: [
      { pieces: 1, description: '15% Headshot Damage' },
      { pieces: 2, description: '10% Critical Hit Chance' },
      { pieces: 3, description: '15% Critical Hit Damage' },
    ]
  },
  richterAndKaiser: {
    id: 'richterAndKaiser', name: 'Richter & Kaiser GmbH', bonuses: [
      { pieces: 1, description: '20% Extra Incoming Healing' },
      { pieces: 2, description: '10% Explosive Resistance' },
      { pieces: 3, description: '20% Skill Repair' },
    ]
  },
  sokolovConcern: {
    id: 'sokolovConcern', name: 'Sokolov Concern', bonuses: [
      { pieces: 1, description: '10% SMG Damage' },
      { pieces: 2, description: '15% Critical Hit Damage' },
      { pieces: 3, description: '10% Critical Hit Chance' },
    ]
  },
  uzinaGetica: {
    id: 'uzinaGetica', name: 'Uzina Getica', bonuses: [
      { pieces: 1, description: '5% Total Armor' },
      { pieces: 2, description: '10% Armor on kill' },
      { pieces: 3, description: '10% Hazard protection' },
    ]
  },
  walkerHarris: {
    id: 'walkerHarris', name: 'Walker, Harris & Co.', bonuses: [
      { pieces: 1, description: '5% Weapon Damage' },
      { pieces: 2, description: '5% Damage to Armor' }, 
      { pieces: 3, description: '5% Damage to Health' }, 
    ]
  },
  wyvernWear: {
    id: 'wyvernWear', name: 'Wyvern Wear', bonuses: [
      { pieces: 1, description: '10% Skill Damage' },
      { pieces: 2, description: '10% Status Effects' },
      { pieces: 3, description: '20% Skill Duration' },
    ]
  },
  yaahlGear: {
    id: 'yaahlGear', name: 'Yaahl Gear', bonuses: [
      { pieces: 1, description: '10% Hazard Protection' },
      { pieces: 2, description: '5% Weapon Damage' }, 
      { pieces: 3, description: '40% Pulse Resistance' },
    ]
  },
  zwiadowkaSpZoo: {
    id: 'zwiadowkaSpZoo', name: 'Zwiadowka Sp. Z .o.o.', bonuses: [
      { pieces: 1, description: '15% Magazine Size' },
      { pieces: 2, description: '20% Rifle Damage' },
      { pieces: 3, description: '30% Weapon Handling' },
    ]
  },
  exoticPlaceholderBrand: { id: 'exoticPlaceholderBrand', name: 'Exotic Piece', bonuses: [] }
};
export const ALL_BRANDS_LIST = Object.values(BRANDS_DATA);


export const GEAR_SETS_DATA: Record<GearSetId, GearSetData> = {
  hardWired: {
    id: 'hardWired', name: 'Hard Wired',
    bonuses: [
      { pieces: 2, description: '15% Skill Haste' },
      { pieces: 3, description: '15% Skill Damage, 30% Skill Repair' },
      { pieces: 4, talentName: 'Feedback Loop', description: "Whenever you use or cancel a skill, your other skill's cooldown is automatically reduced by 30 seconds and increases total skill damage and repair by 10% for 20 seconds. This can occur at most once per 20 seconds." }
    ],
    chestTalent: { name: 'Positive Reinforcement', description: 'Increases Feedback Loop skill damage and repair bonus from 10% to 25%.' },
    backpackTalent: { name: 'Short Circuit', description: 'Decreases Feedback Loop cooldown from 20 seconds to 10 seconds.' }
  },
  ongoingDirective: {
    id: 'ongoingDirective', name: 'Ongoing Directive',
    bonuses: [
      { pieces: 2, description: '15% Status Effects' },
      { pieces: 3, description: '30% Reload Speed' },
      { pieces: 4, talentName: 'Rules of Engagement', description: 'Shooting a status affected enemy will apply a mark. Killing a marked enemy grants a full clip of Hollow-Point Ammo for your active weapon, and half a clip of the agent\'s active weapon to the rest of the party. Hollow-Point Ammo amplifies weapon damage by 20% and applies bleed on hit. Mark lasts for 10 seconds.' }
    ],
    chestTalent: { name: 'Parabellum Rounds', description: 'Increase Hollow-point ammo weapon damage amplification to 50%. This bonus does not apply to Party members.' },
    backpackTalent: { name: 'Trauma Specialist', description: 'Increases the duration of your bleed status effects by 50% and all bleed damage done by 100%.' }
  },
  truePatriot: {
    id: 'truePatriot', name: 'True Patriot',
    bonuses: [
      { pieces: 2, description: '30% Ammo Capacity' },
      { pieces: 3, description: '30% Magazine Size' },
      { pieces: 4, talentName: 'Red, White, and Blue', description: "Every 2s, enemies you shoot receive a stacking debuff of Red, White and Blue. Red: Amplifies the enemy's damage taken by 8%. White: Shooting the enemy repairs the attacking agents armor by 2% once every second. Blue: Decreases the enemy's damage dealt by 8%. Full Flag: Enemies that die while under the effect of all 3 debuffs create a 5 meter explosion, dealing damage equal to their total health and armor. (Explosion strength reduced on Named enemy deaths)" }
    ],
    chestTalent: { name: 'Waving the Flag', description: 'Increases Red / White / Blue rotation speed to 1.5 seconds.' },
    backpackTalent: { name: 'Patriotic Boost', description: 'Increases Red / White / Blue debuff strength. Red: 8% to 12%. White: 2% to 3%. Blue: 8% to 12%.' }
  },
  acesAndEights: {
    id: 'acesAndEights', name: 'Aces and Eights',
    bonuses: [
      { pieces: 2, description: '15% Marksman Rifle Damage' },
      { pieces: 3, description: '30% Headshot Damage' },
      { pieces: 4, talentName: "Dead Man's Hand", description: "Flip a card when landing shots with a Marksman Rifle. After 5 cards are flipped, the damage of your next shot is amplified by 30%. More shots are enhanced, the better the hand revealed. Four of a Kind: 4 shots. Full House: 3 shots. Aces and Eights: 2 shots. Flip an additional card on headshots." }
    ],
    chestTalent: { name: 'No Limit', description: "Increases Dead Man's Hand damage bonus from 30% to 50%." },
    backpackTalent: { name: 'Ace in the Sleeve', description: 'Amplifies 1 extra shot when revealing your hand.' }
  },
  negotiatorsDilemma: {
    id: 'negotiatorsDilemma', name: "Negotiator's Dilemma",
    bonuses: [
      { pieces: 2, description: '15% Critical Hit Chance' },
      { pieces: 3, description: '20% Critical Hit Damage' },
      { pieces: 4, talentName: 'Crowd Control', description: 'Critical hits mark enemies for 20 seconds, up to 3 marks total. When you critically hit a marked enemy, all other marked enemies take 60% of the damage dealt. Whenever a marked enemy dies, gain 2% critical hit damage, stacking up to 20 times, until combat ends.' }
    ],
    chestTalent: { name: 'Target Rich Environment', description: 'Increases Crowd Control mark count from 3 to 5.' },
    backpackTalent: { name: 'Critical Measures', description: 'Increases Crowd Control damage to additional marked enemies from 60% to 112%.' }
  },
  tipOfTheSpear: {
    id: 'tipOfTheSpear', name: 'Tip of the Spear',
    bonuses: [
      { pieces: 2, description: '10% Signature Weapon Damage' },
      { pieces: 3, description: '10% Weapon Damage' },
      { pieces: 4, talentName: 'Aggressive Recon', description: 'Dealing damage with a signature weapon increase total weapon damage by 20% for 60 seconds. Automatically generate specialization ammo every 60 seconds.' }
    ],
    chestTalent: { name: 'Specialized Destruction', description: 'Increases Aggressive Recon weapon damage bonus from 20% to 40%.' },
    backpackTalent: { name: 'Signature Moves', description: 'Increases signature weapon damage by 20%, and doubles the amount of signature weapon ammo generated by Aggressive Recon.' }
  },
  foundryBulwark: {
    id: 'foundryBulwark', name: 'Foundry Bulwark',
    bonuses: [
      { pieces: 2, description: '10% Total Armor' },
      { pieces: 3, description: '1% armor/sec regeneration, 50% Shield health' },
      { pieces: 4, talentName: 'Makeshift Repairs', description: 'Whenever you or your shield take damage, 20% of that amount is repaired to both over 15 seconds.' }
    ],
    chestTalent: { name: 'Improved Materials', description: 'Increases Makeshift Repairs from 20% to 30%.' },
    backpackTalent: { name: 'Process Refinery', description: 'Increases Makeshift Repairs speed from 15 seconds to 10 seconds.' }
  },
  futureInitiative: {
    id: 'futureInitiative', name: 'Future Initiative',
    bonuses: [
      { pieces: 2, description: '15% Skill Repair' },
      { pieces: 3, description: '15% Skill Duration, 15% Cooldown Reduction' },
      { pieces: 4, talentName: 'Ground Control', description: "Increases you and your allies' total weapon and skill damage by 15% when at full armor. When you repair an ally, you and all allies within 5 meters of you are also repaired for 60% of that amount." }
    ],
    chestTalent: { name: 'Enhanced Ground Control', description: "Increases Ground Control damage bonus from 15% to 25%." }, 
    backpackTalent: { name: 'Strategic Combat Support', description: 'Increases Ground Control proximity repair from 60% to 120%.' }
  },
  strikersBattlegear: {
    id: 'strikersBattlegear', name: "Striker's Battlegear",
    bonuses: [
      { pieces: 2, description: '15% Weapon Handling' },
      { pieces: 3, description: '15% Rate of Fire' },
      { pieces: 4, talentName: "Striker's Gamble", description: 'Weapon hits amplify total weapon damage by 0.65%, stacking up to 100 times. 1 stack lost per second between 0 to 50 stacks. 2 stacks lost per second between 51 and 100 stacks.' }
    ],
    chestTalent: { name: 'Press the Advantage', description: "Increases max stacks for Striker's Gamble from 100 to 200. 3 stacks lost per second between 101 and 200 stacks." },
    backpackTalent: { name: 'Risk Management', description: "Increases total weapon damage gained per stack of Striker's Gamble from 0.65% to 1%." }
  },
  systemCorruption: {
    id: 'systemCorruption', name: 'System Corruption',
    bonuses: [
      { pieces: 2, description: '15% Armor on Kill' },
      { pieces: 3, description: '40% Disrupt Resistance, 40% Pulse Resistance' },
      { pieces: 4, talentName: 'Hackstep Protocol', description: 'Replaces armor kits with an instant, infinite-use ability on a 20 seconds cooldown, that grants 50% bonus armor and hides your nameplate for 5 seconds. Increase total weapon damage by 1% per 5% bonus armor gained, up to 20%.' }
    ],
    chestTalent: { name: 'Compiler Optimization', description: 'Decreases Hackstep Protocol cooldown from 20 seconds to 15 seconds.' },
    backpackTalent: { name: 'Multithreaded Execution', description: 'Increases Hackstep Protocol bonus armor from 50% to 100%.' }
  },
  eclipseProtocol: {
    id: 'eclipseProtocol', name: 'Eclipse Protocol',
    bonuses: [
      { pieces: 2, description: '15% Status Effects' },
      { pieces: 3, description: '15% Skill Haste, 30% Hazard Protection' },
      { pieces: 4, talentName: 'Contagion', description: 'Enemies that die while affected by your status effects spread those status effects to another enemy within 10m and refresh 50% of the duration.' }
    ],
    chestTalent: { name: 'Proliferation', description: 'Increases Indirect Transmission Range from 10m to 15m and refresh percentage from 50% to 75%.' },
    backpackTalent: { name: 'Symptom Aggravator', description: 'Amplifies all damage you deal to status affected targets by 30%.' }
  },
  huntersFury: {
    id: 'huntersFury', name: "Hunter's Fury",
    bonuses: [
      { pieces: 2, description: '15% SMG Damage, 15% Shotgun Damage' },
      { pieces: 3, description: '20% Armor on Kill, 100% Health on Kill' },
      { pieces: 4, talentName: 'Apex Predator', description: 'Enemies within 15 meters receive a debuff, amplifying your weapon damage against them by 20%. Killing a debuffed enemy with your weapon disorients other enemies within 5 meters, and amplifies weapon damage by 5% for 10 seconds, stacking up to 5 times.' }
    ],
    chestTalent: { name: 'Endless Hunger', description: 'Increases the duration of Apex Predator stacks from 10 seconds to 30 seconds.' }, 
    backpackTalent: { name: 'Overwhelming Force', description: 'Increases the radius of disorient on Apex Predator kills from 5 meters to 10 meters.' }
  },
  rigger: {
    id: 'rigger', name: 'Rigger',
    bonuses: [
      { pieces: 2, description: '15% Skill Haste' },
      { pieces: 3, description: '15% Skill Duration' },
      { pieces: 4, talentName: 'Tend and Befriend', description: 'Interacting with your deployed skills grants the skill 25% skill damage for 10s. This buff cannot be refreshed. Interactions include: - Using / Deploying the Skill - Changing the skills target - Healing the skill.' }
    ],
    chestTalent: { name: 'Best Buds', description: 'Increase the damage buff from 25% to 50%.' },
    backpackTalent: { name: 'Complete Uptime', description: 'Cancelling your skills will reset their cooldown.' }
  },
  measuredAssembly: { 
    id: 'measuredAssembly', name: 'Measured Assembly',
    bonuses: [
      { pieces: 2, description: '+15% Skill Haste' },
      { pieces: 3, description: '+60% Repair Skills; +40% Explosive Resistance' },
      { pieces: 4, talentName: 'Huddle', description: 'Receive +1 Skill Tier for each ally Agent within range of your Hive. While at Skill Tier 6, having at least one ally Agent in the range of your Hive or Smart Cover for 4s will grant Overcharge for 15s. Cooldown: 40s. Mortars and enemy Skills that enter the range of your Hive or Smart Cover will be destroyed. Cooldown 10s. The cooldown is 20% faster for each ally Agent within the range of your Hive or Smart Cover.' }
    ],
    chestTalent: { name: 'Hivemind', description: 'Decrease the Overcharge cooldown from 40s to 25s.' },
    backpackTalent: { name: 'Smart Cooperation', description: 'Decrease the cooldown for destroying Mortars or enemy Skills from 10s to 1s.' }
  }
};
export const ALL_GEAR_SETS_LIST = Object.values(GEAR_SETS_DATA);


export const CORE_ATTRIBUTES_DATA: Record<CoreAttributeId, AttributeData> = {
  weaponDamage: { id: 'weaponDamage', name: 'Weapon Damage', type: 'Core', color: 'red', description: '+15% Weapon Damage', statEffect: { stat: 'weaponDamageBonus', value: 15, isPercentage: true } },
  armorCore: { id: 'armorCore', name: 'Armor', type: 'Core', color: 'blue', description: '+170,000 Armor', statEffect: { stat: 'armor', value: 170000 } },
  skillTier: { id: 'skillTier', name: 'Skill Tier', type: 'Core', color: 'yellow', description: '+1 Skill Tier', statEffect: { stat: 'skillTiers', value: 1 } },
};
export const ALL_CORE_ATTRIBUTES_LIST = Object.values(CORE_ATTRIBUTES_DATA);

export const MINOR_ATTRIBUTES_DATA: Record<MinorAttributeId, AttributeData> = {
  critChance: { id: 'critChance', name: 'Critical Hit Chance', type: 'Minor', color: 'red', description: '+6% Crit Chance', statEffect: { stat: 'criticalHitChance', value: 6, isPercentage: true } },
  critDamage: { id: 'critDamage', name: 'Critical Hit Damage', type: 'Minor', color: 'red', description: '+12% Crit Damage', statEffect: { stat: 'criticalHitDamage', value: 12, isPercentage: true } },
  headshotDamage: { id: 'headshotDamage', name: 'Headshot Damage', type: 'Minor', color: 'red', description: '+10% Headshot Damage', statEffect: { stat: 'headshotDamage', value: 10, isPercentage: true } },
  skillDamage: { id: 'skillDamage', name: 'Skill Damage', type: 'Minor', color: 'yellow', description: '+10% Skill Damage', statEffect: { stat: 'skillDamage', value: 10, isPercentage: true } },
  skillHaste: { id: 'skillHaste', name: 'Skill Haste', type: 'Minor', color: 'yellow', description: '+12% Skill Haste', statEffect: { stat: 'skillHaste', value: 12, isPercentage: true } },
  armorRegen: { id: 'armorRegen', name: 'Armor Regeneration', type: 'Minor', color: 'blue', description: '+4925 Armor/s', statEffect: { stat: 'armorRegen', value: 4925 } },
  hazardProtection: { id: 'hazardProtection', name: 'Hazard Protection', type: 'Minor', color: 'blue', description: '+10% Hazard Protection', statEffect: { stat: 'hazardProtection', value: 10, isPercentage: true } },
  health: { id: 'health', name: 'Health', type: 'Minor', color: 'blue', description: '+18000 Health', statEffect: {stat: 'health', value: 18000}},
  statusEffects: { id: 'statusEffects', name: 'Status Effects', type: 'Minor', color: 'yellow', description: '+10% Status Effects', statEffect: { stat: 'statusEffects', value: 10, isPercentage: true } },
  skillRepair: { id: 'skillRepair', name: 'Skill Repair', type: 'Minor', color: 'yellow', description: '+20% Skill Repair', statEffect: { stat: 'skillRepair', value: 20, isPercentage: true } },
  skillDuration: { id: 'skillDuration', name: 'Skill Duration', type: 'Minor', color: 'yellow', description: '+20% Skill Duration', statEffect: { stat: 'skillDuration', value: 20, isPercentage: true } },
  reloadSpeed: { id: 'reloadSpeed', name: 'Reload Speed', type: 'Minor', color: 'yellow', description: '+10% Reload Speed', statEffect: { stat: 'reloadSpeed', value: 10, isPercentage: true } },
  damageToArmorMinor: { id: 'damageToArmorMinor', name: 'Damage to Armor', type: 'Minor', color: 'red', description: '+6% Damage to Armor', statEffect: { stat: 'damageToArmor', value: 6, isPercentage: true } },
  damageToHealthMinor: { id: 'damageToHealthMinor', name: 'Damage to Health', type: 'Minor', color: 'red', description: '+6% Damage to Health', statEffect: { stat: 'damageToHealth', value: 6, isPercentage: true } },
  damageToOutOfCoverMinor: { id: 'damageToOutOfCoverMinor', name: 'Damage to Target Out of Cover', type: 'Minor', color: 'red', description: '+6% DtTOoC', statEffect: { stat: 'damageToTargetsOutOfCover', value: 6, isPercentage: true } },
  armorOnKillMinor: { id: 'armorOnKillMinor', name: 'Armor on Kill', type: 'Minor', color: 'blue', description: '+18500 Armor on Kill', statEffect: { stat: 'armorOnKill', value: 18500 } }, 
  skillHealthMinor: { id: 'skillHealthMinor', name: 'Skill Health', type: 'Minor', color: 'yellow', description: '+20% Skill Health', statEffect: { stat: 'skillDamage', value: 0 } }, 
  ammoCapacityMinor: { id: 'ammoCapacityMinor', name: 'Ammo Capacity', type: 'Minor', color: 'yellow', description: '+10% Ammo Capacity', statEffect: { stat: 'ammoCapacity', value: 10, isPercentage: true } },
};
export const ALL_MINOR_ATTRIBUTES_LIST = Object.values(MINOR_ATTRIBUTES_DATA);

export const TALENTS_DATA: Record<TalentId, TalentData> = {
  // Generic Chest Talents
  glassCannon: { id: 'glassCannon', name: 'Glass Cannon', type: 'Chest', color: 'purple', description: 'All damage you deal is amplified by 25%. All damage you take is amplified by 60%.' },
  obliterate: { id: 'obliterate', name: 'Obliterate', type: 'Chest', color: 'purple', description: "Critical hits increase total weapon damage by 1% for 5 seconds. Stacks up to 25 times. Damaging an enemy with a skill increases total weapon damage by 15% for 15 seconds." },
  spotter: { id: 'spotter', name: 'Spotter', type: 'Chest', color: 'purple', description: 'Amplifies total weapon and skill damage by 15% to pulsed enemies.' },
  unbreakable: { id: 'unbreakable', name: 'Unbreakable', type: 'Chest', color: 'purple', description: 'When armor depleted, repairs 95% of armor. Cooldown: 60s.' },
  efficient: { id: 'efficient', name: 'Efficient', type: 'Chest', color: 'purple', description: 'Using an armor kit has a 50% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 100%.' },
  entrench: { id: 'entrench', name: 'Entrench', type: 'Chest', color: 'purple', description: 'If you are below 30% armor, headshots from cover repair 20% of your armor. Cooldown is 6 seconds.' },
  intimidate: { id: 'intimidate', name: 'Intimidate', type: 'Chest', color: 'purple', description: 'While you have bonus armor, gain 1 stack each second up to a max of 7. Each stack increases total weapon damage by 5% to enemies within 10m.' },
  protectedReload: { id: 'protectedReload', name: 'Protected Reload', type: 'Chest', color: 'purple', description: 'Grants 20% bonus armor while reloading. Grants 0-18% of your armor as bonus armor to all other allies when they are reloading, based on your [defense] core attribute.' },
  vanguard: { id: 'vanguard', name: 'Vanguard', type: 'Chest', color: 'purple', description: 'Deploying a shield makes it invulnerable for 5 seconds and grants 45% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.' },
  braced: { id: 'braced', name: 'Braced', type: 'Chest', color: 'purple', description: 'While in cover weapon handling is increased by 45%.' },
  focus: { id: 'focus', name: 'Focus', type: 'Chest', color: 'purple', description: 'Increases total weapon damage by 5% every second you are aiming while scoped 8x or higher, up to 50%.' },
  gunslinger: { id: 'gunslinger', name: 'Gunslinger', type: 'Chest', color: 'purple', description: 'Weapon swapping increases total weapon damage by 20% for 5 seconds. This buff is lost for 5 seconds if you weapon swap while it is active.' },
  headhunter: { id: 'headhunter', name: 'Headhunter', type: 'Chest', color: 'purple', description: "After killing an enemy with a headshot, your next weapon hit within 30 seconds deals an additional 125% of that killing blow's damage. Damage is capped at 800% of your weapon damage. This is raised to 1250% if your headshot damage is greater than 150%." },
  spark: { id: 'spark', name: 'Spark', type: 'Chest', color: 'purple', description: 'Damaging an enemy with a skill increases total weapon damage by 15% for 20 seconds.' },
  // Perfect Generic Chest Talents
  perfectFocus: { id: 'perfectFocus', name: 'Perfect Focus', type: 'Chest', color: 'purple', description: 'Increases total weapon damage by 6% every second you are aiming while scoped 8x or higher, up to 60%.' },
  perfectlyUnbreakable: { id: 'perfectlyUnbreakable', name: 'Perfectly Unbreakable', type: 'Chest', color: 'purple', description: 'When your armor is depleted, repair 100% of your armor. Cooldown is 55 seconds.' },
  perfectlyEfficient: { id: 'perfectlyEfficient', name: 'Perfectly Efficient', type: 'Chest', color: 'purple', description: 'Using an armor kit has a 75% chance to not consume the armor kit. Specialization armor kit bonuses are increased by 100%.' },
  perfectCompanion: { id: 'perfectCompanion', name: 'Perfect Companion', type: 'Chest', color: 'purple', description: 'Increases total weapon damage by 20% within a 10-meter radius of an ally or skill.' },
  perfectlySkilled: { id: 'perfectlySkilled', name: 'Perfectly Skilled', type: 'Chest', color: 'purple', description: "Skill kills have a 30% chance to reset skill cooldowns. If no skills were on cooldown, you instead gain one-time buff that immediately refreshes a skill's cooldown when it goes on cooldown." },
  perfectOverwatch: { id: 'perfectOverwatch', name: 'Perfect Overwatch', type: 'Chest', color: 'purple', description: "After staying in cover for 8 seconds, increase your and all allies' total weapon and skill damage by 12% as long as you remain in cover or in a cover-to-cover move." },
  perfectVanguard: { id: 'perfectVanguard', name: 'Perfect Vanguard', type: 'Chest', color: 'purple', description: 'Deploying a shield makes it invulnerable for 5 seconds and grants 50% of your armor as bonus armor to all other allies for 20 seconds. Cooldown is 25 seconds.' },
  perfectIntimidate: { id: 'perfectIntimidate', name: 'Perfect Intimidate', type: 'Chest', color: 'purple', description: 'While you have bonus armor, gain 1 stack each second up to a max of 8. Each stack increases total weapon damage by 5% to enemies within 10m.' },
  perfectSpark: { id: 'perfectSpark', name: 'Perfect Spark', type: 'Chest', color: 'purple', description: 'Damaging an enemy with a skill increases total weapon damage by 15% for 20 seconds.' }, 
  perfectTrauma: { id: 'perfectTrauma', name: 'Perfect Trauma', type: 'Chest', color: 'purple', description: 'Applies blind to enemy hit in the head. Cooldown 20 seconds. Applies bleed to an enemy hit in the chest. Cooldown 20 seconds.' },
  perfectBraced: { id: 'perfectBraced', name: 'Perfect Braced', type: 'Chest', color: 'purple', description: 'While in cover weapon handling is increased by 50%.' },
  perfectGlassCannon: { id: 'perfectGlassCannon', name: 'Perfect Glass Cannon', type: 'Chest', color: 'purple', description: 'All damage you deal is amplified by 30%. All damage you take is amplified by 60%.' },
  perfectSpotter: { id: 'perfectSpotter', name: 'Perfect Spotter', type: 'Chest', color: 'purple', description: 'Amplifies total weapon and skill damage by 20% to pulsed enemies.' },
  perfectHeadhunter: { id: 'perfectHeadhunter', name: 'Perfect Headhunter', type: 'Chest', color: 'purple', description: "After killing an enemy with a headshot, your next weapon hit within 30 seconds deals 150% of that killing blow's damage in addition to it. Damage is capped to 800% of your weapon damage. This is raised to 1250% if your headshot damage is greater than 150%." },
  // Exotic Chest Talents
  hoarderTalent: { id: 'hoarderTalent', name: 'Hoarder', type: 'Chest', color: 'gold', description: "+3 Grenade Capacity, +50% Grenade Radius, +35% Grenade Damage, +25% Grenade Damage for each extra enemy caught in the blast. Automatically regenerate grenades every 30s, up to 2 grenades. (Exotic Item)" },
  bleedingEdgeTalent: { id: 'bleedingEdgeTalent', name: 'Bleeding Edge', type: 'Chest', color: 'gold', description: "Shooting enemies within 15 meters applies bleed to the target. Repair 3-48% of your armor per second for every enemy that is bleeding within 10 meters (1: 3%, 2: 6%, 3: 12%, 4: 24%, 5: 48%). (Exotic Item - Requires Ridgeway's Blueprint. Acquired via Summit project.)" },
  ablativeNanoPlatingTalent: { id: 'ablativeNanoPlatingTalent', name: 'Ablative Nano-Plating', type: 'Chest', color: 'gold', description: "Whenever you or any ally's armor breaks, they gain 80% of your armor as bonus armor for 10 seconds. Cooldown per ally: 45 seconds. Killing an enemy with your specialization weapon removes this cooldown for all allies. (Exotic Item - Drops from final True Sons bosses or Summit floor sets.)" },
  // Generic Backpack Talents
  vigilance: { id: 'vigilance', name: 'Vigilance', type: 'Backpack', color: 'purple', description: 'Increases total weapon damage by 25%. Taking damage disables this buff for 4 seconds.' },
  adrenalineRush: { id: 'adrenalineRush', name: 'Adrenaline Rush', type: 'Backpack', color: 'purple', description: 'Whenever you are within 10 meters of an enemy, gain 20% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5 seconds.' },
  companion: { id: 'companion', name: 'Companion', type: 'Backpack', color: 'purple', description: 'While you are within 5 meters of an ally or skill, total weapon damage is increased by 15%.'},
  concussion: { id: 'concussion', name: 'Concussion', type: 'Backpack', color: 'purple', description: 'Headshots increase total weapon damage by 10% for 1.5 seconds. 5 seconds with marksman rifles. Headshot kills additionally increase total weapon damage by 15% for 10 seconds.' },
  overclock: { id: 'overclock', name: 'Overclock', type: 'Backpack', color: 'purple', description: 'You and allies within 7 meters of your deployed skills, gain 25% reload speed and reduces active cooldowns by 0.2s each second.' },
  safeguard: { id: 'safeguard', name: 'Safeguard', type: 'Backpack', color: 'purple', description: 'While at full armor, increases total skill repair by 100%.' },
  calculated: { id: 'calculated', name: 'Calculated', type: 'Backpack', color: 'purple', description: 'Kills from cover reduce skill cooldowns by 10%.' },
  combinedArms: { id: 'combinedArms', name: 'Combined Arms', type: 'Backpack', color: 'purple', description: 'Shooting an enemy increases total skill damage by 25% for 3 seconds.' },
  energize: { id: 'energize', name: 'Energize', type: 'Backpack', color: 'purple', description: 'Using an armor kit grants +1 skill tier for 15 seconds. If already at skill tier 6, grants overcharge. Cooldown is 60 seconds.' },
  shockAndAwe: { id: 'shockAndAwe', name: 'Shock and Awe', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy increases total skill damage and repair by 20% for 20 seconds.' },
  techSupport: { id: 'techSupport', name: 'Tech Support', type: 'Backpack', color: 'purple', description: 'Skill kills increase total skill damage by 25% for 20 seconds.' },
  creepingDeath: { id: 'creepingDeath', name: 'Creeping Death', type: 'Backpack', color: 'purple', description: 'When you apply a status effect, it is also applied to all enemies within 8 meters of your target. Cooldown is 15 seconds.' },
  galvanize: { id: 'galvanize', name: 'Galvanize', type: 'Backpack', color: 'purple', description: 'Applying a Blind, Ensnare, Confuse, or Shock to an enemy grants 40% of your armor as bonus armor to you and all allies within 20 meters of that enemy for 10 seconds.' },
  wicked: { id: 'wicked', name: 'Wicked', type: 'Backpack', color: 'purple', description: 'Applying a status effect increases total weapon damage by 18% for 20 seconds.' },
  clutch: { id: 'clutch', name: 'Clutch', type: 'Backpack', color: 'purple', description: 'If you are below 15% armor, critical hits repair 2.5% missing armor. Kills allow you to repair up to 100% armor for 4-10 seconds, based on your [Weapon] core attribute.' },
  bloodsucker: { id: 'bloodsucker', name: 'Bloodsucker', type: 'Backpack', color: 'purple', description: 'Killing an enemy adds and refreshes a stack of 10% bonus armor for 10 seconds. Max stack is 10.' },
  leadership: { id: 'leadership', name: 'Leadership', type: 'Backpack', color: 'purple', description: 'Performing a cover to cover grants 15% of your armor as bonus armor to you and all allies for 10 seconds. This is doubled if you end within 10 meters of an enemy. Cooldown is 10 seconds.' },
  protector: { id: 'protector', name: 'Protector', type: 'Backpack', color: 'purple', description: 'When your shield is damaged, you gain 5% and all other allies gain 15% of your armor as bonus armor for 3 seconds. Cooldown is 3 seconds.' },
  composure: { id: 'composure', name: 'Composure', type: 'Backpack', color: 'purple', description: 'While in cover, increases total weapon damage by 15%.' },
  opportunistic: { id: 'opportunistic', name: 'Opportunistic', type: 'Backpack', color: 'purple', description: 'Enemies you hit with shotguns and marksman rifles amplifies the damage they take by 10% from all sources for 5 seconds.' },
  unstoppableForce: { id: 'unstoppableForce', name: 'Unstoppable Force', type: 'Backpack', color: 'purple', description: 'Killing an enemy increases total weapon damage by 5% for 15 seconds. Stacks up to 5 times.' },
  versatile: { id: 'versatile', name: 'Versatile', type: 'Backpack', color: 'purple', description: 'Amplifies total weapon damage for 10 seconds when swapping between your primary and secondary weapons if they are different. 35% to enemies within 15 meters for Shotguns and SMGs. 35% to enemies further than 25 meters for Rifles and Marksman Rifles. 10% to enemies between 15 - 25 meters for LMGs and Assault Rifles. At most once per 5 seconds per weapon type.' },
  // Perfect Generic Backpack Talents
  perfectTechSupport: { id: 'perfectTechSupport', name: 'Perfect Tech Support', type: 'Backpack', color: 'purple', description: 'Skill kills increase total skill damage by 25% for 27 seconds.' },
  perfectBloodsucker: { id: 'perfectBloodsucker', name: 'Perfect Bloodsucker', type: 'Backpack', color: 'purple', description: 'Killing an enemy adds and refreshes a stack of +12% bonus armor for 10s. Max stack is 10.' },
  perfectOverclock: { id: 'perfectOverclock', name: 'Perfect Overclock', type: 'Backpack', color: 'purple', description: 'Allies within 15 meters of your deployed skills, gain +30% reload speed and reduce their active cooldowns by 0.6 seconds each second.' },
  perfectClutch: { id: 'perfectClutch', name: 'Perfect Clutch', type: 'Backpack', color: 'purple', description: 'If you are below 20% armor, critical hits repair 3% missing armor. Kills allow you to repair up to 100% armor for 4-10 seconds, based on your [Weapon] core attribute.' },
  perfectShockAndAwe: { id: 'perfectShockAndAwe', name: 'Perfect Shock and Awe', type: 'Backpack', color: 'purple', description: 'Applying a status effect to an enemy increases total skill damage and repair by 25% for 27 seconds.' },
  perfectGalvanize: { id: 'perfectGalvanize', name: 'Perfect Galvanize', type: 'Backpack', color: 'purple', description: 'Applying a Blind, Ensnare, Confuse, or Shock to an enemy grant 50% of your armor as bonus armor to you and all allies within 30 meters of that enemy for 10 seconds.' },
  perfectlyCalculated: { id: 'perfectlyCalculated', name: 'Perfectly Calculated', type: 'Backpack', color: 'purple', description: 'Kills from cover reduce skill cooldowns by 15%.' },
  perfectlyWicked: { id: 'perfectlyWicked', name: 'Perfectly Wicked', type: 'Backpack', color: 'purple', description: 'Applying a status effect increases total weapon damage by 18% for 27 seconds.' },
  perfectCreepingDeath: { id: 'perfectCreepingDeath', name: 'Perfect Creeping Death', type: 'Backpack', color: 'purple', description: 'Causing Status Effect on an enemy has a chance to spread that same Status Effect to the nearest enemy within a 10-meter radius. Can only occur once every 10 seconds.' },
  perfectCombinedArms: { id: 'perfectCombinedArms', name: 'Perfect Combined Arms', type: 'Backpack', color: 'purple', description: 'Shooting an enemy increases total skill damage by 30% for 3 seconds.' },
  perfectVigilance: { id: 'perfectVigilance', name: 'Perfect Vigilance', type: 'Backpack', color: 'purple', description: 'Increases total weapon damage by 25%. Taking damage disables this buff for 3 seconds.' },
  perfectlyOpportunistic: { id: 'perfectlyOpportunistic', name: 'Perfectly Opportunistic', type: 'Backpack', color: 'purple', description: 'Enemies you hit with shotguns and marksman rifles amplifies the damage they take by 15% from all sources for 5 seconds.' },
  perfectAdrenalineRush: { id: 'perfectAdrenalineRush', name: 'Perfect Adrenaline Rush', type: 'Backpack', color: 'purple', description: 'When you are within 10m of an enemy, gain 23% bonus armor for 5 seconds. Stacks up to 3 times. Cooldown: 5s' },
  perfectLeadership: { id: 'perfectLeadership', name: 'Perfect Leadership', type: 'Backpack', color: 'gold', description: 'Performing a cover-to-cover grants 20% of your armor as bonus armor to you and all allies for 10s. This is tripled if you end within 10m of an enemy. Cooldown: 10s. (Named Item: Cap\'n)' },
  // Exotic Backpack Talents
  acostasOneInHandTalent: { id: 'acostasOneInHandTalent', name: "One in Hand... / ...Two in the Bag", type: 'Backpack', color: 'gold', description: "One in Hand...: Throwing a grenade refunds it and grants +1 skill tier for 15 seconds. Grants overcharge if already at skill tier 6. Cooldown: 60s. ...Two in the Bag: +1 Armor Kit Capacity, +3 Grenade Capacity, +25% Ammo Capacity, +10% Skill Repair, +10% Status Effects. Fixed Attributes: Skill Tier, Skill Haste, Skill Damage. (Exotic Item - 3% chance from locked faction crates)" },
  mementoKillConfirmedTalent: { id: 'mementoKillConfirmedTalent', name: "Kill Confirmed", type: 'Backpack', color: 'gold', description: "Enemies drop a trophy on death. Collecting provides short-term (10s) buffs: +5% weapon dmg/red core, +10% bonus armor/blue core, +5% skill efficiency/yellow core. Also provides long-term (300s, 30x stack) buffs: +1% weapon dmg, +1% skill efficiency, +0.1% armor regen per trophy. Fixed Attributes: Weapon Damage, Armor, Skill Tier. (Exotic Item - Targeted Loot, Exotic Cache, Raid/Incursion Reward)" },
  ninjaBikeResourcefulTalent: { id: 'ninjaBikeResourcefulTalent', name: "Resourceful", type: 'Backpack', color: 'gold', description: "Slots in with any equipped Gear Set and/or Brand Set item to fulfill a requirement towards unlocking a Gear Sets bonus. Allows unlocking bonuses from multiple sets simultaneously. Fixed Attributes: Weapon Damage, Armor, Skill Tier. (Exotic Item - Targeted Loot, Exotic Cache)" },
  // Exotic Glove Talents
  transferenceOverclockTalent: { id: 'transferenceOverclockTalent', name: "Transference Overclock", type: 'Gloves', color: 'gold', description: "Grants +15% hive skill haste per skill tier. Detonating a Hive refreshes your skill cooldowns and grants overcharge for 15 seconds. If at skill tier 6, this effect also applies to all allies. Allies receiving this effect are unable to benefit from it again for 120 seconds. (Exotic - Drops from Galveston @ Camp White Oak / Black Tusk Medics/Controllers)" },
  overTheTopTalent: { id: 'overTheTopTalent', name: "Over the Top", type: 'Gloves', color: 'gold', description: "Damaging an enemy with a grenade or striking an enemy with a melee attack activates the Seeing Red buff. Seeing Red grants +25% weapon damage and +100% melee damage. Seeing Red lasts 20 seconds and has a 60 second cooldown. While in cooldown, striking an enemy with a melee attack or hitting an enemy with the effect of a grenade will complete the cooldown instantly. (Exotic - Targeted Loot / Exotic Caches)" },
  ironGripTalent: { id: 'ironGripTalent', name: "Iron Grip", type: 'Gloves', color: 'gold', description: "-50% Recoil Penalty when hip-firing. -50% Recoil Penalty when blind-firing from cover. (Exotic - Year 5 Season 3 Lvl 85 Reward / Targeted Loot / Exotic Caches)" },
  // Exotic Holster Talents
  quickDrawTalent: { id: 'quickDrawTalent', name: "Quick Draw", type: 'Holster', color: 'gold', description: "While your pistol is holstered, gain a stacking buff every 0.3 seconds, up to 100. When you swap to it, your first shot consumes the buff and deals +10% damage per stack. This deals headshot damage to anywhere you hit. Requires Pistol Equipped. (Exotic - Requires Blueprint, Crafting Project)" },
  dragonsGlareTalent: { id: 'dragonsGlareTalent', name: "Dragon's Glare", type: 'Holster', color: 'gold', description: "While in combat, applies burn to the enemy closest to you within 20 meters. Cooldown: 40 seconds. (Exotic - Drops from Cleaner named bosses / Summit)" },
  defibrillatorTalent: { id: 'defibrillatorTalent', name: "Defibrillator", type: 'Holster', color: 'gold', description: "While 'Shocker Punch' is equipped, the stun received by the agent from the shock status effect will be reduced by 50%. Using a shield will give 100% to melee damage. Using St. Elmo's Engine with the holster will give 100% extra melee damage and will make the next melee attack apply shock to the target. Using all three items will offer all of the above mentioned bonuses and the shock from the melee attack will have a 5m radius, starting from the first target. 15 second cooldown. (Exotic)" },
  alternatingCurrentTalent: { id: 'alternatingCurrentTalent', name: "Alternating Current", type: 'Holster', color: 'gold', description: "Generate a stack of 3% Skill Damage on one of your skills every second, capping at 10 stacks. After 10 seconds at the cap the stacks transfer to your other skill. The process then repeats ad-infinitum. (Exotic)" },
  bobAndWeaveTalent: { id: 'bobAndWeaveTalent', name: "Bob and Weave", type: 'Holster', color: 'gold', description: "For PvE: Receive 5% Repairs for every 1m run in cover-to-cover. Damage taken while doing a cover-to-cover is healed over 10s. For PvP: Receive 3% Repairs for every 1m run in cover-to-cover. Damage taken while doing a cover-to-cover is healed over 10s. (Exotic: Nimble Holster - Attributes: Red Core, CHC, CHD)" },
  // Exotic Kneepad Talents
  parkourTalent: { id: 'parkourTalent', name: "Parkour!", type: 'Kneepads', color: 'gold', description: "Performing a cover to cover or vaulting reloads your drawn weapon and grants +25% bonus armor for 5 seconds. (Exotic - 3% chance from any DZ Supply drop)" },
  standYourGroundTalent: { id: 'standYourGroundTalent', name: "Stand Your Ground", type: 'Kneepads', color: 'gold', description: "Cannot be staggered by explosions. Increase total weapon damage by 3% each second you are not moving. Stacks up to 10 times until you start moving. All stacks are lost 10 seconds after moving. (Exotic - Drops from final named Hyena boss / Summit)" },
  // Exotic Mask Talents
  abridgedTalent: { id: 'abridgedTalent', name: "Abridged", type: 'Mask', color: 'gold', description: "If your Primary and Secondary weapons are not Exotic or Named and of the same type, the Secondary Weapon's talent will also be applied to the Primary Weapon. Caveats: not being able to stack the same buff twice and not allowing weapon-swapping-oriented Talents. (Exotic: Tinkerer Mask)" },
  chemicalAgentCatalysisTalent: { id: 'chemicalAgentCatalysisTalent', name: "Chemical Agent (Catalysis)", type: 'Mask', color: 'gold', description: "Dealing and receiving status effects (Burn, Bleed, Shock, EMP/Disrupt, Poison, Blind/Disorient) builds stacks of Catalysis to a maximum of 12. Each stack grants +2% Weapon Damage and +2% Status Effect. For each enemy within 15m affected by a status effect, gain 1 stack/sec. Receiving Status Effects grants 2 stacks/sec. Stacks decay at 1 stack/sec after 5s if no enemies or you are affected by status effects. Reactant: At max stacks, killing a status-affected enemy grants for 5s: +25% bonus armor & +20% weapon reload speed. Stabilizer: While burning, you can maintain ADS without disruption. (Exotic: The Catalyst - Attributes: +15% Wpn Dmg Core, +10% StatusFx, +10% HazPro. Has Mod Slot)" },
};
export const ALL_TALENTS_LIST = Object.values(TALENTS_DATA);

export const WEAPON_TALENTS_DATA: Record<WeaponTalentId, WeaponTalentData> = {
  boomerang: {
    id: 'boomerang', name: 'Boomerang',
    applicableCategories: [WeaponCategory.Rifle],
    description: 'Critical hits have a 50% chance to return the bullet to the magazine. If a bullet is returned to the magazine, the next shot has 40% increased damage.'
  },
  breadbasket: {
    id: 'breadbasket', name: 'Breadbasket',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Landing body shots adds a stack of bonus 35% headshot damage to the next headshot for 10 seconds. Max stack is 3.'
  },
  closeAndPersonal: {
    id: 'closeAndPersonal', name: 'Close & Personal',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Killing a target within 7 meters grants 30% weapon damage for 10 seconds.'
  },
  determined: {
    id: 'determined', name: 'Determined',
    applicableCategories: [WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.Pistol],
    description: 'Killing an enemy with a headshot guarantees that the next shot will be a guaranteed headshot.'
  },
  eyeless: {
    id: 'eyeless', name: 'Eyeless',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Deal 20% weapon damage to blinded enemies. After 4 kills, applies blind to the next enemy you hit.'
  },
  fastHands: {
    id: 'fastHands', name: 'Fast Hands',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Critical hits add a stack of 4% reload speed bonus. Max stack is 40.'
  },
  finisher: {
    id: 'finisher', name: 'Finisher',
    applicableCategories: [WeaponCategory.Pistol],
    description: 'Swapping from this weapon within 10 seconds of killing an enemy grants 30% critical hit chance and 30% critical hit damage for 15 seconds.'
  },
  firstBlood: {
    id: 'firstBlood', name: 'First Blood',
    applicableCategories: [WeaponCategory.MarksmanRifle],
    description: 'If scoped, your first shot fired from out of combat or after fully reloading from empty deals headshot damage to any part of the body hit. Requires a Scope with 8x magnification or higher.'
  },
  flatline: {
    id: 'flatline', name: 'Flatline',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Amplifies weapon damage by 15% to pulsed enemies. After 2 kills, applies pulse to the next enemy you hit.'
  },
  frenzy: {
    id: 'frenzy', name: 'Frenzy',
    applicableCategories: [WeaponCategory.LightMachineGun],
    description: 'For every 10 bullets in the magazine capacity, gain 3% rate of fire and 3% weapon damage for 5 seconds when reloading from empty.'
  },
  futurePerfect: {
    id: 'futurePerfect', name: 'Future Perfect',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Weapon kills grant 1 skill tier for 15 seconds. Stacks up to 3 times. Weapon Kill at tier 6 grant overcharge for 15 seconds. Overcharge cooldown is 90 seconds.'
  },
  ignited: {
    id: 'ignited', name: 'Ignited',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Deal 20% weapon damage to burning enemies. After 4 kills, applies burning to the next enemy you hit.'
  },
  inSync: {
    id: 'inSync', name: 'In Sync',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Hitting an enemy grants 15% skill damage for 5 seconds. Using a skill or damaging an enemy with a skill grants 15% weapon damage for 5 seconds. Damage increases are doubled while both buffs are active at the same time.'
  },
  killer: {
    id: 'killer', name: 'Killer',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Pistol, WeaponCategory.Shotgun],
    description: 'Killing an enemy with a critical hit grants 40% critical hit damage for 10 seconds.'
  },
  luckyShot: {
    id: 'luckyShot', name: 'Lucky Shot',
    applicableCategories: [WeaponCategory.Rifle, WeaponCategory.MarksmanRifle],
    description: 'Magazine capacity is increased by 20%. Missed shots from cover have a 100% chance to return to the magazine.'
  },
  perfectStreamline: { 
    id: 'perfectStreamline', name: 'Perfect Streamline',
    applicableCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun], 
    description: 'Receive +47% (PvE) and +37% (PvP) Weapon Damage when no Skills are Deployed or on Cooldown.'
  }
};
export const ALL_WEAPON_TALENTS_LIST = Object.values(WEAPON_TALENTS_DATA);


export const NAMED_CHEST_ITEMS_DATA: Record<string, NamedItemInfo> = {
  pristineExample: { id: 'pristineExample', name: 'Pristine Example', brandId: 'airaldiHoldings', slot: GearSlotId.Chest, talentId: 'perfectFocus', coreAttributeHint: 'weaponDamage' },
  zeroFs: { id: 'zeroFs', name: "Zero F's", brandId: 'badgerTuff', slot: GearSlotId.Chest, talentId: 'perfectlyUnbreakable', coreAttributeHint: 'armorCore' },
  everydayCarrier: { id: 'everydayCarrier', name: 'Everyday Carrier', brandId: 'belstoneArmory', slot: GearSlotId.Chest, talentId: 'perfectlyEfficient', coreAttributeHint: 'armorCore' },
  henri: { id: 'henri', name: 'Henri', brandId: 'electrique', slot: GearSlotId.Chest, talentId: 'perfectCompanion', coreAttributeHint: 'skillTier' },
  caesarsGuard: { id: 'caesarsGuard', name: "Caesar's Guard", brandId: 'empressInternational', slot: GearSlotId.Chest, talentId: 'perfectlySkilled', coreAttributeHint: 'skillTier' },
  ferociousCalm: { id: 'ferociousCalm', name: 'Ferocious Calm', brandId: 'fenrisGroup', slot: GearSlotId.Chest, talentId: 'perfectOverwatch', coreAttributeHint: 'weaponDamage' },
  pointman: { id: 'pointman', name: 'Pointman', brandId: 'gilaGuard', slot: GearSlotId.Chest, talentId: 'perfectVanguard', coreAttributeHint: 'armorCore' },
  hunterKiller: { id: 'hunterKiller', name: 'Hunter-Killer', brandId: 'golanGearLtd', slot: GearSlotId.Chest, talentId: 'perfectIntimidate', coreAttributeHint: 'armorCore' },
  doorKickersKnock: { id: 'doorKickersKnock', name: "Door-Kicker's Knock", brandId: 'grupoSombra', slot: GearSlotId.Chest, talentId: 'perfectSpark', coreAttributeHint: 'weaponDamage' },
  cherished: { id: 'cherished', name: 'Cherished', brandId: 'habsburgGuard', slot: GearSlotId.Chest, talentId: 'perfectTrauma', coreAttributeHint: 'armorCore' },
  vedmedytsyaVest: { id: 'vedmedytsyaVest', name: 'Vedmedytsya Vest', brandId: 'petrovDefenseGroup', slot: GearSlotId.Chest, talentId: 'perfectBraced', coreAttributeHint: 'weaponDamage' },
  theSacrifice: { id: 'theSacrifice', name: 'The Sacrifice', brandId: 'providenceDefense', slot: GearSlotId.Chest, talentId: 'perfectGlassCannon', coreAttributeHint: 'weaponDamage' },
  closer: { id: 'closer', name: 'Closer', brandId: 'uzinaGetica', slot: GearSlotId.Chest, talentId: 'perfectSpotter', coreAttributeHint: 'armorCore' },
  chainkiller: { id: 'chainkiller', name: 'Chainkiller', brandId: 'walkerHarris', slot: GearSlotId.Chest, talentId: 'perfectHeadhunter', coreAttributeHint: 'weaponDamage' },
  collectorExoticChest: { id: 'collectorExoticChest', name: 'Collector', brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Chest, talentId: 'hoarderTalent', coreAttributeHint: 'weaponDamage' },
  ridgewaysPrideExoticChest: { id: 'ridgewaysPrideExoticChest', name: "Ridgeway's Pride", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Chest, talentId: 'bleedingEdgeTalent', coreAttributeHint: 'weaponDamage' },
  tardigradeExoticChest: { id: 'tardigradeExoticChest', name: 'Tardigrade Armor System', brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Chest, talentId: 'ablativeNanoPlatingTalent', coreAttributeHint: 'armorCore' },
};
export const ALL_NAMED_CHEST_ITEMS_LIST = Object.values(NAMED_CHEST_ITEMS_DATA);

export const NAMED_BACKPACK_ITEMS_DATA: Record<string, NamedItemInfo> = {
  percussiveMaintenance: { id: 'percussiveMaintenance', name: 'Percussive Maintenance', brandId: 'alpsSummitArmaments', slot: GearSlotId.Backpack, talentId: 'perfectTechSupport', coreAttributeHint: 'skillTier' },
  liquidEngineer: { id: 'liquidEngineer', name: 'Liquid Engineer', brandId: 'belstoneArmory', slot: GearSlotId.Backpack, talentId: 'perfectBloodsucker', coreAttributeHint: 'armorCore' },
  hermano: { id: 'hermano', name: 'Hermano', brandId: 'brazosDeArcabuz', slot: GearSlotId.Backpack, talentId: 'perfectOverclock', coreAttributeHint: 'armorCore' },
  devilsDue: { id: 'devilsDue', name: "Devil's Due", brandId: 'ceskaVyroba', slot: GearSlotId.Backpack, talentId: 'perfectClutch', coreAttributeHint: 'weaponDamage' },
  strategicAlignment: { id: 'strategicAlignment', name: 'Strategic Alignment', brandId: 'chinaLightIndustries', slot: GearSlotId.Backpack, talentId: 'perfectShockAndAwe', coreAttributeHint: 'skillTier' },
  lavoisier: { id: 'lavoisier', name: 'Lavoisier', brandId: 'electrique', slot: GearSlotId.Backpack, talentId: 'perfectGalvanize', coreAttributeHint: 'skillTier' },
  batteryPack: { id: 'batteryPack', name: 'Battery Pack', brandId: 'empressInternational', slot: GearSlotId.Backpack, talentId: 'perfectlyCalculated', coreAttributeHint: 'skillTier' },
  anarchistsCookbook: { id: 'anarchistsCookbook', name: "Anarchist's Cookbook", brandId: 'golanGearLtd', slot: GearSlotId.Backpack, talentId: 'perfectlyWicked', coreAttributeHint: 'armorCore' },
  theCourier: { id: 'theCourier', name: 'The Courier', brandId: 'habsburgGuard', slot: GearSlotId.Backpack, talentId: 'perfectCreepingDeath', coreAttributeHint: 'armorCore' },
  forceMultiplier: { id: 'forceMultiplier', name: 'Force Multiplier', brandId: 'hanaU', slot: GearSlotId.Backpack, talentId: 'perfectCombinedArms', coreAttributeHint: 'skillTier' },
  theGift: { id: 'theGift', name: 'The Gift', brandId: 'providenceDefense', slot: GearSlotId.Backpack, talentId: 'perfectVigilance', coreAttributeHint: 'weaponDamage' },
  theSetup: { id: 'theSetup', name: 'The Setup', brandId: 'uzinaGetica', slot: GearSlotId.Backpack, talentId: 'perfectlyOpportunistic', coreAttributeHint: 'armorCore' },
  matador: { id: 'matador', name: 'Matador', brandId: 'walkerHarris', slot: GearSlotId.Backpack, talentId: 'perfectAdrenalineRush', coreAttributeHint: 'weaponDamage' },
  capnBackpack: { id: 'capnBackpack', name: "Cap'n", brandId: 'imminenceArmaments', slot: GearSlotId.Backpack, talentId: 'perfectLeadership', coreAttributeHint: 'weaponDamage' }, 
  acostasGoBagExoticBackpack: { id: 'acostasGoBagExoticBackpack', name: "Acosta's Go-Bag", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Backpack, talentId: 'acostasOneInHandTalent', coreAttributeHint: 'skillTier' },
  mementoExoticBackpack: { id: 'mementoExoticBackpack', name: "Memento", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Backpack, talentId: 'mementoKillConfirmedTalent', coreAttributeHint: 'weaponDamage' },
  ninjaBikeMessengerBagExoticBackpack: { id: 'ninjaBikeMessengerBagExoticBackpack', name: "NinjaBike Messenger Bag", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Backpack, talentId: 'ninjaBikeResourcefulTalent', coreAttributeHint: 'weaponDamage' },
};
export const ALL_NAMED_BACKPACK_ITEMS_LIST = Object.values(NAMED_BACKPACK_ITEMS_DATA);

export const NAMED_GLOVES_ITEMS_DATA: Record<string, NamedItemInfo> = {
  deathgrips: { id: 'deathgrips', name: 'Deathgrips', brandId: 'fiveElevenTactical', slot: GearSlotId.Gloves, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Unique Attribute: +10% Armor on Kill' },
  motherlyLove: { id: 'motherlyLove', name: 'Motherly Love', brandId: 'alpsSummitArmaments', slot: GearSlotId.Gloves, talentId: null, coreAttributeHint: 'skillTier', specialAttributeDescription: 'Unique Attribute: +20% Skill Health' },
  contractorsGloves: { id: 'contractorsGloves', name: "Contractor's Gloves", brandId: 'petrovDefenseGroup', slot: GearSlotId.Gloves, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Unique Attribute: +8% Damage to Armor' },
  firmHandshake: { id: 'firmHandshake', name: 'Firm Handshake', brandId: 'sokolovConcern', slot: GearSlotId.Gloves, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Unique Attribute: +15% Status Effects' },
  btsuDataglovesExotic: { id: 'btsuDataglovesExotic', name: "BTSU Datagloves", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Gloves, talentId: 'transferenceOverclockTalent', coreAttributeHint: 'skillTier' },
  bloodyKnucklesExotic: { id: 'bloodyKnucklesExotic', name: "Bloody Knuckles", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Gloves, talentId: 'overTheTopTalent', coreAttributeHint: 'weaponDamage' },
  ruggedGauntletsExotic: { id: 'ruggedGauntletsExotic', name: "Rugged Gauntlets", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Gloves, talentId: 'ironGripTalent', coreAttributeHint: 'weaponDamage' },
};
export const ALL_NAMED_GLOVES_ITEMS_LIST = Object.values(NAMED_GLOVES_ITEMS_DATA);

export const NAMED_HOLSTER_ITEMS_DATA: Record<string, NamedItemInfo> = {
  ammoDump: { id: 'ammoDump', name: 'Ammo Dump', brandId: 'badgerTuff', slot: GearSlotId.Holster, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Unique Attribute: +10% Ammo Capacity' },
  picarosHolster: { id: 'picarosHolster', name: "Picaro's Holster", brandId: 'brazosDeArcabuz', slot: GearSlotId.Holster, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Unique Attribute: +15% Weapon Damage' },
  forge: { id: 'forge', name: 'Forge', brandId: 'richterAndKaiser', slot: GearSlotId.Holster, talentId: null, coreAttributeHint: 'skillTier', specialAttributeDescription: 'Unique Attribute: +50% Shield Health' },
  clawsOut: { id: 'clawsOut', name: 'Claws Out', brandId: 'wyvernWear', slot: GearSlotId.Holster, talentId: null, coreAttributeHint: 'skillTier', specialAttributeDescription: 'Unique Attribute: +500% Melee Damage, +20% Pistol Damage' },
  dodgeCityGunslingersHolsterExotic: { id: 'dodgeCityGunslingersHolsterExotic', name: "Dodge City Gunslinger's Holster", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Holster, talentId: 'quickDrawTalent', coreAttributeHint: 'weaponDamage' },
  imperialDynastyExoticHolster: { id: 'imperialDynastyExoticHolster', name: "Imperial Dynasty", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Holster, talentId: 'dragonsGlareTalent', coreAttributeHint: 'skillTier' },
  shockerPunchExoticHolster: { id: 'shockerPunchExoticHolster', name: "Shocker Punch", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Holster, talentId: 'defibrillatorTalent', coreAttributeHint: 'armorCore' },
  waveformExoticHolster: { id: 'waveformExoticHolster', name: "Waveform", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Holster, talentId: 'alternatingCurrentTalent', coreAttributeHint: 'skillTier' },
  nimbleHolsterExotic: { id: 'nimbleHolsterExotic', name: "Nimble Holster", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Holster, talentId: 'bobAndWeaveTalent', coreAttributeHint: 'weaponDamage' }, 
};
export const ALL_NAMED_HOLSTER_ITEMS_LIST = Object.values(NAMED_HOLSTER_ITEMS_DATA);

export const NAMED_KNEEPADS_ITEMS_DATA: Record<string, NamedItemInfo> = {
  emperorsGuard: { id: 'emperorsGuard', name: "Emperor's Guard", brandId: 'murakamiIndustries', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'skillTier', specialAttributeDescription: 'Unique Attribute: +1% Armor Regeneration' },
  foxsPrayer: { id: 'foxsPrayer', name: "Fox's Prayer", brandId: 'overlordArmaments', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Unique Attribute: +8% Damage to Targets Out of Cover' },
  punchDrunk: { id: 'punchDrunk', name: 'Punch Drunk', brandId: 'douglasAndHarding', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'weaponDamage', specialAttributeDescription: 'Unique Attribute: +20% Headshot Damage' },
  cloakKneepads: { id: 'cloakKneepads', name: "Cloak", brandId: 'imminenceArmaments', slot: GearSlotId.Kneepads, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: '+50% Reduced Threat' }, 
  ninjaBikeMessengerKneepadsExotic: { id: 'ninjaBikeMessengerKneepadsExotic', name: "NinjaBike Messenger Kneepads", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Kneepads, talentId: 'parkourTalent', coreAttributeHint: 'weaponDamage' },
  sawyersKneepadsExotic: { id: 'sawyersKneepadsExotic', name: "Sawyer's Kneepads", brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Kneepads, talentId: 'standYourGroundTalent', coreAttributeHint: 'armorCore' },
};
export const ALL_NAMED_KNEEPADS_ITEMS_LIST = Object.values(NAMED_KNEEPADS_ITEMS_DATA);

export const NAMED_MASK_ITEMS_DATA: Record<string, NamedItemInfo> = {
  chillOut: { id: 'chillOut', name: 'Chill Out', brandId: 'gilaGuard', slot: GearSlotId.Mask, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Christmas Event Item (attributes may vary or be unique)' },
  nightwatcher: { id: 'nightwatcher', name: 'Nightwatcher', brandId: 'gilaGuard', slot: GearSlotId.Mask, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Unique Attribute: +100% Scanner Pulse Haste' },
  theHollowMan: { id: 'theHollowMan', name: 'The Hollow Man', brandId: 'yaahlGear', slot: GearSlotId.Mask, talentId: null, coreAttributeHint: 'armorCore', specialAttributeDescription: 'Unique Attribute: +10% Damage to Health' },
  tinkererMaskExotic: {id: 'tinkererMaskExotic', name: 'Tinkerer', brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Mask, talentId: 'abridgedTalent', coreAttributeHint: 'weaponDamage' }, 
  theCatalystMaskExotic: {id: 'theCatalystMaskExotic', name: 'The Catalyst', brandId: 'exoticPlaceholderBrand', slot: GearSlotId.Mask, talentId: 'chemicalAgentCatalysisTalent', coreAttributeHint: 'weaponDamage' }, 
};
export const ALL_NAMED_MASK_ITEMS_LIST = Object.values(NAMED_MASK_ITEMS_DATA);


export const GEAR_MOD_TYPES_DATA: Record<GearModType, GearModTypeData> = {
  [GearModType.Offensive]: { id: GearModType.Offensive, name: 'Offensive Mod', color: 'red' },
  [GearModType.Defensive]: { id: GearModType.Defensive, name: 'Defensive Mod', color: 'blue' },
  [GearModType.Utility]: { id: GearModType.Utility, name: 'Utility Mod', color: 'yellow' },
};
export const ALL_GEAR_MOD_TYPES_LIST = Object.values(GEAR_MOD_TYPES_DATA);

export const GEAR_MODS_DATA: Record<GearModId, GearModData> = {
  offensiveCritChanceMod: { id: 'offensiveCritChanceMod', name: 'Crit Chance Mod', type: GearModType.Offensive, color: 'red', description: '+6% Critical Hit Chance', statEffect: { stat: 'criticalHitChance', value: 6, isPercentage: true } },
  offensiveCritDamageMod: { id: 'offensiveCritDamageMod', name: 'Crit Damage Mod', type: GearModType.Offensive, color: 'red', description: '+12% Critical Hit Damage', statEffect: { stat: 'criticalHitDamage', value: 12, isPercentage: true } },
  offensiveHeadshotDamageMod: { id: 'offensiveHeadshotDamageMod', name: 'Headshot Dmg Mod', type: GearModType.Offensive, color: 'red', description: '+10% Headshot Damage', statEffect: { stat: 'headshotDamage', value: 10, isPercentage: true } },
  defensiveArmorMod: { id: 'defensiveArmorMod', name: 'Armor Mod', type: GearModType.Defensive, color: 'blue', description: '+18,500 Armor', statEffect: { stat: 'armor', value: 18500 } },
  defensiveProtectionFromElitesMod: { id: 'defensiveProtectionFromElitesMod', name: 'Protection from Elites Mod', type: GearModType.Defensive, color: 'blue', description: '+13% Protection from Elites', statEffect: { stat: 'protectionFromElites', value: 13, isPercentage: true } },
  defensiveHealthMod: { id: 'defensiveHealthMod', name: 'Health Mod', type: GearModType.Defensive, color: 'blue', description: '+20,000 Health', statEffect: { stat: 'health', value: 20000 } },
  defensiveArmorOnKillMod: { id: 'defensiveArmorOnKillMod', name: 'Armor On Kill Mod', type: GearModType.Defensive, color: 'blue', description: '+18,500 Armor on Kill', statEffect: { stat: 'armorOnKill', value: 18500 } },
  defensiveIncomingRepairsMod: { id: 'defensiveIncomingRepairsMod', name: 'Incoming Repairs Mod', type: GearModType.Defensive, color: 'blue', description: '+20% Incoming Repairs', statEffect: { stat: 'incomingRepairs', value: 20, isPercentage: true } },
  defensiveBleedResistanceMod: { id: 'defensiveBleedResistanceMod', name: 'Bleed Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Bleed Resistance', statEffect: { stat: 'bleedResistance', value: 10, isPercentage: true } },
  defensiveBlindDeafResistanceMod: { id: 'defensiveBlindDeafResistanceMod', name: 'Blind/Deaf Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Blind/Deaf Resistance', statEffect: { stat: 'blindDeafResistance', value: 10, isPercentage: true } },
  defensiveBurnResistanceMod: { id: 'defensiveBurnResistanceMod', name: 'Burn Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Burn Resistance', statEffect: { stat: 'burnResistance', value: 10, isPercentage: true } },
  defensiveDisorientResistanceMod: { id: 'defensiveDisorientResistanceMod', name: 'Disorient Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Disorient Resistance', statEffect: { stat: 'disorientResistance', value: 10, isPercentage: true } },
  defensiveDisruptResistanceMod: { id: 'defensiveDisruptResistanceMod', name: 'Disrupt Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Disrupt Resistance', statEffect: { stat: 'disruptResistance', value: 10, isPercentage: true } },
  defensiveEnsnareResistanceMod: { id: 'defensiveEnsnareResistanceMod', name: 'Ensnare Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Ensnare Resistance', statEffect: { stat: 'ensnareResistance', value: 10, isPercentage: true } },
  defensiveShockResistanceMod: { id: 'defensiveShockResistanceMod', name: 'Shock Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Shock Resistance', statEffect: { stat: 'shockResistance', value: 10, isPercentage: true } },
  defensivePulseResistanceMod: { id: 'defensivePulseResistanceMod', name: 'Pulse Resistance Mod', type: GearModType.Defensive, color: 'blue', description: '+10% Pulse Resistance', statEffect: { stat: 'pulseResistance', value: 10, isPercentage: true } },
  utilitySkillHasteMod: { id: 'utilitySkillHasteMod', name: 'Skill Haste Mod', type: GearModType.Utility, color: 'yellow', description: '+12% Skill Haste', statEffect: { stat: 'skillHaste', value: 12, isPercentage: true } },
  utilitySkillDamageMod: { id: 'utilitySkillDamageMod', name: 'Skill Damage Mod', type: GearModType.Utility, color: 'yellow', description: '+10% Skill Damage', statEffect: { stat: 'skillDamage', value: 10, isPercentage: true } },
  utilitySkillRepairMod: { id: 'utilitySkillRepairMod', name: 'Repair Skills Mod', type: GearModType.Utility, color: 'yellow', description: '+20% Repair Skills', statEffect: { stat: 'skillRepair', value: 20, isPercentage: true } },
  utilityStatusEffectsMod: { id: 'utilityStatusEffectsMod', name: 'Status Effects Mod', type: GearModType.Utility, color: 'yellow', description: '+10% Status Effects', statEffect: { stat: 'statusEffects', value: 10, isPercentage: true } },
  utilitySkillDurationMod: { id: 'utilitySkillDurationMod', name: 'Skill Duration Mod', type: GearModType.Utility, color: 'yellow', description: '+20% Skill Duration', statEffect: { stat: 'skillDuration', value: 20, isPercentage: true } },
};
export const ALL_GEAR_MODS_LIST = Object.values(GEAR_MODS_DATA);


export const SKILL_DEFINITIONS_DATA: Record<SkillNameId, SkillDefinition> = {
  [SkillNameId.ChemLauncher]: {
    id: SkillNameId.ChemLauncher,
    name: "Chem Launcher",
    modSlots: [
      { id: "chemLauncherEffectMod", name: "Effect Mod" }, 
      { id: "chemLauncherResourceMod", name: "Resource Mod" }, 
      { id: "chemLauncherRadiusMod", name: "Radius/Haste Mod" } 
    ]
  },
  [SkillNameId.Decoy]: {
    id: SkillNameId.Decoy,
    name: "Decoy",
    modSlots: [
      { id: "decoyHealthMod", name: "Health Mod" },
      { id: "decoyDurationMod", name: "Duration Mod" },
      { id: "decoyDeflectDurationMod", name: "Deflect Duration Mod" }
    ]
  },
  [SkillNameId.Drone]: {
    id: SkillNameId.Drone,
    name: "Drone",
    modSlots: [
      { id: "dronePrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "droneHealthMod", name: "Health Mod" },
      { id: "droneDurationOrSecondaryEffectMod", name: "Duration/Secondary Mod" } 
    ]
  },
  [SkillNameId.Firefly]: {
    id: SkillNameId.Firefly,
    name: "Firefly",
    modSlots: [
      { id: "fireflyPrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "fireflySpeedMod", name: "Speed Mod" },
      { id: "fireflySecondaryEffectMod", name: "Secondary Effect Mod" } 
    ]
  },
  [SkillNameId.Hive]: {
    id: SkillNameId.Hive,
    name: "Hive",
    modSlots: [
      { id: "hivePrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "hiveRangeMod", name: "Range/Efficiency Mod" }, 
      { id: "hiveSecondaryEffectMod", name: "Secondary Effect Mod" } 
    ]
  },
  [SkillNameId.Pulse]: {
    id: SkillNameId.Pulse,
    name: "Pulse",
    modSlots: [
      { id: "pulsePrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "pulseSecondaryEffectMod", name: "Secondary Effect Mod" }, 
      { id: "pulseHasteMod", name: "Haste Mod" }
    ]
  },
  [SkillNameId.SeekerMine]: {
    id: SkillNameId.SeekerMine,
    name: "Seeker Mine",
    modSlots: [
      { id: "seekerPrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "seekerSecondaryEffectMod", name: "Secondary Effect Mod" }, 
      { id: "seekerHealthHasteMod", name: "Health/Haste Mod" } 
    ]
  },
  [SkillNameId.Shield]: {
    id: SkillNameId.Shield,
    name: "Shield",
    modSlots: [
      { id: "shieldPrimaryEffectMod", name: "Primary Effect Mod" }, 
      { id: "shieldRegenMod", name: "Regeneration Mod" }, 
      { id: "shieldHealthMod", name: "Health Mod" }
    ]
  },
  [SkillNameId.SmartCover]: { 
    id: SkillNameId.SmartCover,
    name: "Smart Cover",
    modSlots: [ 
      { id: "smartCoverVariantMod", name: "Variant Mod" }, 
      { id: "smartCoverStatMod1", name: "Performance Mod 1" },
      { id: "smartCoverStatMod2", name: "Performance Mod 2" }
    ],
    description: "Deploys a projectile that sticks to surfaces, creating a radius where agents in cover become Reinforced. Base Stats: Duration: 30s, Cooldown: 45s. Bonuses do not stack. Shooting an NPC destroys the projectile and refunds the skill with a 5s cooldown. Variants: Precision Smart Cover (PCS): Offensive - enhanced weapon handling, damage, auto-reload on swap. Base Radius: 5m, Handling: 15%, Dmg to Target Out of Cover: 5% (PvP: reduced by 20%). Fortified Smart Cover (FCS): Defensive - extra armor, resistances, stagger immunity. Base Radius: 8m, Bonus Armor: 50%, Explosive Res: 5%, Pulse Res: 5% (PvP only)."
  }
};
export const ALL_SKILL_DEFINITIONS_LIST = Object.values(SKILL_DEFINITIONS_DATA);

export const SKILL_MOD_OPTIONS_DATA_BASE: Omit<SkillModOptionData, 'effects'>[] = [
  { id: 'chemLauncher_firestarter_burnStrength', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherEffectMod', attributeName: 'Burn Strength', valueString: '+25%' },
  { id: 'chemLauncher_riotFoam_ensnareHealth', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherEffectMod', attributeName: 'Ensnare Health', valueString: '+25%' },
  { id: 'chemLauncher_oxidizer_damage', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherEffectMod', attributeName: 'Damage', valueString: '+25%' },
  { id: 'chemLauncher_reinforcer_heal', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherEffectMod', attributeName: 'Heal', valueString: '+25%' },
  { id: 'chemLauncher_resource_ammo', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherResourceMod', attributeName: 'Ammo', valueString: '+2' },
  { id: 'chemLauncher_resource_duration', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherResourceMod', attributeName: 'Duration', valueString: '+25%' },
  { id: 'chemLauncher_radiusHaste_radius', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherRadiusMod', attributeName: 'Radius', valueString: '+25%' },
  { id: 'chemLauncher_radiusHaste_skillHaste', skillId: SkillNameId.ChemLauncher, slotDefinitionId: 'chemLauncherRadiusMod', attributeName: 'Skill Haste', valueString: '+25%' },
  { id: 'decoy_health_health', skillId: SkillNameId.Decoy, slotDefinitionId: 'decoyHealthMod', attributeName: 'Decoy Health', valueString: '+50%' },
  { id: 'decoy_duration_duration', skillId: SkillNameId.Decoy, slotDefinitionId: 'decoyDurationMod', attributeName: 'Decoy Duration', valueString: '+25%' },
  { id: 'decoy_deflect_duration', skillId: SkillNameId.Decoy, slotDefinitionId: 'decoyDeflectDurationMod', attributeName: 'Deflect Duration', valueString: '+25%' },
  { id: 'drone_striker_damage', skillId: SkillNameId.Drone, slotDefinitionId: 'dronePrimaryEffectMod', attributeName: 'Striker Damage', valueString: '+25%' },
  { id: 'drone_fixer_armorRepair', skillId: SkillNameId.Drone, slotDefinitionId: 'dronePrimaryEffectMod', attributeName: 'Fixer Armor Repair', valueString: '+25%' },
  { id: 'drone_bombardier_extraBombs', skillId: SkillNameId.Drone, slotDefinitionId: 'dronePrimaryEffectMod', attributeName: 'Bombardier Extra Bombs', valueString: '+2' },
  { id: 'drone_health_health', skillId: SkillNameId.Drone, slotDefinitionId: 'droneHealthMod', attributeName: 'Drone Health', valueString: '+25%' },
  { id: 'drone_duration_duration', skillId: SkillNameId.Drone, slotDefinitionId: 'droneDurationOrSecondaryEffectMod', attributeName: 'Drone Duration', valueString: '+25%' }, 
  { id: 'drone_defender_damageReduction', skillId: SkillNameId.Drone, slotDefinitionId: 'droneDurationOrSecondaryEffectMod', attributeName: 'Defender Damage Reduction', valueString: '+10%' },
  { id: 'drone_tactician_scanRange', skillId: SkillNameId.Drone, slotDefinitionId: 'droneDurationOrSecondaryEffectMod', attributeName: 'Tactician Scan Range', valueString: '+25%' },
  { id: 'firefly_blinder_blindDuration', skillId: SkillNameId.Firefly, slotDefinitionId: 'fireflyPrimaryEffectMod', attributeName: 'Blinder Blind Duration', valueString: '+25%' },
  { id: 'firefly_burster_damage', skillId: SkillNameId.Firefly, slotDefinitionId: 'fireflyPrimaryEffectMod', attributeName: 'Burster Damage', valueString: '+25%' },
  { id: 'firefly_speed_speed', skillId: SkillNameId.Firefly, slotDefinitionId: 'fireflySpeedMod', attributeName: 'Firefly Speed', valueString: '+25%' },
  { id: 'firefly_haste_skillHaste', skillId: SkillNameId.Firefly, slotDefinitionId: 'fireflySecondaryEffectMod', attributeName: 'Firefly Skill Haste', valueString: '+25%' },
  { id: 'firefly_maxTargets_maxTargets', skillId: SkillNameId.Firefly, slotDefinitionId: 'fireflySecondaryEffectMod', attributeName: 'Max Targets', valueString: '+2' },
  { id: 'hive_stinger_damage', skillId: SkillNameId.Hive, slotDefinitionId: 'hivePrimaryEffectMod', attributeName: 'Stinger Damage', valueString: '+25%' },
  { id: 'hive_restorer_healing', skillId: SkillNameId.Hive, slotDefinitionId: 'hivePrimaryEffectMod', attributeName: 'Restorer Healing', valueString: '+25%' },
  { id: 'hive_reviver_revivedArmor', skillId: SkillNameId.Hive, slotDefinitionId: 'hivePrimaryEffectMod', attributeName: 'Reviver Revived Armor', valueString: '+25%' },
  { id: 'hive_booster_stimEfficiency', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveRangeMod', attributeName: 'Booster Stim Efficiency', valueString: '+25%' },
  { id: 'hive_range_radius', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveRangeMod', attributeName: 'Hive Radius', valueString: '+25%' },
  { id: 'hive_charges_repairCharges', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveSecondaryEffectMod', attributeName: 'Restorer Repair Charges', valueString: '+4' },
  { id: 'hive_charges_stimCharges', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveSecondaryEffectMod', attributeName: 'Booster Stim Charges', valueString: '+4' },
  { id: 'hive_charges_stingerCharges', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveSecondaryEffectMod', attributeName: 'Stinger Charges', valueString: '+4' },
  { id: 'hive_duration_duration', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveSecondaryEffectMod', attributeName: 'Hive Duration', valueString: '+25%' },
  { id: 'hive_health_health', skillId: SkillNameId.Hive, slotDefinitionId: 'hiveSecondaryEffectMod', attributeName: 'Hive Health', valueString: '+25%' },
  { id: 'pulse_scanner_coneSize', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulsePrimaryEffectMod', attributeName: 'Scanner Cone Size', valueString: '+25%' },
  { id: 'pulse_remote_radius', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulsePrimaryEffectMod', attributeName: 'Remote Radius', valueString: '+25%' },
  { id: 'pulse_jammer_radius', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulsePrimaryEffectMod', attributeName: 'Jammer Radius', valueString: '+25%' },
  { id: 'pulse_effect_duration', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulseSecondaryEffectMod', attributeName: 'Pulse Effect Duration', valueString: '+25%' },
  { id: 'pulse_banshee_health', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulseSecondaryEffectMod', attributeName: 'Banshee Pulse Health', valueString: '+25%' }, 
  { id: 'pulse_haste_skillHaste', skillId: SkillNameId.Pulse, slotDefinitionId: 'pulseHasteMod', attributeName: 'Pulse Skill Haste', valueString: '+25%' },
  { id: 'seeker_explosive_damage', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerPrimaryEffectMod', attributeName: 'Explosive Damage', valueString: '+25%' },
  { id: 'seeker_mender_healing', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerPrimaryEffectMod', attributeName: 'Mender Healing', valueString: '+25%' },
  { id: 'seeker_radius_radius', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerSecondaryEffectMod', attributeName: 'Seeker Radius', valueString: '+25%' },
  { id: 'seeker_cluster_mines', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerSecondaryEffectMod', attributeName: 'Cluster Mines', valueString: '+2' },
  { id: 'seeker_health_health', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerHealthHasteMod', attributeName: 'Seeker Health', valueString: '+25%' },
  { id: 'seeker_haste_skillHaste', skillId: SkillNameId.SeekerMine, slotDefinitionId: 'seekerHealthHasteMod', attributeName: 'Seeker Skill Haste', valueString: '+25%' },
  { id: 'shield_bulwark_damageBonus', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldPrimaryEffectMod', attributeName: 'Bulwark Dmg Bonus (Per Enemy)', valueString: '+5%' },
  { id: 'shield_striker_damageBonus', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldPrimaryEffectMod', attributeName: 'Striker Dmg Bonus (Per Enemy)', valueString: '+5%' },
  { id: 'shield_deflector_damage', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldPrimaryEffectMod', attributeName: 'Deflector Damage', valueString: '+25%' },
  { id: 'shield_regen_holstered', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldRegenMod', attributeName: 'Holstered Regeneration', valueString: '+25%' },
  { id: 'shield_regen_active', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldRegenMod', attributeName: 'Active Regeneration', valueString: '+10%' },
  { id: 'shield_health_health', skillId: SkillNameId.Shield, slotDefinitionId: 'shieldHealthMod', attributeName: 'Shield Health', valueString: '+25%' },
  { id: 'smartCover_precision_mod', skillId: SkillNameId.SmartCover, slotDefinitionId: 'smartCoverVariantMod', attributeName: 'Precision Smart Cover', valueString: 'Variant' },
  { id: 'smartCover_fortified_mod', skillId: SkillNameId.SmartCover, slotDefinitionId: 'smartCoverVariantMod', attributeName: 'Fortified Smart Cover', valueString: 'Variant' },
  { id: 'smartCover_radius_mod1', skillId: SkillNameId.SmartCover, slotDefinitionId: 'smartCoverStatMod1', attributeName: 'Radius', valueString: '+10%' },
  { id: 'smartCover_duration_mod2', skillId: SkillNameId.SmartCover, slotDefinitionId: 'smartCoverStatMod2', attributeName: 'Duration', valueString: '+10%' },
];

export const ALL_SKILL_MOD_OPTIONS_DATA: SkillModOptionData[] = SKILL_MOD_OPTIONS_DATA_BASE.map(baseOpt => {
  const effects: SkillModOptionEffect[] = [];
  const valueMatch = baseOpt.valueString.match(/([+-]?\d*\.?\d+)\s*(%?)/);
  let value = 0;
  let isPercentage = false;
  if (valueMatch) {
    value = parseFloat(valueMatch[1]);
    isPercentage = valueMatch[2] === '%';
  }

  if (baseOpt.id.includes('chemLauncher_firestarter_burnStrength')) effects.push({ stat: 'chemLauncherBurnStrength', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_riotFoam_ensnareHealth')) effects.push({ stat: 'chemLauncherEnsnareHealth', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_oxidizer_damage')) effects.push({ stat: 'chemLauncherDamage', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_reinforcer_heal')) effects.push({ stat: 'chemLauncherHeal', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_resource_ammo')) effects.push({ stat: 'chemLauncherAmmo', value });
  else if (baseOpt.id.includes('chemLauncher_resource_duration')) effects.push({ stat: 'chemLauncherDuration', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_radiusHaste_radius')) effects.push({ stat: 'chemLauncherRadius', value, isPercentage });
  else if (baseOpt.id.includes('chemLauncher_radiusHaste_skillHaste')) effects.push({ stat: 'chemLauncherSkillHaste', value, isPercentage });
  else if (baseOpt.id.includes('decoy_health_health')) effects.push({ stat: 'decoyHealth', value, isPercentage });
  else if (baseOpt.id.includes('decoy_duration_duration')) effects.push({ stat: 'decoyDuration', value, isPercentage });
  else if (baseOpt.id.includes('decoy_deflect_duration')) effects.push({ stat: 'decoyDeflectDuration', value, isPercentage });
  else if (baseOpt.id.includes('drone_striker_damage')) effects.push({ stat: 'droneDamage', value, isPercentage });
  else if (baseOpt.id.includes('drone_fixer_armorRepair')) effects.push({ stat: 'droneArmorRepair', value, isPercentage });
  else if (baseOpt.id.includes('drone_bombardier_extraBombs')) effects.push({ stat: 'droneExtraBombs', value });
  else if (baseOpt.id.includes('drone_health_health')) effects.push({ stat: 'droneHealth', value, isPercentage });
  else if (baseOpt.id.includes('drone_defender_damageReduction')) effects.push({ stat: 'droneDamageReduction', value, isPercentage });
  else if (baseOpt.id.includes('drone_tactician_scanRange')) effects.push({ stat: 'droneScanRange', value, isPercentage });
  else if (baseOpt.id.includes('firefly_blinder_blindDuration')) effects.push({ stat: 'fireflyBlindEffectDuration', value, isPercentage });
  else if (baseOpt.id.includes('firefly_burster_damage')) effects.push({ stat: 'fireflyDamage', value, isPercentage });
  else if (baseOpt.id.includes('firefly_speed_speed')) effects.push({ stat: 'fireflySpeed', value, isPercentage });
  else if (baseOpt.id.includes('firefly_haste_skillHaste')) effects.push({ stat: 'fireflySkillHaste', value, isPercentage });
  else if (baseOpt.id.includes('firefly_maxTargets_maxTargets')) effects.push({ stat: 'fireflyMaxTargets', value });
  else if (baseOpt.id.includes('hive_stinger_damage')) effects.push({ stat: 'hiveDamage', value, isPercentage });
  else if (baseOpt.id.includes('hive_restorer_healing')) effects.push({ stat: 'hiveHealing', value, isPercentage });
  else if (baseOpt.id.includes('hive_reviver_revivedArmor')) effects.push({ stat: 'hiveRevivedArmor', value, isPercentage });
  else if (baseOpt.id.includes('hive_booster_stimEfficiency')) effects.push({ stat: 'hiveStimEfficiency', value, isPercentage });
  else if (baseOpt.id.includes('hive_range_radius')) effects.push({ stat: 'hiveRadius', value, isPercentage });
  else if (baseOpt.id.includes('hive_charges_repairCharges')) effects.push({ stat: 'hiveRepairCharges', value });
  else if (baseOpt.id.includes('hive_charges_stimCharges')) effects.push({ stat: 'hiveStimCharges', value });
  else if (baseOpt.id.includes('hive_charges_stingerCharges')) effects.push({ stat: 'hiveStingerCharges', value });
  else if (baseOpt.id.includes('hive_duration_duration')) effects.push({ stat: 'hiveDuration', value, isPercentage });
  else if (baseOpt.id.includes('hive_health_health')) effects.push({ stat: 'hiveHealth', value, isPercentage });
  else if (baseOpt.id.includes('pulse_scanner_coneSize')) effects.push({ stat: 'pulseConeSize', value, isPercentage });
  else if (baseOpt.id.includes('pulse_remote_radius') || baseOpt.id.includes('pulse_jammer_radius')) effects.push({ stat: 'pulseRadius', value, isPercentage });
  else if (baseOpt.id.includes('pulse_effect_duration')) effects.push({ stat: 'pulseEffectDuration', value, isPercentage });
  else if (baseOpt.id.includes('pulse_banshee_health')) effects.push({ stat: 'pulseHealth', value, isPercentage }); 
  else if (baseOpt.id.includes('pulse_haste_skillHaste')) effects.push({ stat: 'pulseSkillHaste', value, isPercentage });
  else if (baseOpt.id.includes('seeker_explosive_damage')) effects.push({ stat: 'seekerMineDamage', value, isPercentage });
  else if (baseOpt.id.includes('seeker_mender_healing')) effects.push({ stat: 'seekerMineHealing', value, isPercentage });
  else if (baseOpt.id.includes('seeker_radius_radius')) effects.push({ stat: 'seekerMineRadius', value, isPercentage });
  else if (baseOpt.id.includes('seeker_cluster_mines')) effects.push({ stat: 'seekerMineClusterMines', value });
  else if (baseOpt.id.includes('seeker_health_health')) effects.push({ stat: 'seekerMineHealth', value, isPercentage });
  else if (baseOpt.id.includes('seeker_haste_skillHaste')) effects.push({ stat: 'seekerMineSkillHaste', value, isPercentage });
  else if (baseOpt.id.includes('shield_bulwark_damageBonus') || baseOpt.id.includes('shield_striker_damageBonus')) effects.push({ stat: 'shieldDamageBonusPerEnemy', value, isPercentage });
  else if (baseOpt.id.includes('shield_deflector_damage')) effects.push({ stat: 'shieldDeflectorDamage', value, isPercentage });
  else if (baseOpt.id.includes('shield_regen_holstered')) effects.push({ stat: 'shieldHolsteredRegeneration', value, isPercentage });
  else if (baseOpt.id.includes('shield_regen_active')) effects.push({ stat: 'shieldActiveRegeneration', value, isPercentage });
  else if (baseOpt.id.includes('shield_health_health')) effects.push({ stat: 'shieldHealth', value, isPercentage });
  
  return { ...baseOpt, effects };
});


export const WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY: Record<WeaponCategory, WeaponAttachmentSlotDefinition[]> = {
    [WeaponCategory.AssaultRifle]: [
        { id: 'arOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'arMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'arUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'arMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.LightMachineGun]: [
        { id: 'lmgOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'lmgMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'lmgUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'lmgMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.MarksmanRifle]: [
        { id: 'mmrOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'mmrMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'mmrUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'mmrMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.Pistol]: [
        { id: 'pistolOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic }, 
        { id: 'pistolMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'pistolMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.Rifle]: [
        { id: 'rifleOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'rifleMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'rifleUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'rifleMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.Shotgun]: [
        { id: 'shotgunOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'shotgunMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'shotgunUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'shotgunMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
    [WeaponCategory.SubmachineGun]: [
        { id: 'smgOptic', name: 'Optic Slot', category: WeaponAttachmentCategory.Optic },
        { id: 'smgMuzzle', name: 'Muzzle Slot', category: WeaponAttachmentCategory.Muzzle },
        { id: 'smgUnderbarrel', name: 'Underbarrel Slot', category: WeaponAttachmentCategory.Underbarrel },
        { id: 'smgMagazine', name: 'Magazine Slot', category: WeaponAttachmentCategory.Magazine },
    ],
};

export const ALL_WEAPON_ATTACHMENT_OPTIONS_DATA: WeaponAttachmentOptionData[] = [
    { id: 'optic_redDot_chc', name: 'Red Dot Sight', attachmentCategory: WeaponAttachmentCategory.Optic, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle, WeaponCategory.Shotgun], valueString: '+5% CHC', effects: [{ stat: 'criticalHitChance', value: 5, isPercentage: true }] },
    { id: 'optic_acog_hsd', name: 'ACOG Scope (4x)', attachmentCategory: WeaponAttachmentCategory.Optic, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.Rifle], valueString: '+15% HSD', effects: [{ stat: 'headshotDamage', value: 15, isPercentage: true }] },
    { id: 'optic_sniper_hsd', name: 'Sniper Scope (8x)', attachmentCategory: WeaponAttachmentCategory.Optic, applicableWeaponCategories: [WeaponCategory.MarksmanRifle, WeaponCategory.Rifle], valueString: '+30% HSD', effects: [{ stat: 'headshotDamage', value: 30, isPercentage: true }] },
    { id: 'optic_digital_hsd', name: 'Digital Scope', attachmentCategory: WeaponAttachmentCategory.Optic, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.LightMachineGun, WeaponCategory.Rifle], valueString: '+10% HSD', effects: [{ stat: 'headshotDamage', value: 10, isPercentage: true }] },
    { id: 'muzzle_suppressor_chc', name: 'Suppressor', attachmentCategory: WeaponAttachmentCategory.Muzzle, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.Pistol, WeaponCategory.Rifle, WeaponCategory.MarksmanRifle], valueString: '+5% CHC', effects: [{ stat: 'criticalHitChance', value: 5, isPercentage: true }] },
    { id: 'muzzle_compensator_chd', name: 'Compensator', attachmentCategory: WeaponAttachmentCategory.Muzzle, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle], valueString: '+10% CHD', effects: [{ stat: 'criticalHitDamage', value: 10, isPercentage: true }] },
    { id: 'muzzle_brake_stability', name: 'Muzzle Brake', attachmentCategory: WeaponAttachmentCategory.Muzzle, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.MarksmanRifle], valueString: '+10% Stability', effects: [{ stat: 'weaponHandling', value: 10, isPercentage: true }] }, 
    { id: 'underbarrel_grip_accuracy', name: 'Vertical Grip', attachmentCategory: WeaponAttachmentCategory.Underbarrel, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle], valueString: '+10% Accuracy', effects: [{ stat: 'weaponHandling', value: 10, isPercentage: true }] }, 
    { id: 'underbarrel_laser_chd', name: 'Laser Pointer', attachmentCategory: WeaponAttachmentCategory.Underbarrel, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle, WeaponCategory.Shotgun, WeaponCategory.Pistol], valueString: '+10% CHD', effects: [{ stat: 'criticalHitDamage', value: 10, isPercentage: true }] },
    { id: 'mag_extended_ammo', name: 'Extended Magazine', attachmentCategory: WeaponAttachmentCategory.Magazine, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.LightMachineGun, WeaponCategory.Rifle, WeaponCategory.Pistol], valueString: '+10 Rounds', effects: [{ stat: 'magazineSize', value: 10 }] }, 
    { id: 'mag_quickRelease_reload', name: 'Quick Release Mag', attachmentCategory: WeaponAttachmentCategory.Magazine, applicableWeaponCategories: [WeaponCategory.AssaultRifle, WeaponCategory.SubmachineGun, WeaponCategory.Rifle, WeaponCategory.Pistol], valueString: '+10% Reload Speed', effects: [{ stat: 'reloadSpeed', value: 10, isPercentage: true }] },
    { id: 'mag_marksman_hsd', name: 'Marksman Mag', attachmentCategory: WeaponAttachmentCategory.Magazine, applicableWeaponCategories: [WeaponCategory.MarksmanRifle], valueString: '+10% HSD', effects: [{ stat: 'headshotDamage', value: 10, isPercentage: true }] },
];

// Default stats for placeholder weapons if specific values are not available
const DEFAULT_AR_STATS = { optimalRange: 28, dropOffEnd: 70, zeroDamageRange: 100, rpm: 700, magSize: 30, reloadSpeedMs: 2200, reloadSpeedFromEmptyMs: 2700, headshotMultiplier: 1.75, weaponBonusType: 'Health', weaponBonusValuePercent: 21, level40Dmg: 88000, level40MinDmg: 78000, wt5Dmg: 48000 };
const DEFAULT_LMG_STATS = { optimalRange: 35, dropOffEnd: 85, zeroDamageRange: 115, rpm: 550, magSize: 100, reloadSpeedMs: 5000, reloadSpeedFromEmptyMs: 5500, headshotMultiplier: 1.6, weaponBonusType: 'OutOfCoverDamage', weaponBonusValuePercent: 12, level40Dmg: 110000, level40MinDmg: 100000, wt5Dmg: 60000 };
const DEFAULT_MMR_STATS = { optimalRange: 60, dropOffEnd: 150, zeroDamageRange: 200, rpm: 50, magSize: 7, reloadSpeedMs: 3000, reloadSpeedFromEmptyMs: 3500, headshotMultiplier: 3.0, weaponBonusType: 'HeadshotDamage', weaponBonusValuePercent: 135, level40Dmg: 450000, level40MinDmg: 420000, wt5Dmg: 250000 };
const DEFAULT_RIFLE_STATS = { optimalRange: 40, dropOffEnd: 100, zeroDamageRange: 140, rpm: 300, magSize: 15, reloadSpeedMs: 2700, reloadSpeedFromEmptyMs: 3200, headshotMultiplier: 2.0, weaponBonusType: 'CriticalHitDamage', weaponBonusValuePercent: 15, level40Dmg: 220000, level40MinDmg: 200000, wt5Dmg: 120000 };
const DEFAULT_SHOTGUN_STATS = { optimalRange: 10, dropOffEnd: 20, zeroDamageRange: 30, rpm: 80, magSize: 7, reloadSpeedMs: 750, reloadSpeedFromEmptyMs: 3800, headshotMultiplier: 1.5, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 500000, level40MinDmg: 450000, wt5Dmg: 280000 };
const DEFAULT_SMG_STATS = { optimalRange: 15, dropOffEnd: 40, zeroDamageRange: 60, rpm: 850, magSize: 30, reloadSpeedMs: 2000, reloadSpeedFromEmptyMs: 2500, headshotMultiplier: 1.5, weaponBonusType: 'CriticalHitChance', weaponBonusValuePercent: 21, level40Dmg: 72000, level40MinDmg: 65000, wt5Dmg: 41000 };
const DEFAULT_PISTOL_STATS = { optimalRange: 20, dropOffEnd: 50, zeroDamageRange: 70, rpm: 300, magSize: 10, reloadSpeedMs: 1700, reloadSpeedFromEmptyMs: 2000, headshotMultiplier: 2.0, weaponBonusType: 'DamageToArmor', weaponBonusValuePercent: 12, level40Dmg: 100000, level40MinDmg: 90000, wt5Dmg: 55000 };


export const ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
  { category: WeaponCategory.AssaultRifle, family: 'ACR', name: 'ACR', ...DEFAULT_AR_STATS, rpm: 700, level40Dmg: 92000, level40MinDmg: 82000 },
  { category: WeaponCategory.AssaultRifle, family: 'ACR', name: 'ACR-E', ...DEFAULT_AR_STATS, rpm: 720, level40Dmg: 93000, level40MinDmg: 83000 },
  { category: WeaponCategory.AssaultRifle, family: 'AK-M', name: 'AK-M', ...DEFAULT_AR_STATS, rpm: 600, magSize: 30, level40Dmg: 95000, level40MinDmg: 85000 },
  { category: WeaponCategory.AssaultRifle, family: 'AK-M', name: 'Black Market AK-M', ...DEFAULT_AR_STATS, rpm: 600, magSize: 30, level40Dmg: 95500, level40MinDmg: 85500 },
  { category: WeaponCategory.AssaultRifle, family: 'AK-M', name: 'Black Market AK-M Replica', ...DEFAULT_AR_STATS, rpm: 600, magSize: 30, level40Dmg: 95500, level40MinDmg: 85500 },
  { category: WeaponCategory.AssaultRifle, family: 'AK-M', name: 'Manic', ...DEFAULT_AR_STATS, rpm: 600, magSize: 30, level40Dmg: 96000, level40MinDmg: 86000, description: "Named: Manic (Perfectly Overwhelm)" },
  { category: WeaponCategory.AssaultRifle, family: 'AK-M', name: 'Military AK-M', ...DEFAULT_AR_STATS, rpm: 600, magSize: 30, level40Dmg: 95200, level40MinDmg: 85200 },
  { category: WeaponCategory.AssaultRifle, family: 'AUG', name: 'AUG A3-CQC', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 89000, level40MinDmg: 79000 },
  { category: WeaponCategory.AssaultRifle, family: 'AUG', name: 'Invisible Hand', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 90000, level40MinDmg: 80000, description: "Named: Invisible Hand (Perfect Allegro)" },
  { category: WeaponCategory.AssaultRifle, family: 'F2000', name: 'F2000', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 84000, level40MinDmg: 74000 },
  { category: WeaponCategory.AssaultRifle, family: 'F2000', name: 'F2000 Replica', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 84000, level40MinDmg: 74000 },
  { category: WeaponCategory.AssaultRifle, family: 'F2000', name: 'Shield Splinterer', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 85000, level40MinDmg: 75000, description: "Named: Shield Splinterer (Perfect Optimist)" },
  { category: WeaponCategory.AssaultRifle, family: 'FAL', name: 'FAL', ...DEFAULT_AR_STATS, rpm: 650, magSize: 20, level40Dmg: 97000, level40MinDmg: 87000 },
  { category: WeaponCategory.AssaultRifle, family: 'FAL', name: 'FAL SA-58', ...DEFAULT_AR_STATS, rpm: 650, magSize: 20, level40Dmg: 97500, level40MinDmg: 87500 },
  { category: WeaponCategory.AssaultRifle, family: 'FAL', name: 'FAL SA-58 Para', ...DEFAULT_AR_STATS, rpm: 650, magSize: 20, level40Dmg: 97200, level40MinDmg: 87200 },
  { category: WeaponCategory.AssaultRifle, family: 'FAL', name: 'FAL SA-58 Para Replica', ...DEFAULT_AR_STATS, rpm: 650, magSize: 20, level40Dmg: 97200, level40MinDmg: 87200 },
  { category: WeaponCategory.AssaultRifle, family: 'FAMAS', name: 'FAMAS 2010', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 86000, level40MinDmg: 76000 },
  { category: WeaponCategory.AssaultRifle, family: 'FAMAS', name: 'FAMAS 2010 Replica', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 86000, level40MinDmg: 76000 },
  { category: WeaponCategory.AssaultRifle, family: 'FAMAS', name: 'Burn Out', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 87000, level40MinDmg: 77000, description: "Named: Burn Out (Perfect On Empty)" },
  { category: WeaponCategory.AssaultRifle, family: 'G36', name: 'G36 C', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 88500, level40MinDmg: 78500 },
  { category: WeaponCategory.AssaultRifle, family: 'G36', name: 'G36 Enhanced', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 88700, level40MinDmg: 78700 },
  { category: WeaponCategory.AssaultRifle, family: 'G36', name: 'G36 Enhanced Replica', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 88700, level40MinDmg: 78700 },
  { category: WeaponCategory.AssaultRifle, family: 'G36', name: 'Military G36', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 88600, level40MinDmg: 78600 },
  { category: WeaponCategory.AssaultRifle, family: 'Honey Badger', name: 'Honey Badger', ...DEFAULT_AR_STATS, rpm: 790, magSize: 30, level40Dmg: 87000, level40MinDmg: 77000 },
  { category: WeaponCategory.AssaultRifle, family: 'Honey Badger', name: 'Savage Wolverine', ...DEFAULT_AR_STATS, rpm: 790, magSize: 30, level40Dmg: 88000, level40MinDmg: 78000, description: "Named: Savage Wolverine (Perfectly Close & Personal)" },
  { category: WeaponCategory.AssaultRifle, family: 'Carbine 7', name: 'Carbine 7', ...DEFAULT_AR_STATS, rpm: 790, magSize: 30, level40Dmg: 89000, level40MinDmg: 79000 },
  { category: WeaponCategory.AssaultRifle, family: 'M4', name: 'Police M4', ...DEFAULT_AR_STATS, rpm: 850, magSize: 30, level40Dmg: 88000, level40MinDmg: 78000 },
  { category: WeaponCategory.AssaultRifle, family: 'M4', name: 'Police M4 Replica', ...DEFAULT_AR_STATS, rpm: 850, magSize: 30, level40Dmg: 88000, level40MinDmg: 78000 },
  { category: WeaponCategory.AssaultRifle, family: 'M4', name: 'Pyromaniac', ...DEFAULT_AR_STATS, rpm: 850, magSize: 30, level40Dmg: 89000, level40MinDmg: 79000, description: "Named: Pyromaniac (Perfectly Ignited)" },
  { category: WeaponCategory.AssaultRifle, family: 'P416', name: 'Custom P416 G3', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 90000, level40MinDmg: 80000 },
  { category: WeaponCategory.AssaultRifle, family: 'P416', name: 'Glory Daze', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 91000, level40MinDmg: 81000, description: "Named: Glory Daze (Perfectly Nearsighted)" },
  { category: WeaponCategory.AssaultRifle, family: 'P416', name: 'Military P416', ...DEFAULT_AR_STATS, rpm: 750, magSize: 30, level40Dmg: 90500, level40MinDmg: 80500 },
  { category: WeaponCategory.AssaultRifle, family: 'PDR', name: 'PDR', ...DEFAULT_AR_STATS, rpm: 700, magSize: 30, level40Dmg: 87500, level40MinDmg: 77500 },
  { category: WeaponCategory.AssaultRifle, family: 'PDR', name: 'Test Subject', ...DEFAULT_AR_STATS, rpm: 700, magSize: 30, level40Dmg: 88500, level40MinDmg: 78500, description: "Named: Test Subject (Perfectly In Sync)" },
  { category: WeaponCategory.AssaultRifle, family: 'Mk16', name: 'Mk16', ...DEFAULT_AR_STATS, rpm: 625, magSize: 30, level40Dmg: 98000, level40MinDmg: 88000 },
  { category: WeaponCategory.AssaultRifle, family: 'Mk16', name: 'SOCOM Mk16', ...DEFAULT_AR_STATS, rpm: 625, magSize: 30, level40Dmg: 98500, level40MinDmg: 88500 },
  { category: WeaponCategory.AssaultRifle, family: 'Mk16', name: 'Tactical Mk 16', ...DEFAULT_AR_STATS, rpm: 625, magSize: 30, level40Dmg: 98200, level40MinDmg: 88200 },
  { category: WeaponCategory.AssaultRifle, family: 'Mk16', name: 'Tactical Mk 16 Replica', ...DEFAULT_AR_STATS, rpm: 625, magSize: 30, level40Dmg: 98200, level40MinDmg: 88200 },
  { category: WeaponCategory.AssaultRifle, family: 'SIG 556', name: 'Sig Sauer 556', ...DEFAULT_AR_STATS, rpm: 720, magSize: 30, level40Dmg: 89500, level40MinDmg: 79500 },
  { category: WeaponCategory.AssaultRifle, family: 'SIG 556', name: 'Mechanical Animal', ...DEFAULT_AR_STATS, rpm: 720, magSize: 30, level40Dmg: 90500, level40MinDmg: 80500, description: "Named: Mechanical Animal (Perfect Future Perfect)" },
  { category: WeaponCategory.AssaultRifle, family: 'CTAR-21', name: 'CTAR-21', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 85000, level40MinDmg: 75000 },
  { category: WeaponCategory.AssaultRifle, family: 'CTAR-21', name: 'The Railsplitter', ...DEFAULT_AR_STATS, rpm: 900, magSize: 30, level40Dmg: 86000, level40MinDmg: 76000, description: "Named: The Railsplitter (Perfectly Accurate)" },
  { category: WeaponCategory.AssaultRifle, family: 'TKB-408', name: 'TKB-408', ...DEFAULT_AR_STATS, rpm: 600, magSize: 40, level40Dmg: 94000, level40MinDmg: 84000 },
  { category: WeaponCategory.AssaultRifle, family: 'TKB-408', name: 'Kingbreaker', ...DEFAULT_AR_STATS, rpm: 600, magSize: 40, level40Dmg: 95000, level40MinDmg: 85000, description: "Named: Kingbreaker (Perfect Flatline)" },
  { category: WeaponCategory.AssaultRifle, family: 'SOCOM MK16', name: 'Lud', ...DEFAULT_AR_STATS, rpm: 625, magSize: 30, level40Dmg: 100000, level40MinDmg: 90000, wt5Dmg: 53000, description: "Named: Lud. Talent: Perfect Streamline." },
  { category: WeaponCategory.AssaultRifle, family: 'Exotic AR', name: 'Eagle Bearer', ...DEFAULT_AR_STATS, rpm: 750, magSize: 60, level40Dmg: 110000, level40MinDmg: 100000, description: "Exotic Talent: Eagle's Strike & Tenacity" },
  { category: WeaponCategory.AssaultRifle, family: 'Exotic AR', name: 'Big Horn', ...DEFAULT_AR_STATS, rpm: 600, magSize: 40, level40Dmg: 115000, level40MinDmg: 105000, description: "Exotic Talent: Big Game Hunter (Dual Mode)" },
  { category: WeaponCategory.AssaultRifle, family: 'Exotic AR', name: 'Chameleon', ...DEFAULT_AR_STATS, rpm: 900, magSize: 50, level40Dmg: 83000, level40MinDmg: 73000, description: "Exotic Talent: Adaptive Instincts" },
  { category: WeaponCategory.AssaultRifle, family: 'Exotic AR', name: 'Capacitor', ...DEFAULT_AR_STATS, rpm: 700, magSize: 41, level40Dmg: 87000, level40MinDmg: 77000, description: "Exotic Talent: Capacitance" },
  { category: WeaponCategory.AssaultRifle, family: 'Exotic AR', name: "St. Elmo's Engine", ...DEFAULT_AR_STATS, rpm: 900, magSize: 70, level40Dmg: 85000, level40MinDmg: 75000, description: "Exotic Talent: Actum Est" },
];
export const ALL_LMG_WEAPON_DATA_LIST: WeaponStats[] = [
  { category: WeaponCategory.LightMachineGun, family: 'GR9', name: 'GR9', ...DEFAULT_LMG_STATS, rpm: 700, magSize: 50, level40Dmg: 97000, level40MinDmg: 87000 },
  { category: WeaponCategory.LightMachineGun, family: 'GR9', name: 'Dare', ...DEFAULT_LMG_STATS, rpm: 700, magSize: 50, level40Dmg: 98000, level40MinDmg: 88000, description: "Named: Dare (Perfect Flatline)" },
  { category: WeaponCategory.LightMachineGun, family: 'Stoner LAMG', name: 'Stoner LAMG', ...DEFAULT_LMG_STATS, rpm: 580, magSize: 150, level40Dmg: 105000, level40MinDmg: 95000 },
  { category: WeaponCategory.LightMachineGun, family: 'Stoner LAMG', name: 'Quiet Roar', ...DEFAULT_LMG_STATS, rpm: 580, magSize: 150, level40Dmg: 106000, level40MinDmg: 96000, description: "Named: Quiet Roar (Perfectly Overwhelmed)" },
  { category: WeaponCategory.LightMachineGun, family: 'L86', name: 'Custom L86 A2', ...DEFAULT_LMG_STATS, rpm: 620, magSize: 30, level40Dmg: 100000, level40MinDmg: 90000 },
  { category: WeaponCategory.LightMachineGun, family: 'L86', name: 'Custom L86 A2 Replica', ...DEFAULT_LMG_STATS, rpm: 620, magSize: 30, level40Dmg: 100000, level40MinDmg: 90000 },
  { category: WeaponCategory.LightMachineGun, family: 'L86', name: 'Military L86 LSW', ...DEFAULT_LMG_STATS, rpm: 620, magSize: 30, level40Dmg: 100500, level40MinDmg: 90500 },
  { category: WeaponCategory.LightMachineGun, family: 'L86', name: 'Tabula Rasa', ...DEFAULT_LMG_STATS, rpm: 620, magSize: 30, level40Dmg: 101000, level40MinDmg: 91000, description: "Named: Tabula Rasa (Perfectly Steady Handed)" },
  { category: WeaponCategory.LightMachineGun, family: 'M249', name: 'M249 B', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 100, level40Dmg: 102000, level40MinDmg: 92000 },
  { category: WeaponCategory.LightMachineGun, family: 'M249', name: 'Black Friday', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 100, level40Dmg: 103000, level40MinDmg: 93000, description: "Named: Black Friday (Perfectly Unhinged)" },
  { category: WeaponCategory.LightMachineGun, family: 'M249', name: 'The Stinger', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 100, level40Dmg: 103500, level40MinDmg: 93500, description: "Named: The Stinger (Perfect Killer)" },
  { category: WeaponCategory.LightMachineGun, family: 'MK46', name: 'Military MK46', ...DEFAULT_LMG_STATS, rpm: 700, magSize: 100, level40Dmg: 99000, level40MinDmg: 89000 },
  { category: WeaponCategory.LightMachineGun, family: 'MK46', name: 'Military MK46 Replica', ...DEFAULT_LMG_STATS, rpm: 700, magSize: 100, level40Dmg: 99000, level40MinDmg: 89000 },
  { category: WeaponCategory.LightMachineGun, family: 'M249', name: 'Tactical M249 Para', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 100, level40Dmg: 102500, level40MinDmg: 92500 },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Black Market M60 E6', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 120500, level40MinDmg: 110500 },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Black Market M60 E6 Replica', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 120500, level40MinDmg: 110500 },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Good Times', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 121000, level40MinDmg: 111000, description: "Named: Good Times (Perfect Fast Hands)" },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Classic M60', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 120200, level40MinDmg: 110200 },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Classic M60 Replica', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 120200, level40MinDmg: 110200 },
  { category: WeaponCategory.LightMachineGun, family: 'M60', name: 'Military M60 E4', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 120000, level40MinDmg: 110000 },
  { category: WeaponCategory.LightMachineGun, family: 'MG5', name: 'Infantry MG5', ...DEFAULT_LMG_STATS, rpm: 800, magSize: 50, level40Dmg: 98000, level40MinDmg: 88000 },
  { category: WeaponCategory.LightMachineGun, family: 'MG5', name: 'Infantry MG5 Replica', ...DEFAULT_LMG_STATS, rpm: 800, magSize: 50, level40Dmg: 98000, level40MinDmg: 88000 },
  { category: WeaponCategory.LightMachineGun, family: 'MG5', name: 'MG5', ...DEFAULT_LMG_STATS, rpm: 800, magSize: 50, level40Dmg: 97800, level40MinDmg: 87800 },
  { category: WeaponCategory.LightMachineGun, family: 'MG5', name: 'Big Show', ...DEFAULT_LMG_STATS, rpm: 800, magSize: 50, level40Dmg: 98500, level40MinDmg: 88500, description: "Named: Big Show (Perfect Light 'Em Up)" },
  { category: WeaponCategory.LightMachineGun, family: 'MG5', name: 'Sleipner', ...DEFAULT_LMG_STATS, rpm: 800, magSize: 50, level40Dmg: 98200, level40MinDmg: 88200, description: "Named: Sleipner (Perfect Frenzy)" },
  { category: WeaponCategory.LightMachineGun, family: 'IWI Negev', name: 'IWI Negev', ...DEFAULT_LMG_STATS, rpm: 750, magSize: 100, level40Dmg: 115000, level40MinDmg: 105000 },
  { category: WeaponCategory.LightMachineGun, family: 'IWI Negev', name: 'Carnage', ...DEFAULT_LMG_STATS, rpm: 750, magSize: 100, level40Dmg: 116000, level40MinDmg: 106000, description: "Named: Carnage (Perfect Sadist)" },
  { category: WeaponCategory.LightMachineGun, family: 'RPK-74', name: 'Black Market RPK-74 E', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 45, level40Dmg: 105000, level40MinDmg: 95000 },
  { category: WeaponCategory.LightMachineGun, family: 'RPK-74', name: 'Black Market RPK-74 E Replica', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 45, level40Dmg: 105000, level40MinDmg: 95000 },
  { category: WeaponCategory.LightMachineGun, family: 'RPK-74', name: 'New Reliable', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 45, level40Dmg: 106000, level40MinDmg: 96000, description: "Named: New Reliable (Perfectly Optimized)" },
  { category: WeaponCategory.LightMachineGun, family: 'RPK-74', name: 'Classic RPK-74', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 45, level40Dmg: 105200, level40MinDmg: 95200 },
  { category: WeaponCategory.LightMachineGun, family: 'RPK-74', name: 'Military RPK-74 M', ...DEFAULT_LMG_STATS, rpm: 650, magSize: 45, level40Dmg: 105500, level40MinDmg: 95500 },
  { category: WeaponCategory.LightMachineGun, family: 'Exotic LMG', name: 'Bluescreen', ...DEFAULT_LMG_STATS, rpm: 500, magSize: 100, level40Dmg: 118000, level40MinDmg: 108000, description: "Exotic Talent: Disruptor Rounds" },
  { category: WeaponCategory.LightMachineGun, family: 'Exotic LMG', name: 'Pestilence', ...DEFAULT_LMG_STATS, rpm: 550, magSize: 100, level40Dmg: 112000, level40MinDmg: 102000, description: "Exotic Talent: Plague of the Outcasts" },
  { category: WeaponCategory.LightMachineGun, family: 'Exotic LMG', name: 'Bulletking', ...DEFAULT_LMG_STATS, rpm: 850, magSize: 100, reloadSpeedMs: null, reloadSpeedFromEmptyMs: null, level40Dmg: 96000, level40MinDmg: 86000, description: "Exotic Talent: Bullet Hell (Never needs reloading)" },
  {
    category: WeaponCategory.LightMachineGun,
    family: 'Exotic LMG',
    name: 'Pakhan',
    ...DEFAULT_LMG_STATS,
    rpm: 650, // RPK base
    magSize: 45 + 20, // 65 from original Pakhan talent if it increases mag size
    level40Dmg: 107000, // Slightly above RPKs
    level40MinDmg: 97000,
    description: "Exotic Talent: Pakhan (Assumed: Increased Mag Size & Damage per kill)"
  },
];
export const ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
  { category: WeaponCategory.MarksmanRifle, family: 'G28', name: 'G28', ...DEFAULT_MMR_STATS, rpm: 260, magSize: 10, level40Dmg: 290000, level40MinDmg: 270000 },
  { category: WeaponCategory.MarksmanRifle, family: 'G28', name: 'Relic', ...DEFAULT_MMR_STATS, rpm: 260, magSize: 10, level40Dmg: 295000, level40MinDmg: 275000, description: "Named: Relic (Perfect Headhunter)" },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Classic M44 Carbine', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 460000, level40MinDmg: 430000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Classic M44 Carbine Replica', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 460000, level40MinDmg: 430000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'The White Death', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 475000, level40MinDmg: 445000, description: "Named: The White Death (Perfect Determined)" },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Custom M44', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 465000, level40MinDmg: 435000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Custom M44 Replica', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 465000, level40MinDmg: 435000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Hunting M44', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 462000, level40MinDmg: 432000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M44', name: 'Oh Carol', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 470000, level40MinDmg: 440000, description: "Named: Oh Carol (Perfect Lucky Shot)" },
  { category: WeaponCategory.MarksmanRifle, family: 'M700', name: 'M700 Carbon', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 450000, level40MinDmg: 420000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M700', name: 'M700 Carbon Replica', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 450000, level40MinDmg: 420000 },
  { category: WeaponCategory.MarksmanRifle, family: 'M700', name: 'M700 Tactical', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 452000, level40MinDmg: 422000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Model 700', name: 'Model 700', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 448000, level40MinDmg: 418000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Model 700', name: 'Model 700 Replica', ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 448000, level40MinDmg: 418000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Model 700', name: "Ekim's Long Stick", ...DEFAULT_MMR_STATS, rpm: 55, magSize: 5, level40Dmg: 460000, level40MinDmg: 430000, description: "Named: Ekim's Long Stick (Perfect Ranger)" },
  { category: WeaponCategory.MarksmanRifle, family: 'SOCOM Mk20 SSR', name: 'SOCOM Mk20 SSR', ...DEFAULT_MMR_STATS, rpm: 200, magSize: 15, level40Dmg: 300000, level40MinDmg: 280000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SOCOM Mk20 SSR', name: 'SOCOM Mk20 SSR Replica', ...DEFAULT_MMR_STATS, rpm: 200, magSize: 15, level40Dmg: 300000, level40MinDmg: 280000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SOCOM Mk20 SSR', name: 'The Darkness', ...DEFAULT_MMR_STATS, rpm: 200, magSize: 15, level40Dmg: 305000, level40MinDmg: 285000, description: "Named: The Darkness (Perfectly Naked)" },
  { category: WeaponCategory.MarksmanRifle, family: 'SR-1', name: 'Adrestia SR-1', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 285000, level40MinDmg: 265000, description: "Named Adrestia SR-1 has unique skin." },
  { category: WeaponCategory.MarksmanRifle, family: 'SR-1', name: 'SR-1', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 280000, level40MinDmg: 260000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SR-1', name: 'SR-1 Replica', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 280000, level40MinDmg: 260000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SR-1', name: 'Designated Hitter', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 288000, level40MinDmg: 268000, description: "Named: Designated Hitter (Perfect Boomerang)" },
  { category: WeaponCategory.MarksmanRifle, family: 'Covert SRS', name: 'Covert SRS', ...DEFAULT_MMR_STATS, rpm: 50, magSize: 7, level40Dmg: 480000, level40MinDmg: 450000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Covert SRS', name: 'Pinprick', ...DEFAULT_MMR_STATS, rpm: 50, magSize: 7, level40Dmg: 485000, level40MinDmg: 455000, description: "Named: Pinprick (Perfect First Blood)" },
  { category: WeaponCategory.MarksmanRifle, family: 'SRS A1', name: 'SRS A1', ...DEFAULT_MMR_STATS, rpm: 50, magSize: 7, level40Dmg: 482000, level40MinDmg: 452000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SRS A1', name: 'SRS A1 Replica', ...DEFAULT_MMR_STATS, rpm: 50, magSize: 7, level40Dmg: 482000, level40MinDmg: 452000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SVD', name: 'Paratrooper SVD', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 282000, level40MinDmg: 262000 },
  { category: WeaponCategory.MarksmanRifle, family: 'SVD', name: 'Commando', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 288000, level40MinDmg: 268000, description: "Named: Commando (Perfect Naked)" },
  { category: WeaponCategory.MarksmanRifle, family: 'SVD', name: 'Surplus SVD', ...DEFAULT_MMR_STATS, rpm: 180, magSize: 10, level40Dmg: 278000, level40MinDmg: 258000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Tactical .308', name: 'Tactical .308', ...DEFAULT_MMR_STATS, rpm: 160, magSize: 10, level40Dmg: 295000, level40MinDmg: 275000 },
  { category: WeaponCategory.MarksmanRifle, family: 'Tactical .308', name: 'Scalpel', ...DEFAULT_MMR_STATS, rpm: 160, magSize: 10, level40Dmg: 300000, level40MinDmg: 280000, description: "Named: Scalpel (Perfect Future Perfect)" },
  { category: WeaponCategory.MarksmanRifle, family: 'Exotic MMR', name: 'Nemesis', ...DEFAULT_MMR_STATS, rpm: 30, magSize: 5, headshotMultiplier: 4.0, weaponBonusValuePercent: 150, level40Dmg: 600000, level40MinDmg: 550000, description: "Exotic Talent: Electromagnetic Accelerator" },
  { category: WeaponCategory.MarksmanRifle, family: 'Exotic MMR', name: 'Sacrum Imperium', ...DEFAULT_MMR_STATS, rpm: 260, magSize: 10, level40Dmg: 298000, level40MinDmg: 278000, description: "Exotic Talent: The Trap" },
  { category: WeaponCategory.MarksmanRifle, family: 'Exotic MMR', name: 'Mantis', ...DEFAULT_MMR_STATS, rpm: 50, magSize: 7, level40Dmg: 490000, level40MinDmg: 460000, description: "Exotic Talent: In Plain Sight" },
  { category: WeaponCategory.MarksmanRifle, family: 'Exotic MMR', name: 'Dread Edict', ...DEFAULT_MMR_STATS, rpm: 260, magSize: 10, level40Dmg: 292000, level40MinDmg: 272000, description: "Exotic Talent: Full Stop" },
];
export const ALL_PISTOL_WEAPON_DATA_LIST: WeaponStats[] = [
  { category: WeaponCategory.Pistol, family: '93R', name: '93R', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 20, level40Dmg: 85000, level40MinDmg: 75000 },
  { category: WeaponCategory.Pistol, family: '93R', name: 'Sharpshooters 93R', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 20, level40Dmg: 86000, level40MinDmg: 76000, description:"Named: Sharpshooters 93R (Unique Skin, part of Sharpshooter Specialization)"},
  { category: WeaponCategory.Pistol, family: '586 Magnum', name: '586 Magnum', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 6, level40Dmg: 180000, level40MinDmg: 170000 },
  { category: WeaponCategory.Pistol, family: '586 Magnum', name: 'Orbit', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 6, level40Dmg: 185000, level40MinDmg: 175000, description:"Named: Orbit (Perfect Finisher)"},
  { category: WeaponCategory.Pistol, family: '686 Magnum', name: 'Police 686 Magnum', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 6, level40Dmg: 182000, level40MinDmg: 172000 },
  { category: WeaponCategory.Pistol, family: '686 Magnum', name: 'Prophet', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 6, level40Dmg: 188000, level40MinDmg: 178000, description:"Named: Prophet (Perfectly Determined)"},
  { category: WeaponCategory.Pistol, family: '686 Magnum', name: 'Police 686 Magnum Replica', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 6, level40Dmg: 182000, level40MinDmg: 172000 },
  { category: WeaponCategory.Pistol, family: 'D50', name: 'D50', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 8, level40Dmg: 250000, level40MinDmg: 230000 },
  { category: WeaponCategory.Pistol, family: 'D50', name: 'Survivalist D50', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 8, level40Dmg: 255000, level40MinDmg: 235000, description:"Named: Survivalist D50 (Part of Survivalist Specialization)"},
  { category: WeaponCategory.Pistol, family: 'KARD-45', name: 'KARD-45', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 15, level40Dmg: 90000, level40MinDmg: 80000 },
  { category: WeaponCategory.Pistol, family: 'KARD-45', name: 'TDI "Kard" Custom', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 15, level40Dmg: 92000, level40MinDmg: 82000, description:"Named: TDI Kard Custom (+1 Skill Tier when drawn)"},
  { category: WeaponCategory.Pistol, family: 'M1911', name: 'M1911', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 7, level40Dmg: 120000, level40MinDmg: 110000 },
  { category: WeaponCategory.Pistol, family: 'M45A1', name: 'M45A1', ...DEFAULT_PISTOL_STATS, rpm: 280, magSize: 7, level40Dmg: 125000, level40MinDmg: 115000 },
  { category: WeaponCategory.Pistol, family: 'M45A1', name: 'Mozambique Special', ...DEFAULT_PISTOL_STATS, rpm: 280, magSize: 7, level40Dmg: 130000, level40MinDmg: 120000, description:"Named: Mozambique Special (Perfect Breadbasket)"},
  { category: WeaponCategory.Pistol, family: 'M1911', name: 'Tactical M1911', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 7, level40Dmg: 122000, level40MinDmg: 112000 },
  { category: WeaponCategory.Pistol, family: 'M1911', name: 'Tactical M1911 Replica', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 7, level40Dmg: 122000, level40MinDmg: 112000 },
  { category: WeaponCategory.Pistol, family: 'M9', name: 'Military M9', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 15, level40Dmg: 88000, level40MinDmg: 78000 },
  { category: WeaponCategory.Pistol, family: 'M9', name: 'Military M9 Replica', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 15, level40Dmg: 88000, level40MinDmg: 78000 },
  { category: WeaponCategory.Pistol, family: 'M9', name: "Officer's M9 A1", ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 15, level40Dmg: 88500, level40MinDmg: 78500 },
  { category: WeaponCategory.Pistol, family: 'Maxim 9', name: 'Maxim 9', ...DEFAULT_PISTOL_STATS, rpm: 400, magSize: 12, level40Dmg: 82000, level40MinDmg: 72000, description: "Integrated Suppressor" },
  { category: WeaponCategory.Pistol, family: 'P320', name: 'P320 XCompact', ...DEFAULT_PISTOL_STATS, rpm: 320, magSize: 12, level40Dmg: 95000, level40MinDmg: 85000 },
  { category: WeaponCategory.Pistol, family: 'PF45', name: 'Custom PF45', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 12, level40Dmg: 98000, level40MinDmg: 88000 },
  { category: WeaponCategory.Pistol, family: 'PF45', name: 'Lightning Rod', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 12, level40Dmg: 100000, level40MinDmg: 90000, description:"Named: Lightning Rod (Perfect Perpetuation)"},
  { category: WeaponCategory.Pistol, family: 'PF45', name: 'First Wave PF45', ...DEFAULT_PISTOL_STATS, rpm: 300, magSize: 12, level40Dmg: 98500, level40MinDmg: 88500 },
  { category: WeaponCategory.Pistol, family: 'Px4 Storm', name: 'Px4 Storm Type F', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 17, level40Dmg: 95000, level40MinDmg: 85000 },
  { category: WeaponCategory.Pistol, family: 'Px4 Storm', name: 'Px4 Storm Type T', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 17, level40Dmg: 95500, level40MinDmg: 85500 },
  { category: WeaponCategory.Pistol, family: 'Px4 Storm', name: 'Px4 Storm Type T Replica', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 17, level40Dmg: 95500, level40MinDmg: 85500 },
  { category: WeaponCategory.Pistol, family: 'Diceros', name: 'Diceros', ...DEFAULT_PISTOL_STATS, rpm: 120, magSize: 2, level40Dmg: 220000, level40MinDmg: 200000 },
  { category: WeaponCategory.Pistol, family: 'Diceros', name: 'Diceros Replica', ...DEFAULT_PISTOL_STATS, rpm: 120, magSize: 2, level40Dmg: 220000, level40MinDmg: 200000 },
  { category: WeaponCategory.Pistol, family: 'Diceros', name: 'Diceros Special', ...DEFAULT_PISTOL_STATS, rpm: 120, magSize: 2, level40Dmg: 222000, level40MinDmg: 202000 },
  { category: WeaponCategory.Pistol, family: 'Diceros', name: 'Snubnosed Diceros', ...DEFAULT_PISTOL_STATS, rpm: 120, magSize: 2, level40Dmg: 218000, level40MinDmg: 198000 },
  { category: WeaponCategory.Pistol, family: 'X-45', name: 'X-45', ...DEFAULT_PISTOL_STATS, rpm: 280, magSize: 10, level40Dmg: 105000, level40MinDmg: 95000 },
  { category: WeaponCategory.Pistol, family: 'X-45', name: 'X-45 Tactical', ...DEFAULT_PISTOL_STATS, rpm: 280, magSize: 10, level40Dmg: 105500, level40MinDmg: 95500 },
  { category: WeaponCategory.Pistol, family: 'X-45', name: 'X-45 Tactical Replica', ...DEFAULT_PISTOL_STATS, rpm: 280, magSize: 10, level40Dmg: 105500, level40MinDmg: 95500 },
  { category: WeaponCategory.Pistol, family: 'Exotic Pistol', name: 'Regulus', ...DEFAULT_PISTOL_STATS, rpm: 120, magSize: 6, level40Dmg: 500000, level40MinDmg: 480000, description:"Exotic Talent: Regicide"},
  { category: WeaponCategory.Pistol, family: 'Exotic Pistol', name: 'Liberty', ...DEFAULT_PISTOL_STATS, rpm: 150, magSize: 8, level40Dmg: 250000, level40MinDmg: 230000, description:"Exotic Talent: Liberty or Death"},
  { category: WeaponCategory.Pistol, family: 'Exotic Pistol', name: 'Busy Little Bee', ...DEFAULT_PISTOL_STATS, rpm: 350, magSize: 15, level40Dmg: 90000, level40MinDmg: 80000, description:"Exotic Talent: Busy Little Bee"},
  { category: WeaponCategory.Pistol, family: 'Exotic Pistol', name: 'Mosquito', ...DEFAULT_PISTOL_STATS, rpm: 250, magSize: 10, level40Dmg: 150000, level40MinDmg: 135000, description: "Talent: Mosquito Song. Hitting an enemy applies a stack. Stacks are shared between players. At 10 stacks, the enemy will forcefully target the last player to apply a stack for 5s. Stacks deplete every 5s. Activating the effect on an enemy will remove all stacks from other enemies."},
];
export const ALL_RIFLE_WEAPON_DATA_LIST: WeaponStats[] = [
  { category: WeaponCategory.Rifle, family: '1886', name: '1886', ...DEFAULT_RIFLE_STATS, rpm: 100, magSize: 5, level40Dmg: 320000, level40MinDmg: 300000 },
  { category: WeaponCategory.Rifle, family: '1886', name: 'The Virginian', ...DEFAULT_RIFLE_STATS, rpm: 100, magSize: 5, level40Dmg: 330000, level40MinDmg: 310000, description:"Named: The Virginian (Perfect Boomerang)"},
  { category: WeaponCategory.Rifle, family: 'ACR', name: 'ACR SS', ...DEFAULT_RIFLE_STATS, rpm: 320, magSize: 20, level40Dmg: 210000, level40MinDmg: 190000 },
  { category: WeaponCategory.Rifle, family: 'UIC15 MOD2', name: 'UIC15 MOD2', ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 20, level40Dmg: 215000, level40MinDmg: 195000 },
  { category: WeaponCategory.Rifle, family: 'M16', name: 'M16A2', ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 30, level40Dmg: 190000, level40MinDmg: 170000, description:"Burst Fire"},
  { category: WeaponCategory.Rifle, family: 'M16', name: 'M16A2 Replica', ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 30, level40Dmg: 190000, level40MinDmg: 170000, description:"Burst Fire"},
  { category: WeaponCategory.Rifle, family: 'M1A', name: 'Classic M1A', ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 10, level40Dmg: 250000, level40MinDmg: 230000 },
  { category: WeaponCategory.Rifle, family: 'M1A', name: "Baker's Dozen", ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 10, level40Dmg: 255000, level40MinDmg: 235000, description:"Named: Baker's Dozen (Perfect Lucky Shot)"},
  { category: WeaponCategory.Rifle, family: 'M1A CQB', name: 'M1A CQB', ...DEFAULT_RIFLE_STATS, rpm: 320, magSize: 10, level40Dmg: 240000, level40MinDmg: 220000 },
  { category: WeaponCategory.Rifle, family: 'M1A CQB', name: 'M1A CQB Replica', ...DEFAULT_RIFLE_STATS, rpm: 320, magSize: 10, level40Dmg: 240000, level40MinDmg: 220000 },
  { category: WeaponCategory.Rifle, family: 'M1A', name: 'SOCOM M1A', ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 15, level40Dmg: 245000, level40MinDmg: 225000 },
  { category: WeaponCategory.Rifle, family: 'M1A', name: 'Stage Left', ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 15, level40Dmg: 250000, level40MinDmg: 230000, description:"Named: Stage Left (Perfect Stable)"},
  { category: WeaponCategory.Rifle, family: 'M4', name: 'Lightweight M4', ...DEFAULT_RIFLE_STATS, rpm: 380, magSize: 30, level40Dmg: 180000, level40MinDmg: 160000 },
  { category: WeaponCategory.Rifle, family: 'LVOA-C', name: 'LVOA-C', ...DEFAULT_RIFLE_STATS, rpm: 380, magSize: 30, level40Dmg: 182000, level40MinDmg: 162000 },
  { category: WeaponCategory.Rifle, family: 'LVOA-C', name: 'LVOA-C Replica', ...DEFAULT_RIFLE_STATS, rpm: 380, magSize: 30, level40Dmg: 182000, level40MinDmg: 162000 },
  { category: WeaponCategory.Rifle, family: 'LVOA-C', name: 'Surge', ...DEFAULT_RIFLE_STATS, rpm: 380, magSize: 30, level40Dmg: 185000, level40MinDmg: 165000, description:"Named: Surge (Perfect Spike)"},
  { category: WeaponCategory.Rifle, family: 'MDR', name: 'Urban MDR', ...DEFAULT_RIFLE_STATS, rpm: 325, magSize: 15, level40Dmg: 235000, level40MinDmg: 215000 },
  { category: WeaponCategory.Rifle, family: 'MDR', name: 'Urban MDR Replica', ...DEFAULT_RIFLE_STATS, rpm: 325, magSize: 15, level40Dmg: 235000, level40MinDmg: 215000 },
  { category: WeaponCategory.Rifle, family: 'MK47', name: 'Resolute MK47', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 225000, level40MinDmg: 205000 },
  { category: WeaponCategory.Rifle, family: 'MK47', name: 'Harmony', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 230000, level40MinDmg: 210000, description:"Named: Harmony (Perfectly In Sync)"},
  { category: WeaponCategory.Rifle, family: 'Mk17', name: 'Military Mk17', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 220000, level40MinDmg: 200000 },
  { category: WeaponCategory.Rifle, family: 'Mk17', name: 'Police Mk17', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 222000, level40MinDmg: 202000 },
  { category: WeaponCategory.Rifle, family: 'Mk17', name: 'Everlasting Gaze', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 228000, level40MinDmg: 208000, description:"Named: Everlasting Gaze (Perfect Perpetuation)"},
  { category: WeaponCategory.Rifle, family: 'Mk17', name: 'Police Mk17 Replica', ...DEFAULT_RIFLE_STATS, rpm: 275, magSize: 20, level40Dmg: 222000, level40MinDmg: 202000 },
  { category: WeaponCategory.Rifle, family: 'SIG 716', name: 'SIG 716', ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 20, level40Dmg: 210000, level40MinDmg: 190000 },
  { category: WeaponCategory.Rifle, family: 'SIG 716', name: 'SIG 716 CQB', ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 20, level40Dmg: 212000, level40MinDmg: 192000 },
  { category: WeaponCategory.Rifle, family: 'SIG 716', name: 'SIG 716 Replica', ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 20, level40Dmg: 210000, level40MinDmg: 190000 },
  { category: WeaponCategory.Rifle, family: 'SIG 716', name: "Artist's Tool", ...DEFAULT_RIFLE_STATS, rpm: 350, magSize: 20, level40Dmg: 215000, level40MinDmg: 195000, description:"Named: Artist's Tool (Perfect Ranger)"},
  { category: WeaponCategory.Rifle, family: 'USC .45 ACP', name: 'USC .45 ACP', ...DEFAULT_RIFLE_STATS, rpm: 240, magSize: 20, level40Dmg: 260000, level40MinDmg: 240000 },
  { category: WeaponCategory.Rifle, family: 'USC .45 ACP', name: 'USC .45 ACP Replica', ...DEFAULT_RIFLE_STATS, rpm: 240, magSize: 20, level40Dmg: 260000, level40MinDmg: 240000 },
  { category: WeaponCategory.Rifle, family: 'Exotic Rifle', name: 'Diamondback', ...DEFAULT_RIFLE_STATS, rpm: 100, magSize: 5, level40Dmg: 325000, level40MinDmg: 305000, description:"Exotic Talent: Agonizing Bite. Diamondback randomly marks an enemy. Hitting that enemy consumes the mark, guaranteeing a critical hit with damage amplified by 20%. After hitting a mark, all shots fired are guaranteed critical hits for 5 seconds. A new random enemy is marked afterwards and whenever you reload."},
  { category: WeaponCategory.Rifle, family: 'Exotic Rifle', name: 'The Merciless', ...DEFAULT_RIFLE_STATS, rpm: 260, magSize: 30, level40Dmg: 200000, level40MinDmg: 180000, description:"Exotic Talent: Binary Trigger. This weapon fires on trigger pull and release. If both bullets hit the same enemy, gain a stack. At 7 stacks, shooting an enemy deals +500% amplified damage and creates a 7 meter explosion dealing 500% weapon damage, consuming the stacks." },
  { category: WeaponCategory.Rifle, family: 'Exotic Rifle', name: 'Doctor Home', ...DEFAULT_RIFLE_STATS, rpm: 300, magSize: 10, level40Dmg: 250000, level40MinDmg: 230000, description:"Exotic Talent: Doctor Home. Shooting an enemy with Doctor Home applies a mark. When killed, marked target drops a 10% Armor repair kit. Armor repair kit are automatically picked up and applies to the whole party. The Kit will not give bonus armor." },
  { category: WeaponCategory.Rifle, family: 'Exotic Rifle', name: 'The Ravenous', ...DEFAULT_RIFLE_STATS, rpm: 200, magSize: 10, level40Dmg: 300000, level40MinDmg: 280000, description:"Exotic Talent: Geri and Freki. On trigger-pull, fire both barrels at once. When fired from the right shoulder, hits add offensive primers, and defensive primers when fired from the left shoulder. Hits from one shoulder will detonate all of the opposite shoulder's primers when present. When detonated, each offensive primer deals 75% weapon damage, while each defensive primer grants 2% bonus armor for 5 seconds. Primer effectiveness is doubled at 10 stacks."},
  { category: WeaponCategory.Rifle, family: 'Exotic Rifle', name: 'Vindicator', ...DEFAULT_RIFLE_STATS, rpm: 280, magSize: 15, level40Dmg: 260000, level40MinDmg: 240000, description:"Exotic Talent: Ortiz Assault Interface. While scoped, the weapon will highlight a random body section of each enemy. The weapon deals +40% Weapon Damage to highlighted body sections."}
];

export const ALL_SHOTGUN_WEAPON_DATA_LIST: WeaponStats[] = [
    // AA-12 Family
    { category: WeaponCategory.Shotgun, family: 'AA-12', name: 'ACS-12', ...DEFAULT_SHOTGUN_STATS, rpm: 300, magSize: 20, level40Dmg: 320000, level40MinDmg: 290000 },
    { category: WeaponCategory.Shotgun, family: 'AA-12', name: 'Lefty - ACS-12', ...DEFAULT_SHOTGUN_STATS, rpm: 300, magSize: 20, level40Dmg: 325000, level40MinDmg: 295000, description: "Named: Lefty" },
    { category: WeaponCategory.Shotgun, family: 'AA-12', name: 'Rock n\' Roll - ACS-12', ...DEFAULT_SHOTGUN_STATS, rpm: 320, magSize: 30, level40Dmg: 310000, level40MinDmg: 280000, description: "Named: Rock n' Roll" },
    // KSG Family
    { category: WeaponCategory.Shotgun, family: 'KSG', name: 'KSG Shotgun', ...DEFAULT_SHOTGUN_STATS, rpm: 75, magSize: 12, level40Dmg: 560000, level40MinDmg: 510000 },
    { category: WeaponCategory.Shotgun, family: 'KSG', name: 'The Send-Off - KSG Shotgun', ...DEFAULT_SHOTGUN_STATS, rpm: 75, magSize: 12, level40Dmg: 570000, level40MinDmg: 520000, description: "Named: The Send-Off" },
    // Double Barrel Family
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Double Barrel Sawed Off', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 680000, level40MinDmg: 620000, optimalRange: 8, dropOffEnd: 15 },
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Backup Boomstick - Double Barrel Sawed Off', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 690000, level40MinDmg: 630000, optimalRange: 8, dropOffEnd: 15, description: "Named: Backup Boomstick" },
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Firestarter - Double Barrel Sawed Off', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 670000, level40MinDmg: 610000, optimalRange: 8, dropOffEnd: 15, description: "Named: Firestarter" },
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Double Barrel Shotgun', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 650000, level40MinDmg: 600000 },
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Double Barrel Shotgun Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 650000, level40MinDmg: 600000 },
    { category: WeaponCategory.Shotgun, family: 'Double Barrel', name: 'Boomstick - Double Barrel Shotgun', ...DEFAULT_SHOTGUN_STATS, rpm: 120, magSize: 2, level40Dmg: 660000, level40MinDmg: 610000, description: "Named: Boomstick" },
    // M870 Family
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'Custom M870 MCS', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 7, level40Dmg: 555000, level40MinDmg: 505000 },
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'Custom M870 MCS Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 7, level40Dmg: 555000, level40MinDmg: 505000 },
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'M870 Express', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 5, level40Dmg: 550000, level40MinDmg: 500000 },
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'M870 Express Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 5, level40Dmg: 550000, level40MinDmg: 500000 },
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'Military M870', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 7, level40Dmg: 560000, level40MinDmg: 510000 },
    { category: WeaponCategory.Shotgun, family: 'M870', name: 'Cuélebre – Military M870', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 7, level40Dmg: 565000, level40MinDmg: 515000, description: "Named: Cuélebre" },
    // SASG-12 Family
    { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'SASG-12', ...DEFAULT_SHOTGUN_STATS, rpm: 180, magSize: 8, level40Dmg: 450000, level40MinDmg: 400000 },
    { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'Black Market SASG-12 S', ...DEFAULT_SHOTGUN_STATS, rpm: 180, magSize: 8, level40Dmg: 455000, level40MinDmg: 405000 },
    { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'Black Market SASG-12 S Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 180, magSize: 8, level40Dmg: 455000, level40MinDmg: 405000 },
    { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'Tactical SASG-12 K', ...DEFAULT_SHOTGUN_STATS, rpm: 200, magSize: 10, level40Dmg: 440000, level40MinDmg: 390000 },
    { category: WeaponCategory.Shotgun, family: 'SASG-12', name: 'Tsunami - Tactical SASG-12 K', ...DEFAULT_SHOTGUN_STATS, rpm: 200, magSize: 10, level40Dmg: 445000, level40MinDmg: 395000, description: "Named: Tsunami" },
    // SIX12 Family
    { category: WeaponCategory.Shotgun, family: 'SIX12', name: 'SIX12', ...DEFAULT_SHOTGUN_STATS, rpm: 160, magSize: 6, level40Dmg: 490000, level40MinDmg: 440000 },
    { category: WeaponCategory.Shotgun, family: 'SIX12', name: 'The Mop - SIX12', ...DEFAULT_SHOTGUN_STATS, rpm: 160, magSize: 6, level40Dmg: 495000, level40MinDmg: 445000, description: "Named: The Mop" },
    // SPAS-12 Family
    { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'SPAS-12', ...DEFAULT_SHOTGUN_STATS, rpm: 160, magSize: 7, level40Dmg: 480000, level40MinDmg: 430000 },
    { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'SPAS-12 Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 160, magSize: 7, level40Dmg: 480000, level40MinDmg: 430000 },
    { category: WeaponCategory.Shotgun, family: 'SPAS-12', name: 'Lullaby', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 8, level40Dmg: 580000, level40MinDmg: 530000, description: "Named: Lullaby (Similar to Sweet Dreams)" },
    // Super 90 Family
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Super 90', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 470000, level40MinDmg: 420000 },
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Super 90 Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 470000, level40MinDmg: 420000 },
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Marine Super 90', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 475000, level40MinDmg: 425000 },
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Enforcer - Super 90', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 480000, level40MinDmg: 430000, description: "Named: Enforcer" },
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Tactical Super 90 SBS', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 465000, level40MinDmg: 415000, optimalRange: 9, dropOffEnd: 18 },
    { category: WeaponCategory.Shotgun, family: 'Super 90', name: 'Tactical Super 90 SBS Replica', ...DEFAULT_SHOTGUN_STATS, rpm: 170, magSize: 8, level40Dmg: 465000, level40MinDmg: 415000, optimalRange: 9, dropOffEnd: 18 },
    // Exotics
    { category: WeaponCategory.Shotgun, family: 'Exotic Shotgun', name: 'Sweet Dreams', ...DEFAULT_SHOTGUN_STATS, rpm: 70, magSize: 8, level40Dmg: 580000, level40MinDmg: 530000, description: "Exotic Talent: Sandman" },
    { category: WeaponCategory.Shotgun, family: 'Exotic Shotgun', name: 'Scorpio', ...DEFAULT_SHOTGUN_STATS, rpm: 130, magSize: 7, level40Dmg: 500000, level40MinDmg: 450000, description: "Exotic Talent: Septic Shock"},
].sort((a, b) => { // Sort by family then name for better readability
    if (a.family.startsWith('Exotic') && !b.family.startsWith('Exotic')) return 1;
    if (!a.family.startsWith('Exotic') && b.family.startsWith('Exotic')) return -1;
    if (a.family < b.family) return -1;
    if (a.family > b.family) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});


export const ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST: WeaponStats[] = [
    // Existing SMGs
    { category: WeaponCategory.SubmachineGun, family: 'MP5', name: 'MP5 ST', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 32, level40Dmg: 70000, level40MinDmg: 63000 },
    { category: WeaponCategory.SubmachineGun, family: 'MP5', name: 'MP5A2', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 32, level40Dmg: 70500, level40MinDmg: 63500 },
    { category: WeaponCategory.SubmachineGun, family: 'Vector', name: 'Vector SBR .45 ACP', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 25, level40Dmg: 65000, level40MinDmg: 58000 },
    { category: WeaponCategory.SubmachineGun, family: 'Vector', name: 'Tactical Vector SBR 9mm', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 33, level40Dmg: 64000, level40MinDmg: 57000 },
    
    // New SMGs from image
    { category: WeaponCategory.SubmachineGun, family: 'AUG', name: 'AUG A3 Para XS', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 71000, level40MinDmg: 64000 },
    { category: WeaponCategory.SubmachineGun, family: 'AUG', name: 'Enhanced AUG A3P', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 71500, level40MinDmg: 64500 },
    { category: WeaponCategory.SubmachineGun, family: 'AUG', name: 'Tactical AUG A3P', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 71200, level40MinDmg: 64200 },
    { category: WeaponCategory.SubmachineGun, family: 'AUG', name: 'Tactical AUG A3P Replica', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 71200, level40MinDmg: 64200 },

    { category: WeaponCategory.SubmachineGun, family: 'CMMG', name: 'CMMG Banshee', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 30, level40Dmg: 78000, level40MinDmg: 70000 },
    { category: WeaponCategory.SubmachineGun, family: 'CMMG', name: 'The Grudge - CMMG Banshee', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 30, level40Dmg: 78500, level40MinDmg: 70500, description: "Named: The Grudge (Perfect Vindictive)" },

    { category: WeaponCategory.SubmachineGun, family: 'MP5', name: 'MP5 ST - Cabaret', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 32, level40Dmg: 70200, level40MinDmg: 63200, description: "Named: Cabaret (Perfect Rhythmic)" },
    { category: WeaponCategory.SubmachineGun, family: 'MP5', name: 'MP5 ST Replica', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 32, level40Dmg: 70000, level40MinDmg: 63000 },
    { category: WeaponCategory.SubmachineGun, family: 'MP5', name: 'MP5-N', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 32, level40Dmg: 70300, level40MinDmg: 63300 },
    
    { category: WeaponCategory.SubmachineGun, family: 'MP7', name: 'MP7', ...DEFAULT_SMG_STATS, rpm: 900, magSize: 20, level40Dmg: 68000, level40MinDmg: 61000 },
    { category: WeaponCategory.SubmachineGun, family: 'MP7', name: 'Swap Chain - MP7', ...DEFAULT_SMG_STATS, rpm: 900, magSize: 20, level40Dmg: 68500, level40MinDmg: 61500, description: "Named: Swap Chain (Perfect Unwavering)" },

    { category: WeaponCategory.SubmachineGun, family: 'MPX', name: 'MPX', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 72000, level40MinDmg: 65000 },
    { category: WeaponCategory.SubmachineGun, family: 'MPX', name: 'Safety Distance - MPX', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 72500, level40MinDmg: 65500, description: "Named: Safety Distance (Perfect Outsider)" },
    { category: WeaponCategory.SubmachineGun, family: 'MPX', name: 'The Apartment - MPX', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 30, level40Dmg: 73000, level40MinDmg: 66000, description: "Named: The Apartment (Perfectly Measured)" },

    { category: WeaponCategory.SubmachineGun, family: 'P90', name: 'P90', ...DEFAULT_SMG_STATS, rpm: 900, magSize: 50, level40Dmg: 69000, level40MinDmg: 62000 },
    { category: WeaponCategory.SubmachineGun, family: 'P90', name: 'P90 Replica', ...DEFAULT_SMG_STATS, rpm: 900, magSize: 50, level40Dmg: 69000, level40MinDmg: 62000 },
    { category: WeaponCategory.SubmachineGun, family: 'P90', name: "Emeline's Guard - P90", ...DEFAULT_SMG_STATS, rpm: 900, magSize: 50, level40Dmg: 69500, level40MinDmg: 62500, description: "Named: Emeline's Guard (Perfect Preservation)" },

    { category: WeaponCategory.SubmachineGun, family: 'PP-19', name: 'PP-19', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 53, level40Dmg: 71800, level40MinDmg: 64800 },
    { category: WeaponCategory.SubmachineGun, family: 'PP-19', name: 'Enhanced PP-19', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 53, level40Dmg: 72000, level40MinDmg: 65000 },
    { category: WeaponCategory.SubmachineGun, family: 'PP-19', name: 'Cold Relations - Enhanced PP-19', ...DEFAULT_SMG_STATS, rpm: 800, magSize: 53, level40Dmg: 72500, level40MinDmg: 65500, description: "Named: Cold Relations (Perfect Strained)" },
    
    { category: WeaponCategory.SubmachineGun, family: 'SMG-9', name: 'Converted SMG-9', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 32, level40Dmg: 74000, level40MinDmg: 67000 },
    { category: WeaponCategory.SubmachineGun, family: 'SMG-9', name: 'Converted SMG-9 A2', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 32, level40Dmg: 74200, level40MinDmg: 67200 },
    { category: WeaponCategory.SubmachineGun, family: 'SMG-9', name: 'Converted SMG-9 Replica', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 32, level40Dmg: 74000, level40MinDmg: 67000 },

    { category: WeaponCategory.SubmachineGun, family: 'T821', name: 'Black Market T821', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 32, level40Dmg: 77000, level40MinDmg: 69000 },
    { category: WeaponCategory.SubmachineGun, family: 'T821', name: 'Black Market T821 Replica', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 32, level40Dmg: 77000, level40MinDmg: 69000 },
    { category: WeaponCategory.SubmachineGun, family: 'T821', name: 'Police T821', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 32, level40Dmg: 76800, level40MinDmg: 68800 },

    { category: WeaponCategory.SubmachineGun, family: 'Thompson', name: 'M1928', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 50, level40Dmg: 75000, level40MinDmg: 68000 },
    { category: WeaponCategory.SubmachineGun, family: 'Thompson', name: 'Tommy Gun', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 50, level40Dmg: 75000, level40MinDmg: 68000 },
    { category: WeaponCategory.SubmachineGun, family: 'Thompson', name: 'The Sleigher - Tommy Gun', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 50, level40Dmg: 75500, level40MinDmg: 68500, description: "Named: The Sleigher (Unique Event Talent)" },

    { category: WeaponCategory.SubmachineGun, family: 'UMP-45', name: 'Police UMP-45', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 25, level40Dmg: 79000, level40MinDmg: 71000 },
    { category: WeaponCategory.SubmachineGun, family: 'UMP-45', name: 'Tactical UMP-45', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 25, level40Dmg: 79200, level40MinDmg: 71200 },
    { category: WeaponCategory.SubmachineGun, family: 'UMP-45', name: 'Tactical UMP-45 Replica', ...DEFAULT_SMG_STATS, rpm: 600, magSize: 25, level40Dmg: 79200, level40MinDmg: 71200 },
    
    { category: WeaponCategory.SubmachineGun, family: 'Vector', name: 'Vector SBR .45 ACP Replica', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 25, level40Dmg: 65000, level40MinDmg: 58000 },
    { category: WeaponCategory.SubmachineGun, family: 'Vector', name: 'Dark Winter - Vector SBR .45 ACP', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 25, level40Dmg: 66000, level40MinDmg: 59000, description: "Named: Dark Winter (Perfect Killer)" },
    { category: WeaponCategory.SubmachineGun, family: 'Vector', name: 'Vector SBR 9mm', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 33, level40Dmg: 63800, level40MinDmg: 56800 },

    // Existing Exotics
    { category: WeaponCategory.SubmachineGun, family: 'Exotic SMG', name: 'Chatterbox', ...DEFAULT_SMG_STATS, rpm: 700, magSize: 60, level40Dmg: 75000, level40MinDmg: 68000, description: "Exotic Talent: Incessant Chatter" }, // P90 based
    { category: WeaponCategory.SubmachineGun, family: 'Exotic SMG', name: 'Lady Death', ...DEFAULT_SMG_STATS, rpm: 900, magSize: 32, level40Dmg: 72000, level40MinDmg: 65000, description: "Exotic Talent: Breathe Free"}, // MP5 based
    { category: WeaponCategory.SubmachineGun, family: 'Exotic SMG', name: 'Backfire', ...DEFAULT_SMG_STATS, rpm: 850, magSize: 50, level40Dmg: 68000, level40MinDmg: 61000, description: "Exotic Talent: Payment in Kind"}, // MPX based
    { category: WeaponCategory.SubmachineGun, family: 'Exotic SMG', name: 'Ouroboros', ...DEFAULT_SMG_STATS, rpm: 1200, magSize: 50, level40Dmg: 70000, level40MinDmg: 63000, description: "Exotic Talent: Rule Them All" },
];

export const EXOTIC_WEAPON_NAMES: string[] = [
  // ARs
  'Eagle Bearer', 'Big Horn', 'Chameleon', 'Capacitor', "St. Elmo's Engine",
  // LMGs
  'Bluescreen', 'Pestilence', 'Bulletking', 'Pakhan',
  // MMRs
  'Nemesis', 'Sacrum Imperium', 'Mantis', 'Dread Edict',
  // Pistols
  'Regulus', 'Liberty', 'Busy Little Bee', 'Mosquito',
  // Rifles
  'Diamondback', 'The Merciless', 'Doctor Home', 'The Ravenous', 'Vindicator',
  // Shotguns
  'Sweet Dreams', 'Scorpio',
  // SMGs
  'Chatterbox', 'Lady Death', 'Backfire', 'Ouroboros'
];

// This is a placeholder for actual fixed bonuses from exotic "mods/intrinsic parts".
// The structure allows defining stat effects similar to how weapon attachments or skill mods do.
// Example: 'Capacitor': [{ stat: 'criticalHitChance', value: 7.5, isPercentage: true }]
export const EXOTIC_WEAPON_FIXED_MOD_BONUSES: Record<string, SkillModOptionEffect[]> = {};


export const INITIAL_CALCULATED_STATS: CalculatedStats = {
  weaponDamageBonus: 0,
  criticalHitChance: 5, // Base CHC
  criticalHitDamage: 25, // Base CHD
  headshotDamage: 0,
  armor: 726000, // Approximate base armor for Level 40 character
  health: 280000, // Approximate base health for Level 40 character
  skillTiers: 0,
  skillDamage: 0,
  skillHaste: 0,
  skillRepair: 0,
  skillDuration: 0,
  statusEffects: 0,
  armorRegen: 0,
  hazardProtection: 0,
  reloadSpeed: 0,
  ammoCapacity: 0,
  magazineSize: 0,
  marksmanRifleDamage: 0,
  signatureWeaponDamage: 0,
  totalArmorBonus: 0, // This will be summed up from brands/sets then applied to armor
  armorOnKill: 0,
  healthOnKill: 0,
  smgDamage: 0,
  shotgunDamage: 0,
  rifleDamage: 0,
  lmgDamage: 0,
  pistolDamage: 0,
  weaponHandling: 0,
  rateOfFire: 0,
  disruptResistance: 0,
  pulseResistance: 0,
  damageToArmor: 0,
  damageToHealth: 0,
  damageToTargetsOutOfCover: 0,
  // Stats from Gear Mods
  protectionFromElites: 0,
  bleedResistance: 0,
  blindDeafResistance: 0,
  burnResistance: 0,
  disorientResistance: 0,
  ensnareResistance: 0,
  incomingRepairs: 0,
  shockResistance: 0,

  // Skill Mod Stats - Chem Launcher
  chemLauncherBurnStrength: 0,
  chemLauncherDamage: 0,
  chemLauncherEnsnareHealth: 0,
  chemLauncherEnsnareDuration: 0,
  chemLauncherHeal: 0,
  chemLauncherAmmo: 0,
  chemLauncherDuration: 0,
  chemLauncherRadius: 0,
  chemLauncherSkillHaste: 0,

  // Skill Mod Stats - Decoy
  decoyHealth: 0,
  decoyDuration: 0,
  decoyDeflectDuration: 0,

  // Skill Mod Stats - Drone
  droneArmorRepair: 0,
  droneDamage: 0,
  droneDamageReduction: 0,
  droneExtraBombs: 0,
  droneHealth: 0,
  droneScanRange: 0,

  // Skill Mod Stats - Firefly
  fireflyBlindEffectDuration: 0,
  fireflyDamage: 0,
  fireflySpeed: 0,
  fireflySkillHaste: 0,
  fireflyMaxTargets: 0,

  // Skill Mod Stats - Hive
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

  // Skill Mod Stats - Pulse
  pulseConeSize: 0,
  pulseRadius: 0,
  pulseEffectDuration: 0,
  pulseHealth: 0,
  pulseSkillHaste: 0,

  // Skill Mod Stats - Seeker Mine
  seekerMineDamage: 0,
  seekerMineRadius: 0,
  seekerMineSkillHaste: 0,
  seekerMineHealing: 0,
  seekerMineClusterMines: 0,
  seekerMineHealth: 0,

  // Skill Mod Stats - Shield
  shieldDamageBonusPerEnemy: 0,
  shieldDeflectorDamage: 0,
  shieldHolsteredRegeneration: 0,
  shieldHealth: 0,
  shieldActiveRegeneration: 0,
  
  // CalculatedStats specific properties
  brandSetBonuses: [],
  gearSetInfo: [],
  activeWeaponTalents: [],
};
