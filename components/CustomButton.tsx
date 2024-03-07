"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType = "button",
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
