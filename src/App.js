import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';

import About from './pages/About';
import Contact from './pages/Contact';

import Branch from './pages/Branch';

import Slider from './components/Slider';
function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Routes>

        <Route element={<Navbar/>}/>
    
          <Route exact path='/' element={<Slider/>}/>
          <Route exact path='/About' element={<About/>}/>
          <Route exact path='/Branches' element={<Branch/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          
        
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
