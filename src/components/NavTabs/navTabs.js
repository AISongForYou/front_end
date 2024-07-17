import React, { useState } from "react";

const tabs = [
  { name: "버전 1", current: true },
  { name: "버전 2", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          value={tabs[activeTab].name}
          onChange={(e) =>
            setActiveTab(tabs.findIndex((tab) => tab.name === e.target.value))
          }
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(index)}
                className={classNames(
                  activeTab === index
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-6 py-4 text-sm font-medium" // 수정된 부분
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavTabs;
