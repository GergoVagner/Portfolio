import React from "react";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import EBooks from "./Pages/Ebooks";
import Movies from "./Pages/Movies";
import {Route, Routes} from "react-router-dom"
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/books" element={<Books />} />
         <Route path="/ebooks" element={<EBooks />} />
         <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
      </ShoppingCartProvider>
  )
}

export default App;
