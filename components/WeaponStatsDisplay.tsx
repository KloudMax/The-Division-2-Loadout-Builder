
import React from 'react';
import { WeaponStats, WeaponCategory } from '../types';

interface WeaponStatsDisplayProps {
  weapons: WeaponStats[];
  title: string;
}

const WeaponStatsDisplay: React.FC<WeaponStatsDisplayProps> = ({ weapons, title }) => {
  if (!weapons || weapons.length === 0) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 mt-6">
        <h3 className="text-xl font-semibold text-orange-400 mb-2">{title}</h3>
        <p className="text-gray-400">No weapon data available for this category.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700 mt-6">
      <h3 className="text-xl font-semibold text-orange-400 mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full min-w-max text-sm text-left text-gray-300 whitespace-nowrap">
          <thead className="text-xs text-gray-200 uppercase bg-gray-750 sticky top-0 z-10">
            <tr>
              <th scope="col" className="px-3 py-3">Family</th>
              <th scope="col" className="px-3 py-3">Name</th>
              <th scope="col" className="px-3 py-3 text-right">Opt. Range</th>
              <th scope="col" className="px-3 py-3 text-right">Drop Off</th>
              <th scope="col" className="px-3 py-3 text-right">Zero Dmg</th>
              <th scope="col" className="px-3 py-3 text-right">RPM</th>
              <th scope="col" className="px-3 py-3 text-right">Mag Size</th>
              <th scope="col" className="px-3 py-3 text-right">Reload (ms)</th>
              <th scope="col" className="px-3 py-3 text-right">Reload Empty (ms)</th>
              <th scope="col" className="px-3 py-3 text-right">HS Mult</th>
              <th scope="col" className="px-3 py-3">Bonus</th>
              <th scope="col" className="px-3 py-3 text-right">Lvl 40 DMG</th>
              <th scope="col" className="px-3 py-3 text-right">Lvl 40 Min DMG</th>
              <th scope="col" className="px-3 py-3 text-right">WT5 DMG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {weapons.map((weapon, index) => (
              <tr key={`${weapon.name}-${index}`} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-150">
                <td className="px-3 py-2 font-medium text-orange-300">{weapon.family}</td>
                <td className="px-3 py-2">{weapon.name}</td>
                <td className="px-3 py-2 text-right">{weapon.optimalRange}m</td>
                <td className="px-3 py-2 text-right">{weapon.dropOffEnd}m</td>
                <td className="px-3 py-2 text-right">{weapon.zeroDamageRange}m</td>
                <td className="px-3 py-2 text-right">{weapon.rpm.toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{weapon.magSize}</td>
                <td className="px-3 py-2 text-right">{weapon.reloadSpeedMs.toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{weapon.reloadSpeedFromEmptyMs.toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{weapon.headshotMultiplier.toFixed(2)}x</td>
                <td className="px-3 py-2">{weapon.weaponBonusType} {weapon.weaponBonusValuePercent}%</td>
                <td className="px-3 py-2 text-right">{weapon.level40Dmg.toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{weapon.level40MinDmg.toLocaleString()}</td>
                <td className="px-3 py-2 text-right">{weapon.wt5Dmg !== null ? weapon.wt5Dmg.toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeaponStatsDisplay;
