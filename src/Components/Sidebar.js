import React from "react";
import { ReactComponent as Logo } from "../icons/Logo.svg";
import { ReactComponent as Menu } from "../icons/MenuIcon.svg";
import { ReactComponent as Star } from "../icons/star.svg";
import { ReactComponent as Calender } from "../icons/Calender.svg";
import { ReactComponent as Folders } from "../icons/folders.svg";
import { ReactComponent as Delete } from "../icons/deleteBin.svg";
import { ReactComponent as Bucket } from "../icons/bucket.svg";
import { ReactComponent as Union } from "../icons/Union.svg";

function Sidebar() {
  return (
    <div className="w-[70px] border-r border-gray-400 h-full bg-bgSidebar flex flex-col justify-between ">
      <Navlogo icon={<Logo className="h-12 w-12" />} />
      <NavLinks>
        <NavLink icon={<Menu />} />
        <NavLink icon={<Star />} />
        <NavLink icon={<Calender />} />
        <NavLink icon={<Folders />} />
        <NavLink icon={<Bucket />} />
        <NavLink icon={<Delete />} />
      </NavLinks>
      <NavAddButton icon={<Union />} />
    </div>
  );
}

export default Sidebar;

function Navlogo(props) {
  return (
    <a href="/" className=" h-20 flex items-center justify-center mt-4">
      {props.icon}
    </a>
  );
}

function NavLinks(props) {
  return <ul className="w-full">{props.children}</ul>;
}
function NavLink({ icon }) {
  return (
    <li className="w-full h-14 flex justify-center items-center list-none">
      <a
        href="#link"
        className="p-2 rounded-[50%] transition-[filter_300ms] hover:brightness-50">
        {icon}
      </a>
    </li>
  );
}
function NavAddButton({ icon }) {
  return (
    <div
      className="p-5 mb-7 mt-auto mx-auto bg-[#623CE7] flex justify-center
     items-center rounded-xl rounded-tl-none shadow-[0px_15px_20px_rgba(98,60,231,0.35)]">
      <a href="#add" className="h-5 w-5">
        {icon}
      </a>
    </div>
  );
}
