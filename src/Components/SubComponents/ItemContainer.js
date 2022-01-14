import React from "react";
import { ReactComponent as AttachFiles } from "../../icons/attachFiles.svg";

import { RecentActivity } from "../../data";
function ItemContainer() {
  return (
    <div className="w-full flex flex-col gap-4 mt-10">
      <p className="text-xs text-gray-400">28 Dec 2020</p>
      {RecentActivity.map((item, index) => {
        const { title, time, status, bg_Status, amount, icon, prop } = item;
        return (
          <Item key={index}>
            <Content icon={icon} text={title} time={time} />
            <Status status={status} bg={bg_Status} />
            {/* two pros you gave than give orelse take */}
            <Amount amount={amount} {...prop} />
          </Item>
        );
      })}
    </div>
  );
}

export default ItemContainer;

function Item({ children }) {
  return <div className="grid  grid-cols-3 gap-10">{children}</div>;
}

function Content({ icon, text, time }) {
  return (
    <div className="flex gap-5 ">
      <div className=" bg-gray-100 rounded-md px-2 py-[6px]   flex justify-center items-center">
        <a href="#fd">{icon}</a>
      </div>
      <div className="flex justify-start flex-col">
        <p className="text-sm font-medium  ">{text}</p>
        <p className="text-[11px] text-gray-400">{time}</p>
      </div>
    </div>
  );
}
function Status({ status, bg }) {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-gray-100 rounded-md  p-2   flex justify-center items-center">
        <div className={`${bg}  w-2 h-2 rounded-[50%]`}></div>
      </div>
      <p className="text-xs capitalize font-medium">{status}</p>
    </div>
  );
}

function Amount({ amount, give, take }) {
  return (
    <div className="flex items-center gap-10">
      <div className="bg-gray-100 rounded-md px-2 py-[6px]   flex justify-center items-center">
        <a href="#jfd">{<AttachFiles />}</a>
      </div>
      <p
        className={`text-base font-semibold ${
          take ? "text-[#623CE7]" : "text-gray-800"
        } font-['Tomorrow']`}>
        {give ? `-$${amount}` : `+$${amount}`}
      </p>
    </div>
  );
}
