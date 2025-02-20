import { createContext, useContext, useState } from "react";

// Create Context
const LoginModalContext = createContext();

export function LoginModalProvider({ children }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return <LoginModalContext.Provider value={{ isLoginModalOpen, openLoginModal, closeLoginModal }}>{children}</LoginModalContext.Provider>;
}

// Custom Hook for easier usage
export function useLoginModal() {
  return useContext(LoginModalContext);
}
