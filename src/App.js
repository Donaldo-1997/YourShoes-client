import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage"
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path='/shoes/:id' element={<ProductDetail/>}/>
        </Routes>
      </Router>
  );
}
export default App;
