import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
  margin-top: 20px;
`;
export const WelcomeWrapper = styled.div`
  text-align: center;
  padding: 50px;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 28px;
    color: #666;
    text-transform: uppercase;
    margin-top: 20px;
  }
`;
