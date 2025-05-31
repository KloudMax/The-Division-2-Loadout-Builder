
import React from 'react';
import { Loadout } from '../types';

// Make html2canvas available from window object if loaded via CDN
declare global {
  interface Window {
    html2canvas: any;
  }
}

interface LoadoutActionsProps {
  loadout: Loadout;
  getScreenshotElement: () => HTMLElement | null;
  onClearLoadout: () => void;
}

const LoadoutActions: React.FC<LoadoutActionsProps> = ({ loadout, getScreenshotElement, onClearLoadout }) => {
  const handleScreenshot = () => {
    const elementToCapture = getScreenshotElement();
    if (elementToCapture && window.html2canvas) {
      window.html2canvas(elementToCapture, {
        backgroundColor: '#1a202c', // bg-gray-900, Tailwind's dark background
        scale: 2, // Higher scale for better quality
        useCORS: true, // If you have external images
      }).then((canvas: HTMLCanvasElement) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'division2-loadout.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch((err: Error) => {
        console.error('Error taking screenshot:', err);
        alert('Error taking screenshot. Check console for details.');
      });
    } else {
      alert('Screenshot functionality is not available or element not found.');
    }
  };

  const handleExport = () => {
    try {
      const jsonString = JSON.stringify(loadout, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'division2-loadout.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error exporting loadout:', err);
      alert('Error exporting loadout. Check console for details.');
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mt-4 border border-gray-700">
      <h2 className="text-xl font-semibold text-orange-400 mb-4">Actions</h2>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleScreenshot}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save as Screenshot
        </button>
        <button
          onClick={handleExport}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Export Loadout (JSON)
        </button>
      </div>
      <button
        onClick={onClearLoadout}
        className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Clear Loadout
      </button>
    </div>
  );
};

export default LoadoutActions;
