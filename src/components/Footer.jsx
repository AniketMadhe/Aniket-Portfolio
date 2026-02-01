import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <div
      id="sfooter"
      className="w-full h-1/4 bg-[#d2b48c] text-[#002147] flex justify-start items-center font-semibold"
    >
      <div className="contact w-1/3 h-[70%]  flex flex-col justify-center items-center ">
        <div className="flex w-[80%] justify-start items-center gap-4 ">
          <FaPhone />
          <span>Contact: 9075450941</span>
        </div>
        <div className="flex w-[80%] justify-start items-center gap-4 ">
          <FaEnvelope />
          <span>Email: aniketmadhe25@gmail.com</span>
        </div>
        <div className="flex w-[80%] justify-starts items-center gap-4 ">
          <FaMapMarkerAlt />
          <span>Location: Pune - Rajgurunagar</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
