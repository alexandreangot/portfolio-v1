import { IoMdClose } from "react-icons/io";

export const SubjectPopUp = ({ children, onClickClose }) => {
  return (
    <section className="absolute backdrop-blur-sm w-full h-screen flex justify-center items-center z-20">
      <div className="w-3/4 h-3/4 bg-white flex flex-col p-8 rounded-md shadow-2xl">
        <button
          onClick={onClickClose}
          className="self-end p-2 rounded-lg hover:bg-gray-200"
        >
          <IoMdClose size={40} />
        </button>
        {children}
      </div>
    </section>
  );
};
