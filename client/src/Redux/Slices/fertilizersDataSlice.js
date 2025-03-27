import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const fertilizersDataSlice = createSlice({
  name: "fertilizersData",
  initialState,
  reducers: {
    setFertilizers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFertilizers } = fertilizersDataSlice.actions;
export default fertilizersDataSlice.reducer;
