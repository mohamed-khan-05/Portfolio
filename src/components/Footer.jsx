import React from "react";

// media
import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  let strDate = today.getFullYear();
  return (
    <>
      {/* mobile view */}
      <div className="bg-white h-[5vh] bottom-0 flex flex-col justify-between pl-2 pr-5 sm:hidden">
        <div className="flex justify-around mb-5 mt-1">
          <div className="text-center w-[40vw] break-words">
            <h1 className="text-[14px] font-semibold">Call</h1>
            <h1 className="text-[12px]">069 817 6087</h1>
          </div>
          <div className="text-center w-[60vw] break-words">
            <h1 className="text-[14px] font-semibold">Email</h1>
            <h1 className="text-[12px]">mohamedkhan050124@gmail.com</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[14px] font-semibold">Follow</h1>
          <div className="flex gap-4 bg-white text-black py-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex items-center text-[14px]">
          <FaRegCopyright className="mx-1" /> <h1> {strDate}</h1>
        </div>
      </div>
      {/* Desktop view */}
      <div className="bg-white h-[5vh] bottom-0 justify-between px-5 hidden sm:flex">
        <div className="flex items-center">
          <FaRegCopyright className="mx-1" /> <h1> {strDate}</h1>
        </div>
        {/* right div */}
        <div className="flex text-center w-[50vw] justify-between">
          <div>
            <h1 className="font-semibold">Call</h1>
            <h1>069 817 6087</h1>
          </div>

          <div>
            <h1 className="font-semibold">Email</h1>
            <h1>mohamedkhan050124@gmail.com</h1>
          </div>

          <div>
            <h1 className="font-semibold">Follow</h1>
            <div className="flex gap-4 bg-white text-black py-1">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
