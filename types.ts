
export enum GearSlotId {
  Mask = 'mask',
  Chest = 'chest',
  Holster = 'holster',
  Backpack = 'backpack',
  Gloves = 'gloves',
  Kneepads = 'kneepads',
}

export enum WeaponSlotId {
  Primary = 'primaryWeapon',
  Secondary = 'secondaryWeapon',
  Sidearm = 'sidearm',
}

export type BrandId = string; // e.g., 'gilaGuard', 'providenceDefense'
export type GearSetId = string; // e.g., 'hardWired', 'ongoingDirective'
export type CoreAttributeId = string; // e.g., 'weaponDamage', 'armor', 'skillTier'
export type MinorAttributeId = string; // e.g., 'critChance', 'critDamage'
export type TalentId = string; // e.g., 'glassCannon', 'vigilance' (for generic gear talents)
export type WeaponTalentId = string; // e.g., 'boomerang', 'breadbasket'
export type GearModId = string; // e.g., 'offensiveCritChanceMod'

export enum GearModType {
  Offensive = 'offensive',
  Defensive = 'defensive',
  Utility = 'utility',
}

export enum SkillNameId {
  ChemLauncher = 'chemLauncher',
  Decoy = 'decoy',
  Drone = 'drone',
  Firefly = 'firefly',
  Hive = 'hive',
  Pulse = 'pulse',
  SeekerMine = 'seekerMine',
  Shield = 'shield',
  SmartCover = 'smartCover', // Added new skill
}

export interface SkillModSlotDefinition {
  id: string; // Unique ID for this slot type within a skill, e.g. "agitatorSlot"
  name: string; // User-facing name like "Agitator Slot"
}

export interface SkillDefinition {
  id: SkillNameId;
  name: string; // e.g., "Chem Launcher"
  modSlots: SkillModSlotDefinition[]; // The actual slots on this skill
  description?: string; // Added for skills like Smart Cover with variant details
}

export type SkillModOptionId = string; // e.g. 'chemLauncher_agitatorSlot_burnStrength'

export interface SkillModOptionEffect {
  stat: keyof CalculatedStatsBase;
  value: number;
  isPercentage?: boolean;
}

export interface SkillModOptionData {
  id: SkillModOptionId;
  skillId: SkillNameId;
  slotDefinitionId: string; // Matches SkillModSlotDefinition.id for that skill
  attributeName: string; // "Burn Strength"
  valueString: string; // "7.5%" or "1"
  effects: SkillModOptionEffect[];
}

export interface SelectedSkillMod {
  slotDefinitionId: string; // ID of the slot on the skill (e.g., "agitatorSlot")
  selectedModOptionId: SkillModOptionId | null;
}

export interface SelectedSkillState {
  skillId: SkillNameId | null;
  modSelections: SelectedSkillMod[];
}


export interface GearSlotConfig {
  id: GearSlotId;
  name: string;
  icon?: string;
  canHaveTalent: boolean; // Indicates if the slot type can have generic talents
  maxModSlots: number; // Number of mod slots this gear piece type has
}

export interface BrandBonus {
  pieces: number;
  description: string;
}

export interface BrandData {
  id: BrandId;
  name: string;
  bonuses: BrandBonus[];
}

export interface GearSetTalent {
  name: string;
  description: string;
}

export interface GearSetBonus {
  pieces: 2 | 3 | 4;
  description: string;
  talentName?: string; // Only for 4-piece bonus
}

export interface GearSetData {
  id: GearSetId;
  name: string;
  bonuses: [
    { pieces: 2; description: string },
    { pieces: 3; description: string },
    { pieces: 4; talentName: string; description: string }
  ];
  chestTalent?: GearSetTalent;
  backpackTalent?: GearSetTalent;
}

export interface AttributeData {
  id: string;
  name: string;
  type: 'Core' | 'Minor';
  color: 'red' | 'blue' | 'yellow';
  statEffect?: { stat: keyof CalculatedStatsBase; value: number; isPercentage?: boolean };
  description?: string;
}

export interface TalentData { // For generic gear talents AND exotic gear talents
  id: TalentId;
  name: string;
  type: 'Chest' | 'Backpack' | 'Mask' | 'Holster' | 'Gloves' | 'Kneepads'; // Expanded for exotic gear
  color: 'purple' | 'gold'; // 'gold' for named item perfect talents AND exotic talents
  description: string;
}

export interface WeaponTalentData {
  id: WeaponTalentId;
  name: string;
  applicableCategories: WeaponCategory[];
  description: string;
  // effects?: any[]; // Future placeholder for stat calculation
}

export interface GearModTypeData {
  id: GearModType;
  name: string;
  color: 'red' | 'blue' | 'yellow';
}

export interface GearModData {
  id: GearModId;
  name: string;
  type: GearModType;
  color: 'red' | 'blue' | 'yellow';
  description: string; // Max value description, e.g., "+6% Critical Hit Chance"
  statEffect: { stat: keyof CalculatedStatsBase; value: number; isPercentage?: boolean };
}

