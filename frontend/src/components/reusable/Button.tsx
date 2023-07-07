import { PropsWithChildren } from "react";
import { buttonColour } from "../../helperFunctions/buttonColour";
import { ColourTypes } from "../../types";

export const Button = (
  props: PropsWithChildren<{
    action: () => void;
    image?: string;
    className?: string;
    colour?: ColourTypes;
  }>
) => {
  return (
    <div
      className={`border rounded-lg ${buttonColour(props.colour)} ${
        props.className
      }`}
    >
      <button className="w-full h-full py-1 font-bold" onClick={props.action}>
        {props.children}
      </button>
    </div>
  );
};