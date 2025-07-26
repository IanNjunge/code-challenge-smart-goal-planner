//form to allow users to make deposits for selected goals
import {useState} from 'react'
function AddDepositForm (){
    const [goals, setGoals]=useState([])
    const [selectedGoal, setSelectedGoals]=useState([])
    const [depositAmount, setDepositAmount]=useState([])

   // fetch("http://localhost3001/goals")
    //.then((res)=>res.json())
    //.then((data)=>setGoals(data))

    function handleSubmit (e){
    e.preventDefault()
    }
    return(
      <>
      <form id ="deposit-form" />
      </>

    )
}
export default AddDepositForm;