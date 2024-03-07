"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  rightIcon,
  textStyles,
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
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            fill
            src={rightIcon}
            alt={rightIcon}
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
