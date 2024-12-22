import Add_Student from "./components/Add_Student"
import Filter from "./components/Filter"
import Header from "./components/Header"
import ItemCard from "./components/ItemCard"
import Sidebar from "./components/Sidebar"
import Add_Student_Form from "./pages/Add_Student_Form"
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
 
  return (
   <>
   <BrowserRouter>
     <div className="flex h-screen bg-gray-50">
     
      <Sidebar/>

      <div className="flex-1">
        <Header/>
        <div className="flex justify-between border-b  item-center px-4">
          <Filter/>
          <Add_Student/>
        </div>
        
        <Routes>
           
            <Route path="/" element={<ItemCard />} />
            <Route path="/add-student" element={<Add_Student_Form />} />
          </Routes>
      </div>
     </div>
   </BrowserRouter>
   </>
  )
}

export default App
