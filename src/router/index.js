import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../views/Home";
import Contact from "../views/Contact"
import ContactUs from "../views/ContactUs";

function Router() {

    return (
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/contactUs" element={<ContactUs/>} />
        </Routes>
      
    );
  }
  
  export default Router;