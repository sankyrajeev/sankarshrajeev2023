import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/pages/Home';

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
           


        </Routes>
      
      </>
    
  </Router>
  );
}

export default App;