export interface SelectedModSlot {
  type: GearModType | null;
  modId: GearModId | null;
}

export interface SelectedGearPiece {
  slotId: GearSlotId;
  itemType: 'brand' | 'gearset' | 'nameditem' | null;
  itemId: BrandId | GearSetId | string | null; // string for NamedItemId
  coreAttributeId: CoreAttributeId | null;
  minorAttributeIds: (MinorAttributeId | null)[];
  talentId: TalentId | null; // Generic gear talent OR Exotic gear talent
  modSlots: SelectedModSlot[];
}

export enum WeaponCategory {
  AssaultRifle = 'AssaultRifle',
  LightMachineGun = 'LightMachineGun',
  MarksmanRifle = 'MarksmanRifle',
  Pistol = 'Pistol',
  Rifle = 'Rifle',
  Shotgun = 'Shotgun',
  SubmachineGun = 'SubmachineGun',
}

export interface WeaponStats {
  category: WeaponCategory;
  family: string; // Corresponds to "Variant" in the image e.g. "AK-47"
  name: string; // Corresponds to "Weapon" in the image e.g. "AK-M" - Should be unique
  optimalRange: number;
  dropOffEnd: number;
  zeroDamageRange: number;
  rpm: number;
  magSize: number;
  reloadSpeedMs: number | null; // Can be null for weapons like Bullet King
  reloadSpeedFromEmptyMs: number | null; // Can be null for weapons like Bullet King
  headshotMultiplier: number;
  weaponBonusType: string; // e.g., "Health", "Armor", "OutOfCoverDamage", "HeadshotDamage", "CriticalHitDamage", "DamageToArmor", "CriticalHitChance"
  weaponBonusValuePercent: number; // e.g., 21 for 21%
  level40Dmg: number;
  level40MinDmg: number;
  wt5Dmg: number | null; // Can be null if data is '-'
  description?: string; // For exotic weapon talent descriptions or special notes
}

export enum WeaponAttachmentCategory {
  Optic = 'optic',
  Muzzle = 'muzzle',
  Underbarrel = 'underbarrel',
  Magazine = 'magazine',
}

export interface WeaponAttachmentSlotDefinition {
  id: string; // Unique ID for this slot type within a weapon category, e.g., "arOpticSlot"
  name: string; // User-facing name like "Optic Slot"
  category: WeaponAttachmentCategory;
}

export type WeaponAttachmentOptionId = string; // e.g., 'optic_redDotSight_chc'

export interface WeaponAttachmentOptionData {
  id: WeaponAttachmentOptionId;
  name: string; // "Red Dot Sight (+5% CHC)"
  attachmentCategory: WeaponAttachmentCategory;
  applicableWeaponCategories: WeaponCategory[]; // Which weapon types can use this
  valueString: string; // e.g., "+5% CHC"
  effects: SkillModOptionEffect[]; // Re-using SkillModOptionEffect for simplicity
}

export interface SelectedWeaponAttachment {
  slotDefinitionId: string; // e.g., "arOpticSlot"
  selectedAttachmentOptionId: WeaponAttachmentOptionId | null;
}

export interface SelectedWeaponState {
  weaponInstanceId: string | null; // Unique name of the weapon from WeaponStats
  weaponCategory: WeaponCategory | null; // To know which attachments are available
  talentId: WeaponTalentId | null; // Weapon talent (for non-exotics)
  attachmentSelections: SelectedWeaponAttachment[];
}

export interface WeaponSlotConfig {
  id: WeaponSlotId;
  name: string;
  supportedCategories: WeaponCategory[]; // e.g. Primary can be AR, SMG, LMG, etc. Sidearm usually Pistol
}


export interface Loadout {
  [key: string]: SelectedGearPiece | SelectedSkillState | SelectedWeaponState; // Generalize
  mask: SelectedGearPiece;
  chest: SelectedGearPiece;
  holster: SelectedGearPiece;
  backpack: SelectedGearPiece;
  gloves: SelectedGearPiece;
  kneepads: SelectedGearPiece;
  skill1: SelectedSkillState;
  skill2: SelectedSkillState;
  primaryWeapon: SelectedWeaponState;
  secondaryWeapon: SelectedWeaponState;
  sidearm: SelectedWeaponState;
}


// Base stats that can be directly modified
export interface CalculatedStatsBase {
  weaponDamageBonus: number;
  criticalHitChance: number;
  criticalHitDamage: number;
  headshotDamage: number;
  armor: number;
  health: number;
  skillTiers: number;
  skillDamage: number;
  skillHaste: number;
  skillRepair: number;
  skillDuration: number;
  statusEffects: number;
  armorRegen: number;
  hazardProtection: number;
  reloadSpeed: number;
  ammoCapacity: number;
  magazineSize: number;
  marksmanRifleDamage: number;
  signatureWeaponDamage: number;
  totalArmorBonus: number;
  armorOnKill: number;
  healthOnKill: number;
  smgDamage: number;
  shotgunDamage: number;
  rifleDamage: number; 
  lmgDamage: number; 
  pistolDamage: number; 
  weaponHandling: number;
  rateOfFire: number;
  disruptResistance: number;
  pulseResistance: number;
  damageToArmor: number;
  damageToHealth: number;
  damageToTargetsOutOfCover: number;
  // Stats from Gear Mods
  protectionFromElites: number;
  bleedResistance: number;
  blindDeafResistance: number;
  burnResistance: number;
  disorientResistance: number;
  ensnareResistance: number;
  incomingRepairs: number;
  shockResistance: number;

