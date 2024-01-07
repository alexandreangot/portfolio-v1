export const ProjectsList = ({ projects, onClickItem }) => {
  return (
    <ul
      className={
        "overflow-y-scroll divide-y divide-gray-700 text-2xl font-bold"
      }
    >
      {projects.map((project, index) => {
        return (
          <ItemList
            key={index}
            name={project.name}
            date={project.date}
            onClick={onClickItem}
          />
        );
      })}
    </ul>
  );
};

export const ItemList = ({ name, date, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="flex justify-between space-x-20 p-8 cursor-pointer hover:bg-gray-100 hover:duration-500 hover:ease-in-out"
    >
      <span>{name}</span>
      <time className="text-lg" dateTime={date}>
        {date}
      </time>
    </li>
  );
};
