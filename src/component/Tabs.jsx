export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ul className="flex justify-around mb-5 border-b border-gray-200">
      {tabs.map((tab, index) => {
        return (
          <ItemTabs
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </ItemTabs>
        );
      })}
    </ul>
  );
};

export const ItemTabs = ({ children, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={
        "text-lg font-bold py-3 px-6 cursor-pointer border-b-2 flex space-x-2 items-center " +
        (active ? "border-indigo-400" : "border-white hover:border-gray-200")
      }
    >
      {children}
    </li>
  );
};
