import { Container } from "./styles";
import { HeaderBoxProps } from "./types";

export const HeaderBox = ({ children }: HeaderBoxProps) => {
  return <Container>{children}</Container>;
};
