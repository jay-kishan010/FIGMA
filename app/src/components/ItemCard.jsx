import React, { useEffect } from 'react';
import useStore from '../store/useStore';
import Card from './Card'; // Assume Card component renders individual items

function ItemCard() {
  const items = useStore((state) => state.items);
  const fetchItems = useStore((state) => state.fetchItems);

  useEffect(() => {
    if (items.length === 0) {
      console.log('Fetching items from Zustand store...');
      fetchItems();
    }
  }, [items.length, fetchItems]);

  console.log('Items from state:', items); // Log state for debugging

  return (
    // <div className="item-card-container">
    
    // </div>

       <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Id</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Content</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Date Joined</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Edit</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Delete</th>
          </tr>
        </thead>
        {items.length > 0 ? (
        items.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <div>Loading items...</div>
      )}
      </table>
    </div>
  );
}

export default ItemCard;
