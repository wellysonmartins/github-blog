import { Link } from "../../../../components/Link";
import { Tag } from "../../../../components/Tag";
import {
  Content,
  ContentIcon,
  ContentTitle,
} from "../../../../templates/HeaderBox/styles";
import { Container } from "./styles";

export const Detail = () => {
  return (
    <Container>
      <img src="" alt="" />

      <Content>
        <ContentTitle>
          <Link to="/" title="Voltar" icon="chevronLeft" iconPosition="left" />
          <Link
            to="https://github.com/wellysonmartins/"
            title="Github"
            icon="arrowUpFromSquare"
            iconPosition="right"
          />
        </ContentTitle>
        <ContentTitle>JavaScript data types and data structures</ContentTitle>

        <ContentIcon>
          <Tag title="wellysonpb" icon="github" />
          <Tag title="Há 1 dia" icon="calendar" />
          <Tag title="5 comentários" icon="comment" />
        </ContentIcon>
      </Content>
    </Container>
  );
};
