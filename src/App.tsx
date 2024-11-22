import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ExpertTeam from './components/ExpertTeam';
import SuccessStories from './components/SuccessStories';
import Blog from './components/Blog';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="relative">
          <Hero />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="relative -mt-32">
          <Services />
          <About />
          <ExpertTeam />
          <SuccessStories />
          <Blog />
          <ContactFooter />
        </div>
      </main>
    </div>
  );
}

export default App;