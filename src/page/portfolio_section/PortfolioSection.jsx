import { useState } from "react";
import { ProjectsList } from "./ProjectsList";
import { Tabs } from "../../component/Tabs";
import { Contacts } from "./Contacts";
import { MdWork } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Experiences } from "./Experiences";
import { Project1 } from "./projects/Project1";
import { Motus } from "./projects/Motus";
import { Experience1 } from "./experiences/Experience1";

export const PortfolioSection = ({ onClickSubject }) => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    { name: "Motus", date: "2023-05-12", component: <Motus /> },
    { name: "Project 1", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 2", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 3", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 4", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 5", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 6", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 7", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 8", date: "2023-05-12", component: <Project1 /> },
    { name: "Project 9", date: "2023-05-12", component: <Project1 /> },
  ];

  const experiences = [
    { name: "Alternance -Téïcée", start: "sept 2023", end: "Aujourd'hui", component: <Experience1 /> },
    { name: "BUT - Informatique", start: "sept 2021", end: "Aujourd'hui", component: <Experience1 /> },
    { name: "Stage - Téïcée", start: "avril 2023", end: "juin 2023", component: <Experience1 /> },
    { name: "Bac Générale", start: "2028", end: "2021", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
    { name: "Experience 1", start: "...", end: "...", component: <Experience1 /> },
  ];

  const tabs = [
    {
      name: "Projects",
      icon: <PiProjectorScreenChartFill />,
      component: (
        <ProjectsList projects={projects} onClickItem={onClickSubject} />
      ),
    },
    {
      name: "Experiences",
      icon: <MdWork />,
      component: <Experiences experiences={experiences} onClickItem={onClickSubject}/>,
    },
    {
      name: "Contacts",
      icon: <BiSolidMessageRounded />,
      component: <Contacts />,
    },
  ];

  return (
    <div className="w-3/4 h-3/4 flex flex-col bg-white p-5 rounded-lg shadow-2xl">
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      {tabs[activeTab].component}
    </div>
  );
};
