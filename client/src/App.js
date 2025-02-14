import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './layouts/Footer/Footer';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Messages from './components/Messages/Messages';


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ProjectDetails  />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;