
import React from 'react';
import { SelectedWeaponState, WeaponSlotConfig, WeaponSlotId, WeaponCategory, WeaponStats, WeaponAttachmentSlotDefinition, WeaponAttachmentOptionId, ModalState, SelectorItem, SelectedWeaponAttachment, WeaponTalentId } from '../types';
import {
    ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST,
    ALL_LMG_WEAPON_DATA_LIST,
    ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST,
    ALL_PISTOL_WEAPON_DATA_LIST,
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
  canEquipExotic: boolean;
}

export const WeaponCard: React.FC<WeaponCardProps> = ({ weaponSlotConfig, selectedWeaponState, onUpdateWeaponState, setModalState, canEquipExotic }) => {
  const { id: weaponSlotId, name: slotName, supportedCategories } = weaponSlotConfig;

  const getWeaponDataForCategory = (category: WeaponCategory | null): WeaponStats[] => {
    if (!category) return [];
    if (category === WeaponCategory.AssaultRifle) return ALL_ASSAULT_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.LightMachineGun) return ALL_LMG_WEAPON_DATA_LIST;
    if (category === WeaponCategory.MarksmanRifle) return ALL_MARKSMAN_RIFLE_WEAPON_DATA_LIST;
    if (category === WeaponCategory.Pistol) return ALL_PISTOL_WEAPON_DATA_LIST;
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
            onUpdateWeaponState(weaponSlotId, { weaponCategory: categoryId as WeaponCategory | null });
        },
        allowNone: true,
    });
  };

  const openWeaponSelectorModal = (category: WeaponCategory) => {
    const weaponsInCategory = getWeaponDataForCategory(category);
    if (weaponsInCategory.length === 0) {
        setModalState(prev => ({ ...prev, isOpen: false })); 
        alert(`${category.replace(/([A-Z])/g, ' $1').trim()} data is not available or empty. Please check constants.ts.`);
        return;
    }

    const filteredWeapons = weaponsInCategory.filter(w => {
        const isExotic = EXOTIC_WEAPON_NAMES.includes(w.name);
        return !isExotic || canEquipExotic;
    });

    const weaponItems: SelectorItem[] = filteredWeapons.map(w => {
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
        onUpdateWeaponState(weaponSlotId, { weaponInstanceId: weaponInstanceId as string | null });
      },
      allowNone: true,
      context: { weaponSlotId, weaponCategoryContext: category }
    });
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

  // --- Button Text and Color Logic ---
  const categoryText = selectedWeaponState.weaponCategory
    ? selectedWeaponState.weaponCategory.replace(/([A-Z])/g, ' $1').trim()
    : 'Select Weapon Category';
  const categoryTextColor = selectedWeaponState.weaponCategory ? 'text-teal-400 font-semibold' : 'text-gray-500';
  const categoryDescription = selectedWeaponState.weaponCategory
    ? 'Click to change the weapon category.'
    : `Supported: ${supportedCategories.map(c => c.replace(/([A-Z])/g, ' $1').trim()).join(', ')}`;
  
  let weaponText = 'Select Weapon';
  let weaponTextColor = 'text-gray-500';
  let weaponDescription = 'Click to choose a weapon from this category.';

  if (selectedWeaponDefinition) {
    const isExotic = EXOTIC_WEAPON_NAMES.includes(selectedWeaponDefinition.name);
    const isNamedVariant = !isExotic && selectedWeaponDefinition.name !== selectedWeaponDefinition.family;

    if (isExotic) weaponTextColor = 'text-red-500 font-semibold';
    else if (isNamedVariant) weaponTextColor = 'text-yellow-300 font-semibold';
    else weaponTextColor = 'text-orange-300 font-semibold';
    
    weaponText = `${selectedWeaponDefinition.family} - ${selectedWeaponDefinition.name}`;
    weaponDescription = `RPM: ${selectedWeaponDefinition.rpm}, Mag: ${selectedWeaponDefinition.magSize}, Dmg: ${selectedWeaponDefinition.level40Dmg.toLocaleString()}`;
    if (isCurrentWeaponExotic) {
      weaponDescription += " (Exotic: Fixed Attachments & Talent)";
    }
  }


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">{slotName}</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Weapon Category</label>
          <button 
            onClick={openWeaponCategorySelectorModal}
            className="w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
            aria-label={`Select weapon category for ${slotName}`}
          >
            <span className={categoryTextColor}>
              {categoryText}
            </span>
             <p className="text-xs text-gray-400 mt-1">{categoryDescription}</p>
          </button>
        </div>

        {selectedWeaponState.weaponCategory && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Weapon</label>
            <button
              onClick={() => openWeaponSelectorModal(selectedWeaponState.weaponCategory!)}
              className="w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
              aria-label={`Select weapon for ${slotName}`}
            >
              <span className={weaponTextColor}>
                {weaponText}
              </span>
              <p className="text-xs text-gray-400 mt-1">{weaponDescription}</p>
            </button>
          </div>
        )}

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
