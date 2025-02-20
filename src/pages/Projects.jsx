import React, { useState } from "react";
import ImageViewer from "../components/ImageViewer ";

const Projects = () => {
  const [view, setView] = useState(false);
  const [pic, setPic] = useState("");
  return (
    <>
      <ImageViewer view={view} pic={pic} onClose={() => setView(false)} />

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
                Task Manager
              </h1>
              <h2 className="font-semibold mb-3">
                React.js | Express.js | SQL
              </h2>
              <p className="font-light mb-1">
                A productivity tool that allows users to create, update, and
                track tasks with due dates and statuses, enhancing organization
                and efficiency.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\Task Manager.png");
              }}
              src="\images\Task Manager.png"
              alt=""
            />
          </div>
          {/* Project 1 end */}

          {/* Project 2 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Recipe Finder
              </h1>
              <h2 className="font-semibold mb-3">React.js | Tailwind CSS</h2>
              <p className="font-light mb-1">
                A web app for searching recipes by ingredient, displaying dish
                details, ingredients, and YouTube tutorials. Built with React
                for functionality, Tailwind for styling, and TheMealDB API for
                dynamic data.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\recipefinder.png");
              }}
              src="\images\recipefinder.png"
              alt=""
            />
          </div>
          {/* Project 2 end */}

          {/* Project 3 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Movie Finder
              </h1>
              <h2 className="font-semibold mb-3">React.js | Express.js</h2>
              <p className="font-light mb-1">
                A search-based application that provides movie details and
                ratings using an external API.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\moviefinder.png");
              }}
              src="\images\moviefinder.png"
              alt=""
            />
          </div>
          {/* Project 3 end */}

          {/* Project 4 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Nutrition Tracker
              </h1>
              <h2 className="font-semibold mb-3">React.js | Express.js</h2>
              <p className="font-light mb-1">
                A health-focused app that calculates daily caloric intake based
                on macronutrient inputs, helping users monitor and manage their
                diet effectively.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\NutriTrack1.png");
              }}
              src="\images\NutriTrack1.png"
              alt=""
            />
          </div>
          {/* Project 4 end */}

          {/* Project 5 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Weather App
              </h1>
              <h2 className="font-semibold mb-3">React.js | Express.js</h2>
              <p className="font-light mb-1">
                A real-time weather application that provides forecasts,
                temperature, and conditions based on searched cities using an
                API.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\WeatherApp.png");
              }}
              src="\images\WeatherApp.png"
              alt=""
            />
          </div>
          {/* Project 5 end */}

          {/* Project 6 */}
          <div className="bg-white my-8 rounded-lg overflow-hidden" id="shadow">
            <div className="p-3">
              <h1 className="text-[#1E8DCC] text-[1.3rem] font-bold">
                Credit Card Validator
              </h1>
              <h2 className="font-semibold mb-3">React.js | Express.js</h2>
              <p className="font-light mb-1">
                You enter a credit card number, hit Check, and the app validates
                the format using the validator library.
              </p>
            </div>
            <img
              onClick={() => {
                setView(!view);
                setPic("images\\ccvalidate.png");
              }}
              src="\images\ccvalidate.png"
              alt=""
            />
          </div>
          {/* Project 6 end */}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden sm:flex flex-col items-center pt-5 bg-blue-300 w-auto h-auto">
        <div>
          <h1 className="text-[2rem] font-black mb-5">Projects</h1>
        </div>
        {/* Project 1 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Task Manager</h1>
            <h2 className="font-semibold mb-2"> React.js | Express.js | SQL</h2>
            <p className="font-light">
              A productivity tool that allows users to create, update, and track
              tasks with due dates and statuses, enhancing organization and
              efficiency.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\Task Manager.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\Task Manager.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 1 end */}

        {/* Project 2 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Recipe Finder</h1>
            <h2 className="font-semibold mb-2"> React.js | Tailwind CSS</h2>
            <p className="font-light">
              A web app for searching recipes by ingredient, displaying dish
              details, ingredients, and YouTube tutorials. Built with React for
              functionality, Tailwind for styling, and TheMealDB API for dynamic
              data.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\recipefinder.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\recipefinder.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 2 end */}

        {/* Project 3 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Movie Finder</h1>
            <h2 className="font-semibold mb-2"> React.js | Express.js</h2>
            <p className="font-light">
              A search-based application that provides movie details and ratings
              using an external API.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\moviefinder.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\moviefinder.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 3 end */}

        {/* Project 4 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Nutrition Tracker</h1>
            <h2 className="font-semibold mb-2"> React.js | Express.js</h2>
            <p className="font-light">
              A health-focused app that calculates daily caloric intake based on
              macronutrient inputs, helping users monitor and manage their diet
              effectively.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\NutriTrack1.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\NutriTrack1.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 4 end */}

        {/* Project 5 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">Weather App</h1>
            <h2 className="font-semibold mb-2"> React.js | Express.js</h2>
            <p className="font-light">
              A real-time weather application that provides forecasts,
              temperature, and conditions based on searched cities using an API.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\WeatherApp.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\WeatherApp.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 5 end */}

        {/* Project 6 start*/}
        <div
          id="shadow"
          className="flex w-[60vw] h-[30vh] mb-8 bg-white rounded-lg"
        >
          <div className="w-[30vw] justify-center pl-5 flex flex-col">
            <h1 className="text-[1.6rem] text-[#1E8DCC]">
              Credit Card Validator
            </h1>
            <h2 className="font-semibold mb-2"> React.js | Express.js</h2>
            <p className="font-light">
              You enter a credit card number, hit Check, and the app validates
              the format using the validator library.
            </p>
          </div>
          <div className="w-[30vw] h-full flex justify-center items-center overflow-hidden">
            <img
              onClick={() => {
                setPic("images\\ccvalidate.png");
                setView(true);
              }}
              className="w-full h-full max-w-full max-h-full object-contain"
              src="\images\ccvalidate.png"
              alt="Project"
            />
          </div>
        </div>
        {/* Project 6 end */}
      </div>
    </>
  );
};

export default Projects;
