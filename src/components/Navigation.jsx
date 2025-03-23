import React from "react";

function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav>
      {["About Me", "Portfolio", "Contact", "Resume"].map((section) => (
        <button 
          key={section} 
          onClick={() => setActiveSection(section)} 
          style={{ fontWeight: activeSection === section ? "bold" : "normal" }}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
