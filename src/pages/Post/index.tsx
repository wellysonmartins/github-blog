import { BaseContainer } from "../../templates/Container";
import { HeaderBox } from "../../templates/HeaderBox";
import { Detail } from "./components/Detail";

export const Post = () => {
  return (
    <BaseContainer>
      <HeaderBox>
        <Detail />
      </HeaderBox>
    </BaseContainer>
  );
};
