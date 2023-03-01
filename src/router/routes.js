import HomePage from "../pages/HomePage";
import TradePage from "../pages/TradePage";
import FeedbackPage from "../pages/FeedbackPage";
import RegistrationPage from "../pages/RegistrationPage";
import { Navigate } from "react-router-dom";

export const privateRoutes = {};

export const publicRoutes = [
  { path: "/", component: <HomePage />, exact: false },
  { path: "/trade", component: <TradePage />, exact: false },
  { path: "/feedback", component: <FeedbackPage />, exact: false },
  { path: "/reg", component: <RegistrationPage />, exact: false },
  { path: "*", component: <Navigate to="/reg" replace />, exact: false },
];
