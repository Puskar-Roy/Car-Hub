import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface FooterLink {
  title: string;
  links: Array<{ title: string; url: string }>;
}

export interface SearchMenufacturerProps {
  menufacturer: string;
  setMenufacturer:(menufacturer: string)=>void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps{
    car : CarProps;
}