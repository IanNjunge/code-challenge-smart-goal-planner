import { useState } from "react";

function AddGoal({ onGoalAdded }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

}

//nested function to handle form submission
  function handleSubmit(e){
   e.preventDefault()

   const newGoal ={
    "name" : (setName("")), //not sure about that name
    targetAmount: Number(targetAmount),
    category,
    deadline,
    saved: 0,
    createdOn: new Date().toISOString(),
   }

   //save new goal to server (POST)
   fetch("http://localhost:3001/goals", {method:"POST"})
   .then((res)=>res.json())
   .then((createdGoal)=>{
    onGoalAdded(createdGoal)

    //Clear form 
    setName("")
    setTargetAmount("")
    setCategory("")
    setDeadline("")
  });
  }

  //return a form that has input fields
  return(
  <form></form>
  )




    











export default AddGoal