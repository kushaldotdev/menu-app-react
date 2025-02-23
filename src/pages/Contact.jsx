import ContactBody from "@/components/Contact/ContactBody";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - Contact`;
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <ContactBody />
      </Main>
      <Footer />
    </>
  );
}
