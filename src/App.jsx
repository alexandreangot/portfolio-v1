import { useState } from "react";
import { Informations } from "./component/Informations";
import { SubjectPopUp } from "./component/SubjectPopUp";
import { PersonnalInformations } from "./component/PersonnalInformations";

export const App = () => {
  let circlesStyle = [];
  for (let i = 0; i < 20; i++) {
    const right = Math.floor(Math.random() * window.innerWidth) + 1;
    const top = Math.floor(Math.random() * window.innerHeight) - 100;
    const size = Math.floor(Math.random() * 250) + 20;
    circlesStyle.push({
      right: right,
      top: top,
      width: size,
      height: size,
    });
  }

  const [displaySubject, setDisplaySubject] = useState(false);

  return (
    <>
      {circlesStyle.map((circleStyle) => {
        return (
          <span
            className={"absolute bg-indigo-500 rounded-full shadow-2xl z-0"}
            style={circleStyle}
          />
        );
      })}
      <div className="flex w-full h-screen bg-white text-gray-900">
        <section className="w-1/2 flex flex-col justify-center items-center z-10">
          <PersonnalInformations />
        </section>
        <section className="w-1/2 h-full flex justify-center items-center z-10">
          <Informations onClickSubject={() => setDisplaySubject(true)} />
        </section>
        {displaySubject && (
          <SubjectPopUp onClickClose={() => setDisplaySubject(false)}>
            <p>fjsqfsqdfljk</p>
          </SubjectPopUp>
        )}
      </div>
    </>
  );
};
