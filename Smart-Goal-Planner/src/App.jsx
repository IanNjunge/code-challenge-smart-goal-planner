import { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import './index.css'



function App() {
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);
 
  // fetch GoalList and return GoalList component for every goal
  useEffect(()=>{ //prevent re-rendering function component and handle fetch (side effect)
   fetch("http://localhost:3001/goals")
  .then( (res)=>res.json()) //jsonify response
  .then((data)=>{
    console.log(data)
    //call an operation on data (return goals list)
    //store data in state variable
    setGoals(data); //set fetched data to state
   });

   }, []);  //[] is empty so tied function (App) will be called once
  
  console.log(goals)

  //return GoalList component for every goal in goals array
  const goalComponent = goals.map((goal)=>{
    return <GoalList key={goal.id} />
  })
  
   return (
    <>
  <h1>SMART GOAL PLANNER</h1>
   {goalComponent}
   

    </>
  );

}

export default App;  

