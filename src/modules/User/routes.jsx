import UserPage from "./pages/UserPage";
import Demo from "@/Demo.jsx";
import HomePage from "@/pages/HomePage.jsx";
import ProductPage from "@/pages/ProductPage.jsx";
import ProfilePage from "@/pages/ProfilePage.jsx";
import NotFound from "@/pages/NotFound.jsx";

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