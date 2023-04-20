import React, { useEffect, useState } from "react";
import { useContext } from "react";
import LogIn from "./Login";

function Header() {

  return (
    <header>
      <div className="blue window" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            💎
          </span>
          DSurv
        </h1>
       
        <LogIn />
      
        {/* <LogOut /> */}
      </div>
    </header>
  );
}

export default Header;
