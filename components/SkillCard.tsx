
import React from 'react';
import { SelectedSkillState, SkillNameId, ModalState, SkillDefinition, SkillModSlotDefinition, SkillModOptionId, SelectorItem } from '../types';
import { SKILL_DEFINITIONS_DATA, ALL_SKILL_DEFINITIONS_LIST, ALL_SKILL_MOD_OPTIONS_DATA } from '../constants';

interface SkillCardProps {
  skillNumber: 1 | 2;
  selectedSkillState: SelectedSkillState;
  onUpdateSkillState: (skillSlotKey: 'skill1' | 'skill2', updates: Partial<SelectedSkillState>) => void;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillNumber, selectedSkillState, onUpdateSkillState, setModalState }) => {
  const skillSlotKey = skillNumber === 1 ? 'skill1' : 'skill2';
  const selectedSkillDefinition: SkillDefinition | undefined = selectedSkillState.skillId ? SKILL_DEFINITIONS_DATA[selectedSkillState.skillId] : undefined;

  const openSkillSelector = () => {
    const skillItems: SelectorItem[] = ALL_SKILL_DEFINITIONS_LIST.map(skillDef => ({
      id: skillDef.id,
      name: skillDef.name,
      type: 'skill',
      colorName: 'orange', // Or any color fitting for skills
      description: `${skillDef.modSlots.length} mod slot(s) available.`
    }));

    setModalState({
      isOpen: true,
      title: `Select Skill ${skillNumber}`,
      items: skillItems,
      onSelect: (skillId) => {
        if (skillId === null) {
          onUpdateSkillState(skillSlotKey, { skillId: null, modSelections: [] });
        } else {
          const skillDef = SKILL_DEFINITIONS_DATA[skillId as SkillNameId];
          const initialModSelections = skillDef ? skillDef.modSlots.map(slot => ({
            slotDefinitionId: slot.id,
            selectedModOptionId: null,
          })) : [];
          onUpdateSkillState(skillSlotKey, { skillId: skillId as SkillNameId, modSelections: initialModSelections });
        }
      },
      allowNone: true,
    });
  };

  const openSkillModOptionSelector = (slotDef: SkillModSlotDefinition) => {
    if (!selectedSkillState.skillId) return;

    const availableModOptions = ALL_SKILL_MOD_OPTIONS_DATA.filter(
      modOption => modOption.skillId === selectedSkillState.skillId && modOption.slotDefinitionId === slotDef.id
    );

    const modOptionItems: SelectorItem[] = availableModOptions.map(modOpt => ({
      id: modOpt.id,
      name: `${modOpt.attributeName} (${modOpt.valueString})`,
      type: 'skillModOption',
      colorName: 'yellow', // Generic color for mod options
      description: `Select this mod for ${slotDef.name}`,
      skillId: selectedSkillState.skillId!, // For context if needed
      slotDefinitionId: slotDef.id, // For context if needed
    }));

    setModalState({
      isOpen: true,
      title: `Select Mod for ${slotDef.name} on ${selectedSkillDefinition?.name}`,
      items: modOptionItems,
      onSelect: (modOptionId) => {
        const newModSelections = selectedSkillState.modSelections.map(currentModSel =>
          currentModSel.slotDefinitionId === slotDef.id
            ? { ...currentModSel, selectedModOptionId: modOptionId as SkillModOptionId | null }
            : currentModSel
        );
        onUpdateSkillState(skillSlotKey, { modSelections: newModSelections });
      },
      allowNone: true, // Allow clearing the mod option
      context: { skillId: selectedSkillState.skillId, slotDefinitionId: slotDef.id }
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">Skill {skillNumber}</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Selected Skill</label>
          <button 
            onClick={openSkillSelector} 
            className="w-full p-2 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
          >
            <span className={selectedSkillDefinition ? 'text-orange-300 font-semibold' : 'text-gray-500'}>
              {selectedSkillDefinition ? selectedSkillDefinition.name : 'Select Skill'}
            </span>
          </button>
        </div>

        {selectedSkillDefinition && selectedSkillDefinition.modSlots.map((slotDef) => {
          const currentModSelection = selectedSkillState.modSelections.find(
            ms => ms.slotDefinitionId === slotDef.id
          );
          const selectedModOption = currentModSelection?.selectedModOptionId
            ? ALL_SKILL_MOD_OPTIONS_DATA.find(mod => mod.id === currentModSelection.selectedModOptionId)
            : null;

          return (
            <div key={slotDef.id}>
              <label className="block text-sm font-medium text-gray-300 mb-1">{slotDef.name}</label>
              <button
                onClick={() => openSkillModOptionSelector(slotDef)}
                className="w-full p-2 border-2 border-yellow-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors"
                disabled={!selectedSkillState.skillId}
              >
                <span className={selectedModOption ? 'text-yellow-300 font-semibold' : 'text-gray-500'}>
                  {selectedModOption 
                    ? `${selectedModOption.attributeName} (${selectedModOption.valueString})` 
                    : `Select Mod for ${slotDef.name}`}
                </span>
                {!selectedSkillState.skillId && <p className="text-xs text-gray-500">Select a skill first</p>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
