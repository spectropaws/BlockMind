import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const recomendationDataSlice = createSlice({
  name: "recomendationData",
  initialState,
  reducers: {
    setRecomendations: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRecomendations } = recomendationDataSlice.actions;
export default recomendationDataSlice.reducer;
