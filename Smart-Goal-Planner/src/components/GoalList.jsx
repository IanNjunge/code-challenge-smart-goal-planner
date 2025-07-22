//function that returns jsx to show list of goals from db.json


function GoalList({goalName}) {
   console.log(goalName,)

  return (
    <>
    <h2>{goalName}</h2>
    </>
  );
}

export default GoalList;