  // Skill Mod Stats - Chem Launcher
  chemLauncherBurnStrength: number;
  chemLauncherDamage: number;
  chemLauncherEnsnareHealth: number;
  chemLauncherEnsnareDuration: number;
  chemLauncherHeal: number;
  chemLauncherAmmo: number;
  chemLauncherDuration: number;
  chemLauncherRadius: number;
  chemLauncherSkillHaste: number; // Specific if different from global

  // Skill Mod Stats - Decoy
  decoyHealth: number;
  decoyDuration: number;
  decoyDeflectDuration: number;

  // Skill Mod Stats - Drone
  droneArmorRepair: number;
  droneDamage: number;
  droneDamageReduction: number;
  droneExtraBombs: number;
  droneHealth: number;
  droneScanRange: number;

  // Skill Mod Stats - Firefly
  fireflyBlindEffectDuration: number;
  fireflyDamage: number;
  fireflySpeed: number;
  fireflySkillHaste: number; // Specific
  fireflyMaxTargets: number;

  // Skill Mod Stats - Hive
  hiveDamage: number;
  hiveHealing: number;
  hiveRevivedArmor: number;
  hiveStimEfficiency: number;
  hiveRadius: number;
  hiveRepairCharges: number;
  hiveStimCharges: number;
  hiveStingerCharges: number;
  hiveDuration: number;
  hiveHealth: number;

  // Skill Mod Stats - Pulse
  pulseConeSize: number;
  pulseRadius: number;
  pulseEffectDuration: number;
  pulseHealth: number; // Assuming for a physical pulse device if applicable
  pulseSkillHaste: number; // Specific

  // Skill Mod Stats - Seeker Mine
  seekerMineDamage: number;
  seekerMineRadius: number;
  seekerMineSkillHaste: number; // Specific
  seekerMineHealing: number;
  seekerMineClusterMines: number; // Number of mines
  seekerMineHealth: number;

  // Skill Mod Stats - Shield
  shieldDamageBonusPerEnemy: number; // Might be active or holstered
  shieldDeflectorDamage: number;
  shieldHolsteredRegeneration: number;
  shieldHealth: number;
  shieldActiveRegeneration: number;
}

export interface ActiveSetInfo {
  id: GearSetId;
  name: string;
  activeBonuses: { pieces: number; description: string }[];
  fourPieceTalent?: GearSetTalent;
  activeChestTalent?: GearSetTalent;
  activeBackpackTalent?: GearSetTalent;
}

export interface ActiveWeaponTalentInfo {
  weaponSlot: WeaponSlotId;
  talentName: string;
  description: string;
}

export interface CalculatedStats extends CalculatedStatsBase {
  brandSetBonuses: { name: string; description: string }[];
  gearSetInfo: ActiveSetInfo[];
  activeWeaponTalents: ActiveWeaponTalentInfo[];
}

export interface SelectorItem {
  id: string;
  name: string;
  type: 'brand' | 'gearset' | 'nameditem' | 'modType' | 'mod' | 'skill' | 'skillModOption' | 'weaponCategory' | 'weapon' | 'weaponAttachmentOption' | 'weaponTalent';
  colorName?: 'red' | 'blue' | 'yellow' | 'purple' | 'emerald' | 'defaultYellow' | 'gold' | 'orange' | 'teal' | 'exoticRed' | 'cyan';
  description?: string;
  modType?: GearModType; // Used when item.type is 'mod' to filter
  skillId?: SkillNameId; // Used for skillModOption
  slotDefinitionId?: string; // Used for skillModOption or attachment slot
  weaponCategoryContext?: WeaponCategory; // For selecting weapons or attachments or weapon talents
  attachmentCategoryContext?: WeaponAttachmentCategory; // For selecting attachment options
}

export interface ModalState {
  isOpen: boolean;
  title: string;
  items: SelectorItem[];
  onSelect: (id: string | null, type?: SelectorItem['type'], context?: any) => void;
  allowNone?: boolean;
  context?: any; // For passing additional context like modSlotIndex, skillNumber, slotDefinitionId, weaponSlotId, attachmentSlotDefId etc.
}

export interface NamedItemInfo {
  id: string;
  name: string;
  brandId: BrandId; // Can be 'exoticPlaceholderBrand' for exotics
  slot: GearSlotId;
  talentId: TalentId | null; // For perfect talents or exotic talents
  coreAttributeHint: CoreAttributeId;
  specialAttributeDescription?: string; // For things like "Perfect Attribute: +X%" or fixed exotic attributes not covered by talent
}
