
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return<>
  <BrowserRouter>
  <Navbar/>
  <Routes>

  <Route exact path='/' element={<Home/>} />
  
  <Route exact path='/admin' element={<Admin/>} />
  <Route exact path='/cart' element={<Cart/>} />
  <Route exact path='/signup' element={<Signup/>} />
  <Route exact path='/login' element={<Login/>} />

  </Routes>

  </BrowserRouter>
  </>;
}

export default App;
