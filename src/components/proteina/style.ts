import styled from "styled-components";

export const Main = styled.div`
  margin: 10% auto;
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
  }
`;

export const Calculo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Calorias = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 120px;
  gap: 8px;
  margin: 32px auto;
`;

export const MacroNutri = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;

  input {
    padding: 4px 6px;
    border-radius: 4px;
  }
`;

export const Animação = styled.p`
  display: none;

  &.is-open {
    display: block;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin: 32px auto;
`;

export const Table = styled.table`
  border-spacing: 0;
  margin: 32px auto;
  border-radius: 8px;
  width: 100%;
  background-color: #333;

  th,
  td {
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    color: white;
    background-color: #333;
  }

  th {
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
