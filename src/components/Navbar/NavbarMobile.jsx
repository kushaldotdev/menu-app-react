import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLoginModal } from "@/context/LoginModalContext";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Dot, LogIn, Menu, PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarMobile({ isActive, isOpen, setIsOpen, navLinks }) {
  const { isLoginModalOpen, openLoginModal, closeLoginModal } = useLoginModal();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>
        <SheetDescription className="sr-only">This menu allows you to navigate the website.</SheetDescription>

        <SheetHeader>
          <Button className="flex justify-center items-center pb-2 pt-1" variant="link" asChild>
            <Link to="/" className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <SheetTitle className="font-bold text-lg">Menu App</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>

        <nav className="h-[calc(100vh-48px-36px-32px)] mt-8 overflow-auto">
          <ul className="flex flex-col items-start space-y-1 px-2 h-full">
            {navLinks.map(({ name, href }, index) => {
              return (
                <li className="w-full" key={index}>
                  <Button variant={isActive(href) ? "secondary" : "ghost"} className="w-full justify-start h-10 mb-1" asChild>
                    <Link to={href}>
                      <span>
                        <Dot size={18} />
                      </span>
                      <p className="max-w-[200px] truncate">{name}</p>
                    </Link>
                  </Button>
                </li>
              );
            })}

            <li className="w-full grow flex items-end mt-auto">
              <Button onClick={openLoginModal} variant="outline" className="w-full justify-center h-10 mt-5">
                <span>
                  <LogIn size={18} />
                </span>
                <p className="whitespace-nowrap">Sign In</p>
              </Button>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
