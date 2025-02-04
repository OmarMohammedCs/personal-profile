import React, { useState } from 'react';
import Skills from './skills';
import Transition from './Transition';
import DevTools from './DevTools';
import Topics from './Topics';

const Tabs = () => {
  
  const [activeTab, setActiveTab] = useState("Skills");

  const tabs = [
    { name: "Skills", content: <Skills /> },
    { name: "Dev Tools", content: <DevTools/> },
    { name: "Topics", content: <Topics /> },
  ];

  return (
   <Transition>
     <div className='h-80 w-80'>
      <div className="sm:hidden ">
        <label htmlFor="Tab" className="sr-only">Tab</label>
        <select
          id="Tab"
          className="w-full rounded-md border-gray-200"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-text border-2">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-semibold cursor-pointer ${
                  activeTab === tab.name
                    ? "border-sky-500 text-distinct"
                    : "border-transparent text-scandry hover:border-gray-300 hover:text-[#d1d5cc]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.name);
                }}
                aria-current={activeTab === tab.name ? "page" : undefined}
              >
                {tab.name}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-6">
        <div>{tabs.find((tab) => tab.name === activeTab)?.content}</div>
      </div>
    </div>
   </Transition>
  );
};

export default Tabs;
