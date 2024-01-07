export const List = ({ children }) => {
  return (
    <ul
      className={
        "overflow-y-scroll divide-y divide-gray-700 text-2xl font-bold"
      }
    >
      {children}
    </ul>
  );
};

export const ItemList = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="flex justify-between space-x-20 p-8 cursor-pointer hover:bg-gray-100 hover:duration-500 hover:ease-in-out"
    >
      {children}
    </li>
  );
};
