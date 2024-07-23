import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";
import {
  Content,
  ContentDescription,
  ContentIcon,
  ContentTitle,
} from "../../../../templates/HeaderBox/styles";
import { Container } from "./styles";

export const Profile = () => {
  return (
    <Container>
      <img src="" alt="" />

      <Content>
        <ContentTitle>
          Wellyson Martins
          <Link
            to="https://github.com/wellysonmartins/"
            title="Github"
            icon="arrowUpFromSquare"
            iconPosition="right"
          />
        </ContentTitle>

        <ContentDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ContentDescription>

        <ContentIcon>
          <Tag title="wellysonpb" icon="github" />
          <Tag title="Fiibo" icon="building" />
          <Tag title="32 seguidores" icon="userGroup" />
        </ContentIcon>
      </Content>
    </Container>
  );
};
