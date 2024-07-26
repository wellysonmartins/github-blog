import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex: 0 calc(50% - 16px);
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  min-width: 350px;
`;