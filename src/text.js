import { ReactComponent as Drop } from "./icons/Drop.svg";
export const checking = (name) => {
  const title = name.replaceAll(" ", "").toLowerCase();
  if (title.includes("waterbill")) {
    return <Drop className="h-3 w-3" />;
  }
  return null;
};
export const data = [
  {
    id: 0,
    title: "Water Bill",
    status: "Successfully",
    amount: "480",
    icon: checking(this.title),
  },
];
