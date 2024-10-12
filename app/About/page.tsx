import React from "react";
import Contact from "@/Components/About/Contact";
import About from "@/Components/About/About";
import NavBar from "@/Components/Navbar/NavBar";

const page = () => {
  return (
    <div>
      <NavBar></NavBar>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default page;
