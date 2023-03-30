import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Infographic from './components/Infographic';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Infographic />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
