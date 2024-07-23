import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  width: 100%;
  padding: 32px;
  background-color: ${props => props.theme["base-profile"]};
  margin-top: -84px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px #00000033;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ContentTitle = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: ${props => props.theme["base-title"]};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ContentDescription = styled.article`
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const ContentIcon = styled.article`
  display: flex;
  align-items: center;
  gap: 24px;
`;