
import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";

function Home(){
    const [goals, setGoals] = useState([]);
    const [selectedGoal, setSelectedGoal] = useState(null);

    useEffect(()=>{
       fetch("http://localhost:3001/goals")
       .then(res => res.json())
       .then(data => setGoals(data)) //update state yetu
    }, []);


return (
    <>
    <GoalList goals={goals} onSelect={setSelectedGoal} />
   
   
    </>
)
}

export default Home;