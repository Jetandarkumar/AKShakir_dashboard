import React from "react";
import avatar from "../images/Avatar.png";
import { ReactComponent as Goals } from "../icons/goals.svg";
import { ReactComponent as Chevron } from "../icons/chevron.svg";
import { ReactComponent as Calender } from "../icons/Calender.svg";
import { ReactComponent as Gear } from "../icons/gear.svg";

import { data } from "../data";

function ExtSidebar() {
  return (
    <div className="max-w-[240px] h-screen bg-bgSidebar hidden sm:flex  flex-col items-center justify-evenly">
      <Intro>
        <Avatar icon={avatar} />
        <Content title="AR SHAKIR" time="Joined 6 months ago" />
      </Intro>

      <List>
        <ListItem
          text="Goals"
          leftIcon={<Goals className="h-5 w-5  hover:brightness-75" />}
          rightIcon={<Chevron className="h-5 w-5" />}
          bgColor="bg-[#FFF0E6]"
        />
        <ListItem
          text="Goals"
          leftIcon={<Calender className="h-5 w-5 hover:brightness-75" />}
          rightIcon={<Chevron className="h-5 w-5 " />}
          bgColor="bg-[#ECEAFE]"
        />
        <ListItem
          text="Goals"
          leftIcon={<Gear className="h-5 w-5 hover:brightness-75" />}
          rightIcon={<Chevron className="h-5 w-5" />}
          bgColor="bg-[#E5F7FF]"
        />
      </List>

      <Transactions>
        <Today>
          {data.map((eachObj, index) => {
            const { title, status, amount } = eachObj;
            return (
              <TransacItem
                key={index}
                title={title}
                status={status}
                amount={amount}
                {...eachObj.icon}
              />
            );
          })}

          {/* <TransacItem
            title="Water Bill"
            status="Successfully"
            amount="480"
            {...data[0].icon}
          /> */}
        </Today>
        <OldTrans></OldTrans>
      </Transactions>
    </div>
  );
}

export default ExtSidebar;

export function Intro({ children }) {
  return <div className="w-3/4 bg-transparent  flex gap-5">{children}</div>;
}
export function Avatar({ icon }) {
  return (
    <div className="p-1 rounded-[50%] inline-block shadow-[0px_0px_0px_4px_#FC6B21] ">
      <img
        className="max-h-12 max-w-12 rounded-[50%]"
        src={icon}
        alt="not here"
      />
    </div>
  );
}
function Content({ title, time }) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-base leading-5 font-medium ">{title}</h1>
      <p className="text-[10px] text-gray-400">{time} </p>
    </div>
  );
}

function List({ children }) {
  return <div className="flex flex-col w-3/4 gap-6 ">{children}</div>;
}

function ListItem({ text, leftIcon, rightIcon, bgColor }) {
  return (
    <div className="w-full flex items-center">
      <div className={`${bgColor}  p-3 rounded-[50%]`}>{leftIcon}</div>
      <p className="grow text-sm font-medium text-gray-500 pl-4">{text}</p>
      <div className=" bg-gray-200/[0.3] p-3 rounded-2xl flex items-center justify-center ">
        {rightIcon}
      </div>
    </div>
  );
}

function Transactions({ children }) {
  return <div className="flex flex-col w-3/4 gap-1">{children}</div>;
}

function Today({ children }) {
  return (
    <div>
      <p className="text-[12px] leading-normal text-gray-400 mb-1">Today</p>
      {children}
    </div>
  );
}

function OldTrans({ children }) {
  return (
    <div>
      <p className="text-[12px] leading-normal text-gray-400 mb-1">Yesterday</p>
      {children}
    </div>
  );
}

function TransacItem({ icon, title, status, amount, bg_icon }) {
  return (
    <div className="flex gap-3 mb-4">
      <div
        className={`${bg_icon}  p-3 rounded-xl flex items-center justify-center`}>
        {icon}
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-900 capitalize">{title}</p>
        <p className="text-[10px]  text-gray-400">{status}</p>
      </div>
      <p
        className={`${
          status === "Successfully" ? "text-[#3629B7]" : "text-[#FF4267]"
        } font-['Tomorrow'] font-normal `}>
        ${amount}
      </p>
    </div>
  );
}
