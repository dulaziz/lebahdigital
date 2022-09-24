import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Router from "./router";

function App() {

  return (
    <>
      <Navbar />

        <Router />

      <Footer />
    </>
  );
}

export default App;
