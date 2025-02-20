import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes.jsx";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  console.log("App jsx");
  return (
    <div className="hold-transition hajj-dashboard sidebar-mini layout-fixed">
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((child, i) => (
                    <Route key={i} path={child.path} element={child.element} />
                  ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
