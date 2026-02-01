import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-24 bg-[#d2b48c] relative text-[#002147] flex justify-center items-center gap-96 ">
      <div className="absolute left-0 ml-5 font-medium">
        <h3 className="">Contact no: 9075450941</h3>
      </div>
      <h2 className="font-bold ">Aniket Madhe</h2>
      <ul className="flex justify-between gap-5 mr-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/web-designs">Web Designs</Link>
        </li>
        <li>
          <a href="/#footer">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
