import React from "react";
import { FiLink, FiExternalLink } from "react-icons/fi";

function Design() {
  return (
    <div className="w-full h-[90%] bg-[#002147]  p-24 flex justify-center gap-x-8 gap-y-4 items-center flex-wrap">
      <div className="pro1 w-64 h-48  flex flex-col items-center  mt-4 shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <h2>Sign-up page</h2>
        <img
          className="w-full h-full object-cover"
          src="/images/Signup-Login-page.png"
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
        <h2>Glass card hover effect</h2>
        <img
          className="w-full h-full object-cover"
          src="/images/Glass-card-hover-effect.png"
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
        <h2>Expanding slider items </h2>
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
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <h2>Neumorphism Login page</h2>
        <img
          className="w-full h-full object-cover"
          src="images/Neuomorphism login page.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://delightful-kitten-3c1c04.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <h2>Dynamic Menu button CSS</h2>
        <img
          className="w-full h-full object-cover"
          src="images/dynamic-button.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://tiny-pie-eede53.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
      <div className="pro1 w-64 h-48  flex flex-col items-center shadow-[3px_3px_3px_rgba(0,0,0,0.9)]">
        <h2>SVG Text-Reveal Animation</h2>
        <img
          className="w-full h-full object-cover"
          src="images/svg-text.png"
          alt=""
        />

        <a
          target="_blank"
          className=" cursor-pointer flex justify-center items-center gap-4"
          href="https://cheerful-daffodil-b01ab3.netlify.app/"
        >
          <FiExternalLink />
          See live
        </a>
      </div>
    </div>
  );
}

export default Design;
