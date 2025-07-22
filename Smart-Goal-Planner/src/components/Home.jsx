
import { useEffect, useState } from "react";
import GoalList from "../components/GoalList";

function Home(){
    




return (
    <>
    <GoalList goal={goals} onSelect={setSelectedGoal} />
   
   
    </>
)
}

export default Home;