import { lazy, Suspense, useState } from "react";

import { ModeToggle } from "../utility/mode-toggle";
import { Button } from "./ui/button";

import NavCartButton from "@/components/Navbar/NavCartButton";
import { Link } from "react-router-dom";
import NavbarDesktop from "./Navbar/NavbarDesktop";
import NavbarMobile from "./Navbar/NavbarMobile";

import { LogIn } from "lucide-react";

import { useLoginModal } from "@/context/LoginModalContext";
const LoginModal = lazy(() => import("./Navbar/LoginModal"));

export default function NavBar() {
  const [isMobileNavOpen, setMobileNavIsOpen] = useState(false);
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  const isActive = (href) => {
    if (href === "/" && (location.pathname === "/" || location.pathname.startsWith("/menu"))) {
      return true;
    }
    return location.pathname === href;
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cart", href: "/cart" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-3 gap-3">
        {/* Logo */}
        <Link to="/">
          <div className="font-bold text-lg">Menu App</div>
        </Link>

        {/* Desktop Navigation */}
        <NavbarDesktop isActive={isActive} navLinks={navLinks} />

        {/* Login Button */}
        <Button variant="outline" className="size-8 ml-auto invisible md:visible" onClick={openLoginModal}>
          <LogIn />
        </Button>

        <NavCartButton />

        <ModeToggle />

        {/* Mobile Navigation */}
        <NavbarMobile isActive={isActive} isOpen={isMobileNavOpen} setIsOpen={setMobileNavIsOpen} navLinks={navLinks} />
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <LoginModal isModalOpen={isLoginModalOpen} closeModal={closeLoginModal} />
      </Suspense>
    </nav>
  );
}
