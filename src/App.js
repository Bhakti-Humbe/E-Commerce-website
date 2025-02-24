
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import ViewDetails from './Pages/ViewDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import {} from 'react-icons/fa'
import {Route,Routes } from 'react-router-dom'
 

function App()
{
  return(
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/viewdetails" element={<ViewDetails/>}/>
      </Routes>
   
      </div>
      </div>
      <Footer/>
    </div>
  )
}
export default App;
