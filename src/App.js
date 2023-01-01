import './App.css';


//LIBRARIES
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import  Home  from './pages/Home';
import  Projects  from './pages/Projects';
import  Experience  from './pages/Experience';

//COMPONENTS
import PortfolioNavbar from './components/PortfolioNavbar'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App">
        <Router>
          <PortfolioNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer/>
        </Router>

    </div>
  );
}

export default App;
