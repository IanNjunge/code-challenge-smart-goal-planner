//Form to allow users to add a new goals
//Goals added are saved to db.json (POST)
import { useState } from "react";

function AddGoalForm({ setGoals }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");



//nested function to handle form submission
  function handleSubmit(e){
   e.preventDefault()

   const newGoal ={
    name, 
    targetAmount: Number(targetAmount),
    category,
    deadline,
    saved: 0,
    createdOn: new Date().toISOString(),
   }
   delete newGoal.id

   //save new goal to server via App
   fetch("http://localhost:3001/goals", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newGoal)
   })
   .then((res)=>res.json())
   .then((data)=>{
    //add data (new goals)to list of goals
    setGoals((prevGoals)=> [...prevGoals, data]);
    //Clear form 
    setName("");
    setTargetAmount("");
    setCategory("");
    setDeadline("");
    })

     }
   //return a form that has input fields
    return(
       <form onSubmit={handleSubmit}>
        <h2>Add New Goal</h2>

       <input //name
          type="text"
          value= {name}
          placeholder="Goal Name"
          onChange={((e)=> setName(e.target.value))} required
          /> 
    
       <input //targetAmount
        type="number"
        value={targetAmount}
        placeholder="Enter target amount here"
        onChange={((e)=> setTargetAmount(e.target.value))} required
    /> 

       <input //category
       type="text"
       value={category}
      placeholder="Enter Goal Category e.g School"
      onChange={((e)=> setCategory(e.target.value))} required
    /> 

      <input //deadline
     type="date"
     value={deadline}
     placeholder="When is this goal due?"
     onChange={((e)=> setDeadline(e.target.value))} required
    /> 

  <button type="submit">Add Goal</button>
  </form>
  )

}  

export default AddGoalForm;