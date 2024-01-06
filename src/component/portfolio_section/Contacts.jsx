import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export const Contacts = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col space-y-5">
        <ItemContact link={"mailto:alexandre.angot@etu.unicaen.fr"}>
          <FaEnvelope size={40} />
          <span>alexandre.angot@etu.unicaen.fr</span>
        </ItemContact>
        <ItemContact link={"https://github.com/alexandreangot"}>
          <FaGithub size={40} />
          <span>alexandreangot</span>
        </ItemContact>
        <ItemContact link={"https://www.linkedin.com/in/alexandre-angot/"}>
          <FaLinkedin size={40} />
          <span>alexandre-angot</span>
        </ItemContact>
      </ul>
    </div>
  );
};

const ItemContact = ({ children, link }) => {
  return (
    <li>
      <a href={link} className="flex items-center space-x-5">
        {children}
      </a>
    </li>
  );
};
