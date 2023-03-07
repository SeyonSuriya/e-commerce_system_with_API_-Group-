import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Loginform from "./components/loginform";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
             <Route index element={<Home />}/>
             <Route path="about" element={<About />}/>
             <Route path="Contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="page">
      <Loginform />
      </div>

    </>
  );
}

export default App;
