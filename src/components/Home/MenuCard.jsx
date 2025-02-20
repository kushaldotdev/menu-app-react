import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

const MenuCard = ({ id, title, price, shortDescription, longDescription, img, veg, onClick }) => {
  const handleAddToCart = (id) => {
    alert(id);
  };

  return (
    <Card className="flex items-center w-full relative overflow-hidden">
      <div className={`size-2 rounded-full absolute top-2 right-2 ${veg ? "bg-green-500" : "bg-red-500"}`}></div>
      <p className="text-xs absolute top-1 right-7">&#8377;{price}</p>

      <img src={img} alt={title} className="block max-w-[100px] h-full object-cover flex-shrink-0 cursor-pointer" onClick={onClick} />

      <Button variant="link" onClick={() => handleAddToCart(id)} className="absolute bottom-2 right-2 m-0 p-0 size-min" title="Add to Cart">
        Add To Cart
      </Button>

      <CardContent className="p-4 flex-grow">
        <p className="font-semibold text-lg cursor-pointer" onClick={onClick}>
          {title}
        </p>
        <p className="text-xs text-muted-foreground">{shortDescription}</p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
