import { useState } from "react";
import ProjectForm from "./ProjectForm";
import { projectList } from "../constants/projectList";

const Project = () => {
  const [checkFilter, setCheckFilter] = useState(true);

  const filterList = checkFilter
    ? projectList.filter((item) => item.important)
    : projectList;

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-5xl">PROJECT</h1>

      <label
        htmlFor="important_project"
        className="text-xl relative font-sub mr-2 flex gap-1 mt-10 items-center w-max cursor-pointer"
      >
        중요 프로젝트 보기
        <input
          type="checkbox"
          id="important_project"
          checked={checkFilter}
          onClick={() => setCheckFilter((prev) => !prev)}
        />
      </label>

      <section className="flex flex-col items-center xl:grid grid-cols-2 gap-20 py-10 w-full">
        {filterList.map((item, i) => (
          <ProjectForm item={item} key={i} />
        ))}
      </section>
    </div>
  );
};

export default Project;
