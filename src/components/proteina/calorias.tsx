import { useState } from "react";
import { Peso, Table, Title } from "./style";

const Calorias = () => {
  const [gordura, setGordura] = useState("1.0");
  const [carbo, setCarbo] = useState("1.0");
  const [proteina, setProteina] = useState("1.6");
  const [kg, setKg] = useState("");
  const [metaP, setMetaP] = useState(0);
  const [metaC, setMetaC] = useState(0);
  const [metaG, setMetaG] = useState(0);

  const calculo = () => {
    const resultadoPro = parseFloat(proteina) * parseInt(kg);
    const resultadoCarbo = parseFloat(carbo) * parseInt(kg);
    const resultadoGor = parseFloat(gordura) * parseInt(kg);
    return (
      setMetaP(resultadoPro), setMetaC(resultadoCarbo), setMetaG(resultadoGor)
    );
  };

  return (
    <>
      <Title>Quantidade de macronutrientes consumir por dia</Title>
      <Peso>
        <input
          type="text"
          value={kg}
          onChange={(e) => setKg(e.target.value)}
          placeholder="Seu peso atual"
        />

        <button onClick={calculo}>Calcular</button>
      </Peso>

      <Table>
        <tbody>
          <tr>
            <th>
              <p>Macronutrientes</p>
            </th>
            <th>
              <p>Macronutrientes x Kilos corporal</p>
            </th>
          </tr>

          <tr>
            <th>
              <p>Gordura 1.0 g</p>
            </th>
            <td>
              <p>Recomendado: {metaG.toFixed(2)}g Gordura, por dia.</p>
            </td>
          </tr>

          <tr>
            <th>
              <p>Carboidrato 1.0 g</p>
            </th>
            <td>
              <p>Recomendado: {metaC.toFixed(2)}g Carboidrato, por dia.</p>
            </td>
          </tr>

          <tr>
            <th>
              <p>Proteína 1.6 g</p>
            </th>
            <td>
              <p>Recomendado: {metaP.toFixed(2)}g de Proteína, por dia.</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Calorias;
