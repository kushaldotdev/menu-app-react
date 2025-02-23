import MenuCard from "@/components/Home/MenuCard";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCategories, useSubCategories } from "@/hooks/useCategories";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuBody = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - Home`;
  }, []);

  const { category: paramCategory } = useParams();
  const { data: categories, isLoading: catLoading, error: catError } = useCategories();

  const [category, setCategory] = useState(paramCategory || null);

  useEffect(() => {
    // If no category is specified in the URL, use the first category
    if (!paramCategory && categories?.main_categories?.length > 0) {
      setCategory(categories.main_categories[0].category_href);
    } else {
      setCategory(paramCategory);
    }
  }, [categories, paramCategory]);

  const { data: subCategories, isLoading: subCatLoading, error: subCatError } = useSubCategories(category);
  if (catError || subCatError) return <p>Error fetching categories</p>;
  if (catLoading || subCatLoading) return <p>Loading categories...</p>;

  const menuCardsWithSubCategories = subCategories?.subCategories || [];

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
      {menuCardsWithSubCategories.length === 0 && <p className="text-center text-muted-foreground">No menu found</p>}

      {menuCardsWithSubCategories.map((subCategories) => (
        <section key={subCategories.category_id}>
          <h1 className="text-3xl font-bold">{subCategories.category_name}</h1>
          {subCategories.category_description && <p className="text-muted-foreground">{subCategories.category_description}</p>}

          <section className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-4 mb-14 mt-2">
            {subCategories.products.length === 0 && <p className="text-center text-muted-foreground">No menu item found</p>}

            {subCategories.products.map((product) => (
              <MenuCard
                key={product.product_id}
                id={product.product_id}
                title={product.product_name}
                price={product.product_price}
                shortDescription={product.product_description}
                longDescription={product.product_description}
                img={product.product_image}
                vegNonVeg={product.product_veg_non_veg}
                onClick={() => openModal(product)}
              />
            ))}
          </section>
        </section>
      ))}

      {/* Modal */}
      <Dialog open={isModalOpen} /* onOpenChange={setIsModalOpen} */ onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-md">
          {selectedItem && (
            <>
              <div className="max-h-[calc(100vh-145px)] md:max-h-[calc(100vh-70px)] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="mb-4">{selectedItem.product_name}</DialogTitle>
                  <DialogDescription className="sr-only">{selectedItem.shortDescription || "Additional details about the item."}</DialogDescription>
                </DialogHeader>
                <img src={selectedItem.product_image} alt={selectedItem.product_name} className="w-full h-40 object-cover rounded-md mb-4" />
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-accent-foreground">Price: {selectedItem.product_price}</p>
                  <p
                    className={cn(
                      "text-sm text-accent-foreground uppercase",
                      selectedItem.product_veg_non_veg === "veg"
                        ? "text-green-500"
                        : selectedItem.product_veg_non_veg === "non-veg"
                        ? "text-red-500"
                        : "text-gray-500"
                    )}
                  >
                    {selectedItem.product_veg_non_veg}
                  </p>
                </div>
                <p className="text-sm text-accent-foreground mb-4">{selectedItem.product_description}</p>
                <p className="text-sm text-muted-foreground">{selectedItem.product_long_description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MenuBody;
