import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Personajes from './pages/Personajes';
import Locaciones from './pages/Locaciones';
import Capitulos from './pages/Capitulos';
import Navbar from './components/Navbar';
import Detalle from './pages/Detalle'

function App() {
 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/personajes" element={<Personajes/>} />
        <Route path="/locaciones" element={<Locaciones/>} />
        <Route path="/capitulos" element={<Capitulos/>} />
        <Route path="/detalle/:id" element={<Detalle/>} />
      </Routes>
    </Router>  
  )
}

export default App;
