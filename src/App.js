import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import TermsandCon from './pages/TermsandConditions';
import Privacy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />    
        <Route path='/about' element={<About />}/>     
        <Route path='/contact' element={<Contact />}/>   
        <Route path='/termsandconditions' element={<TermsandCon />}/> 
        <Route path='/privacypolicy' element={<Privacy/>}/> 
        <Route path='/faq' element={<FAQ/>}/> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
