import React from "react";

const Projects = () => {
  return (
    <>
      {/* Mobile view */}
      <div className="flex h-auto bg-blue-300 flex-col justify-center items-center p-5 sm:hidden">
        <div>
          <h1 className="text-[1.6rem] font-black mt-2">Projects</h1>
        </div>
        {/* container */}
        <div>
          {/* Project 1 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Project 1
              </h1>
              <h2 className="font-semibold mb-3">Role Title</h2>
              <p className="font-light mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempora, esse magni quia maxime optio sapiente
                perspiciatis inventore! Eaque, saepe.
              </p>
            </div>
            <img src="src\images\new.png" alt="" />
          </div>

          {/* Project 1 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Project 1
              </h1>
              <h2 className="font-semibold mb-3">Role Title</h2>
              <p className="font-light mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempora, esse magni quia maxime optio sapiente
                perspiciatis inventore! Eaque, saepe.
              </p>
            </div>
            <img src="src\images\new.png" alt="" />
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-col items-center pt-5 bg-blue-300 w-[100vw] h-auto">
        <div>
          <h1 className="text-[2rem] font-black mb-5">Projects</h1>
        </div>
        {/* Project 1 */}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Project 1</h1>
            <h2 className="font-semibold mb-2">Role</h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              obcaecati at similique quis sunt voluptatibus illum sequi quisquam
              eveniet placeat.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              className="w-full h-full max-w-full max-h-full object-contain"
              src="src/images/new.png"
              alt="Project"
            />
          </div>
        </div>

        {/* Project 1 */}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Project 1</h1>
            <h2 className="font-semibold mb-2">Role</h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              obcaecati at similique quis sunt voluptatibus illum sequi quisquam
              eveniet placeat.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              className="w-full h-full max-w-full max-h-full object-contain"
              src="src/images/new.png"
              alt="Project"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
