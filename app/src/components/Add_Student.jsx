import React from 'react'
import { useNavigate } from "react-router-dom";
const Add_Student = () => {
  const navigate=useNavigate();
  return (
    <div className="flex items-center justify-between ">
  
    <button className="bg-slate-500 text-white px-4 py-2 rounded" 
     onClick={() => navigate("/add-student")}
    >
      + Add new items
    </button>
      
    </div>
  )
}

export default Add_Student
