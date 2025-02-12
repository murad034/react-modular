import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  console.log("why not rendering");
  return (
    <div>
      <Toaster />
      <h1>React Project</h1>
      <br />
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
