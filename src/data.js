import { ReactComponent as Drop } from "./icons/Drop.svg";
import { ReactComponent as Salary } from "./icons/salary.svg";
import { ReactComponent as Electric } from "./icons/electric.svg";
import { ReactComponent as Income } from "./icons/income.svg";
import { ReactComponent as Internet } from "./icons/internet.svg";
import { ReactComponent as Supplies } from "./icons/supplies.svg";
import { ReactComponent as Banking } from "./icons/banking.svg";
import { ReactComponent as Marketing } from "./icons/marketing.svg";

export function checking(name) {
  const title = name.replaceAll(" ", "").toLowerCase();

  if (title.includes("water")) {
    return { icon: <Drop className="h-3 w-3" />, bg_icon: "bg-[#3629B7]" };
  } else if (title.includes("salary")) {
    return { icon: <Salary className="h-3 w-3" />, bg_icon: "bg-[#FF4267]" };
  } else if (title.includes("electric")) {
    return {
      icon: <Electric className="h-3 w-3" />,
      bg_icon: "bg-[#0890FE]",
    };
  } else if (title.includes("income")) {
    return { icon: <Income className="h-3 w-3" />, bg_icon: "bg-[#FFAF2A]" };
  } else if (title.includes("internet")) {
    return {
      icon: <Internet className="h-3 w-3" />,
      bg_icon: "bg-[#52D5BA]",
    };
  } else {
    return {};
  }
}
export const data = [
  {
    title: "Water Bill",
    status: "Unuccessfully",
    amount: "280",
    icon: checking("water"),
  },
  {
    title: "Income:Salary Oct",
    status: "",
    amount: "1200",
    icon: checking("Salary"),
  },
  {
    title: "Electric Bill",
    status: "Successfully",
    amount: "480",
    icon: checking("Electric"),
  },
  {
    title: "Income:Jane Transfer",
    status: "",
    amount: "500",
    icon: checking("Income"),
  },
  {
    title: "Internet Bill",
    status: "Successfully",
    amount: "100",
    icon: checking("Internet"),
  },
];

const backgroundStatus = (Status) => {
  const status = Status.replaceAll(" ", "").toLowerCase();
  switch (status) {
    case "supplies":
      return "bg-[#EB5642]";
    case "marketing":
      return "bg-[#623CE7]";
    case "office":
      return "bg-[#C148EB]";
    case "banking":
      return "bg-[#0EA7B1]";
    default:
      return "";
  }
};

function iconCheck(Status) {
  const status = Status.replaceAll(" ", "").toLowerCase();
  switch (status) {
    case "supplies":
      return <Supplies className="h-5 w-5" />;
    case "marketing":
      return <Marketing className="h-5 w-5" />;
    case "office":
      return <Supplies className="h-5 w-5" />;
    case "banking":
      return <Banking className="h-5 w-5" />;
    default:
      return <Supplies className="h-5 w-5" />;
  }
}

const date = new Date();
const todayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} at ${date.getHours()}:${date.getMinutes()}`;

export const RecentActivity = [
  {
    title: "Amazon Support",
    time: new Date("2020-12-28").toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status: "Supplies",
    bg_Status: backgroundStatus("supplies"),
    amount: "10,100.00",
    icon: iconCheck("supplies"),
    prop: {
      give: true,
    },
  },
  {
    title: "Ronald GmbH",
    time: new Date("2020-12-28").toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status: "Marketing",
    bg_Status: backgroundStatus("marketing"),
    amount: "10,100.00",
    icon: iconCheck("marketing"),
    prop: {
      take: true,
    },
  },
  {
    title: "Bank of America",
    time: new Date("2020-12-28").toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status: "Office Supplies",
    bg_Status: backgroundStatus("Office"),
    amount: "10,100.00",
    icon: iconCheck("Office"),
    prop: {
      give: true,
    },
  },
  {
    title: "Cash WithDrawal",
    time: new Date("2020-12-28").toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    status: "General Banking",
    bg_Status: backgroundStatus("Banking"),
    amount: "10,100.00",
    icon: iconCheck("Banking"),
    prop: {
      give: true,
    },
  },
];
