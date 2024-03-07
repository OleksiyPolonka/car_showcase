import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  rightIcon?: string
  textStyles?: string
  containerStyles?: string
  btnType?: "button" | "submit"
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface CustomFilterProps {
  title: string
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CarProps {
  make: string
  year: number
  model: string
  class: string
  drive: string
  city_mpg: number
  fuel_type: string
  cylinders: number
  highway_mpg: number
  displacement: number
  transmission: string
  combination_mpg: number
}

export interface CarCardProps {
  car: CarProps
}

export interface CarDetailsComponentProps {
  car: CarProps
  isOpen: boolean
  closeModal: () => void
}

export interface FilterProps {
  year?: number
  fuel?: string
  limit?: number
  model?: string
  manufacture?: string
}
