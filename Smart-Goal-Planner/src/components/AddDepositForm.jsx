//form to allow users to make deposits for selected goals


function AddDepositForm(){
    
fetch("http://localhost:3001/goals",{ method:"POST"})
.then((res)=>res.json())


return(
<>


</>
)
}
export default AddDepositForm