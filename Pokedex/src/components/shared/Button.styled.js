import styled from "styled-components";

export const Button = styled.button`
  background-color: #2196f3;
  padding: 10px 25px;
  border-radius: 6px;
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 0 10px;
  font-weight: 500;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-align: center;

  &:hover {
    color: #ffcb05;
    background-color: #1976d2;
    transform: translateY(-2px);
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 12px 30px;
    margin: 0 12px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    padding: 10px 25px;
    margin: 0 8px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 13px;
    padding: 8px 20px;
    margin: 0 5px;
  }

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 12px;
    padding: 8px 15px;
    margin: 2px;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 10px 15px;
    margin: 3px 0;
    width: 140px;
  }
`;
