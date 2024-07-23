import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: ${props => props.theme["blue"]};
  text-transform: uppercase;
  max-height: 19px;
  align-items: center;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`