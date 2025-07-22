import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import Home from './components/Home'
import './index.css'




function App() {
  const [count, setCount] = useState(0)
 
  // fetch GoalList and return GoalList component for every goal
   fetch("http://localhost:3000/goals")
  .then( (res)=>res.json())
  .then((data)=>{
    console.log(data)
  }) 
  
  
  
   return (
    <>
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
