import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const eventDataSlice = createSlice({
  name: "eventData",
  initialState,
  reducers: {
    setEventData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setEventData } = eventDataSlice.actions;
export default eventDataSlice.reducer;
