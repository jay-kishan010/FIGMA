import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  items: [],

  // Fetch all items
  fetchItems: async () => {
    try {
      console.log("Fetching items from API...");
      const response = await axios.get("https://figma-backend-4.onrender.com/api/items");
      console.log("Fetched items:", response.data);
      set({ items: response.data });
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  },

  // Add a new item to the state and backend
  createItem: async (newItem) => {
    try {
      console.log("Creating new item...", newItem);
      const response = await axios.post("https://figma-backend-4.onrender.com/api/items", newItem); // POST request to backend
      const createdItem = response.data;
      console.log("Created item:", createdItem);

      // Add the new item to the state
      set((state) => ({
        items: [...state.items, createdItem],
      }));
    } catch (error) {
      console.error("Error creating item:", error.message);
    }
  },

  // Update an item
  updateItem: async (id, updatedData) => {
    try {
      const response = await fetch(`https://figma-backend-4.onrender.com/api/items/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      const updatedItem = await response.json();

      // Update the state
      set((state) => ({
        items: state.items.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        ),
      }));
    } catch (error) {
      console.error("Error updating item:", error);
    }
  },

  // Delete an item
  deleteItem: async (id) => {
    try {
      await fetch(`https://figma-backend-4.onrender.com/api/items/${id}`, { method: "DELETE" });

      // Remove the item from the state
      set((state) => ({
        items: state.items.filter((item) => item.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  },
}));

export default useStore;
