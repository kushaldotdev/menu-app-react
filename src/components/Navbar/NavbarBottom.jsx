import { CakeSlice, CupSoda, Utensils, Wine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NavBarBottom() {
  const navLinks = [
    { name: "Foods", href: ["/menu/foods", "/"], icon: <Utensils /> },
    { name: "Beverages", href: "/menu/beverages", icon: <CupSoda /> },
    { name: "Desserts", href: "/menu/desserts", icon: <CakeSlice /> },
    { name: "Drinks", href: "/menu/drinks", icon: <Wine /> },
  ];

  const location = useLocation();

  return (
    <nav className="fixed bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="flex h-14 items-center justify-between px-3">
        {navLinks.map((link) => {
          const isActive = Array.isArray(link.href) ? link.href.includes(location.pathname) : location.pathname === link.href;

          return (
            <Link
              key={link.name}
              to={Array.isArray(link.href) ? link.href[0] : link.href}
              className={`flex flex-col items-center gap-1 text-sm p-1 ${isActive ? "text-primary" : ""}`}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
