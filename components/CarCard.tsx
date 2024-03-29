"use client";

import { useState } from "react";
import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import { CustomButton } from ".";
import CarDetailsComponent from "./CarDetailsComponent";

const CarCard = ({ car }: CarCardProps) => {
  const {
    make,
    year,
    model,
    drive,
    city_mpg,
    fuel_type,
    cylinders,
    highway_mpg,
    displacement,
    transmission,
    combination_mpg,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 car-card__content-title>
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          fill
          alt="car model"
          src="/hero.png"
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              width={20}
              height={20}
              alt="steering-wheel"
              src="/steering-wheel.svg"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image width={20} height={20} alt="tire" src="/tire.svg" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image width={20} height={20} alt="gas" src="/gas.svg" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            rightIcon="./right-arrow.svg"
            handleClick={() => setIsOpen(true)}
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          />
        </div>
      </div>

      <CarDetailsComponent
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
