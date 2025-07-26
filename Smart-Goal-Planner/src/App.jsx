import React from "react"
import {useState, useEffect} from "react"
import AddGoalForm from "./components/AddGoalForm"
import GoalList from "./components/GoalList"
import AddDepositForm from "./components/AddDepositForm"



function App(){
const [goals, setGoals]=useState([]); //store goals from local server


//Fetch goals from db.json
useEffect(()=>{
fetch("http://localhost:3001/goals")
.then((res)=>res.json())
.then((data)=>setGoals(data))
},[]);

return(
<div className="app-return-div">
<h1>SMART GOAL PLANNER</h1>
<GoalList goals={goals} />
<AddGoalForm setGoals={setGoals} />
<AddDepositForm goals={goals} setGoals={setGoals}/>

</div>
)

}


export default App
