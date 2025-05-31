
import React, { useState, useCallback, useRef } from 'react';
import {
  Loadout, SelectedGearPiece, GearSlotId, ModalState, SelectedModSlot,
  SkillNameId, SelectedSkillState, WeaponSlotId, SelectedWeaponState,
  GearSlotConfig, WeaponSlotConfig, WeaponCategory, WeaponStats, WeaponTalentId
} from './types';
import {
  GEAR_SLOTS_CONFIG, SKILL_DEFINITIONS_DATA, WEAPON_SLOTS_CONFIG,
  ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST,
  ALL_LMG_WEAPON_DATA_LIST,
  ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST,
  ALL_PISTOL_WEAPON_DATA_LIST,
  ALL_RIFLE_WEAPON_DATA_LIST,
  ALL_SHOTGUN_WEAPON_DATA_LIST,
  ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST,
  EXOTIC_WEAPON_NAMES,
  WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY
} from './constants';
import GearItemCard from './components/GearItemCard';
import SkillCard from './components/SkillCard';
import { WeaponCard } from './components/WeaponCard';
import StatsDisplay from './components/StatsDisplay';
import LoadoutActions from './components/LoadoutActions';
import SelectorModal from './components/SelectorModal';
import { useCalculatedStats } from './hooks/useCalculatedStats';

const createFreshInitialLoadout = (): Loadout => {
  const freshLoadout: any = {};

  GEAR_SLOTS_CONFIG.forEach((gsConfig: GearSlotConfig) => {
    freshLoadout[gsConfig.id] = {
      slotId: gsConfig.id,
      itemType: null,
      itemId: null,
      coreAttributeId: null,
      minorAttributeIds: [null, null], 
      talentId: null,
      modSlots: Array(gsConfig.maxModSlots).fill(null).map(() => ({ type: null, modId: null })),
    };
  });

  freshLoadout.skill1 = { skillId: null, modSelections: [] };
  freshLoadout.skill2 = { skillId: null, modSelections: [] };

  WEAPON_SLOTS_CONFIG.forEach((wsConfig: WeaponSlotConfig) => {
    freshLoadout[wsConfig.id] = {
      weaponInstanceId: null,
      weaponCategory: null,
      talentId: null, 
      attachmentSelections: [],
    };
  });
  
  return freshLoadout as Loadout;
};

