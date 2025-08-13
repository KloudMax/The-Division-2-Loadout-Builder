
import React from 'react';
import { SelectedGearPiece, GearSlotConfig, BrandId, CoreAttributeId, MinorAttributeId, TalentId, ModalState, SelectorItem, GearSetId, GearSlotId, NamedItemInfo, GearModType, GearModId } from '../types';
import { BRANDS_DATA, CORE_ATTRIBUTES_DATA, MINOR_ATTRIBUTES_DATA, TALENTS_DATA, ALL_BRANDS_LIST, ALL_CORE_ATTRIBUTES_LIST, ALL_MINOR_ATTRIBUTES_LIST, ALL_TALENTS_LIST, GEAR_SETS_DATA, ALL_GEAR_SETS_LIST, NAMED_CHEST_ITEMS_DATA, ALL_NAMED_CHEST_ITEMS_LIST, NAMED_BACKPACK_ITEMS_DATA, ALL_NAMED_BACKPACK_ITEMS_LIST, NAMED_GLOVES_ITEMS_DATA, ALL_NAMED_GLOVES_ITEMS_LIST, NAMED_HOLSTER_ITEMS_DATA, ALL_NAMED_HOLSTER_ITEMS_LIST, NAMED_KNEEPADS_ITEMS_DATA, ALL_NAMED_KNEEPADS_ITEMS_LIST, NAMED_MASK_ITEMS_DATA, ALL_NAMED_MASK_ITEMS_LIST, GEAR_MOD_TYPES_DATA, ALL_GEAR_MOD_TYPES_LIST, GEAR_MODS_DATA, ALL_GEAR_MODS_LIST } from '../constants';

interface GearItemCardProps {
  gearSlotConfig: GearSlotConfig;
  selectedPiece: SelectedGearPiece;
  onUpdatePiece: (slotId: SelectedGearPiece['slotId'], updates: Partial<SelectedGearPiece>) => void;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
  canEquipExotic: boolean;
}

const AttributeButton: React.FC<{ attributeId: string | null; attributeData: Record<string, { name: string; color?: string; description?: string }>; onClick: () => void; placeholder: string; typeColor?: string }> = ({ attributeId, attributeData, onClick, placeholder }) => {
  const data = attributeId ? attributeData[attributeId] : null;
  const colorClass = data?.color === 'red' ? 'border-red-500' :
                     data?.color === 'blue' ? 'border-blue-500' :
                     data?.color === 'yellow' ? 'border-yellow-500' :
                     'border-gray-600';
  const textColorClass = data?.color === 'red' ? 'text-red-400' :
                         data?.color === 'blue' ? 'text-blue-400' :
                         data?.color === 'yellow' ? 'text-yellow-400' :
                         'text-gray-400';


  return (
    <button
      onClick={onClick}
      className={`w-full p-2 border-2 ${colorClass} bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors`}
    >
      <span className={`font-semibold ${data ? textColorClass : 'text-gray-500'}`}>
        {data ? data.name : placeholder}
      </span>
      {data?.description && <p className="text-xs text-gray-400">{data.description}</p>}
    </button>
  );
};


