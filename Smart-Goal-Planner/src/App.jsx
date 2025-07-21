import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from 'react';
import GoalList from './components/GoalList';
import Home from './components/Home'
import './index.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 id="H1">SMART GOAL PLANNER</h1>
  <Router>
 
 
  <nav>
       <Link to="./Home">Home</Link> 
       <Link to="/goals">View Your Goals</Link>
  </nav>

  
  <Routes>
    <Route path="./components/Home.jsx" element={<Home />} />
    <Route path="./components/GoalList.jsx" element={<GoalList />} />
  </Routes>

  </Router>
    </>
  );
}

export default App;
