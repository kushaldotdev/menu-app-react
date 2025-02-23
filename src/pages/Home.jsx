import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import NavBarBottom from "@/components/Navbar/NavbarBottom";
import MenuBody from "@/components/Home/MenuBody";

export default function Home() {
  return (
    <>
      <Navbar />
      <NavBarBottom />
      <Main>
        <MenuBody />
      </Main>
      <Footer className="pb-[81px]" />
    </>
  );
}
