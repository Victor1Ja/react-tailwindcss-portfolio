import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Section from './components/Section';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { DataContext } from './context/DataContext';

export default function App() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <DataContext.Provider value={{ data, setData, loaded, setLoaded }}>
        <Section>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </Section>
      </DataContext.Provider>
    </main>
  );
}
