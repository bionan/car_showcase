'use client'

import { useState } from "react"

import Image from "next/image"

import CustomButton from "@components/CustomButton"
import { calculateCarRent } from "@utils"
import CarDetails from "@components/CarDetails"

const CarCard = ({car}) => {

  const [isOpen, setIsOpen] = useState(false)

  const {city_mpg,year,make,model,transmission,drive} = car

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
          {calculateCarRent(city_mpg,year)}
        <span className="self-end text-[14px] font-medium">por dia</span>
      </p>

      {/* 
      A classe group em Tailwind CSS é usada para aplicar estilos condicionais a elementos filhos com base no estado de um elemento pai. Isso é especialmente útil quando você quer mudar o estilo de um elemento filho ao passar o mouse sobre um elemento pai,
      */}

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full group mt-2">

        <div className="flex group-hover:invisible w-full justify-between text-gray">

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">
              {transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">
              {drive.toUpperCase()}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px]">
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton 
          title="View More" 
          containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
          textStyles="font-bold text-white text-[14px] leading-[17px]"
          handleClick={() => {setIsOpen(true)}}
          />
        </div>

      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />

    </div>
  )
}

export default CarCard