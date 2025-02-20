import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavCartButton = ({ className, ...props }) => {
  const navigate = useNavigate(); // Get the navigate function

  const handleCartClick = () => {
    console.log("cart clicked");
    navigate("/cart");
  };

  return (
    <Button variant="outline" {...props} className={`size-8 ${className || ""}`} onClick={() => handleCartClick()}>
      <ShoppingCart />
    </Button>
  );
};

export default NavCartButton;
