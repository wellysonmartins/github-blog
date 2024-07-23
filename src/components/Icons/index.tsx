import github from "../../assets/icons/github.svg";
import building from "../../assets/icons/building.svg";
import userGroup from "../../assets/icons/userGroup.svg";
import calendar from "../../assets/icons/calendar.svg";
import comment from "../../assets/icons/comment.svg";
import arrowUpFromSquare from "../../assets/icons/arrowUpFromSquare.svg";
import chevronLeft from "../../assets/icons/chevronLeft.svg";
import { IconsProps } from "./types";

const svgIcons = {
  github,
  building,
  userGroup,
  calendar,
  comment,
  arrowUpFromSquare,
  chevronLeft,
};

export const Icons = ({ icon }: IconsProps) => {
  return <img src={svgIcons[icon]} alt="" />;
};
