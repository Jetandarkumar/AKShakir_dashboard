import React, { useReducer } from "react";
import ItemContainer from "./ItemContainer";
import { ReactComponent as Setting } from "../../icons/settingsIcon.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";

function reducer(state, action) {
  switch (action.type) {
    case "history":
      return { active: "history" };
    case "upcoming":
      return { active: "upcoming" };
    default:
      return state;
  }
}
function Activity({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    active: "history",
  });
  return (
    <ActivityContainer>
      <Nav>
        <Li
          text="History"
          onClickEvent={() => dispatch({ type: "history" })}
          activeLi={state}
          styles={`${
            state.active === "history" ? "border-b-2 border-cyan-500" : null
          } `}
        />
        <Li
          text="Upcoming"
          onClickEvent={() => dispatch({ type: "upcoming" })}
          activeLi={state}
          styles={` ${
            state.active === "upcoming" ? " border-b-2 border-cyan-500" : null
          }`}
        />
      </Nav>

      <ItemContainer />
    </ActivityContainer>
  );
}

export default Activity;

function ActivityContainer({ children }) {
  return <div className="w-full h-20">{children}</div>;
}

function Nav({ children }) {
  return (
    <nav className="w-full h-10  flex">
      <ul className="flex flex-grow justify-start align-top gap-5">
        {children}
      </ul>
      <Button icon={<Setting />} bg="bg-gray-200" />
      <Button icon={<Plus className="fill-white" />} bg="#623CE7" />
    </nav>
  );
}
function Li({ text, onClickEvent, styles }) {
  return (
    <li>
      <a
        href="#link"
        className={`block  ${styles}  h-full`}
        onClick={onClickEvent}>
        {text}
      </a>
    </li>
  );
}
function Button({ icon, bg }) {
  return (
    <button
      className={`py-5 px-3 bg-[${bg}] ${bg} ml-3 flex items-center justify-center rounded-lg`}>
      {icon}
    </button>
  );
}
