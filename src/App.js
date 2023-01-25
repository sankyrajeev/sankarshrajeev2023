import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/pages/Home';

import Footer from './components/Footer';
import Frontend from './components/Frontend';
import FullStack from './components/Fullstack';
import Cards from './components/Cards';
import Contact from './components/pages/Contact';
import Blog from './components/Blog';
import Music from './components/Music';

function App() {
  return (
    <Router>
      <>
      <Navbar />
        <Routes>
        <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<Home />}
            />
            <Route
              path="/front-end"
              element={<Frontend />}
            />
            <Route
              path="/fullstack"
              element={<FullStack />}
            />
             <Route
              path="/portfolio"
              element={<Cards/>}
             
            />
            
             <Route
              path="/contact"
              element={<Contact/>}
            />
             <Route
              path="/blog"
              element={<Blog/>}
            />
           <Route
              path="/music"
              element={<Music/>}
            />


        </Routes>
        
        <Footer />
      </>
    
  </Router>
  );
}

export default App;
