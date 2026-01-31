import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-24 bg-green-700 flex justify-center items-center gap-96 ">
      <h2 className="font-bold ">Aniket Madhe</h2>
      <ul className="flex justify-between gap-5">
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
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
