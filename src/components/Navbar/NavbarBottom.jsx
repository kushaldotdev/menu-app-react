import { useCategories } from "@/hooks/useCategories";
import { Link, useLocation } from "react-router-dom";

export default function NavBarBottom() {
  const { data: categories, isLoading, error } = useCategories();
  const location = useLocation();

  if (error) return <p>Error fetching categories</p>;
  if (isLoading) return <p>Loading categories...</p>;

  const navLinks = [];
  categories.main_categories.map((category) => {
    navLinks.push({
      name: category.category_name,
      href: `/menu/${category.category_href}`,
      icon: category.category_logo,
    });
  });

  return (
    <nav className="fixed bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <div className="flex h-14 items-center justify-between px-3">
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.href || (index === 0 && !navLinks.some((nav) => location.pathname === nav.href));

          return (
            <Link key={link.name} to={link.href} className={`flex flex-col items-center gap-1 text-sm p-1 ${isActive ? "text-primary" : ""}`}>
              {link.icon.includes("<svg") ? (
                <span dangerouslySetInnerHTML={{ __html: link.icon }} />
              ) : (
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
              )}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
