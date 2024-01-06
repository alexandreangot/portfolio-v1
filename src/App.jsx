import { useState } from "react";
import { PortfolioSection } from "./component/portfolio_section/PortfolioSection";
import { SubjectPopUp } from "./component/SubjectPopUp";
import { PersonalInformations } from "./component/personal_informations/PersonalInformations";

export const App = () => {
  const circleMarginTop = 20
  const circleSize = 300

  let circlesStyle = [];
  for (let i = 1; i <= 30; i++) {
    const right = Math.floor(Math.random() * window.innerWidth) + 1;
    console.log(Math.floor(Math.random() * (window.innerHeight - circleSize - circleMarginTop)));
    const top = Math.floor(Math.random() * (window.innerHeight - circleSize - circleMarginTop)) + circleMarginTop;
    const size = Math.floor(Math.random() * circleSize/1);
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
          <PersonalInformations />
        </section>
        <section className="w-1/2 h-full flex justify-center items-center z-10">
          <PortfolioSection onClickSubject={() => setDisplaySubject(true)} />
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
