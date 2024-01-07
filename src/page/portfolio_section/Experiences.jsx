import { List, ItemList } from "../../component/List";

export const Experiences = ({ experiences, onClickItem }) => {
  return (
    <List>
      {experiences.map((experience, index) => {
        return (
          <ItemList key={index} onClick={() => onClickItem(experience.component)}>
            <span>{experience.name}</span>
            <span className="text-xl font-normal">{experience.start + " - " + experience.end}</span>
          </ItemList>
        );
      })}
    </List>
  );
};
