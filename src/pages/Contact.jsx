import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

// media
import { MdErrorOutline } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("hidden");
  const [email, setEmail] = useState("hidden");
  const [message, setMessage] = useState("hidden");
  const handleSubmit = (e) => {
    e.preventDefault();
    const n = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const m = document.getElementById("message").value;
    const subject = document.getElementById("subject").value;
    if (!n) {
      setName("flex");
    } else {
      setName("hidden");
    }
    if (!em) {
      setEmail("flex");
    } else {
      setEmail("hidden");
    }
    if (!m) {
      setMessage("flex");
    } else {
      setMessage("hidden");
    }

    if (n && em && m) {
      const templateParams = {
        name: n,
        email: em,
        subject: subject || "No subject provided",
        message: m,
      };
      emailjs
        .send(
          "service_nlbvjmc",
          "template_n9s92dh",
          templateParams,
          "R8WQvIg14neTPh35q"
        )
        .then(
          () => {
            toast.success("Your message has been sent successfully!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
          },
          (err) => {
            toast.error("Failed...");
            console.log(err);
          }
        );
    }
  };
  return (
    <div className="bg-[#60A6FA] flex py-8 sm:justify-center sm:h-[85vh]">
      <div
        id="shadow"
        className="flex h-auto bg-white flex-col justify-center sm:justify-start sm:pt-[4vh] items-center mx-5 px-5 rounded-md sm:w-[70vw]"
      >
        <h1 className="text-[1.6rem] font-black mt-2 sm:mb-12">Contact</h1>
        <form onSubmit={handleSubmit} className="w-[80vw] sm:w-[60vw]">
          <div className="flex flex-col mb-8">
            <label className="font-semibold" htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              autoComplete="on"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[#1E8DCC] mt-4 mb-2"
              type="text"
            />
            <h1 className={`${name} flex items-center gap-2 text-red-500`}>
              <MdErrorOutline /> Enter your name
            </h1>
          </div>
          <div className="flex flex-col mb-8">
            <label className="font-semibold" htmlFor="email">
              Your Email *
            </label>
            <input
              id="email"
              autoComplete="on"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[#1E8DCC] mt-4 mb-2"
              type="email"
            />
            <h1 className={`${email} flex items-center gap-2 text-red-500`}>
              <MdErrorOutline /> Enter your email
            </h1>
          </div>
          <div className="flex flex-col mb-8">
            <label className="font-semibold" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              autoComplete="off"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-[#1E8DCC] mt-4 mb-2"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-3 sm:mb-8">
            <label className="font-semibold" htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              autoComplete="off"
              rows={3}
              className="border-2 px-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#1E8DCC] mt-4 mb-2"
              type="text"
            />
            <h1 className={`${message} flex items-center gap-2 text-red-500`}>
              <MdErrorOutline /> Enter a message
            </h1>
          </div>
          <div className="mb-3 flex justify-center">
            <button className="w-40 font-bold cursor-pointer h-10 rounded-3xl border-2 bg-[#1E8DCC] border-[#166A9A] text-white sm:hover:bg-white sm:hover:text-black sm:hover:border-[#60A6FA]">
              Submit
            </button>
          </div>
        </form>
      </div>

      <ToastContainer
        style={{ marginTop: "40px", right: "0" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        draggable={false}
      />
    </div>
  );
};

export default Contact;
