import { useState } from "react";
import { ProjectsList } from "./ProjectsList";
import { Tabs } from "./Tabs";
import { Contacts } from "./Contacts";
import { MdWork } from "react-icons/md";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { BiSolidMessageRounded } from "react-icons/bi";

export const PortfolioSection = ({ onClickSubject }) => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    { name: "Motus", date: "2023-05-12" },
    { name: "Multi-Step Form", date: "2023-05-12" },
    { name: "Example 1", date: "2023-05-12" },
    { name: "Example 2", date: "2023-05-12" },
    { name: "Example 3", date: "2023-05-12" },
    { name: "Example 4", date: "2023-05-12" },
    { name: "Example 5", date: "2023-05-12" },
    { name: "Example 6", date: "2023-05-12" },
    { name: "Example 7", date: "2023-05-12" },
    { name: "Example 8", date: "2023-05-12" },
    { name: "Example 9", date: "2023-05-12" },
  ];

  const tabs = [
    {
      name: "Projects",
      icon: <PiProjectorScreenChartFill />,
      component: (
        <ProjectsList projects={projects} onClickItem={onClickSubject} />
      ),
    },
    { name: "Experiences", icon: <MdWork /> },
    {
      name: "Contacts",
      icon: <BiSolidMessageRounded />,
      component: <Contacts />,
    },
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
