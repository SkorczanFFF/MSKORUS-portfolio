import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/technos/Technos';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.scss';

export default function App() {
        return(
          <>
              <Navbar /> 
              <Home />
              <About />
              <Technologies />
              <Portfolio />
              <Contact />
              <Footer />
          </>
        );
}
