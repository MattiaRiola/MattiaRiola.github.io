import './App.css';


//LIBRARIES
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import  Home  from './pages/Home';
import  Projects  from './pages/Projects';
import  Experience  from './pages/Experience';
import  Credits  from './pages/Credits';

//COMPONENTS
import PortfolioNavbar from './components/PortfolioNavbar'
import Footer from './components/Footer'




function App() {
  return (
        <Router>
          <PortfolioNavbar />
          <Routes>
            <Route path="/" element={<Home key="homepage"/>} />
            <Route path="/home" element={<Home key="home"/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
          <Footer/>
        </Router>
  );
}

export default App;
