import { useState } from "react";
import { Animação, Calorias, MacroNutri, Main, Peso, Table } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { animaçãoExibir, animaçãoOcultar } from "../../store/reducers/animações";

const GramasPorKG = () => {
  const [proteina, setProteina] = useState("");
  const [gramas, setGramas] = useState("");
  const [carbo, setCarbo] = useState("");
  const [gordura, setGordura] = useState("");
  const [alimento, setAlimento] = useState("");
  const [meta, setMeta] = useState(0);

  const { exibir } = useSelector((state: RootReducer) => state.animações);
  const dispatch = useDispatch();

  const calculo = () => {
    const caloriaPro = parseFloat(proteina) * 4;
    const caloriaCarbo = parseFloat(carbo) * 4;
    const caloriaGord = parseFloat(gordura) * 9;

    const porcentDec = parseFloat(gramas) / 100;

    const calorias = (caloriaPro + caloriaCarbo + caloriaGord) * porcentDec;

    return setMeta(calorias);
  };

  const proteinaPorGrama = () => {
    const protePorGrama = (parseFloat(gramas) * parseFloat(proteina)) / 100;

    return protePorGrama;
  };
  const carboPorGrama = () => {
    const carboPorGrama = (parseFloat(gramas) * parseFloat(carbo)) / 100;

    return carboPorGrama;
  };
  const gordoPorGrama = () => {
    const gordoPorGrama = (parseFloat(gramas) * parseFloat(gordura)) / 100;

    return gordoPorGrama;
  };

  const mostrar = () => {
    dispatch(animaçãoExibir());
  };
  const ocultar = () => {
    dispatch(animaçãoOcultar());
  };

  return (
    <Main>
      <Peso>
        <input
          type="text"
          value={alimento}
          onChange={(e) => setAlimento(e.target.value)}
          placeholder="Produto"
          onFocus={ocultar}
        />
        <input
          type="text"
          value={gramas}
          onChange={(e) => setGramas(e.target.value)}
          placeholder="Quantas Gramas"
          onFocus={ocultar}
        />
        <button
          onClick={() => {
            calculo();
            mostrar();
          }}
        >
          Calorias
        </button>
      </Peso>

      <Calorias>
        <MacroNutri>
          <h3>Proteina</h3>
          <input
            type="text"
            value={proteina}
            onChange={(e) => setProteina(e.target.value)}
            placeholder="Proteína do alimento"
          />
        </MacroNutri>
        <MacroNutri>
          <h3>Carboidrato</h3>
          <input
            type="text"
            value={carbo}
            onChange={(e) => setCarbo(e.target.value)}
            placeholder="Carboidrato do alimento"
          />
        </MacroNutri>
        <MacroNutri>
          <h3>Gordura</h3>
          <input
            type="text"
            value={gordura}
            onChange={(e) => setGordura(e.target.value)}
            placeholder="Gordura do alimento"
          />
        </MacroNutri>
      </Calorias>

      <Animação className={exibir ? "is-open" : ""}>
        <Table>
          <tbody>
            <tr>
              <th>
                <p>Alimento</p>
              </th>
              <th>
                <p>Gorduras</p>
              </th>
              <th>
                <p>Carboidratos</p>
              </th>
              <th>
                <p>Proteinas</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>{alimento}</p>
              </th>
              <td>
                <p>{gordoPorGrama()}g</p>
              </td>
              <td>
                <p>{carboPorGrama()}g</p>
              </td>
              <td>
                <p>{proteinaPorGrama()}g</p>
              </td>
            </tr>
          </tbody>
        </Table>
        <p>{gramas}g de {alimento} possui <b>{meta.toFixed(1)} calorias</b></p>
      </Animação>
    </Main>
  );
};

export default GramasPorKG;
