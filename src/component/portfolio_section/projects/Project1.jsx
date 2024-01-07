import { Carousel } from "flowbite-react";
import { FaSymfony } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export const Project1 = () => {
  return (
    <div className="flex flex-col space-y-12 mx-12 my-5">
      <div className="flex flex-col space-y-5">
        <h1 className="text-5xl font-bold">Project 1</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            dui velit, gravida ullamcorper imperdiet, consequat quis magna.
            Praesent mauris orci, tristique a fermentum ut, aliquam nec tortor.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris vitae diam non lacus tincidunt
            commodo.
          </p>
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-xl font-bold">Langages</h2>
        <ul className="flex space-x-3">
          <LanguageItem>
            <FaSymfony />
            <span>Symfony</span>
          </LanguageItem>
          <LanguageItem>
            <FaReact />
            <span>ReactJs</span>
          </LanguageItem>
          <LanguageItem>
            <SiTailwindcss />
            <span>Tailwind CSS</span>
          </LanguageItem>
        </ul>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-xl font-bold">Illustrations</h2>
        <div className="h-72 w-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-xl font-bold">Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dui velit, gravida ullamcorper imperdiet, consequat quis magna.
          Praesent mauris orci, tristique a fermentum ut, aliquam nec tortor.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris vitae diam non lacus tincidunt commodo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dui velit, gravida ullamcorper imperdiet, consequat quis magna.
          Praesent mauris orci, tristique a fermentum ut, aliquam nec tortor.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris vitae diam non lacus tincidunt commodo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dui velit, gravida ullamcorper imperdiet, consequat quis magna.
          Praesent mauris orci, tristique a fermentum ut, aliquam nec tortor.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Mauris vitae diam non lacus tincidunt commodo.
        </p>
      </div>
      <div className="flex flex-col space-y-5">
        <h2 className="text-xl font-bold">Date de réalisation</h2>
        <p>
          04/04/2023
        </p>
      </div>
    </div>
  );
};

const LanguageItem = ({ children }) => {
  return (
    <li className="flex items-center px-3 py-1 space-x-2 rounded-xl bg-gray-200 shadow-md">
      {children}
    </li>
  );
};
