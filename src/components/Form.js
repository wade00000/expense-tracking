import React,{useState} from "react"

function Form({onAddExpense}) {
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            category,
            description,
            amount: parseFloat(amount)
          });

        onAddExpense({
                category,
                description,
                amount: parseFloat(amount)
              
        })
      
          // form cleared
          setCategory("");
          setDescription("");
          setAmount("")
    }
    return(
    <div>

        <form onSubmit={handleSubmit}>
        <label for = "category">Category :</label>
        <input 
            id = "category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
        />
        <br/>

        <label for = "description">Description :</label>
        <input 
            id = "description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <br/>

        <label for = "amount">Amount :</label>
        <input 
            id = "amount"
            type = "number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <br/>

        <button id = "submit">submit</button>
        </form>
     
    </div>

  )}
  
  export default Form