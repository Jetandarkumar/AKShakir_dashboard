import React from "react";
import { ReactComponent as UserIcon } from "../icons/UserIcon.svg";
import { ReactComponent as NotificationIcon } from "../icons/NotificationIcon.svg";
import { ReactComponent as GiftIcon } from "../icons/gift.svg";
import { ReactComponent as EditIcon } from "../icons/editicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";
import { ReactComponent as Chevron } from "../icons/chevron.svg";
import ContactAvatar from "../images/ContactAvatar.png";

function RightNav() {
  return (
    <div className="ml-auto max-w-[240px] w-[240px]  bg-pureWhite h-full flex flex-col justify-evenly">
      <Nav
        leftIcon={<NotificationIcon className="fill-red-400" />}
        rightIcon={<UserIcon />}
      />
      <RecentContacts>
        <ContactTop />
        <ContactAvatars>
          <Avatar avatar={ContactAvatar} />
          <Avatar avatar={ContactAvatar} />
          <Avatar avatar={ContactAvatar} />
          <Avatar avatar={ContactAvatar} />
          <Avatar avatar={ContactAvatar} />
        </ContactAvatars>
      </RecentContacts>
    </div>
  );
}

export default RightNav;

function Nav({ leftIcon, rightIcon }) {
  return (
    <nav className="w-full flex items-center justify-evenly  ">
      <div>
        <a href="#jf">{leftIcon}</a>
      </div>
      <button className="text-xs flex gap-2 bg-[#623CE7]/[0.2] rounded-lg p-3  text-[#623CE7] hover:opacity-80 ">
        <span>
          <GiftIcon />
        </span>
        2 NEW UPDATES
      </button>
      <div>
        <a href="#jf">{rightIcon}</a>
      </div>
    </nav>
  );
}

function RecentContacts({ children }) {
  return (
    <div className=" w-full h-auto flex flex-col gap-7 justify-between">
      {children}
    </div>
  );
}

function ContactTop() {
  return (
    <div className="w-full flex gap-4 pr-7">
      <div className="flex-grow">
        <p className="text-base font-medium">Recent Contacts</p>
        <p className="text-xs font-medium  text-gray-400">18 recipients</p>
      </div>
      <div className="flex items-center justify-center">
        <a href="#fda">{<EditIcon />}</a>
      </div>
      <div className="flex items-center justify-center">
        <a href="#fda">{<SearchIcon />}</a>
      </div>
    </div>
  );
}
function ContactAvatars({ children }) {
  return (
    <div className="h-full flex items-center ">
      <ul className="flex-grow flex gap-5">{children}</ul>
      <div className="mr-4">
        {<Chevron className="h-4 w-4 fill-gray-400" />}
      </div>
    </div>
  );
}
function Avatar({ avatar }) {
  return (
    <li className="flex items-center border-b-2 border-blue-700">
      <img
        src={avatar}
        className="h-[23px] w-[23px] rounded-[50%] mb-2"
        alt=""
      />
    </li>
  );
}
