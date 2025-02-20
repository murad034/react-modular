import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@/assets/css/style.css";
import { Provider } from "@/components/ui/provider";
// import theme from "@/theme.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider>
      <App />
    </Provider>
   // </StrictMode>
);