const GearItemCard: React.FC<GearItemCardProps> = ({ gearSlotConfig, selectedPiece, onUpdatePiece, setModalState, canEquipExotic }) => {
  const { id: slotId, name, canHaveTalent, maxModSlots } = gearSlotConfig;

  const openItemSelector = () => {
    const brandItems: SelectorItem[] = ALL_BRANDS_LIST.map(b => ({ 
        id: b.id, 
        name: b.name, 
        type: 'brand', 
        colorName: 'defaultYellow',
        description: b.bonuses.map(bon => `${bon.pieces}pc: ${bon.description}`).join(' | ') 
    }));
    const gearSetItems: SelectorItem[] = ALL_GEAR_SETS_LIST.map(gs => ({
        id: gs.id,
        name: gs.name,
        type: 'gearset',
        colorName: 'emerald',
        description: `2pc: ${gs.bonuses[0].description} | 3pc: ${gs.bonuses[1].description} | 4pc: ${gs.bonuses[2].talentName}`
    }));
    
    let namedItemsForSlotRaw: NamedItemInfo[] = [];
    let namedItemSourceData: Record<string, NamedItemInfo> = {};

    switch(slotId) {
        case GearSlotId.Chest: namedItemsForSlotRaw = ALL_NAMED_CHEST_ITEMS_LIST; namedItemSourceData = NAMED_CHEST_ITEMS_DATA; break;
        case GearSlotId.Backpack: namedItemsForSlotRaw = ALL_NAMED_BACKPACK_ITEMS_LIST; namedItemSourceData = NAMED_BACKPACK_ITEMS_DATA; break;
        case GearSlotId.Gloves: namedItemsForSlotRaw = ALL_NAMED_GLOVES_ITEMS_LIST; namedItemSourceData = NAMED_GLOVES_ITEMS_DATA; break;
        case GearSlotId.Holster: namedItemsForSlotRaw = ALL_NAMED_HOLSTER_ITEMS_LIST; namedItemSourceData = NAMED_HOLSTER_ITEMS_DATA; break;
        case GearSlotId.Kneepads: namedItemsForSlotRaw = ALL_NAMED_KNEEPADS_ITEMS_LIST; namedItemSourceData = NAMED_KNEEPADS_ITEMS_DATA; break;
        case GearSlotId.Mask: namedItemsForSlotRaw = ALL_NAMED_MASK_ITEMS_LIST; namedItemSourceData = NAMED_MASK_ITEMS_DATA; break;
    }

    const filteredNamedItemsRaw = namedItemsForSlotRaw.filter(ni => {
        const isExotic = ni.brandId === 'exoticPlaceholderBrand';
        return !isExotic || canEquipExotic;
    });

    const namedItemsForSlot: SelectorItem[] = filteredNamedItemsRaw.map(ni => {
        const isExotic = ni.brandId === 'exoticPlaceholderBrand';
        const talentDescription = ni.talentId && TALENTS_DATA[ni.talentId] ? `Talent: ${TALENTS_DATA[ni.talentId].name}` : (ni.specialAttributeDescription || 'Unique Item');
        return { 
            id: ni.id, 
            name: ni.name, 
            type: 'nameditem', 
            colorName: isExotic ? 'exoticRed' : 'gold', 
            description: talentDescription
        };
    });


    setModalState({
      isOpen: true,
      title: `Select Item for ${name}`,
      items: [...brandItems, ...gearSetItems, ...namedItemsForSlot].sort((a,b) => a.name.localeCompare(b.name)),
      onSelect: (itemId, itemType) => {
        if (!itemId) { 
          onUpdatePiece(slotId, { itemId: null, itemType: null, talentId: null, coreAttributeId: null, minorAttributeIds: [null, null] }); 
          return;
        }
        const updates: Partial<SelectedGearPiece> = { itemId: itemId, itemType: itemType as SelectedGearPiece['itemType'], };
        if (itemType === 'nameditem') {
          // Re-fetch the full NamedItemInfo based on itemId to ensure we have brandId etc.
          const fullNamedItemInfo = Object.values(NAMED_CHEST_ITEMS_DATA)
            .concat(...Object.values(NAMED_BACKPACK_ITEMS_DATA))
            .concat(...Object.values(NAMED_GLOVES_ITEMS_DATA))
            .concat(...Object.values(NAMED_HOLSTER_ITEMS_DATA))
            .concat(...Object.values(NAMED_KNEEPADS_ITEMS_DATA))
            .concat(...Object.values(NAMED_MASK_ITEMS_DATA))
            .find(ni => ni.id === itemId);
                      
          if (fullNamedItemInfo) { 
            updates.talentId = fullNamedItemInfo.talentId; 
            updates.coreAttributeId = fullNamedItemInfo.coreAttributeHint; 
          }
        } else if (itemType === 'gearset') {
          updates.talentId = null; 
        } else if (itemType === 'brand') {
            updates.talentId = null; 
        }
        onUpdatePiece(slotId, updates);
      },
      allowNone: true,
    });
  };

  const openCoreAttributeSelector = () => {
    setModalState({
      isOpen: true,
      title: `Select Core Attribute for ${name}`,
      items: ALL_CORE_ATTRIBUTES_LIST.map(ca => ({ id: ca.id, name: ca.name, type: 'brand', colorName: ca.color, description: ca.description })),
      onSelect: (coreAttributeId) => onUpdatePiece(slotId, { coreAttributeId: coreAttributeId as CoreAttributeId | null }),
      allowNone: true,
    });
  };

  const openMinorAttributeSelector = (index: number) => {
    setModalState({
      isOpen: true,
      title: `Select Minor Attribute ${index + 1} for ${name}`,
      items: ALL_MINOR_ATTRIBUTES_LIST.map(ma => ({ id: ma.id, name: ma.name, type: 'brand', colorName: ma.color, description: ma.description })),
      onSelect: (minorAttributeId) => {
        const newMinorAttributes = [...selectedPiece.minorAttributeIds];
        newMinorAttributes[index] = minorAttributeId as MinorAttributeId | null;
        onUpdatePiece(slotId, { minorAttributeIds: newMinorAttributes });
      },
      allowNone: true,
    });
  };

  const openGenericTalentSelector = () => {
    const talentTypeFilter = slotId === GearSlotId.Chest ? 'Chest' : 'Backpack';
    setModalState({
      isOpen: true,
      title: `Select Generic Talent for ${name}`,
      items: ALL_TALENTS_LIST.filter(t => t.type === talentTypeFilter && t.color === 'purple').map(t => ({ id: t.id, name: t.name, type: 'brand', colorName: t.color, description: t.description })),
      onSelect: (talentId) => onUpdatePiece(slotId, { talentId: talentId as TalentId | null }),
      allowNone: true,
    });
  };

  const openModTypeSelector = (modSlotIndex: number) => {
    setModalState({
      isOpen: true,
      title: `Select Mod Type for Slot ${modSlotIndex + 1} on ${name}`,
      items: ALL_GEAR_MOD_TYPES_LIST.map(mt => ({
        id: mt.id,
        name: mt.name,
        type: 'modType',
        colorName: mt.color,
        description: `Select to view ${mt.name}s`,
      })),
      onSelect: (modTypeId) => {
        const newModSlots = [...selectedPiece.modSlots];
        newModSlots[modSlotIndex] = { type: modTypeId as GearModType | null, modId: null }; 
        onUpdatePiece(slotId, { modSlots: newModSlots });
        if (modTypeId) {
          openModSelector(modSlotIndex, modTypeId as GearModType); 
        }
      },
      allowNone: true, 
      context: { modSlotIndex }
    });
  };

  const openModSelector = (modSlotIndex: number, modType: GearModType) => {
    const availableMods = ALL_GEAR_MODS_LIST.filter(m => m.type === modType);
    setModalState({
      isOpen: true,
      title: `Select ${GEAR_MOD_TYPES_DATA[modType].name} for Slot ${modSlotIndex + 1}`,
      items: availableMods.map(m => ({
        id: m.id,
        name: m.name,
        type: 'mod',
        colorName: m.color,
        description: m.description,
        modType: m.type,
      })),
      onSelect: (modId) => {
        const newModSlots = [...selectedPiece.modSlots];
        newModSlots[modSlotIndex] = { ...newModSlots[modSlotIndex], modId: modId as GearModId | null };
        onUpdatePiece(slotId, { modSlots: newModSlots });
      },
      allowNone: true, 
      context: { modSlotIndex, modType }
    });
  };
  
  const selectedItemDetails = selectedPiece.itemId
    ? selectedPiece.itemType === 'brand'
      ? BRANDS_DATA[selectedPiece.itemId as BrandId]
      : selectedPiece.itemType === 'gearset'
        ? GEAR_SETS_DATA[selectedPiece.itemId as GearSetId]
        : selectedPiece.itemType === 'nameditem' 
          ? ( Object.values(NAMED_CHEST_ITEMS_DATA)
              .concat(...Object.values(NAMED_BACKPACK_ITEMS_DATA))
              .concat(...Object.values(NAMED_GLOVES_ITEMS_DATA))
              .concat(...Object.values(NAMED_HOLSTER_ITEMS_DATA))
              .concat(...Object.values(NAMED_KNEEPADS_ITEMS_DATA))
              .concat(...Object.values(NAMED_MASK_ITEMS_DATA))
              .find(ni => ni.id === selectedPiece.itemId) )
          : null
    : null;

  let intrinsicTalentDisplay: { name: string; description: string; isExotic?: boolean } | null = null;
  if (selectedPiece.itemType === 'gearset' && selectedPiece.itemId) {
    const gearSet = GEAR_SETS_DATA[selectedPiece.itemId as GearSetId];
    if (slotId === GearSlotId.Chest && gearSet.chestTalent) intrinsicTalentDisplay = { ...gearSet.chestTalent, isExotic: false };
    else if (slotId === GearSlotId.Backpack && gearSet.backpackTalent) intrinsicTalentDisplay = { ...gearSet.backpackTalent, isExotic: false };
  } else if (selectedPiece.itemType === 'nameditem' && selectedPiece.talentId && selectedItemDetails) {
    const talent = TALENTS_DATA[selectedPiece.talentId];
    const namedInfo = selectedItemDetails as NamedItemInfo;
    if (talent) intrinsicTalentDisplay = { name: talent.name, description: talent.description, isExotic: namedInfo.brandId === 'exoticPlaceholderBrand' };
  }
  
  const showGenericTalentSelectorButton = canHaveTalent && selectedPiece.itemType === 'brand';

  let selectedItemColorClass = 'text-gray-500';
  if (selectedItemDetails) {
      if (selectedPiece.itemType === 'gearset') selectedItemColorClass = 'text-emerald-400 font-semibold';
      else if (selectedPiece.itemType === 'nameditem') {
          const namedInfo = selectedItemDetails as NamedItemInfo;
          selectedItemColorClass = namedInfo.brandId === 'exoticPlaceholderBrand' ? 'text-red-500 font-semibold' : 'text-yellow-300 font-semibold';
      } else if (selectedPiece.itemType === 'brand') {
          selectedItemColorClass = 'text-yellow-500 font-semibold'; // Using the 'defaultYellow' for brands
      }
  }


  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">{name}</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Brand / Gear Set / Named Item</label>
          <button onClick={openItemSelector} className="w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors">
            <span className={selectedItemColorClass}>
              {selectedItemDetails ? selectedItemDetails.name : 'Select Item'}
              {selectedItemDetails && <em className="ml-2 text-xs text-gray-400 normal-case">({selectedPiece.itemType})</em>}
            </span>
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Core Attribute</label>
           <AttributeButton attributeId={selectedPiece.coreAttributeId} attributeData={CORE_ATTRIBUTES_DATA} onClick={openCoreAttributeSelector} placeholder="Select Core Attribute"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Minor Attributes</label>
          <div className="space-y-2">
            <AttributeButton attributeId={selectedPiece.minorAttributeIds[0]} attributeData={MINOR_ATTRIBUTES_DATA} onClick={() => openMinorAttributeSelector(0)} placeholder="Select Minor Attribute 1"/>
            <AttributeButton attributeId={selectedPiece.minorAttributeIds[1]} attributeData={MINOR_ATTRIBUTES_DATA} onClick={() => openMinorAttributeSelector(1)} placeholder="Select Minor Attribute 2"/>
          </div>
        </div>

        {maxModSlots > 0 && selectedPiece.modSlots.map((modSlot, index) => {
          const selectedModTypeData = modSlot.type ? GEAR_MOD_TYPES_DATA[modSlot.type] : null;
          const selectedModData = modSlot.modId ? GEAR_MODS_DATA[modSlot.modId] : null;
          
          let buttonText = `Mod Slot ${index + 1}: Select Type`;
          let buttonColorClass = 'border-gray-600';
          let buttonTextColorClass = 'text-gray-500';
          let modDescription = '';

          if (selectedModTypeData) {
            buttonColorClass = selectedModTypeData.color === 'red' ? 'border-red-500' : selectedModTypeData.color === 'blue' ? 'border-blue-500' : 'border-yellow-500';
            buttonTextColorClass = selectedModTypeData.color === 'red' ? 'text-red-400' : selectedModTypeData.color === 'blue' ? 'text-blue-400' : 'text-yellow-400';
            buttonText = `Mod Slot ${index + 1}: ${selectedModTypeData.name}`;
            if (selectedModData) {
              buttonText = `${selectedModData.name}`;
              modDescription = selectedModData.description;
            } else {
               buttonText = `Mod Slot ${index + 1}: Select ${selectedModTypeData.name}`;
            }
          }
          
          return (
            <div key={`mod-slot-${index}`}>
              <label className="block text-sm font-medium text-gray-300 mb-1">Mod Slot {index + 1}</label>
              <button
                onClick={() => {
                  if (modSlot.type && !selectedModData) { // If type is selected but no specific mod, open mod selector
                    openModSelector(index, modSlot.type);
                  } else if (modSlot.type && selectedModData) { // If specific mod is selected, also open mod selector (to change or select none)
                     openModSelector(index, modSlot.type);
                  }
                   else { // No type selected yet
                    openModTypeSelector(index);
                  }
                }}
                className={`w-full p-2 border-2 ${buttonColorClass} bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors flex justify-between items-center`}
              >
                <div className="flex-grow">
                    <span className={`font-semibold ${buttonTextColorClass}`}>
                    {buttonText}
                    </span>
                    {modDescription && <p className="text-xs text-gray-400">{modDescription}</p>}
                </div>
                {modSlot.type && (
                    <button 
                        onClick={(e) => { e.stopPropagation(); openModTypeSelector(index); }} 
                        className="text-xs text-blue-300 hover:text-blue-200 p-1 bg-gray-750 hover:bg-gray-650 rounded ml-2 shrink-0"
                        aria-label={`Change Mod Type for Slot ${index + 1}`}
                    >
                        Change Type
                    </button>
                )}
              </button>
            </div>
          );
        })}

        {intrinsicTalentDisplay && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Talent</label>
            <div className={`w-full p-2 border-2 ${intrinsicTalentDisplay.isExotic ? 'border-red-500' : (selectedPiece.itemType === 'nameditem' ? 'border-yellow-600' : 'border-purple-700')} bg-gray-700 rounded text-left`}>
              <span className={`${intrinsicTalentDisplay.isExotic ? 'text-red-500' : (selectedPiece.itemType === 'nameditem' ? 'text-yellow-300' : 'text-purple-400')} font-semibold`}>
                {intrinsicTalentDisplay.name}
                <em className="ml-1 text-xs text-gray-400 normal-case">
                  ({selectedPiece.itemType === 'gearset' ? 'Set Talent' : (intrinsicTalentDisplay.isExotic ? 'Exotic Talent' : 'Named Item Talent')})
                </em>
              </span>
              <p className="text-xs text-gray-400">{intrinsicTalentDisplay.description}</p>
            </div>
          </div>
        )}

        {!intrinsicTalentDisplay && showGenericTalentSelectorButton && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Talent</label>
            <button onClick={openGenericTalentSelector} className={`w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors`}>
              <span className={selectedPiece.talentId ? 'text-purple-400 font-semibold' : 'text-gray-500'}>
                {selectedPiece.talentId && TALENTS_DATA[selectedPiece.talentId] ? TALENTS_DATA[selectedPiece.talentId].name : 'Select Generic Talent'}
              </span>
              {selectedPiece.talentId && TALENTS_DATA[selectedPiece.talentId]?.description && (<p className="text-xs text-gray-400">{TALENTS_DATA[selectedPiece.talentId].description}</p>)}
              {!selectedPiece.talentId && <p className="text-xs text-gray-500">Click to select a generic talent.</p>}
            </button>
          </div>
        )}

        {!intrinsicTalentDisplay && selectedPiece.itemType === 'nameditem' && selectedItemDetails && (selectedItemDetails as NamedItemInfo).specialAttributeDescription && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Unique Property</label>
            <div className={`w-full p-2 border-2 ${ (selectedItemDetails as NamedItemInfo).brandId === 'exoticPlaceholderBrand' ? 'border-red-500' : 'border-yellow-600'} bg-gray-700 rounded text-left`}>
              <span className={`${ (selectedItemDetails as NamedItemInfo).brandId === 'exoticPlaceholderBrand' ? 'text-red-500' : 'text-yellow-300'} font-semibold`}>
                {(selectedItemDetails as NamedItemInfo).specialAttributeDescription}
              </span>
              <p className="text-xs text-gray-400"> (This item's unique characteristic)</p>
            </div>
          </div>
        )}
        
        {!intrinsicTalentDisplay && !showGenericTalentSelectorButton && 
         !(selectedPiece.itemType === 'nameditem' && selectedItemDetails && (selectedItemDetails as NamedItemInfo).specialAttributeDescription) && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Talent / Unique Property</label>
            <div className="w-full p-2 border-2 border-gray-700 bg-gray-700 rounded text-left opacity-70">
                <span className="text-gray-500">
                  {selectedPiece.itemId ? 'No Talent / Unique Property Applicable' : 'Select Item to see Talent/Property'}
                </span>
                {!selectedPiece.itemId && !canHaveTalent && <p className="text-xs text-gray-500">This slot does not have generic talents.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GearItemCard;
