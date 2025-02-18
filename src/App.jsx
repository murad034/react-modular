import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  console.log("App jsx");
  return (
    <div>
      <Toaster />
      <h1>React Project</h1>
      <br />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
