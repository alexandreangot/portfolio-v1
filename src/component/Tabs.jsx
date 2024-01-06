export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ul className="flex justify-around mb-5 border-b border-gray-200">
      {tabs.map((tab, index) => {
        return (
          <ItemTabs
            key={index}
            name={tab.name}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        );
      })}
    </ul>
  );
};

export const ItemTabs = ({ name, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={
        "text-lg font-bold py-3 px-6 cursor-pointer border-b-2 border-white " +
        (active ? "border-indigo-400" : "hover:border-gray-200")
      }
    >
      {name}
    </li>
  );
};
