import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PokemonCardWrapper = styled.div`
  background: linear-gradient(to left top, #cdd7dd, #fbfbfb, #cdd7dd);
  border-radius: 20px;
  display: flex;
  border: 1px solid #ccc;
  /* width: 300px; */
  text-transform: Uppercase;
  text-align: center;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
`;

export const ImageSection = styled.div`
  /* width: 300px; */
  /* height: 300px; */
`;
export const PokemonImg = styled.img`
  width: 300px;
  object-fit: cover;
`;
export const ExpSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  border-radius: 14px;
  width: 400px;
`;

export const ExpSectionPokemonName = styled.h2`
  color: black;
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const StatRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;
`;

export const StatRowTwo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const StatValue = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

export const StatLabel = styled.span`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-transform: none;
`;

export const PokemonCardButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  /* Ulubione */
  button:first-child {
    background: #959293ff;
  }

  button:first-child:hover {
    background: #faf0f2ff;
  }

  /* Arena */
  button:last-child {
    background: #e8edff;
  }

  button:last-child:hover {
    background: #86878bff;
  }

  button:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;
