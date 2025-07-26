//function that returns jsx to show list of goals from db.json
//function should recieve prop from AddGoalForm (to ensure list is up to  date)


function GoalList({goals}) {
   

  return (
    <>
    
    <h2>Your Goals</h2>
    {goals}
    </>
  );
}

export default GoalList;
