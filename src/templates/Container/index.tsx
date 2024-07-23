import { Container } from "./styles";
import { BaseContainerProps } from "./types";

export const BaseContainer = ({ children }: BaseContainerProps) => {
  return <Container>{children}</Container>;
};
