import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.jsx";
import { ThemeProvider } from "@/utility/theme-provider.jsx";
import { LoginModalProvider } from "@/context/LoginModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LoginModalProvider>
          <App />
        </LoginModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
