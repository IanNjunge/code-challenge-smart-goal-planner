//function that returns jsx to show list of goals from db.json

function GoalList({ goals }) {
  return (
    <div>
      <h2>Your Goals</h2>
      <ul>
      {goals.map((goal) => {
        if (!goal) return null; // Skip if goal is undefined or null

        return (
          <p key={goal.id}> {goal.name}</p>
        );
      })}
      </ul>
    </div>
  );
}

export default GoalList;
