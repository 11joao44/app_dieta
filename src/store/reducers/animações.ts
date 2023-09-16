import { createSlice } from "@reduxjs/toolkit";

type Animações = {
  exibir: boolean;
};

const initialState: Animações = {
  exibir: false,
};

export const AnimaçõesSlice = createSlice({
  name: "Animações",
  initialState,
  reducers: {
    //Animação de abrir e fechar 'calorias'
    animaçãoExibir: (state) => {
      if (state.exibir == false) {
        state.exibir = true;
      } else {
        state.exibir = false;
      }
    },
  },
});

export const { animaçãoExibir } = AnimaçõesSlice.actions;
export default AnimaçõesSlice.reducer;
