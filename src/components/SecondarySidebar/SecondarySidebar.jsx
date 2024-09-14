import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Icons for expandable sections

const SecondarySidebar = ({ isVisible, layout, content }) => {
  // State to handle expand/collapse for sections like "Collection Types" in Content-Type Builder
  const [expandedSections, setExpandedSections] = useState({});

  // Toggles section visibility
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className={`h-screen bg-gray-50 border-l transition-all duration-300 ${isVisible ? 'w-64' : 'w-0'}`}>
      <div className="p-4">
        {/* Content-Type Builder Layout */}
        {layout === 'contentTypeBuilder' && (
          <>
            <h2 className="font-semibold text-lg">Content-Type Builder</h2>
            <ul className="mt-4">
              {/* Collection Types */}
              <li className="py-2 px-3 flex justify-between cursor-pointer hover:bg-indigo-50" onClick={() => toggleSection('collectionTypes')}>
                <span>Collection Types</span>
                {expandedSections['collectionTypes'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </li>
              {expandedSections['collectionTypes'] && (
                <ul className="ml-4">
                  {content.collectionTypes.map((type) => (
                    <li key={type.name} className="py-1 px-3 hover:bg-indigo-100">
                      {type.name} <span className="text-xs text-gray-500">({type.count})</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Single Types */}
              <li className="py-2 px-3 flex justify-between cursor-pointer hover:bg-indigo-50" onClick={() => toggleSection('singleTypes')}>
                <span>Single Types</span>
                {expandedSections['singleTypes'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </li>
              {expandedSections['singleTypes'] && (
                <ul className="ml-4">
                  {content.singleTypes.map((type) => (
                    <li key={type.name} className="py-1 px-3 hover:bg-indigo-100">
                      {type.name} <span className="text-xs text-gray-500">({type.count})</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Components */}
              <li className="py-2 px-3 flex justify-between cursor-pointer hover:bg-indigo-50" onClick={() => toggleSection('components')}>
                <span>Components</span>
                {expandedSections['components'] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </li>
              {expandedSections['components'] && (
                <ul className="ml-4">
                  {content.components.map((component) => (
                    <li key={component.name} className="py-1 px-3 hover:bg-indigo-100">
                      {component.name} <span className="text-xs text-gray-500">({component.count})</span>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </>
        )}

        {/* Content Manager Layout */}
        {layout === 'contentManager' && (
          <>
            <h2 className="font-semibold text-lg">Content</h2>
            <ul className="mt-4">
              {/* Collection Types - Always Visible */}
              <li className="py-2 px-3 flex justify-between cursor-default">
                <span className='text-sm text-gray-600 font-medium'>Collection Types</span>
                <span className="bg-indigo-400 text-white rounded px-2 py-1 text-xs">
                  {content.collectionTypes.length}
                </span>
              </li>
              <ul className="ml-4">
                {content.collectionTypes.map((type) => (
                  <li key={type.name} className="py-1 px-3 text-indigo-400">
                    • {type.name}
                  </li>
                ))}
              </ul>

              {/* Single Types - Always Visible */}
              <li className="py-2 px-3 flex justify-between cursor-default">
                <span className='text-sm text-gray-600 font-medium'>Single Types</span>
                <span className="bg-indigo-400 text-white rounded px-2 py-1 text-xs">
                  {content.singleTypes.length}
                </span>
              </li>
              <ul className="ml-4">
                {content.singleTypes.length === 0 ? (
                  <li className="py-1 px-3 text-gray-500">
                    No single types available
                  </li>
                ) : (
                  content.singleTypes.map((type) => (
                    <li key={type.name} className="py-1 px-3 text-indigo-400">
                      • {type.name}
                    </li>
                  ))
                )}
              </ul>
            </ul>
          </>
        )}

        {/* Settings Layout */}
        {layout === 'settings' && (
          <>
            <h2 className="font-semibold text-lg">Global Settings</h2>
            <ul className="mt-4">
              {content.globalSettings.map((item) => (
                <li key={item} className="py-2 px-3 hover:bg-indigo-50 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-semibold text-lg mt-6">Administration Panel</h2>
            <ul className="mt-4">
              {content.adminSettings.map((item) => (
                <li key={item} className="py-2 px-3 hover:bg-indigo-50 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

export default SecondarySidebar;
