import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import useStore from "../store/useStore";
function Card({ item }) {

  const updateItem = useStore((state) => state.updateItem);
  const deleteItem = useStore((state) => state.deleteItem);


  const handleEdit = async () => {
    // Prompt the user for both title and content
    const updatedTitle = prompt("Enter the new title:", item.title);
    const updatedContent = prompt("Enter the new content:", item.content); // New prompt for content

    if (updatedTitle && updatedContent) {
      const updatedData = { title: updatedTitle, content: updatedContent };
      await updateItem(item.id, updatedData); // Update item using Zustand
      alert("Item updated successfully!");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      await deleteItem(item.id); // Delete item using Zustand
      alert("Item deleted successfully!");
    }
  };
  return (
    // <div className="card">
    //   <h3>{item.title}</h3> {/* Assuming `name` is one of the item properties */}
    //   <p>{item.content}</p> {/* Assuming `description` is one of the item properties */}
    //   {/* Add more item properties as needed */}
    // </div>

<tbody>

  <tr key={item.id} className="hover:bg-gray-50">
    <td className="border border-gray-300 px-4 py-2">{item.id}    </td>
    <td className="border border-gray-300 px-4 py-2">{item.title}</td>
    <td className="border border-gray-300 px-4 py-2">{item.content}</td>
    <td className="border border-gray-300 px-4 py-2">{item.createdAt}</td>
    <td className="border border-gray-300 px-4 py-2 green"><MdEdit className='text-green-400 cursor:pointer hover:text-green-600'   onClick={handleEdit}/></td>
    <td className="border border-gray-300 px-4 py-2 red"><MdDelete className='text-red-400 cursor:pointer hover:text-red-600' onClick={handleDelete} /></td>
  </tr>

</tbody>

    
  );
}

export default Card;
