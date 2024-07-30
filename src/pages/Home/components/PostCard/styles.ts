import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex: 1 calc(50% - 16px);
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  min-width: 350px;
  border: 2px solid ${props => props.theme["base-post"]};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme["base-label"]};
  }
`;

export const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: baseline;

  span:nth-child(1) {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${props => props.theme["base-title"]}
  }

  span:nth-child(2) {
    min-width: max-content;
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]}
  }
`;

export const PostDescription = styled.div`
  font-size: 1rem;
`;