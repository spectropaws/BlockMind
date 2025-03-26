import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Layout from "../layout/layout";
import LoginLayout from "@/layout/loginLayout";
import Login from "@/pages/Login";
import SignUpLayout from "@/layout/SignUpLayout";
import SignUp from "@/pages/SignUp";
import Calender from "@/pages/Calender";
import ProtectedRoute from "./ProtectedRoute";
import CropRecomendation from "@/pages/CropRecomendation";
import Home from "@/pages/Home";
import DiseaseDetection from "@/pages/DiseaseDetection";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="calender" element={<Calender />} />
        <Route path="crop-recomendation" element={<CropRecomendation />} />
        <Route path="disease-detection" element={<DiseaseDetection />} />
      </Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/sign-up" element={<SignUpLayout />}>
        <Route index element={<SignUp />} />
      </Route>
    </>
  )
);

export default router;
