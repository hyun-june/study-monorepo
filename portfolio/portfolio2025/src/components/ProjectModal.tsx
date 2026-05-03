import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface ProjectModalProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img?: string[];
}

const ProjectModal = ({ setModalIsOpen, img }: ProjectModalProps) => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  if (!img) {
    return <div className="text-black">이미지를 불러오는 중...</div>;
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[998]"
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className="fixed z-[999] bg-white shadow-lg rounded-md p-3 flex flex-col items-center gap-3 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border border-black w-full h-full flex justify-center items-center">
          {img && (
            <img
              src={img[tabIndex - 1]}
              alt=""
              className="max-w-[1700px] h-[800px] object-contain mx-auto"
            />
          )}
        </div>
        <div className="flex gap-1 text-black  items-center text-2xl">
          <button
            onClick={() => setTabIndex((prev) => (prev > 1 ? prev - 1 : prev))}
            className="cursor-pointer"
          >
            <IoIosArrowBack />
          </button>
          <span className="text-lg mb-1">{`${tabIndex} / ${img?.length}`}</span>
          <button
            onClick={() =>
              setTabIndex((prev) => (prev < img.length ? prev + 1 : prev))
            }
            className="cursor-pointer"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
