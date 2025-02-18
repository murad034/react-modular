import { lazy } from "react";

import UserPage from "@modules/User/pages/UserPage.jsx";
import UserDetailsPage from "@modules/User/pages/UserDetailsPage.jsx";
import Demo from "@/Demo.jsx";
import HomePage from "@/pages/HomePage.jsx";
import ProductPage from "@/pages/ProductPage.jsx";
import ProfilePage from "@/pages/ProfilePage.jsx";
import NotFound from "@/pages/NotFound.jsx";

// const UserPage = lazy(() => import("@modules/User/pages/UserPage.jsx"));
// const UserDetailsPage = lazy(() => import("@modules/User/pages/UserDetailsPage.jsx"));

export const UserRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/user-details",
    element: <UserDetailsPage />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/product/:productID/:productName",
    element: <ProductPage />,
  },
  {
    path: "/profile/:userID/:userName",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];