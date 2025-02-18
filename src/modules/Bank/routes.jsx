import { lazy } from "react";

// import BankPage from "@modules/Bank/pages/BankPage.jsx";
const BankPage = lazy(() => import("@modules/Bank/pages/BankPage.jsx"));

export const BankRoutes = [
  {
    path: "/bank",
    element: <BankPage />,
  },
];
