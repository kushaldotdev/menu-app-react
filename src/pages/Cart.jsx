import CartBody from "@/components/Cart/CartBody";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - Cart`;
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <CartBody />
      </Main>
      <Footer />
    </>
  );
}
