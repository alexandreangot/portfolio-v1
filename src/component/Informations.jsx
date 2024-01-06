import { useState } from "react";
import { ProjectsList } from "./ProjectsList";
import { Tabs } from "./Tabs";

export const Informations = ({ onClickSubject }) => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    { name: "Motus", date: "2023-05-12" },
    { name: "Scripts", date: "2023-05-12" },
    { name: "Advent of Code", date: "2023-05-12" },
    { name: "Multi-Step Form", date: "2023-05-12" },
    { name: "Motus", date: "2023-05-12" },
    { name: "Motus", date: "2023-05-12" },
    { name: "Motus", date: "2023-05-12" },
  ];

  const tabs = [
    {
      name: "Projects",
      component: (
        <ProjectsList
          projects={projects}
          onClickItem={onClickSubject}
        />
      ),
    },
    { name: "Experiences" },
    { name: "Contacts" },
  ];


  return (
      <div className="w-3/4 h-3/4 flex flex-col bg-white p-5 rounded-lg shadow-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        {tabs[activeTab].component ?? (
          <div className="h-full text-3xl flex flex-col justify-center items-center">
            <p>A venir.</p>
          </div>
        )}
      </div>
  );
};
