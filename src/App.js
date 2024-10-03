import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
