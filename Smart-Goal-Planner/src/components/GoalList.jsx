import React, { useEffect, useState } from 'react';

function GoalList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals') 
      .then(res => res.json())
      .then(data => setGoals(data)); //update state
      
  }, []);

  return (
    <div>
      <h2>Your Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>{goal.name}</li> //parent=Home child=Goalist
        ))}
      </ul>
    </div>
  );
}

export default GoalList;
