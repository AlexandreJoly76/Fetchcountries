import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* path="*" is a wildcard that matches any path not defined above */}
      <Route path="*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;


