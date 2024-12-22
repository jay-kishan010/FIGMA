import React from 'react'

const Filter = () => {
  return (
    <div className="flex justify-between p-4 ">
      <div>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
         title
        </button>
        <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded">
         content
        </button>
      </div>
    </div>
  )
}

export default Filter
