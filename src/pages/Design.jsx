import React from "react";
import { FiLink, FiExternalLink } from "react-icons/fi";

function Design() {
  return (
    <div className="w-full h-[90%] bg-[#002147] p-32 flex justify-around ">
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <img
          className="w-full h-full object-cover"
          src="/images/Screenshot 2026-01-30 210628.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://playful-gingersnap-b10b89.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <img
          className="w-full h-full object-cover"
          src="/images/Screenshot 2026-02-01 180021.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://venerable-kangaroo-e93e3e.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <img
          className="w-full h-full object-cover"
          src="/images/Screenshot 2026-02-02 215021.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://coruscating-lebkuchen-5db0f5.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
    </div>
  );
}

export default Design;