const App: React.FC = () => {
  const [loadout, setLoadout] = useState<Loadout>(createFreshInitialLoadout());
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: '',
    items: [],
    onSelect: () => {},
  });

  const calculatedStats = useCalculatedStats(loadout);
  const screenshotAreaRef = useRef<HTMLDivElement>(null);

  const handleUpdatePiece = useCallback((slotId: GearSlotId, updates: Partial<SelectedGearPiece>) => {
    setLoadout(prevLoadout => {
      const currentPiece = prevLoadout[slotId] as SelectedGearPiece;
      let newPieceState: SelectedGearPiece = { ...currentPiece, ...updates };

      if (updates.itemId === null && 'itemId' in updates) {
        const slotConfig = GEAR_SLOTS_CONFIG.find(s => s.id === slotId)!;
        newPieceState = {
          slotId: slotId,
          itemType: null,
          itemId: null,
          coreAttributeId: null,
          minorAttributeIds: [null, null], 
          talentId: null,
          modSlots: Array(slotConfig.maxModSlots).fill(null).map(() => ({ type: null, modId: null })),
        };
      } else {
        if ('itemType' in updates && updates.itemType !== currentPiece.itemType) {
          if (updates.itemType === 'brand' && (currentPiece.itemType === 'gearset' || currentPiece.itemType === 'nameditem')) {
            newPieceState.talentId = null;
          }
        }
        if (newPieceState.itemType === null) {
            newPieceState.talentId = null;
        }
        if ('modSlots' in updates && updates.modSlots) {
            newPieceState.modSlots = updates.modSlots.map(ms => ({
                type: ms?.type || null,
                modId: ms?.modId || null,
            }));
        } else if (!newPieceState.modSlots || newPieceState.modSlots.length !== GEAR_SLOTS_CONFIG.find(s => s.id === slotId)!.maxModSlots) {
           const initialModSlots: SelectedModSlot[] = Array(GEAR_SLOTS_CONFIG.find(s => s.id === slotId)!.maxModSlots).fill(null).map(() => ({ type: null, modId: null }));
           newPieceState.modSlots = newPieceState.modSlots ?
             initialModSlots.map((slot, i) => newPieceState.modSlots[i] || slot) :
             initialModSlots;
        }
      }

      return {
        ...prevLoadout,
        [slotId]: newPieceState,
      };
    });
  }, []);

  const handleUpdateSkillState = useCallback((skillSlotKey: 'skill1' | 'skill2', updates: Partial<SelectedSkillState>) => {
    setLoadout(prevLoadout => {
      const currentSkillState = prevLoadout[skillSlotKey] as SelectedSkillState;
      let newSkillState = { ...currentSkillState, ...updates };

      if (updates.skillId === null && 'skillId' in updates) {
        newSkillState = { skillId: null, modSelections: [] };
      }
      else if (updates.skillId && updates.skillId !== currentSkillState.skillId) {
        const skillDef = SKILL_DEFINITIONS_DATA[updates.skillId as SkillNameId];
        const initialModSelections = skillDef ? skillDef.modSlots.map(slot => ({
          slotDefinitionId: slot.id,
          selectedModOptionId: null,
        })) : [];
        newSkillState.modSelections = initialModSelections;
      }
      
      return {
        ...prevLoadout,
        [skillSlotKey]: newSkillState,
      };
    });
  }, []);

  const getWeaponDataForCategory = useCallback((category: WeaponCategory | null): WeaponStats[] => {
    if (!category) return [];
    if (category === WeaponCategory.AssaultRifle) return ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.LightMachineGun) return ALL_LMG_WEAPON_DATA_LIST;
    if (category === WeaponCategory.MarksmanRifle) return ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Pistol) return ALL_PISTOL_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Rifle) return ALL_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Shotgun) return ALL_SHOTGUN_WEAPON_DATA_LIST;
    if (category === WeaponCategory.SubmachineGun) return ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST;
    return [];
  }, []);

  const handleUpdateWeaponState = useCallback((weaponSlotId: WeaponSlotId, updates: Partial<SelectedWeaponState>) => {
    setLoadout(prevLoadout => {
      const currentWeaponState = prevLoadout[weaponSlotId] as SelectedWeaponState;
      let newWeaponState = { ...currentWeaponState, ...updates };

      const weaponCategoryChanged = 'weaponCategory' in updates && updates.weaponCategory !== currentWeaponState.weaponCategory;
      const weaponInstanceChanged = 'weaponInstanceId' in updates && updates.weaponInstanceId !== currentWeaponState.weaponInstanceId;

      if ((updates.weaponInstanceId === null && 'weaponInstanceId' in updates) || (updates.weaponCategory === null && 'weaponCategory' in updates) || weaponCategoryChanged) {
        const targetCategory = weaponCategoryChanged ? updates.weaponCategory : (updates.weaponCategory === null ? null : currentWeaponState.weaponCategory);
        const attachmentSlots = targetCategory ? WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY[targetCategory] || [] : [];
        
        newWeaponState = {
          weaponInstanceId: (weaponCategoryChanged || (updates.weaponCategory === null)) ? null : updates.weaponInstanceId,
          weaponCategory: targetCategory,
          talentId: null,
          attachmentSelections: attachmentSlots.map(slotDef => ({ slotDefinitionId: slotDef.id, selectedAttachmentOptionId: null })),
        };
      } else if (weaponInstanceChanged) {
         const weaponDef = getWeaponDataForCategory(newWeaponState.weaponCategory).find(w => w.name === updates.weaponInstanceId);
         const isExotic = weaponDef ? EXOTIC_WEAPON_NAMES.includes(weaponDef.name) : false;
        
         if (isExotic) {
           newWeaponState.attachmentSelections = []; 
           newWeaponState.talentId = null; 
         } else if (newWeaponState.weaponCategory) {
            const attachmentSlots = WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY[newWeaponState.weaponCategory] || [];
            newWeaponState.attachmentSelections = attachmentSlots.map(slotDef => ({ slotDefinitionId: slotDef.id, selectedAttachmentOptionId: null }));
            newWeaponState.talentId = null; 
         }
      }
      
      return {
        ...prevLoadout,
        [weaponSlotId]: newWeaponState,
      };
    });
  }, [getWeaponDataForCategory]);

  const handleClearLoadout = useCallback(() => {
    setLoadout(createFreshInitialLoadout());
  }, []);

  const getScreenshotElement = useCallback(() => screenshotAreaRef.current, []);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-4 selection:bg-orange-500 selection:text-white" ref={screenshotAreaRef}>
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-orange-500">Division 2 Loadout Builder</h1>
      </header>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section id="gear" aria-labelledby="gear-heading">
            <h2 id="gear-heading" className="text-2xl font-semibold text-orange-400 mb-4">Gear</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {GEAR_SLOTS_CONFIG.map(slotConfig => (
                <GearItemCard
                  key={slotConfig.id}
                  gearSlotConfig={slotConfig}
                  selectedPiece={loadout[slotConfig.id] as SelectedGearPiece}
                  onUpdatePiece={handleUpdatePiece}
                  setModalState={setModalState}
                />
              ))}
            </div>
          </section>

          <section id="skills" aria-labelledby="skills-heading">
             <h2 id="skills-heading" className="text-2xl font-semibold text-orange-400 mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                    skillNumber={1}
                    selectedSkillState={loadout.skill1 as SelectedSkillState}
                    onUpdateSkillState={handleUpdateSkillState}
                    setModalState={setModalState}
                />
                <SkillCard
                    skillNumber={2}
                    selectedSkillState={loadout.skill2 as SelectedSkillState}
                    onUpdateSkillState={handleUpdateSkillState}
                    setModalState={setModalState}
                />
            </div>
          </section>
          
          <section id="weapons" aria-labelledby="weapons-heading">
            <h2 id="weapons-heading" className="text-2xl font-semibold text-orange-400 mb-4">Weapons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {WEAPON_SLOTS_CONFIG.map(slotConfig => (
                <WeaponCard
                  key={slotConfig.id}
                  weaponSlotConfig={slotConfig}
                  selectedWeaponState={loadout[slotConfig.id] as SelectedWeaponState}
                  onUpdateWeaponState={handleUpdateWeaponState}
                  setModalState={setModalState}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <section id="stats" aria-labelledby="stats-heading">
            <StatsDisplay stats={calculatedStats} skill1State={loadout.skill1 as SelectedSkillState} skill2State={loadout.skill2 as SelectedSkillState} />
          </section>
          <section id="loadout-actions" aria-labelledby="loadout-actions-heading">
             <LoadoutActions 
                loadout={loadout}
                getScreenshotElement={getScreenshotElement}
                onClearLoadout={handleClearLoadout}
            />
          </section>
        </div>
      </div>

      <SelectorModal modalState={modalState} setModalState={setModalState} />
      
      <footer className="text-center text-gray-500 mt-12 py-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Division 2 Loadout Builder. All game assets are property of Ubisoft.</p>
        <p className="text-xs mt-1">This is a fan-made tool created for the community.</p>
      </footer>
    </div>
  );
};

export default App;
