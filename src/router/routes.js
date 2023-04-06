import HomePage from "../pages/HomePage";
import TradePage from "../pages/TradePage";
import FeedbackPage from "../pages/FeedbackPage";
import RegistrationPage from "../pages/RegistrationPage";
import { Navigate } from "react-router-dom";
import ConfirmPage from "../pages/ConfirmPage";
import MyTrade from "../pages/MyTrade";

const baseRoutes = [
  { path: "/", component: <HomePage />, exact: false },
  { path: "/trade", component: <TradePage />, exact: false },
];

export const publicRoutes = [
  ...baseRoutes,
  { path: "/confirm", component: <ConfirmPage />, exact: false },
  { path: "/reg", component: <RegistrationPage />, exact: false },
  { path: "*", component: <Navigate to="/reg" replace />, exact: false },
];

export const userRoutes = [
  ...baseRoutes,
  { path: "/feedback", component: <FeedbackPage />, exact: false },
  { path: "/myTrade", component: <MyTrade />, exact: false },
  { path: "*", component: <Navigate to="/" replace />, exact: false },
];
