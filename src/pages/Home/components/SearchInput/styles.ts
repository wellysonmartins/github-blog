import styled from "styled-components";

export const SearchInputContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    padding: 12px 16px;
    height: 50px;
    color: ${props => props.theme["base-label"]};
    font-size: 1rem;
    border: 1px solid ${props => props.theme["base-border"]};
    background-color: ${props => props.theme["base-input"]};
    border-radius: 6px;

    &::placeholder {
      color: ${props => props.theme["base-label"]}
    }
  }
`