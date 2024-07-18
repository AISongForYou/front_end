import React from "react";

const tabs = [
  { name: "버전 1", current: true },
  { name: "버전 2", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavTabs = ({ activeTab, setActiveTab, onTabChange }) => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav aria-label="Tabs" className="-mb-px flex space-x-8">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              onClick={() => onTabChange(index)}
              className={classNames(
                activeTab === index
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                "whitespace-nowrap border-b-2 px-6 py-4 text-sm font-medium" 
              )}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavTabs;