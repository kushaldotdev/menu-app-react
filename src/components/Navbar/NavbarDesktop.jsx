import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { Link } from "react-router-dom";

export default function NavbarDesktop({ isActive, navLinks }) {
  return (
    <NavigationMenu className="hidden md:block ml-auto">
      <NavigationMenuList className="gap-2">
        {navLinks.map(({ name, href }, index) => {
          return (
            <NavigationMenuItem key={name}>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isActive(href) ? "bg-accent text-accent-foreground" : "")} asChild>
                <Link to={href}>{name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
