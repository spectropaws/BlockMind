import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import recomendationDataSlice from "./Slices/recomendationDataSlice";
import diseaseDataSlice from "./Slices/diseaseDataSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    recomendationData: recomendationDataSlice,
    diseaseData: diseaseDataSlice,
  },
});
