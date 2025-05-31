
import React from 'react';
import { ModalState, SelectorItem } from '../types';

interface SelectorModalProps {
  modalState: ModalState;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const SelectorModal: React.FC<SelectorModalProps> = ({ modalState, setModalState }) => {
  if (!modalState.isOpen) {
    return null;
  }

  const handleSelect = (item: SelectorItem | null) => {
    if (item) {
      // Pass back full context for more complex selections like attachments
      modalState.onSelect(item.id, item.type, item); 
    } else {
      modalState.onSelect(null); // For "None" option
    }
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleClose = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };
  
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const getColorClass = (item: SelectorItem): string => {
    switch (item.colorName) {
      case 'red': return 'text-red-400'; // Generic red, e.g. offensive attributes/mods
      case 'blue': return 'text-blue-400';
      case 'yellow': return 'text-yellow-400'; // For utility attributes/mods, skill mod options
      case 'purple': return 'text-purple-400'; // Talents
      case 'emerald': return 'text-emerald-400'; // Gear Sets
      case 'gold': return 'text-yellow-300'; // Named High-End Items
      case 'orange': return 'text-orange-400'; // Weapons, Skills
      case 'teal': return 'text-teal-400'; // Weapon Categories
      case 'defaultYellow': return 'text-yellow-500'; // Brands
      case 'exoticRed': return 'text-red-500'; // Exotic Items (New)
      default:
        // Fallback, though ideally all items should have an explicit colorName
        if (item.type === 'gearset') return 'text-emerald-400';
        if (item.type === 'weaponCategory') return 'text-teal-400';
        if (item.type === 'weapon') return 'text-orange-400';
        if (item.type === 'weaponAttachmentOption') return 'text-yellow-400';
        if (item.type === 'skill') return 'text-orange-400';
        if (item.type === 'skillModOption') return 'text-yellow-400';
        return 'text-yellow-500'; 
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-orange-400">{modalState.title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto space-y-2 pr-2 -mr-2">
          {modalState.allowNone && (
             <button
                onClick={() => handleSelect(null)}
                className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span className="font-medium">None</span>
             </button>
          )}
          {modalState.items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className="w-full text-left p-3 bg-gray-700 hover:bg-gray-600 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className={`font-medium ${getColorClass(item)}`}>{item.name}</span>
              {item.description && <p className="text-xs text-gray-400 mt-1">{item.description}</p>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectorModal;
