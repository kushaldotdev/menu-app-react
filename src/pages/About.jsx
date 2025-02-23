import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AboutBody from "@/components/About/AboutBody";

export default function About() {
  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - About`;
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <AboutBody />
      </Main>
      <Footer />
    </>
  );
}
