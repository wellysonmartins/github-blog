import { IconsType } from "../Icons/types"

export interface LinksProps {
  title: string
  to: string
  icon: IconsType
  iconPosition: "left" | "right"
}