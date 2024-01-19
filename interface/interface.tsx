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

