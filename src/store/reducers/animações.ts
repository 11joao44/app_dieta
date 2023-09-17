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
      state.exibir = true;
    },
    animaçãoOcultar: (state) => {
      state.exibir = false;
    }
  },
});

export const { animaçãoExibir, animaçãoOcultar } = AnimaçõesSlice.actions;
export default AnimaçõesSlice.reducer;
