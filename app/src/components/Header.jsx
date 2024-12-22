import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { MdHelpOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";

import { FaSearch, FaQuestionCircle, FaComments, FaSlidersH, FaBell } from 'react-icons/fa';

const Header = () => {
  return (

<div className="flex items-center justify-between bg-white p-4 shadow-md">
{/* Search Bar */}
<div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-1/3">
  <FaSearch className="text-gray-500 mr-2" />
  <input
    type="text"
    placeholder="Search your details"
    className="bg-transparent outline-none w-full text-gray-700"
  />
</div>


<div className="flex items-center space-x-4">
  <FaQuestionCircle className="text-gray-600 text-lg cursor-pointer" />
    <FaComments className="text-gray-600 text-lg cursor-pointer" />
  <FaSlidersH className="text-gray-600 text-lg cursor-pointer" />
    <FaBell className="text-gray-600 text-lg cursor-pointer" />
  
  <div className="flex items-center space-x-2">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_XRGE9j0tQkvkYFKQU5MlZw86IXuV9TbfA&s"
      alt="User"
      className="h-10 w-10 rounded-full object-cover"
    />
    <span className="text-gray-800 font-medium">Adeline</span>
  </div>
</div>
</div>
  )
}

export default Header
