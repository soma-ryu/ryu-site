import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedSection />
      <Footer />
    </div>
  );
}

export default App;
