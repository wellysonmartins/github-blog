import styled from "styled-components";

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 72px;

  div {
    display: flex;
    gap: 12px;
    justify-content: space-between;
  }

  span:nth-child(1) {
    min-width: max-content;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${props => props.theme["base-subtitle"]}
  }

  span:nth-child(2) {
    font-size: 0.875rem;
    color: ${props => props.theme["base-span"]}
  }
`;

export const PostContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 48px;
`