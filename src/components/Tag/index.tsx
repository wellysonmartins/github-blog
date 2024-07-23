import { TagProps } from "./types";
import { Content } from "./styles";
import { Icons } from "../Icons";

export const Tag = ({ title, icon }: TagProps) => {
  return (
    <Content>
      {<Icons icon={icon} />}
      {title}
    </Content>
  );
};
