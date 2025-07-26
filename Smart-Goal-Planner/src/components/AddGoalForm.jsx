//Form to allow users to add a new goals
//Goals added are saved to db.json (POST)
import { useState } from "react";



function AddGoalForm({ onGoalAdded }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");



//nested function to handle form submission
  function handleSubmit(e){
   e.preventDefault()

   const newGoal ={
    name : "{name}", 
    targetAmount: Number(targetAmount),
    category,
    deadline,
    saved: 0,
    createdOn: new Date().toISOString(),
   }

   //save new goal to server via App
   onAddGoal(newGoal);

    //Clear form 
    setName("")
    setTargetAmount("")
    setCategory("")
    setDeadline("")

   //return a form that has input fields
    return(
   <form onSubmit={handleSubmit}>
    <input //name
    type="text"
    value= "{name}"
    placeholder="Goal Name"
    onChange={((e)=> setName(e.target.value))} required
    /> 
    
    <input //targetAmount
    type="number"
    value={Number}
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
    type="text"
    value={deadline}
    placeholder="When is this goal due?"
    onChange={((e)=> setdeadline(e.target.value))} required
    /> 

  </form>
  )

  }

}  

export default AddGoalForm;