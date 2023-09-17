import styled from "styled-components";

export const Main = styled.div`
  margin: 10% auto;

  @media screen and (max-width: 786px) {
    margin: 0;
  }

`;

export const Peso = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  input,
  button {
    padding: 4px 6px;
    border-radius: 6px;
    border: 1px solid #fff;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    outline: none;

    @media screen and (max-width: 786px) {
    font-size: 12px;
    padding: 2px 4px;
  }
  }
`;

export const Calculo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Calorias = styled.div`

  @media screen and (max-width: 786px) {
    font-size: 12px;
    transform: scale(70%);
    margin: 8px auto;
  }
`;

export const MacroNutri = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 64px;

  input {
    padding: 4px 6px;
    border-radius: 4px;
  }
`;

export const Animação = styled.p`
  display: none;
  p {
    text-align: center;
  }

  &.is-open {
    display: block;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin: 32px auto;

  @media screen and (max-width: 786px) {
    font-size: 12px;
    margin: 16px auto;
  }
`;

export const Table = styled.table`
  border-spacing: 0;
  margin: 32px auto;
  border-radius: 8px;
  background-color: #333;

  @media screen and (max-width: 786px) {
    font-size: 12px;
    margin: 8px auto;
    transform: scale(80%);
  }

  th,
  td {
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    color: white;
    background-color: #333;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    width: 100%;

    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      &:nth-child(odd) {
        background-color: #222;
      }
    }
  }
`;
