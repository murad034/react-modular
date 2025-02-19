// src/routes.jsx
import { lazy } from "react";
import AdminLayout from "@/layouts/AdminLayout.jsx"
// const AdminLayout = lazy(() => import("@/layouts/AdminLayout.jsx"));
import HomePage from "@/pages/HomePage.jsx";

// Dynamically import all module routes
// import.meta.glob("./modules/**/routes.jsx", { eager: true });
const modules = import.meta.glob("./modules/**/routes.jsx");


// const routes = [];

const routes = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [],
  },
];

// routes.push(masterRoute);

for (const path in modules) {
  const module = await modules[path]();
  //routes[0].children.push(...Object.values(modules[path])[0]);
  routes[0].children.push(...Object.values(module)[0]);
  // routes.push(...Object.values(module)[0]);
}

// for (const path in modules) {
//   const module = await modules[path]();
//   routes.push(...Object.values(module)[0]);
// }

export default routes;
