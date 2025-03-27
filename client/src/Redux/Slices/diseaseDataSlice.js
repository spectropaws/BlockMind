import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const diseaseDataSlice = createSlice({
  name: "diseaseData",
  initialState,
  reducers: {
    setDiseaseData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDiseaseData } = diseaseDataSlice.actions;
export default diseaseDataSlice.reducer;
