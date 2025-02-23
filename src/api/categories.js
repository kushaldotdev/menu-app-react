import api from "@/api/axiosInstance"; // Ensure axios instance is correctly set up

export const fetchCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch categories");
  }
};

export const fetchSubCategories = async (category) => {
  if (!category) return [];

  try {
    const response = await api.get(`/categories/${category}/subcategories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching subcategories:", error);

    if (error.response) {
      // Server responded with a status code outside 2xx range
      throw new Error(error.response.data?.message || `Error: ${error.response.status}`);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error("No response from server. Please check your network.");
    } else {
      // Something else happened
      throw new Error("An unexpected error occurred.");
    }
  }
};
