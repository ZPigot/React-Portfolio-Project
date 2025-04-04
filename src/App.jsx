
import './App.css'
import React, { useState } from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import  './App.css'


function App() {
  const [ activeSection, setActiveSection ] = useState('AboutMe');

  const renderSection = () => {
    switch (activeSection) {
      case "About Me":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Developer Name</h1>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App
