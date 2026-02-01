import React from "react";

function Welcome() {
  return (
    <div className="w-full h-[90%] bg-[#002147] flex justify-center items-center gap-40 text-[#d2b48c]">
      <div className="about w-[40%] h-[75%] flex justify-center items-center">
        <p>
          "Passinate MERN stack developer and love building complete web apps. I
          enjoy creative web designing that look great and are fun to use."
        </p>
      </div>
      <div className="bg-amber-800 w-[30%] h-[75%] bg-[url('/images/Aniket_Photo2.jpg')] bg-cover bg-center rounded-full overflow-hidden">
        <img src="/images/Aniket_Photo2.jpg" alt="" />
      </div>
    </div>
  );
}

export default Welcome;
