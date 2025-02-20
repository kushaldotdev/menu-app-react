import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import { ThemeProvider } from "@/utility/theme-provider.jsx";
import { LoginModalProvider } from "@/context/LoginModalContext"; // Import provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LoginModalProvider>
        <App />
      </LoginModalProvider>
    </ThemeProvider>
  </StrictMode>
);
