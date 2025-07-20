import {Link} from "react-router-dom" //navigation without refreshing page

function GoalList(){
    return(
        <>
        <h2>Goals</h2>
        {goals.map(goal =>(<div key={goal.id}>{goal.text}
         </div>))}
        </>
    )
};

function handleDelete(){
    fetch(`http://localhost:3001/goals/${id}`, {method:"DELETE"})
    .then()
}


export default  GoalList;