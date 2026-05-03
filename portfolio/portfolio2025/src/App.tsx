import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import { profileList } from "./constants/profileList";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {}, [width]);

  return (
    <div className=" text-[var(--text-green)] px-[1em] flex flex-col xl:px-[4em]">
      <nav className="border-b-2 border-gray-200 text-4xl mt-2 font-title">
        PORTFOLIO
      </nav>
      <div className="flex my-10">
        {width <= 1024 && width >= 768 && (
          <section className="grid h-full w-full self-center justify-self-center">
            <div className="flex flex-col xl:flex-row">
              <div className="flex border-b-2 border-gray-200 pb-10">
                <Profile profile={profileList} />
                <Home type="tablet" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col xl:grid grid-cols-2 border-b-2 border-gray-200 py-2">
                  <Skills />
                </div>
                <Project />
              </div>
            </div>
          </section>
        )}

        {width <= 768 && (
          <section className="grid h-full w-full self-center justify-self-center">
            <div className="flex flex-col xl:flex-row">
              <div className="flex border-b-2 border-gray-200 pb-10 justify-center ">
                <Profile profile={profileList} />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex flex-col xl:grid grid-cols-2 border-b-2 border-gray-200 py-2">
                  <Home />
                  <Skills />
                </div>
                <Project />
              </div>
            </div>
          </section>
        )}
        {width > 1024 && (
          <section className="grid h-full w-full self-center justify-self-center">
            <div className="flex flex-col xl:flex-row">
              <Profile profile={profileList} />
              <div className="flex flex-col flex-1">
                <div className="flex flex-col xl:grid grid-cols-2 border-b-2 border-gray-200 py-2">
                  <Home />
                  <Skills />
                </div>
                <Project />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
