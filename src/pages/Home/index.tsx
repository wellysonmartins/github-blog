import { BaseContainer } from "../../templates/Container";
import { HeaderBox } from "../../templates/HeaderBox";
import { Profile } from "./components/Profile";

export const Home = () => {
  return (
    <BaseContainer>
      <HeaderBox>
        <Profile />
      </HeaderBox>
    </BaseContainer>
  );
};
