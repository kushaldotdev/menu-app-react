import { fetchCategories, fetchSubCategories } from "@/api/categories";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
export const useSubCategories = (categoryName) => {
  return useQuery({
    queryKey: ["subCategories", categoryName],
    queryFn: () => fetchSubCategories(categoryName),
    enabled: !!categoryName,
  });
};
