import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Routes, Route, Navigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
// import axios from 'axios';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Service from './components/Service';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog/:id" element={<Blog />} />
        {/* <Route path="/service/:blog" element={<Blog />} /> */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
