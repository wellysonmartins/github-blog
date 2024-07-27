import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: #1C2F41;
  }
  50% {
    background-color: #112131;
  }
  100% {
    background-color: #1C2F41;
  }
`;

export const SkeletonContainer = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: ${skeletonLoading} 1.5s infinite linear;
`