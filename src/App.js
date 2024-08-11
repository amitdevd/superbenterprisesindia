import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/about-us/About-us.js';
// import Home from './home/Home.js';
import Home from './components/Home/Home.js';
import Layout from './main/header/Header.js';
import Footer from './main/footer/Footer.js';

function App() {
  return (
    <Router>
      <div>
        <Layout/>
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
