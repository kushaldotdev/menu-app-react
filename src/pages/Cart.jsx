import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "@/components/Footer";
import CartItem from "@/components/Cart/CartItem";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Cart() {
  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - Cart`;
  }, []);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      categoryIcon: "Utensils",
      title: "Margherita Pizza",
      price: "120",
      veg: true,
      img: "https://picsum.photos/200?random=11",
      qty: 4,
    },
    {
      id: 2,
      categoryIcon: "Leaf",
      title: "Pepsi",
      price: "50",
      veg: true,
      img: "https://picsum.photos/200?random=12",
      qty: 1,
    },
    {
      id: 3,
      categoryIcon: "Soup",
      title: "Red Wine",
      price: "500",
      veg: true,
      img: "https://picsum.photos/200?random=13",
      qty: 1,
    },
    {
      id: 4,
      categoryIcon: "Utensils",
      title: "Cappuccino",
      price: "90",
      veg: true,
      img: "https://picsum.photos/200?random=14",
      qty: 1,
    },
    {
      id: 5,
      categoryIcon: "Utensils",
      title: "Cheese Burger",
      price: "200",
      veg: false,
      img: "https://picsum.photos/200?random=15",
      qty: 1,
    },
    {
      id: 6,
      categoryIcon: "Utensils",
      title: "Vanilla Ice Cream",
      price: "80",
      veg: true,
      img: "https://picsum.photos/200?random=16",
      qty: 1,
    },
    {
      id: 7,
      categoryIcon: "Utensils",
      title: "Grilled Salmon",
      price: "500",
      veg: false,
      img: "https://picsum.photos/200?random=17",
      qty: 1,
    },
    {
      id: 8,
      categoryIcon: "Utensils",
      title: "Caesar Salad",
      price: "180",
      veg: true,
      img: "https://picsum.photos/200?random=18",
      qty: 1,
    },
    {
      id: 9,
      categoryIcon: "Utensils",
      title: "Craft Beer",
      price: "220",
      veg: true,
      img: "https://picsum.photos/200?random=19",
      qty: 1,
    },
    {
      id: 10,
      categoryIcon: "Utensils",
      title: "Pasta Alfredo",
      price: "250",
      veg: true,
      img: "https://picsum.photos/200?random=20",
      qty: 1,
    },
  ]);

  const checkout = () => {
    alert("checkout");
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(item.qty + change, 0);
          if (newQty === 0) {
            removeItem(id);
            return null;
          }
          return { ...item, qty: newQty };
        }
        return item;
      });
      return updatedItems.filter((item) => item !== null);
    });

    // TODO : Update the quantity in the database
  };

  const { subtotal, tax, otherCharges, total, roundedOffTotal, roundedOffAmount } = useMemo(() => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    const tax = parseFloat((subtotal * 0.18).toFixed(2));
    const otherCharges = 30;
    const total = Number(subtotal + tax + otherCharges).toFixed(2);
    const roundedOffTotal = Math.round(total);
    const roundedOffAmount = parseFloat((roundedOffTotal - total).toFixed(2));

    return {
      subtotal,
      tax,
      otherCharges,
      total,
      roundedOffTotal,
      roundedOffAmount,
    };
  }, [cartItems]);

  return (
    <>
      <Navbar />
      <Main>
        {cartItems.length === 0 ? (
          <>
            <h1 className="text-3xl font-bold mb-2">Cart</h1>
            <p className="text-muted-foreground mt-4">Your cart is empty.</p>
          </>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-10">
              <section className="mb-10 md:w-3/5">
                <h1 className="text-3xl font-bold mb-2">Cart</h1>

                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    className="mb-4"
                    id={item.id}
                    categoryIcon={item.categoryIcon}
                    title={item.title}
                    price={item.price}
                    veg={item.veg}
                    img={item.img}
                    qty={item.qty}
                    removeItem={removeItem}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </section>

              <section className="md:w-2/5">
                <div className="sticky top-[72px]">
                  <h1 className="text-3xl font-bold mb-2">Order Summary</h1>

                  <div className="flex justify-between items-center">
                    <p>Subtotal ({cartItems.length} items) :</p>
                    <p>&#8377;{subtotal}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p>Tax :</p>
                    <p>&#8377;{tax}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p>Other Charges :</p>
                    <p>&#8377;{otherCharges}</p>
                  </div>

                  <Separator className="my-2" />

                  <div className="flex justify-between items-center">
                    <p>Total :</p>
                    <p>&#8377;{total}</p>
                  </div>

                  {roundedOffAmount !== 0 && (
                    <div className="flex justify-between items-center">
                      <p>Round Off :</p>
                      <p>&#8377;{roundedOffAmount}</p>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">Grand Total :</p>
                    <p>&#8377;{new Intl.NumberFormat("en-IN").format(roundedOffTotal)}</p>
                  </div>

                  <div className="text-end mt-8">
                    <Button className="btn px-8" onClick={() => checkout()}>
                      <Check />
                      Checkout
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </Main>
      <Footer />
    </>
  );
}
