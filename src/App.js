import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/pages/Home';
import Frontend from './components/pages/Frontend';

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
           


        </Routes>
      
      </>
    
  </Router>
  );
}

export default App;
