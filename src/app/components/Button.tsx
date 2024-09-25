import React from "react";
import { parseStyles, Styles } from "@/app/helpers/styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  styles?: Styles;
}

const defaultStyles = {
  position: "relative z-20",
  spacing: "first:mr-2 px-2 py-1",
  font: "text-xs font-semibold text-gray-900",
  appearance: "bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300",
  hover: "hover:bg-gray-50",
};

export default function Button({ children, onClick, styles }: ButtonProps) {
  return (
    <button className={parseStyles(styles ?? defaultStyles)} onClick={onClick}>
      {children}
    </button>
  );
}
