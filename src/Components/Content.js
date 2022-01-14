import React from "react";
import { ReactComponent as HomeLoan } from "../icons/HomeLoan.svg";
import { ReactComponent as Booster } from "../icons/booster.svg";
import { ReactComponent as Wheel } from "../icons/wheelCard.svg";
import { ReactComponent as Gear } from "../icons/gearcard.svg";
import { ReactComponent as HarvestedLosses } from "../icons/harvestedlosses.svg";
import { ReactComponent as Goals2 } from "../icons/goals2.svg";
import { ReactComponent as Earnings } from "../icons/earnings.svg";
import { ReactComponent as Networth } from "../icons/networth.svg";
import Activities from "./SubComponents/Activities";

function Content() {
  return (
    <div className=" flex-grow grid grid-rows-[10%_20%_20%_50%] h-screen bg-pureWhite  px-10">
      <p className="text-lg font-medium flex items-center">
        Welcom Back Shakir!
      </p>
      <CardContainer>
        <Card
          icon={<HomeLoan className="h-8 w-h8 mx-auto" />}
          text="Home Loan"
        />
        <Card icon={<Wheel className="h-8 w-h8 mx-auto" />} text="Car Loan" />
        <Card
          icon={<Gear className="h-8 w-h8 mx-auto" />}
          text="Maintainance"
        />
        <Card icon={<Booster className="h-8 w-h8 mx-auto" />} text="Boosters" />
      </CardContainer>
      <TransactionCardContainer>
        <TransactionCard
          icon={<HarvestedLosses className="h-7 w-7" />}
          amount="0.00"
          text="Harvested losses"
          icon_bg="bg-[#1a55af33]"
        />
        <TransactionCard
          icon={<Earnings className="h-7 w-7" />}
          amount="10,596.80"
          text="Totol Earnings"
          icon_bg="bg-[#FA5F1C]/[.3]"
        />
        <TransactionCard
          icon={<Networth className="h-7 w-7" />}
          amount="5,250.90"
          icon_bg="bg-[#427A0A]/[.2]"
        />
        <TransactionCard
          icon={<Goals2 className="h-7 w-7" />}
          amount="5,596.80"
          text="Total for all goals"
          icon_bg="bg-[#5843BE]/[.2]"
        />
      </TransactionCardContainer>

      <Activities />
    </div>
  );
}

export default Content;

function CardContainer({ children }) {
  return (
    <div className="w-full h-max grid grid-cols-[minmax(120px,1fr)] grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 gap-10 ">
      {children}
    </div>
  );
}
function Card({ icon, text }) {
  return (
    <div className="bg-pureWhite h-max p-4  rounded-xl drop-shadow-xl shadow-black ">
      {icon}
      <p className="text-center text-xs text-gray-400 mt-2">{text}</p>
    </div>
  );
}
// w-24

function TransactionCardContainer({ children }) {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-8">
      {children}
    </div>
  );
}

function TransactionCard({ icon, text, amount, icon_bg }) {
  return (
    <div className="flex gap-4">
      <div
        className={`rounded-lg px-2 py-4 ${icon_bg} flex justify-center items-center
       h-10 w-10 min-h-max min-w-max`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-xs mb-1">{text}</p>
        <h1 className="font-medium text-lg font-['Tomorrow']">${amount}</h1>
      </div>
    </div>
  );
}
