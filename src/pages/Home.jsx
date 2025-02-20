import Footer from "@/components/Footer";
import MenuCard from "@/components/Home/MenuCard";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import NavBarBottom from "@/components/Navbar/NavbarBottom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - Home`;
  }, []);

  const menuCards = [
    {
      category: "Pizzas",
      items: [
        {
          id: 1,
          title: "Margherita Pizza",
          price: "120",
          veg: true,
          shortDescription: "Classic Margherita pizza with fresh tomatoes, mozzarella, and basil.",
          longDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusantium repudiandae minima eius accusamus, similique dolores libero sit earum assumenda officia iste culpa necessitatibus ipsa sequi dolorem error consectetur provident inventore aliquam! Beatae inventore eius voluptas qui dolorem aspernatur eum maiores ratione, soluta unde modi ea quo quos ex rerum hic odit asperiores repellendus numquam similique dolores delectus debitis pariatur repudiandae. Blanditiis eaque fugiat fuga aliquam voluptates, cumque dolorum voluptatem, iusto distinctio suscipit officia doloribus, atque vitae quibusdam obcaecati nulla! Earum esse eaque amet eligendi aliquam ex fugit pariatur fuga eius odio excepturi nemo animi aut magnam exercitationem, nobis quam illum suscipit! Suscipit eius eveniet inventore iure corporis laudantium at veritatis. Provident nemo delectus tenetur commodi quos est mollitia, officiis eligendi suscipit ipsam illum error recusandae dignissimos eius, sunt quae ducimus voluptatem corporis voluptatum aliquam ex explicabo dolor? Ad sequi voluptates debitis? Impedit temporibus porro nam aut iste quis vitae quasi amet ducimus quos vero enim debitis totam quaerat commodi atque voluptatibus velit dolores ipsa consectetur et iusto, quia odio ratione. Nostrum nemo eum soluta iste possimus? Id commodi temporibus assumenda molestias reiciendis sequi repudiandae vitae ut repellat cupiditate doloremque fugit, nulla ad aut necessitatibus quia neque? Suscipit, consectetur delectus.",
          img: "https://picsum.photos/200?random=11",
        },
        {
          id: 2,
          title: "Pepperoni Pizza",
          price: "150",
          veg: false,
          shortDescription: "Crispy pepperoni slices over a rich tomato sauce and melted cheese.",
          longDescription:
            "A delicious pizza featuring a homemade tomato sauce base, generously topped with mozzarella cheese and spicy, crispy pepperoni slices. Baked to perfection to achieve a golden-brown crust and slightly curled pepperoni edges for a rich, meaty flavor.",
          img: "https://picsum.photos/200?random=12",
        },
        {
          id: 3,
          title: "BBQ Chicken Pizza",
          price: "160",
          veg: false,
          shortDescription: "Grilled chicken with smoky BBQ sauce, red onions, and mozzarella cheese.",
          longDescription:
            "This mouthwatering pizza starts with a tangy barbecue sauce base, layered with mozzarella cheese, tender grilled chicken pieces, thinly sliced red onions, and a sprinkle of fresh cilantro. Baked until the cheese bubbles and the crust is crispy.",
          img: "https://picsum.photos/200?random=13",
        },
        {
          id: 4,
          title: "Veggie Supreme Pizza",
          price: "140",
          veg: true,
          shortDescription: "Loaded with bell peppers, olives, onions, mushrooms, and mozzarella.",
          longDescription:
            "A veggie lover’s dream! This pizza is generously topped with a colorful medley of bell peppers, black olives, onions, mushrooms, and mozzarella cheese over a rich tomato sauce base. Baked to a golden perfection for a crunchy yet cheesy delight.",
          img: "https://picsum.photos/200?random=14",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          id: 5,
          title: "Chocolate Lava Cake",
          price: "90",
          veg: true,
          shortDescription: "Warm chocolate cake with a gooey molten center.",
          longDescription:
            "A rich and decadent chocolate cake with a crisp outer layer and a warm, oozing molten chocolate center. Made from premium cocoa, butter, eggs, and sugar, then baked at a high temperature to ensure a soft, lava-like middle. Best enjoyed with a scoop of vanilla ice cream.",
          img: "https://picsum.photos/200?random=21",
        },
        {
          id: 6,
          title: "Strawberry Cheesecake",
          price: "110",
          veg: true,
          shortDescription: "Rich and creamy cheesecake topped with fresh strawberries.",
          longDescription:
            "A creamy New York-style cheesecake with a buttery graham cracker crust, topped with a luscious strawberry compote made from fresh strawberries, sugar, and lemon juice. Chilled to perfection and garnished with whipped cream for extra indulgence.",
          img: "https://picsum.photos/200?random=22",
        },
        {
          id: 7,
          title: "Tiramisu",
          price: "130",
          veg: true,
          shortDescription: "Classic Italian dessert with layers of coffee-soaked sponge and mascarpone.",
          longDescription:
            "This Italian classic features layers of coffee-soaked ladyfinger biscuits, creamy mascarpone cheese, and a dusting of cocoa powder. Lightly flavored with espresso and a touch of liqueur, this dessert melts in your mouth with every bite.",
          img: "https://picsum.photos/200?random=23",
        },
        {
          id: 8,
          title: "Ice Cream Sundae",
          price: "80",
          veg: true,
          shortDescription: "A delightful sundae with vanilla, chocolate, and strawberry scoops topped with nuts and syrup.",
          longDescription:
            "A fun and flavorful dessert featuring scoops of vanilla, chocolate, and strawberry ice cream, drizzled with chocolate and caramel syrup, and topped with crushed nuts, sprinkles, and a cherry on top. A perfect treat for any sweet tooth.",
          img: "https://picsum.photos/200?random=24",
        },
      ],
    },
    {
      category: "Beverages",
      items: [
        {
          id: 9,
          title: "Fresh Lemonade",
          price: "50",
          veg: true,
          shortDescription: "Refreshing lemonade made with fresh lemons and mint.",
          longDescription:
            "A classic summer drink made with hand-squeezed lemons, sugar, and chilled water, served over ice with a hint of fresh mint leaves. Perfect for quenching your thirst on a hot day.",
          img: "https://picsum.photos/200?random=31",
        },
        {
          id: 10,
          title: "Cold Brew Coffee",
          price: "70",
          veg: true,
          shortDescription: "Smooth and bold cold brew coffee served over ice.",
          longDescription:
            "A slow-steeped, full-bodied coffee brewed for over 12 hours to extract deep flavors and smoothness. Served chilled over ice for a refreshing caffeine boost with natural sweetness and low acidity.",
          img: "https://picsum.photos/200?random=32",
        },
      ],
    },
    {
      category: "Appetizers",
      items: [
        {
          id: 11,
          title: "Garlic Bread",
          price: "60",
          veg: true,
          shortDescription: "Crispy garlic bread topped with butter and herbs.",
          longDescription:
            "Golden-brown baguette slices brushed with a rich garlic butter spread, sprinkled with fresh parsley, and lightly toasted until crisp. Served with a side of marinara sauce for dipping.",
          img: "https://picsum.photos/200?random=41",
        },
        {
          id: 12,
          title: "Chicken Wings",
          price: "120",
          veg: false,
          shortDescription: "Spicy and crispy chicken wings with a tangy sauce.",
          longDescription:
            "Juicy chicken wings marinated in a special blend of spices, deep-fried to golden perfection, and tossed in a choice of buffalo, barbecue, or honey garlic sauce. Served with a side of ranch or blue cheese dip.",
          img: "https://picsum.photos/200?random=42",
        },
      ],
    },
    {
      category: "Pasta",
      items: [
        {
          id: 13,
          title: "Alfredo Pasta",
          price: "140",
          veg: true,
          shortDescription: "Creamy Alfredo pasta with parmesan and garlic.",
          longDescription:
            "A rich and creamy pasta dish made with fettuccine noodles tossed in a velvety Alfredo sauce crafted from butter, cream, and Parmesan cheese. Finished with a sprinkle of black pepper and fresh parsley.",
          img: "https://picsum.photos/200?random=51",
        },
        {
          id: 14,
          title: "Spaghetti Bolognese",
          price: "150",
          veg: false,
          shortDescription: "Classic spaghetti with rich and hearty meat sauce.",
          longDescription:
            "A traditional Italian dish featuring spaghetti noodles coated in a slow-cooked meat sauce made with ground beef, tomatoes, onions, garlic, and Italian herbs. Simmered to perfection for a deep, savory flavor.",
          img: "https://picsum.photos/200?random=52",
        },
      ],
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <NavBarBottom />
      <Main>
        {menuCards.map((menuCard) => (
          <section key={menuCard.category}>
            <h1 className="text-3xl font-bold mb-2">{menuCard.category}</h1>
            <section className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {menuCard.items.map((item) => (
                <MenuCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  shortDescription={item.shortDescription}
                  longDescription={item.longDescription}
                  img={item.img}
                  veg={item.veg}
                  onClick={() => openModal(item)}
                />
              ))}
            </section>
          </section>
        ))}

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-md">
            {selectedItem && (
              <>
                <div className="max-h-[calc(100vh-145px)] md:max-h-[calc(100vh-70px)] overflow-auto">
                  <DialogHeader>
                    <DialogTitle className="mb-4">{selectedItem.title}</DialogTitle>
                    <DialogDescription className="sr-only">{selectedItem.shortDescription || "Additional details about the item."}</DialogDescription>
                  </DialogHeader>
                  <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-foreground">Price: {selectedItem.price}</p>
                    <p className={`text-sm text-muted-foreground ${selectedItem.veg ? "text-green-500" : "text-red-500"}`}>
                      {selectedItem.veg ? "Veg" : "Non-Veg"}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{selectedItem.shortDescription}</p>
                  <p className="text-sm text-muted-foreground">{selectedItem.longDescription}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Main>
      <Footer className="pb-[81px]" />
    </>
  );
}
