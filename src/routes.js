// src/routes.js
import { lazy } from "react";

// Dynamically import all module routes
// import.meta.glob("./modules/**/routes.jsx", { eager: true });
const modules = import.meta.glob("./modules/**/routes.jsx");

const routes = [];

for (const path in modules) {
  const module = await modules[path]();
  routes.push(...Object.values(module)[0]);
}

export default routes;
