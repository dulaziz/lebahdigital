import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "../views/Home";
import ContactUs from "../views/ContactUs";
import Policy from "../views/Policy";
import NotFound from "../views/NotFound";
import EarlyAccess from "../views/EarlyAccess";


function Router() {

    return (
      
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contactUs" element={<ContactUs/>} />
            <Route path="/earlyAccess" element={<EarlyAccess/>} />
            <Route path="/policy" element={<Policy/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      
    );
  }
  
  export default Router;