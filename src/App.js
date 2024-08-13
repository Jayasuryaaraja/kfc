import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './pages/Menu';
import Deals from './pages/Deals';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/deals' element={<Deals/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
