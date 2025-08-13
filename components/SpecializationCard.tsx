import React from 'react';
import { SpecializationId, SpecializationData, ModalState, SelectorItem } from '../types';
import { ALL_SPECIALIZATIONS_LIST, SPECIALIZATIONS_DATA } from '../constants';

interface SpecializationCardProps {
  selectedSpecializationId: SpecializationId | null;
  onUpdateSpecialization: (specializationId: SpecializationId | null) => void;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SpecializationCard: React.FC<SpecializationCardProps> = ({ selectedSpecializationId, onUpdateSpecialization, setModalState }) => {
  const selectedSpecialization: SpecializationData | undefined = selectedSpecializationId ? SPECIALIZATIONS_DATA[selectedSpecializationId] : undefined;

  const openSpecializationSelector = () => {
    const specializationItems: SelectorItem[] = ALL_SPECIALIZATIONS_LIST.map(spec => ({
      id: spec.id,
      name: spec.name,
      type: 'specialization',
      colorName: 'cyan', // Unique color for specializations
      description: spec.signatureWeapon ? `Signature: ${spec.signatureWeapon}` : (spec.description || 'Select to see details')
    }));

    setModalState({
      isOpen: true,
      title: 'Select Specialization',
      items: specializationItems,
      onSelect: (specId) => {
        onUpdateSpecialization(specId as SpecializationId | null);
      },
      allowNone: true,
    });
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold text-orange-400 mb-3">Specialization</h3>
      
      <button 
        onClick={openSpecializationSelector} 
        className="w-full p-3 border-2 border-gray-600 bg-gray-700 hover:bg-gray-600 rounded text-left transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label={selectedSpecialization ? `Change Specialization from ${selectedSpecialization.name}` : "Select Specialization"}
      >
        <span className={selectedSpecialization ? 'text-cyan-400 font-semibold' : 'text-gray-500'}>
          {selectedSpecialization ? selectedSpecialization.name : 'Select Specialization'}
        </span>
        {selectedSpecialization && (
          <p className="text-xs text-gray-400 mt-1">Signature: {selectedSpecialization.signatureWeapon}</p>
        )}
      </button>

      {selectedSpecialization && (
        <div className="mt-3 space-y-2">
          <p className="text-sm text-gray-300">{selectedSpecialization.description}</p>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-1">Passive Bonuses:</h4>
            <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 pl-2">
              {selectedSpecialization.bonuses.map((bonus, index) => (
                <li key={index}>{bonus.description}</li>
              ))}
            </ul>
          </div>
          {selectedSpecialization.skillVariants.length > 0 && (
             <div>
                <h4 className="text-sm font-semibold text-gray-200 mb-1">Unique Skill Variants:</h4>
                 <ul className="list-disc list-inside text-xs text-gray-400 space-y-1 pl-2">
                    {selectedSpecialization.skillVariants.map((variant, index) => (
                        <li key={`variant-${index}`}>{variant}</li>
                    ))}
                </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SpecializationCard;