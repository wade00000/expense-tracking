import React from "react"

function Table({expenses}) {
   
    console.log(expenses)
    return (
    <div className="table-container">

<table>

   <thead>
    <tr>
        <th>Category</th>
        <th>Description</th>
        <th>Amount(Ksh.)</th>
    </tr>
   </thead>

   <tbody>
    {expenses.map((expense,index)=>(
    <tr key = {index}>
        <td>{expense.category}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
    </tr>
        ))}
   </tbody>
  
</table>

    </div>
    )}
  
  export default Table