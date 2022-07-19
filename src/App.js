import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage"
import './App.css';


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
