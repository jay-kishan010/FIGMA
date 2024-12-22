import React from 'react'
import { FaTachometerAlt, FaBook, FaQuestionCircle, FaClipboardList, FaCog } from 'react-icons/fa';
import Logo from "../assets/logo.png"
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-lightgray-100 shadow-md flex flex-col">
      <div className="flex items-center justify-start px-6 py-4 ">
      <img
        src={Logo} 
        alt="Logo"
        className="h-16 w-20 mr-2"
      />
    </div>

    
    <nav className="flex-1 mt-4 px-4">
      <ul className="space-y-2">
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FaTachometerAlt className="mr-3 text-lg" />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer" >
          <FaBook className="mr-3 text-lg" />
          <span>Students</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FaClipboardList className="mr-3 text-lg" />
          <span>Chapter</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FaQuestionCircle className="mr-3 text-lg" />
          <span>Help</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FaClipboardList className="mr-3 text-lg" />
          <span>Reports</span>
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer">
          <FaCog className="mr-3 text-lg" />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Sidebar
