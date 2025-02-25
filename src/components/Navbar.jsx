import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Navbar = (props) => {
  const para = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { tab, setTab } = props;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [para]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-[80px] justify-between items-center overflow-x-hidden">
      <div
        id="title"
        className="text-[24px] ml-2 sm:text-[48px] select-none content-center font-black tracking-[2px] sm:tracking-[5px] sm:ml-[100px]"
      >
        <h1
          onClick={() => {
            navigate("/");
            setTab("about");
          }}
          className="cursor-pointer"
        >
          My Portfolio
        </h1>
      </div>

      <div
        id="navRight"
        className="hidden sm:flex justify-between w-[720px] items-center mr-[100px] text-[20px] tracking-wider"
      >
        <h1
          onClick={() => {
            navigate("/");
            setTab("about");
          }}
          className={`cursor-pointer ${
            tab === "about" ? "text-[#1E8DCC]" : "hover:text-[#1E8DCC]"
          }`}
        >
          ABOUT ME
        </h1>
        <h1
          onClick={() => {
            navigate("/resume");
            setTab("resume");
          }}
          className={`cursor-pointer ${
            tab === "resume" ? "text-[#1E8DCC]" : "hover:text-[#1E8DCC]"
          }`}
        >
          RESUME
        </h1>
        <h1
          onClick={() => {
            navigate("/projects");
            setTab("projects");
          }}
          className={`cursor-pointer ${
            tab === "projects" ? "text-[#1E8DCC]" : "hover:text-[#1E8DCC]"
          }`}
        >
          PROJECTS
        </h1>
        <h1
          onClick={() => {
            navigate("/contact");
            setTab("contact");
          }}
          className={`cursor-pointer ${
            tab === "contact" ? "text-[#1E8DCC]" : "hover:text-[#1E8DCC]"
          }`}
        >
          CONTACT
        </h1>
      </div>
      {/* mobile view */}
      <div className="sm:hidden flex items-center pr-5">
        <button
          onClick={toggleMenu}
          className="relative flex flex-col justify-center items-center w-8 h-8"
        >
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 absolute" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-black transition-all duration-300 mt-1 ease-in-out ${
              isMenuOpen ? "-rotate-45 absolute mt-[-1px]" : ""
            }`}
          ></div>
        </button>
        {isMenuOpen && (
          <div
            id="menuRef"
            className="absolute font-semibold select-none z-2 top-[80px] right-0 bg-[#cce1fa] w-[100vw] p-5 text-[20px] flex flex-col items-center transition-all duration-300 ease-in-out"
          >
            <h1
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
                setTab("about");
              }}
              className={`mb-4 ${
                tab === "about" ? "text-[#1E8DCC]" : "text-black"
              }`}
            >
              ABOUT ME
            </h1>
            <h1
              onClick={() => {
                navigate("/resume");
                setIsMenuOpen(false);
                setTab("resume");
              }}
              className={`mb-4 ${
                tab === "resume" ? "text-[#1E8DCC]" : "text-black"
              }`}
            >
              RESUME
            </h1>
            <h1
              onClick={() => {
                navigate("/projects");
                setIsMenuOpen(false);
                setTab("projects");
              }}
              className={`mb-4 ${
                tab === "projects" ? "text-[#1E8DCC]" : "text-black"
              }`}
            >
              PROJECTS
            </h1>
            <h1
              onClick={() => {
                navigate("/contact");
                setIsMenuOpen(false);
                setTab("contact");
              }}
              className={`${
                tab === "contact" ? "text-[#1E8DCC]" : "text-black"
              }`}
            >
              CONTACT
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
