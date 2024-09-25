import React, { useState, useEffect, useRef } from 'react';
import Header from './Header.jsx';
import '../index.css';
import Hero from './Hero.jsx';
import Fixture from './Fixture.jsx';
import PointTable from './PointTable.jsx';
import TopPerformers from './TopPerformers.jsx';
import Highlights from './Highlights.jsx';
import About from './About.jsx';

function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // References for the sections
  const fixtureRef = useRef(null);
  const pointTableRef = useRef(null);
  const highlightsRef = useRef(null);
  const topPerformersRef = useRef(null);
  const aboutRef = useRef(null);

  // Scroll handler
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPageNumber((prevNumber) => (prevNumber === 7 ? 1 : prevNumber + 1));
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`home-page home-page${pageNumber} ${menuOpen ? ' menu-open' : ''} px-4 md:px-8 lg:px-20 py-3`}>
        {/* Pass the scrollToSection function to Header */}
        <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen} scrollToSection={scrollToSection} fixtureRef={fixtureRef} pointTableRef={pointTableRef} highlightsRef={highlightsRef} topPerformersRef={topPerformersRef} aboutRef={aboutRef} />
        <Hero menuOpen={menuOpen} />
      </div>
      <div ref={fixtureRef} className='px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-gray-100'>
        <Fixture />
      </div>
      <div ref={pointTableRef} className="px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-white">
        <PointTable />
      </div>
      <div ref={highlightsRef} className="px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-gray-900">
        <Highlights />
      </div>
      <div ref={topPerformersRef} className="px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-indigo-700">
        <TopPerformers />
      </div>
      <div ref={aboutRef} className="px-4 sm:px-10 md:px-16 lg:px-20 py-5 bg-gray-100">
        <About />
      </div>
    </>
  );
}

export default Home;
