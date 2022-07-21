import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage"
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';
import Cart from './components/Cart/Cart';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path='/shoes/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
  );
}
export default App;
