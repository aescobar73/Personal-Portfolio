import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App App-header">
      
      <nav class='navbar'>

      <div class='logo'>Angel Escobar</div>

      
        <li><Link to=''>Home</Link></li>
        <li><Link to='project'>Portfolio</Link></li>
        <li><Link to='contact'>Contact</Link></li>
      </nav>
     <Routes>
      <Route path='' element={<Home />} />
      <Route path='project' element={<Project />} />
      <Route path='contact' element={<Contact />} />
     </Routes>
       
    </div>
    <footer>
    <Footer />
    </footer>
    
    </BrowserRouter>
    </>
  );
}

export default App;
