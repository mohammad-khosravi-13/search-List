import React from "react";
import LogoSearch from "./img/search_18dp_5F6368_FILL0_wght400_GRAD0_opsz20.png";
import '../index.css'; 

function Heder() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl font-bold p-2">*Searching for other content*</h1>
          <p>
            You can use the search bar below to search for your other colleagues,
            <span className="flex flex-col justify-center items-center">
              just search what language they speak
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 relative w-2/5 mx-auto text-xl">
        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-200 w-full h-14 rounded-l-full border-4 border- pl-14 animated-border focus:outline-none"
        />
        <img
          src={LogoSearch}
          alt="Search Icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10"
        />
        <button className="bg-black hover:bg-gray-800 text-white w-28 h-14 rounded-r-2xl">search</button>
      </div>
    </div>
  );
}

export default Heder;
