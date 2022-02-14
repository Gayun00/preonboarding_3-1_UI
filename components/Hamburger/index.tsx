import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Hamburger({ isSideBarOpened, setIsSideBarOpened }) {
  return (
    <div onClick={() => setIsSideBarOpened(!isSideBarOpened)}>
      <AiOutlineMenu />
    </div>
  );
}

export default Hamburger;
