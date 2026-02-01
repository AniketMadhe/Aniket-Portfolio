import React from "react";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <div className=" w-full h-[90%] bg-[#002147] flex justify-center text-[#d2b48c] gap-12 items-center ">
      <div className=" w-[40%] h-[55%] overflow-hidden flex flex-col gap-1 shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <img
          className="w-full h-[90%]] object-cover"
          src="/images/Screenshot 2026-02-01 144405.png"
          alt=""
        />
        <a target="_blank" href="https://e-com-bookworm-onab.onrender.com/">
          <h2 className="text-center  cursor-pointer text-sm font-semibold flex justify-center items-center gap-2">
            {" "}
            <FiExternalLink /> See Live
          </h2>
        </a>
      </div>
      <div className="w-[30%]">
        <p className="font-light">
          Bookworm is a full-stack e-commerce platform built with the MERN
          stack, featuring product browsing, cart and order management, secure
          authentication, and a powerful admin panel for managing books, users,
          and orders.
        </p>
      </div>
    </div>
  );
}

export default Projects;
