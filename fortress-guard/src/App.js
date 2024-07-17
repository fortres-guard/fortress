import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesContainer from './components/FeaturesContainer';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers'; // Importing the Careers component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturesContainer />
                <AboutUs />
                <Team />
                <SignupForm />
                <ContactUs />
              </>
            } />
            <Route path="/careers" element={<Careers />} />
            {/* Add other routes here if needed */}
          </Routes>
        </main>     
        <Footer />
      </div>
    </Router>
  );
};

export default App;
