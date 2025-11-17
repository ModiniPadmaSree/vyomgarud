// src/App.jsx

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Highlights from './sections/Highlights';
import ContactFooter from './sections/ContactFooter';

function App() {
  return (
    // Sets the global dark background and required font (Inter)
    <div className="min-h-screen bg-gray-900 font-inter">
      <Navbar /> 
      
      <main>
        {/* 1. Hero - Tagline, CTA, Bold Visual */}
        <Hero />
        {/* 2. About - Mission Summary */}
        <About />
        {/* 3. Capabilities / Products - 4 Cards */}
        <Capabilities />
        {/* 4. Highlights - 3 Feature Bullets */}
        <Highlights />
      </main>
      
      {/* 5. Contact / Footer - Simple Form and Links */}
      <ContactFooter />
    </div>
  );
}

export default App;