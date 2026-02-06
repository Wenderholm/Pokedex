import styled from "styled-components";

// ...existing styled components...

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 5px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

// ...existing styled components...
