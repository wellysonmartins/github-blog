import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: ${props => props.theme["blue"]};
  text-transform: uppercase; 
  max-height: 19px;  
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    transition: border 0.2s;
    border-bottom-color: ${props => props.theme["blue"]};
  }
`