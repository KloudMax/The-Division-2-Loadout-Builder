
import React from 'react';
import { SelectedWeaponState, WeaponSlotConfig, WeaponSlotId, WeaponCategory, WeaponStats, WeaponAttachmentSlotDefinition, WeaponAttachmentOptionId, ModalState, SelectorItem, SelectedWeaponAttachment, WeaponTalentId } from '../types';
import {
    ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST,
    ALL_LMG_WEAPON_DATA_LIST,
    ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST,
    ALL_PISTOL_WEAPON_DATA_LIST, // Changed from ALL_SIDEARM_WEAPON_DATA_LIST
    ALL_WEAPON_ATTACHMENT_OPTIONS_DATA,
    WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY,
    ALL_RIFLE_WEAPON_DATA_LIST,
    ALL_SHOTGUN_WEAPON_DATA_LIST,
    EXOTIC_WEAPON_NAMES,
    ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST,
    ALL_WEAPON_TALENTS_LIST,
    WEAPON_TALENTS_DATA
} from '../constants';

interface WeaponCardProps {
  weaponSlotConfig: WeaponSlotConfig;
  selectedWeaponState: SelectedWeaponState;
  onUpdateWeaponState: (weaponSlotId: WeaponSlotId, updates: Partial<SelectedWeaponState>) => void;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

export const WeaponCard: React.FC<WeaponCardProps> = ({ weaponSlotConfig, selectedWeaponState, onUpdateWeaponState, setModalState }) => {
  const { id: weaponSlotId, name: slotName, supportedCategories } = weaponSlotConfig;

  const getWeaponDataForCategory = (category: WeaponCategory | null): WeaponStats[] => {
    if (!category) return [];
    if (category === WeaponCategory.AssaultRifle) return ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.LightMachineGun) return ALL_LMG_WEAPON_DATA_LIST;
    if (category === WeaponCategory.MarksmanRifle) return ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Pistol) return ALL_PISTOL_WEAPON_DATA_LIST; // Changed from ALL_SIDEARM_WEAPON_DATA_LIST
    if (category === WeaponCategory.Rifle) return ALL_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Shotgun) return ALL_SHOTGUN_WEAPON_DATA_LIST;
    if (category === WeaponCategory.SubmachineGun) return ALL_SUBMACHINE_GUN_WEAPON_DATA_LIST;
    return [];
  };
  
  const selectedWeaponDefinition = selectedWeaponState.weaponInstanceId && selectedWeaponState.weaponCategory
    ? getWeaponDataForCategory(selectedWeaponState.weaponCategory).find(w => w.name === selectedWeaponState.weaponInstanceId) 
    : undefined;

  const isCurrentWeaponExotic = selectedWeaponDefinition ? EXOTIC_WEAPON_NAMES.includes(selectedWeaponDefinition.name) : false;
  const selectedWeaponTalentData = selectedWeaponState.talentId ? WEAPON_TALENTS_DATA[selectedWeaponState.talentId] : null;

  const openWeaponCategorySelectorModal = () => {
    const categoryItems: SelectorItem[] = supportedCategories.map(catEnumMember => ({
        id: catEnumMember,
        name: catEnumMember.replace(/([A-Z])/g, ' $1').trim(), 
        type: 'weaponCategory',
        colorName: 'teal',
        description: `Select to view ${catEnumMember.replace(/([A-Z])/g, ' $1').trim()}s`
    }));
    
    setModalState({
        isOpen: true,
        title: `Select Weapon Category for ${slotName}`,
        items: categoryItems,
        onSelect: (categoryId) => { 
            if (categoryId === null) {
                onUpdateWeaponState(weaponSlotId, { 
                    weaponInstanceId: null, 
                    weaponCategory: null, 
                    talentId: null,
                    attachmentSelections: [] 
                });
            } else {
                const newCategory = categoryId as WeaponCategory;
                onUpdateWeaponState(weaponSlotId, { 
                    weaponInstanceId: null, 
                    weaponCategory: newCategory, 
                    talentId: null,
                    attachmentSelections: [] 
                });
                openWeaponSelectorModal(newCategory); 
            }
        },
        allowNone: true,
    });
  };

  const openWeaponSelectorModal = (category: WeaponCategory) => {
    const weaponsInCategory = getWeaponDataForCategory(category);
    if (weaponsInCategory.length === 0) {
        setModalState(prev => ({ ...prev, isOpen: false })); 
        alert(`${category.replace(/([A-Z])/g, ' $1').trim()} data is not available or empty. Please check constants.ts.`);
        onUpdateWeaponState(weaponSlotId, { 
            weaponInstanceId: null,
            weaponCategory: category, 
            talentId: null,
            attachmentSelections: []
        });
        return;
    }

    const weaponItems: SelectorItem[] = weaponsInCategory.map(w => {
      const isExoticItem = EXOTIC_WEAPON_NAMES.includes(w.name);
      const isNamedVariant = !isExoticItem && w.name !== w.family; 
      let colorName: SelectorItem['colorName'];
      if (isExoticItem) {
        colorName = 'exoticRed';
      } else if (isNamedVariant) {
        colorName = 'gold';
      } else {
        colorName = 'orange'; 
      }

      return {
        id: w.name, 
        name: `${w.family} - ${w.name}`,
        type: 'weapon',
        colorName: colorName,
        description: `RPM: ${w.rpm}, Mag: ${w.magSize}, Dmg: ${w.level40Dmg.toLocaleString()}`
      };
    });

    setModalState({
      isOpen: true,
      title: `Select ${category.replace(/([A-Z])/g, ' $1').trim()} for ${slotName}`,
      items: weaponItems.sort((a,b) => a.name.localeCompare(b.name)),
      onSelect: (weaponInstanceId) => {
        if (weaponInstanceId === null) {
            onUpdateWeaponState(weaponSlotId, { 
                weaponInstanceId: null, 
                weaponCategory: category, // Preserve current category
                talentId: null, 
                attachmentSelections: [] 
            });
        } else {
            const weaponDef = weaponsInCategory.find(w => w.name === weaponInstanceId);
            const isExotic = weaponDef ? EXOTIC_WEAPON_NAMES.includes(weaponDef.name) : false;
            let newAttachmentSelections: SelectedWeaponAttachment[] = [];
            let newTalentId: WeaponTalentId | null = null;
            
            if (!isExotic && weaponDef) { 
                const attachmentSlotsDefinitions = WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY[weaponDef.category] || [];
                newAttachmentSelections = attachmentSlotsDefinitions.map(slotDef => ({
                  slotDefinitionId: slotDef.id,
                  selectedAttachmentOptionId: null,
                }));
            }
            
            onUpdateWeaponState(weaponSlotId, { 
                weaponInstanceId: weaponInstanceId as string, 
                weaponCategory: category, 
                talentId: newTalentId,
                attachmentSelections: newAttachmentSelections 
            });
        }
      },
      allowNone: true,
      context: { weaponSlotId, weaponCategoryContext: category }
    });
  };
  
  const handleMainButtonClick = () => {
    if (selectedWeaponState.weaponCategory) {
      openWeaponSelectorModal(selectedWeaponState.weaponCategory);
    } else {
      openWeaponCategorySelectorModal();
    }
  };

  const handleChangeCategoryButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    openWeaponCategorySelectorModal();
  };

  const openAttachmentOptionSelector = (attachmentSlotDef: WeaponAttachmentSlotDefinition) => {
    if (!selectedWeaponState.weaponCategory || !selectedWeaponDefinition || isCurrentWeaponExotic) return;

    const availableAttachmentOptions = ALL_WEAPON_ATTACHMENT_OPTIONS_DATA.filter(
      opt => opt.attachmentCategory === attachmentSlotDef.category &&
             opt.applicableWeaponCategories.includes(selectedWeaponState.weaponCategory!)
    );

    const attachmentOptionItems: SelectorItem[] = availableAttachmentOptions.map(opt => ({
      id: opt.id,
      name: opt.name,
      type: 'weaponAttachmentOption',
      colorName: 'yellow',
      description: opt.valueString,
      attachmentCategoryContext: opt.attachmentCategory,
      weaponCategoryContext: selectedWeaponState.weaponCategory!,
    }));

    setModalState({
      isOpen: true,
      title: `Select ${attachmentSlotDef.name} for ${selectedWeaponDefinition.name}`,
      items: attachmentOptionItems,
      onSelect: (attachmentOptionId) => {
        const newAttachmentSelections = selectedWeaponState.attachmentSelections.map(currentAttSel =>
          currentAttSel.slotDefinitionId === attachmentSlotDef.id
            ? { ...currentAttSel, selectedAttachmentOptionId: attachmentOptionId as WeaponAttachmentOptionId | null }
            : currentAttSel
        );
        onUpdateWeaponState(weaponSlotId, { attachmentSelections: newAttachmentSelections });
      },
      allowNone: true,
      context: { weaponSlotId, weaponCategory: selectedWeaponState.weaponCategory, attachmentSlotDefId: attachmentSlotDef.id }
    });
  };

  const openWeaponTalentSelectorModal = () => {
    if (!selectedWeaponDefinition || isCurrentWeaponExotic) return;

    const applicableTalents = ALL_WEAPON_TALENTS_LIST.filter(talent => 
        talent.applicableCategories.includes(selectedWeaponDefinition.category)
    );

    const talentItems: SelectorItem[] = applicableTalents.map(talent => ({
        id: talent.id,
        name: talent.name,
        type: 'weaponTalent',
        colorName: 'purple', 
        description: talent.description,
        weaponCategoryContext: selectedWeaponDefinition.category,
    }));

    setModalState({
        isOpen: true,
        title: `Select Talent for ${selectedWeaponDefinition.name}`,
        items: talentItems,
        onSelect: (talentId) => {
            onUpdateWeaponState(weaponSlotId, { talentId: talentId as WeaponTalentId | null });
        },
        allowNone: true,
    });
  };


  let weaponButtonText = `Select ${slotName}`;
  let weaponButtonColorClass = 'text-gray-500 font-semibold';
  let weaponDescription: string | undefined = `Supported: ${supportedCategories.map(c => c.replace(/([A-Z])/g, ' $1').trim()).join(', ')}`;


  if (selectedWeaponDefinition) {
      const isExotic = EXOTIC_WEAPON_NAMES.includes(selectedWeaponDefinition.name);
      const isNamedVariant = !isExotic && selectedWeaponDefinition.name !== selectedWeaponDefinition.family;


      if (isExotic) {
          weaponButtonColorClass = 'text-red-500 font-semibold';
      } else if (isNamedVariant) {
          weaponButtonColorClass = 'text-yellow-300 font-semibold';
      } else { 
          weaponButtonColorClass = 'text-orange-300 font-semibold';
      }
      weaponButtonText = `${selectedWeaponDefinition.family} - ${selectedWeaponDefinition.name}`;
      weaponDescription = `RPM: ${selectedWeaponDefinition.rpm}, Mag: ${selectedWeaponDefinition.magSize}, Dmg: ${selectedWeaponDefinition.level40Dmg.toLocaleString()}`;
      if (isCurrentWeaponExotic) {
        weaponDescription += " (Exotic: Fixed Attachments & Talent)";
      }
  } else if (selectedWeaponState.weaponCategory) {
    weaponButtonText = `Select ${selectedWeaponState.weaponCategory.replace(/([A-Z])/g, ' $1').trim()}`;
    weaponButtonColorClass = 'text-teal-400 font-semibold'; 
    weaponDescription = `Click to choose a ${selectedWeaponState.weaponCategory.replace(/([A-Z])/g, ' $1').trim()}. Or change category.`;
  }


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">{slotName}</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            {selectedWeaponDefinition ? `Selected: ${selectedWeaponState.weaponCategory?.replace(/([A-Z])/g, ' $1').trim()}` : `Weapon Category`}
          </label>
          <button 
            onClick={handleMainButtonClick}
            className="w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors mb-1"
            aria-label={`Select ${selectedWeaponDefinition ? selectedWeaponDefinition.name : slotName}`}
          >
            <span className={weaponButtonColorClass}>
              {weaponButtonText}
            </span>
            {weaponDescription && <p className="text-xs text-gray-400 mt-1">{weaponDescription}</p>}
          </button>
          <button 
              onClick={handleChangeCategoryButtonClick}
              className="w-full text-xs text-blue-400 hover:text-blue-300 p-1 bg-gray-750 hover:bg-gray-650 rounded transition-colors"
              aria-label={`Change weapon category for ${slotName}`}
          >
              {selectedWeaponState.weaponCategory 
                ? `Change Category (Currently: ${selectedWeaponState.weaponCategory.replace(/([A-Z])/g, ' $1').trim()})` 
                : "Select Weapon Category"}
          </button>
        </div>

        {selectedWeaponDefinition && !isCurrentWeaponExotic && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Weapon Talent</label>
            <button
              onClick={openWeaponTalentSelectorModal}
              className="w-full p-2 border-2 border-purple-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
            >
              <span className={selectedWeaponTalentData ? 'text-purple-400 font-semibold' : 'text-gray-500'}>
                {selectedWeaponTalentData ? selectedWeaponTalentData.name : 'Select Weapon Talent'}
              </span>
              {selectedWeaponTalentData && <p className="text-xs text-gray-400 mt-1">{selectedWeaponTalentData.description}</p>}
            </button>
          </div>
        )}

        {selectedWeaponDefinition && selectedWeaponState.weaponCategory && !isCurrentWeaponExotic && (WEAPON_ATTACHMENT_SLOT_DEFINITIONS_BY_CATEGORY[selectedWeaponState.weaponCategory] || []).map((attSlotDef) => {
          const currentAttachmentSelection = selectedWeaponState.attachmentSelections.find(
            as => as.slotDefinitionId === attSlotDef.id
          );
          const selectedAttachmentOption = currentAttachmentSelection?.selectedAttachmentOptionId
            ? ALL_WEAPON_ATTACHMENT_OPTIONS_DATA.find(opt => opt.id === currentAttachmentSelection.selectedAttachmentOptionId)
            : null;

          return (
            <div key={attSlotDef.id}>
              <label className="block text-sm font-medium text-gray-300 mb-1">{attSlotDef.name}</label>
              <button
                onClick={() => openAttachmentOptionSelector(attSlotDef)}
                className="w-full p-2 border-2 border-yellow-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
              >
                <span className={selectedAttachmentOption ? 'text-yellow-300 font-semibold' : 'text-gray-500'}>
                  {selectedAttachmentOption 
                    ? `${selectedAttachmentOption.name} (${selectedAttachmentOption.valueString})`
                    : `Select ${attSlotDef.name}`}
                </span>
              </button>
            </div>
          );
        })}
        {isCurrentWeaponExotic && selectedWeaponDefinition && (
          <div className="p-2 border-2 border-red-700 bg-gray-750 rounded text-left">
            <p className="text-red-400 text-sm font-semibold">Exotic Weapon</p>
            <p className="text-xs text-gray-400 mt-1">Attachments are unique and fixed.</p>
             <p className="text-xs text-gray-400 mt-1">Talent is intrinsic to the weapon.</p>
          </div>
        )}
      </div>
    </div>
  );
};
