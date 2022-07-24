import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage"
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';
import Cart from './components/Cart/Cart';
import FormUser from './components/FormUser/FormUser'
import LogIn from './components/LogIn/LogIn';



function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path='/shoes/:id' element={<ProductDetail/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/user' element={<FormUser/>}/>
          <Route exact path='/login' element={<LogIn/>}/>
        </Routes>
      </Router>
  );
}
export default App;
