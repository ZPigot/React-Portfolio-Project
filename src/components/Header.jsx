import React from "react";
import Navigation from "./Navigation";

function Header({activeSection, setActiveSection}) {

  return (
    <header>
      
      <h1>MyReact Portfolio</h1>
     
       <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
       <button onClick={() => setActiveSection("About Me")}>About Me</button>
       <button onClick={() => setActiveSection("Portfolio")}>Portfolio</button>
       <button onClick={() => setActiveSection("Contact")}>Contact</button>
       <button onClick={() => setActiveSection("Resume")}>Resume</button>
       <button onClick={() => setActiveSection("Footer")}>Footer</button> 
               cd c:\Users\zzpig\Bootcamp\React-Portfolio-Project 

    </header>
  );
}

export default Header;