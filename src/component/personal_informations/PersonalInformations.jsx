export const PersonalInformations = () => {
  return (
    <div className="w-3/4 flex flex-col space-y-8 bg-white rounded-xl p-10 shadow-2xl">
      <div className="w-11/12 text-end text-8xl flex flex-col space-y-5">
        <div className="flex items-end justify-between space-x-5">
          <span className="size-12 bg-indigo-500 rounded-full shadow-2xl"></span>
          <h1 className="font-bold">ANGOT</h1>
        </div>
        <h1 className="font-bold">Alexandre</h1>
      </div>
      <p className="text-end font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dui
        velit, gravida ullamcorper imperdiet, consequat quis magna. Praesent
        mauris orci, tristique a fermentum ut, aliquam nec tortor. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Mauris vitae diam non lacus tincidunt commodo.
      </p>
      <p className="text-gray-600 text-center">
        Copyright © 2024 - ANGOT Alexandre
      </p>
    </div>
  );
};
