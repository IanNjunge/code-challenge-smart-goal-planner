import React from "react"
import {useState, useEffect} from "react"
import AddGoalForm from "./components/AddGoalForm"
import GoalList from "./components/GoalList"
import AddDepositForm from "./components/AddDepositForm"


//App is main component so fetch will be done here
function App(){
const [goals, setGoals]=useState([]); //store goals from local server
const [selectedGoalId, setSelectedGoal]=useState(null); //for deposit

//Fetch goals from db.json
useEffect(()=>{
fetch("http://localhost:3000/goals")
.then((res)=>res.json())
.then((data)=>setGoals(data))
},[]);

return(
<div classname="app-return">
<h1>Smart Goal Planner</h1>
<GoalList goals={goals}/>
<AddGoalForm  />
<AddDepositForm 
          goals={goals}
          onSelectGoal={setSelectedGoalId}
          onDeleteGoal={deleteGoal}
/>
</div>
)

}


export default App
