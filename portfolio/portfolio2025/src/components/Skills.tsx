import { skillList } from "../constants/skillList.js";
import { FaServer } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const skillIcons: Record<string, React.ReactElement> = {
  frontend: <FaLaptopCode />,
  backend: <FaServer />,
  database: <AiOutlineCloudServer />,
  tools: <FaTools />,
};
const Skills = () => {
  return (
    <div className="p-0 my-3 flex flex-col justify-center items-center xl:pl-10 xl:items-start">
      <h1 className="text-5xl w-max">SKILLS</h1>
      <div className="border p-3 my-6 rounded-lg flex flex-col gap-5 font-sub bg-white">
        {Object.entries(skillList).map(([category, skills]) => (
          <div className="flex xl:flex gap-1">
            <div className="flex items-center gap-2 text-black xl:w-25 mr-2">
              <span className=" text-2xl">{skillIcons[category]}</span>
              <span className="text-lg">{category}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {skills.map((item, i) => (
                <div
                  className="mr-1 text-white rounded-md px-2 text-sm flex items-center"
                  style={{ backgroundColor: item.color }}
                  key={i}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
