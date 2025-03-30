import React from "react";

// media
import { AiOutlineRobot } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

const Resume = () => {
  return (
    <>
      {/* Mobile view */}
      <div className="flex h-auto bg-blue-300 flex-col justify-center items-center p-5 sm:hidden">
        <div>
          <h1 className="text-[1.6rem] font-black mt-2">Resume</h1>
        </div>
        <div className="flex justify-around items-center w-full mt-8">
          <h1 className="font-semibold text-[18px]">Experience</h1>
          <button className="text-[12px] hidden font-semibold px-3 py-2 rounded-2xl border-[#60A6FA] border-2 bg-white">
            DOWNLOAD CV
          </button>
        </div>

        {/* xp 1 */}
        <div className="bg-white px-3 py-6 my-4 rounded-lg" id="shadow">
          <h1 className="text-[#1E8DCC] font-black">2024</h1>
          <h1 className="text-[1.2rem] mb-1 font-medium">
            Teacher-Parent Booking System
          </h1>
          <h2>
            <strong>Role</strong>: Team Leader <br />
            <strong>Tech Stack</strong>: ASP.NET, SQL, C#
          </h2>

          <ul className="font-light mt-4">
            <li>
              Led a team in developing a scheduling system for teachers and
              parents to discuss students' progress.
            </li>
            <li>
              Designed and implemented booking functionalities, ensuring
              seamless scheduling and role-based access.
            </li>
            <li>
              Integrated a user-friendly dashboard for teachers to manage
              meetings and track completed sessions.
            </li>
          </ul>
        </div>

        {/* xp 2 */}
        <div className="bg-white px-3 py-6 my-4 rounded-lg" id="shadow">
          <h1 className="text-[#1E8DCC] font-black">2023</h1>
          <h1 className="text-[1.2rem] mb-1 font-medium">Bookmarker Web App</h1>
          <h2>
            <strong>Role</strong>: Lead Coder <br /> <strong>Tech Stack</strong>
            : ASP.NET, SQL, C#
          </h2>

          <ul className="font-light mt-4">
            <li>
              Developed a bookmarking application for saving books, articles,
              and movies/series.
            </li>
            <li>
              Contributed the majority of the coding, ensuring functionality and
              UI/UX optimization.
            </li>
            <li>
              Implemented data storage and retrieval for a smooth user
              experience.
            </li>
          </ul>
        </div>

        {/* education */}
        <div className="flex justify-between items-center mb-5 mt-8">
          <div className="w-[72vw]">
            <h1 className="font-semibold text-[18px]">Education</h1>
          </div>
        </div>

        {/* uni */}
        <div
          className="flex flex-col bg-white p-8 rounded-lg mb-10"
          id="shadow"
        >
          <h1 className="text-[#1E8DCC] font-bold">2023 - Present</h1>
          <h1 className="text-[1.1rem] font-medium mb-4">
            Bachelor of Information and Communication Technology
          </h1>
          <h2 className="italic mb-8">
            Durban University of Technology — Durban, South Africa
          </h2>

          <div className="flex items-center justify-center font-light">
            <ul className="flex flex-col gap-1">
              <li className="font-normal">Relevant Coursework :</li>
              <br />
              <li className="flex items-center gap-4">
                <div>
                  <AiOutlineRobot />
                </div>
                MACHINE INTELLIGENCE
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <FaCode />
                </div>
                INTEGRATIVE PROGRAMMING AND TECHNOLOGY
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <FaCode />
                </div>
                PLATFORM BASED DEVELOPMENT
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <FaCode />
                </div>
                SOFTWARE ENGINEERING
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <FaCode />
                </div>
                ALGORITHMS AND DATA STRUCTURES
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <MdSchool />
                </div>
                PROJECT MANAGEMENT
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <MdSchool />
                </div>
                INFORMATION ASSURANCE AND SECURITY
              </li>
              <li className="flex items-center gap-4">
                <div>
                  <MdSchool />
                </div>
                NETWORKS AND OPERATING SYSTEMS
              </li>
            </ul>
          </div>
        </div>
        {/* education end */}

        {/* skills start */}
        <div className="flex justify-between items-center mb-5 mt-8">
          <div className="w-[72vw]">
            <h1 className="font-semibold text-[18px]">Skills</h1>
          </div>
        </div>

        <div
          className="flex flex-col bg-white p-8 rounded-lg mb-10"
          id="shadow"
        >
          <div className="flex flex-col gap-[10vw]">
            <div>
              <h1 className="font-semibold mb-4">Programming Languages</h1>
              <ul>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>JavaScript</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>React.js</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>Express.js</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>SQL</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>MongoDB</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>HTML</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>XML</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>CSS</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>Tailwind CSS</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>Python</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>Java</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>Kotlin</li>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <FaCode />
                  </div>
                  <li>C#</li>
                </div>
              </ul>
            </div>

            {/* Other */}
            <div>
              <h1 className="font-semibold mb-4">Other</h1>
              <ul>
                <div className="flex gap-2 mb-2">
                  <div className="flex items-center">
                    <MdSchool />
                  </div>
                  <li>Azure Services</li>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex items-center">
                    <MdSchool />
                  </div>
                  <li>Artifical Intelligence and Machine Learning</li>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex items-center">
                    <MdSchool />
                  </div>
                  <li>Data Structures and Algorithms</li>
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex items-center">
                    <MdSchool />
                  </div>
                  <li>Teamwork & Collaboration</li>
                </div>

                <div className="flex gap-2 mb-2">
                  <div>
                    <MdSchool className="mt-1 mb-2" />
                  </div>
                  <h1>Professional skills:</h1>
                </div>
                <div className="ml-3">
                  <div className="flex items-center gap-2">
                    <div>
                      <TbPointFilled />
                    </div>
                    <h1> Resume Creation</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbPointFilled />
                    </div>
                    <h1> Communication</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbPointFilled />
                    </div>
                    <h1> Problem-solving process</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbPointFilled />
                    </div>
                    <h1> Goal setting</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div>
                      <TbPointFilled />
                    </div>
                    <h1> Networking</h1>
                  </div>
                </div>
              </ul>
            </div>
            {/* certs end */}
          </div>
        </div>
        {/* skills end */}
      </div>
      {/* Desktop view */}
      <div className="bg-blue-300 hidden sm:flex flex-col h-auto items-center pt-5">
        <div>
          <h1 className="text-[2rem] font-black mb-5">Resume</h1>
        </div>
        <div className="w-[60vw]">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-[1.5rem] font-bold">Experience</h1>
            <button className="w-40 text-[14px] font-bold hidden cursor-pointer h-10 rounded-3xl bg-white border-2 border-[#60A6FA] hover:bg-[#1E8DCC] hover:text-white hover:border-[#166A9A]">
              DOWNLOAD CV
            </button>
          </div>

          {/* xp 1 */}
          <div className="flex bg-white p-8 rounded-lg mb-10" id="shadow">
            <div className="w-[50%] ">
              <h1 className="text-[#1E8DCC] font-bold">2024</h1>
              <h1 className="text-[1.2rem] font-medium mb-4">
                Teacher-Parent Booking System
              </h1>
              <h2>
                <strong>Role</strong>:Team Leader <br />
                <strong>Tech Stack</strong>: ASP.NET, SQL, C#
              </h2>
            </div>
            <div className="flex w-[50%] items-center justify-center font-light">
              <ul>
                <li>
                  Led a team in developing a scheduling system for teachers and
                  parents to discuss students' progress.
                </li>
                <br />
                <li>
                  Designed and implemented booking functionalities, ensuring
                  seamless scheduling and role-based access.
                </li>
                <br />
                <li>
                  Integrated a user-friendly dashboard for teachers to manage
                  meetings and track completed sessions.
                </li>
              </ul>
            </div>
          </div>

          {/* xp 2 */}
          <div className="flex bg-white p-8 rounded-lg mb-10" id="shadow">
            <div className="w-[50%] ">
              <h1 className="text-[#1E8DCC] font-bold">2023</h1>
              <h1 className="text-[1.2rem] font-medium mb-4">
                Bookmarker Web App
              </h1>
              <h2>
                <strong>Role</strong>: Lead Coder <br />
                <strong>Tech Stack</strong>: ASP.NET, SQL, C#
              </h2>
            </div>
            <div className="flex w-[50%] items-center justify-center font-light">
              <ul>
                <li>
                  Developed a bookmarking application for saving books,
                  articles, and movies/series.
                </li>
                <br />
                <li>
                  Contributed the majority of the coding, ensuring functionality
                  and UI/UX optimization.
                </li>
                <br />
                <li>
                  Implemented data storage and retrieval for a smooth user
                  experience.
                </li>
              </ul>
            </div>
          </div>
          {/* education */}
          <div className="flex justify-between items-center mb-8 mt-14">
            <h1 className="text-[1.5rem] font-bold">Education</h1>
          </div>
          {/* uni */}
          <div className="flex bg-white p-8 rounded-lg mb-10" id="shadow">
            <div className="w-[50%] ">
              <h1 className="text-[#1E8DCC] font-bold">2023 - Present</h1>
              <h1 className="text-[1.1rem] font-medium mb-4">
                Bachelor of Information and Communication Technology
              </h1>
              <h2 className="italic">
                Durban University of Technology — Durban, South Africa
              </h2>
            </div>
            <div className="flex w-[50%] items-center justify-center font-light">
              <ul className="flex flex-col gap-1">
                <li className="font-normal">Relevant Coursework :</li>
                <br />
                <li className="flex items-center gap-4">
                  <AiOutlineRobot /> MACHINE INTELLIGENCE
                </li>
                <li className="flex items-center gap-4">
                  <FaCode /> INTEGRATIVE PROGRAMMING AND TECHNOLOGY
                </li>
                <li className="flex items-center gap-4">
                  <FaCode /> PLATFORM BASED DEVELOPMENT
                </li>
                <li className="flex items-center gap-4">
                  <FaCode /> SOFTWARE ENGINEERING
                </li>
                <li className="flex items-center gap-4">
                  <FaCode /> ALGORITHMS AND DATA STRUCTURES
                </li>
                <li className="flex items-center gap-4">
                  <MdSchool /> PROJECT MANAGEMENT
                </li>
                <li className="flex items-center gap-4">
                  <MdSchool /> INFORMATION ASSURANCE AND SECURITY
                </li>
                <li className="flex items-center gap-4">
                  <MdSchool /> NETWORKS AND OPERATING SYSTEMS
                </li>
              </ul>
            </div>
          </div>
          {/* education end */}
          {/* skills start */}
          <div className="flex justify-between items-center mb-8 mt-14">
            <h1 className="text-[1.5rem] font-bold">Skills</h1>
          </div>
          <div className="flex bg-white p-8 rounded-lg mb-10" id="shadow">
            <div className="flex gap-[10vw]">
              <div>
                <h1 className="font-semibold mb-4">Programming Languages</h1>
                <ul>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>JavaScript</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>React.js</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>Express.js</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>SQL</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>MongoDB</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>HTML</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>XML</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>CSS</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>Tailwind CSS</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>Python</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>Java</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>Kotlin</li>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaCode /> <li>C#</li>
                  </div>
                </ul>
              </div>

              {/* certs */}
              <div>
                <h1 className="font-semibold mb-4">Other</h1>
                <ul>
                  <div className="flex gap-2">
                    <MdSchool />
                    <li>Azure Services</li>
                  </div>
                  <div className="flex gap-2">
                    <MdSchool />
                    <li>Artifical Intelligence and Machine Learning</li>
                  </div>
                  <div className="flex gap-2">
                    <MdSchool />
                    <li>Data Structures and Algorithms</li>
                  </div>
                  <div className="flex gap-2">
                    <MdSchool />
                    <li>Teamwork & Collaboration</li>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex gap-2">
                      <MdSchool className="mt-1" />
                      <h1>Professional skills:</h1>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <TbPointFilled /> <h1> Resume Creation</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <TbPointFilled /> <h1> Communication</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <TbPointFilled /> <h1> Problem-solving process</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <TbPointFilled /> <h1> Goal setting</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <TbPointFilled /> <h1> Networking</h1>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
              {/* certs end */}
            </div>
          </div>
          {/* skills end */}
        </div>
      </div>
    </>
  );
};

export default Resume;
