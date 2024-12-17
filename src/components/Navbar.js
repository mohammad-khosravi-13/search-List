import React from "react";
import logo from "./img/image.png (4).jpeg"
function Navbar() {
  return (
    <div className="bg-gradient-to-t from-[#ffffff] via-[#ffffff] to-indigo-200 w-screen h-[300px] p-7">
      <nav className="w-5/6 bg-white m-auto  flex justify-between items-center rounded-full p-1 h-[90px] ">
     <div className=" flex justify-center items-center gap-4"> 
        <div className="w-[100px] h-[100px]  ml-4 mix-blend-darken">
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <ul className=" flex gap-7 text-2xl font-bold text-black">
                <li>Abute</li>
                <li>about us</li>
                <li>Contact us</li>
                <li>Blog</li>
                <li>FAQ</li>
            </ul>
        </div>
    </div>
    <div>
        <div className=" p-5 gap-2 flex justify-center items-center">
            <div className="border-2 border-black rounded-full w-[40px] h-[40px] flex justify-center items-center" >
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M396-396q-32-32-58.5-67T289-537q-5 14-6.5 28.5T281-480q0 83 58 141t141 58q14 0 28.5-2t28.5-6q-39-22-74-48.5T396-396Zm57-56q51 51 114 87.5T702-308q-40 51-98 79.5T481-200q-117 0-198.5-81.5T201-480q0-65 28.5-123t79.5-98q20 72 56.5 135T453-452Zm290 72q-20-5-39.5-11T665-405q8-18 11.5-36.5T680-480q0-83-58.5-141.5T480-680q-20 0-38.5 3.5T405-665q-8-19-13.5-38T381-742q24-9 49-13.5t51-4.5q117 0 198.5 81.5T761-480q0 26-4.5 51T743-380ZM440-840v-120h80v120h-80Zm0 840v-120h80V0h-80Zm323-706-57-57 85-84 57 56-85 85ZM169-113l-57-56 85-85 57 57-85 84Zm671-327v-80h120v80H840ZM0-440v-80h120v80H0Zm791 328-85-85 57-57 84 85-56 57ZM197-706l-84-85 56-57 85 85-57 57Zm199 310Z"/></svg>
            </div>
            <div className="bg-black rounded-full border- border-white w-[40px] h-[40px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#ffff"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
            </div>
            <div>
             <button className="w-[120px] h-[50px] rounded-xl border-2 border-black">Sing in</button>
            </div>
            <div>
             <button className="bg-black text-white w-[120px] h-[50px] rounded-xl"> Sing up</button>
            </div>
        </div>

    </div>
      </nav>
    </div>
  );
}
export default Navbar;
