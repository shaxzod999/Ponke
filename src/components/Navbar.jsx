import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[80px] flex justify-center items-center">
      <div
        className="w-full h-[80px] px-5 mx-[auto] flex justify-between items-center fixed z-[990] bg-orange1  border-2"
        data-aos="fade-down"
      >
        <img
          className="w-[150px] h-[50px] md:w-[270p] md:h-[80px]"
          src="https://www.ponke.xyz/images/logo-nav.svg"
          alt=""
        />
        <Link to={"/integrations"}>
          <button className="w-[150px] h-[30px] md:w-[200px] md:h-[50px] font-(__Luckiest_Guy_e61f6e','__Luckiest_Guy_Fallback_e61f6e) flex items-center justify-center gap-[10px] bg-skin border border-[3px] font-[1000] ">
            INTEGRATIONS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right rotate-[-40deg] mt-[-1px] mr-[-4px]"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
