import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router";

// colors
// Main - #60A6FA
// Secondary - #BFD9F8
// Button - #1E8DCC
// Button b - #166A9A

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden sm:block h-[85vh]">
        <div className="fixed w-[788px] h-[840px] bg-[#60A6FA] z-[-1]"></div>
        <div className="flex justify-center translate-x-[-120px] pt-18">
          <div
            id="shadow"
            className="bg-[#BFD9F8] w-[600px] h-[700px] flex flex-col items-center pt-6"
          >
            <div className="flex-grow flex justify-center items-center">
              <div className="w-[400px] h-[400px] rounded-full overflow-hidden">
                <img
                  src="/images/new.png"
                  alt="Mohamed Asghar Khan"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="w-full text-center h-[70px] bg-white text-lg font-medium">
              <div className="flex justify-center gap-10 items-center h-full">
                <a
                  href="https://www.linkedin.com/in/mohamed-khan-72a5aa289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-[#1E8DCC]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/mohamed_khan_2401/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-[#1E8DCC]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/mohamed-khan-05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-[#1E8DCC]"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="ml-10 mt-15 bg-white">
            <h1 className="text-[30px]">Hello, I am</h1>
            <div className="text-[54px] font-semibold tracking-[2px] leading-snug">
              <h1>Mohamed Asghar</h1>
              <h1>Khan</h1>
            </div>
            <div className="flex gap-5 mt-10">
              <button
                onClick={() => {
                  navigate("/resume");
                }}
                className="w-40 font-bold cursor-pointer h-10 rounded-3xl border-2 border-[#166A9A] bg-[#1E8DCC] text-white hover:border-[#60A6FA] hover:text-black hover:bg-white"
              >
                Resume
              </button>
              <button
                onClick={() => {
                  navigate("/projects");
                }}
                className="w-40 font-bold cursor-pointer h-10 rounded-3xl border-2 bg-white border-[#60A6FA] hover:bg-[#1E8DCC] hover:text-white hover:border-[#166A9A]"
              >
                Projects
              </button>
            </div>
            <div className="mt-14 text-justify leading-relaxed w-[400px]">
              <p>
                Passionate and skilled web developer pursuing a Bachelor of
                Information and Communication Technology. Proficient in
                designing, developing, and maintaining responsive websites and
                web applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden h-auto flex flex-col">
        <div
          id="shadow"
          className="w-auto h-auto bg-[#BFD9F8] pt-10 pb-3 mx-10"
        >
          <div className="flex justify-center mb-6">
            <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
              <img
                src="/images/new.png"
                alt="Mohamed Asghar Khan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-6">
            <button
              onClick={() => {
                navigate("/resume");
              }}
              className="w-32 font-semibold cursor-pointer h-10 rounded-3xl border-2 border-[#0e94e2] bg-[#1E8DCC] text-white"
            >
              Resume
            </button>
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="w-32 font-semibold cursor-pointer h-10 rounded-3xl border-2 border-[#60A6FA] bg-white"
            >
              Projects
            </button>
          </div>

          <div className="flex justify-center gap-8 mt-4 bg-white text-black py-3">
            <a
              href="https://www.linkedin.com/in/mohamed-khan-72a5aa289"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/mohamed_khan_2401/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/mohamed-khan-05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="absolute bg-[#60A6FA] h-[50vh] w-[100vw] mt-[20vh] z-[-1] py-12 pt-[30vh]"></div>
        <div className="bg-[#60A6FA]">
          <div className="text-center">
            <h1 className="text-2xl text-white mt-3">Hello, I am</h1>
            <div className="text-4xl font-semibold tracking-tight leading-snug text-white">
              <h1>Mohamed Asghar</h1>
              <h1>Khan</h1>
            </div>
            <div className="my-3 text-lg mx-1 text-center text-white">
              <p>
                Passionate and skilled web developer pursuing a Bachelor of
                Information and Communication Technology. Proficient in
                designing, developing, and maintaining responsive websites and
                web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
