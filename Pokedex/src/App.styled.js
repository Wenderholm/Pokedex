import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
