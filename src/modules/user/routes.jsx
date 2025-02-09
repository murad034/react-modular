import UserPage from "./pages/userPage";
import UserDetailPage from "./pages/userDetailPage.jsx"

export const userRoutes = [
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/user/details",
    element: <UserDetailPage />,
  },
];