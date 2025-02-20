import { Suspense, lazy, useMemo } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const IconComponent = ({ className, iconName }) => {
  // Dynamically import the icon
  const LucideIcon = useMemo(
    () =>
      lazy(() =>
        import("lucide-react").then((module) => {
          if (!module[iconName]) {
            throw new Error(`Icon ${iconName} not found.`);
          }
          return { default: module[iconName] };
        })
      ),
    [iconName]
  );

  return (
    <Suspense fallback={<Loader2 className={className} />}>
      <LucideIcon size={32} className={className} />
    </Suspense>
  );
};

const CartItem = ({ className, id, categoryIcon, title, price, veg, img, qty, removeItem, updateQuantity }) => {
  return (
    <Card className={`flex items-center w-full relative overflow-hidden ${className}`}>
      <div className={`size-2 rounded-full absolute top-2 right-2 ${veg ? "bg-green-500" : "bg-red-500"}`}></div>

      <p className="text-xs absolute top-1 right-7">
        <IconComponent iconName={categoryIcon} className="size-4 text-muted-foreground" />
      </p>

      <img src={img} alt={title} className="block max-w-[100px] h-full object-cover flex-shrink-0" />

      <CardContent className="p-4 flex-grow">
        <p className="font-semibold text-lg">{title}</p>
        <p>&#8377;{price}</p>

        <div className="flex items-center content-center gap-2 absolute bottom-2 right-2">
          <Button variant="link" onClick={() => removeItem(id, 0)} className="flex-shrink-0">
            Remove
          </Button>
          <Button variant="outline" size="icon" onClick={() => updateQuantity(id, -1)} className="flex-shrink-0 text-2xl size-6 pb-[6px]">
            -
          </Button>
          <p>{qty}</p>
          <Button variant="outline" size="icon" onClick={() => updateQuantity(id, 1)} className="flex-shrink-0 text-2xl size-6">
            +
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;
