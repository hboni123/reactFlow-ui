import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Page3 from './pages/Page3';
import Page2 from './pages/Page2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Page2/>}/>
        <Route path = "/1" element = {<Page3/>}/> 
      </Routes>
    </Router>


  );
}

export default App;
