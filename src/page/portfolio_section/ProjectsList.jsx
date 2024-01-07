import { List, ItemList } from "../../component/List";

export const ProjectsList = ({ projects, onClickItem }) => {
  return (
    <List>
      {projects.map((project, index) => {
        return (
          <ItemList key={index} onClick={() => onClickItem(project.component)}>
            <span>{project.name}</span>
            <time className="text-lg" dateTime={project.date}>
              {project.date}
            </time>
          </ItemList>
        );
      })}
    </List>
  );
};


