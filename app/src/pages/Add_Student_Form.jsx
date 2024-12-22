import React, { useState } from "react";
import useStore from "../store/useStore";
import {useNavigate} from "react-router-dom"
function Add_Student_Form() {
    
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const createItem = useStore((state) => state.createItem);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      title,
      content,
    };

    // Call the Zustand store action to create the item
    await createItem(newItem);

    // Clear the form
    setTitle("");
    setContent("");
    alert("Item added successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Add_Student_Form;
