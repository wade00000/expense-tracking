import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';
import React, {useState} from 'react'

function App() {
  const [search,setSearch] = useState("")
  const [expenses,setExpenses] = useState([
    {category: 'Food' ,description: 'Groceries', amount: 15000, },
    {category: 'Transport' ,description: 'Uber', amount: 3000, },
    {category: 'Finances' ,description: 'Savings', amount: 18000, },
    {category: 'Entertainment' ,description: 'Netflix', amount: 1100,},
    {category: '*Love Life' ,description: '*Dates', amount: 12000, }
    
  ])

  const handleAddExpense = (newExpense) =>{
    setExpenses([...expenses,newExpense])
  }

  const filteredExpenses = expenses.filter((expense) => {
    const searched = search.toLowerCase()
    return (
      expense.description.toLowerCase().includes(searched) ||
      expense.category.toLowerCase().includes(searched)
    );
  });

  return (
    <div className="app-container">
      <header className="header">
        <h1 className='logo-title'>Expense Tracker   </h1>
        <img src="/apple-touch-icon.png" className ="logo-icon"/>
        <Search search = {search} onSearchChange={setSearch}/>
      </header>
      
     <div className='main-content'>
        <div className='form-container'>
          <Form onAddExpense={handleAddExpense}/>
        </div>
        <div className='table-container'>
          <Table expenses = {filteredExpenses}/>
          <br></br>
          <strong>
           <small>*probably a lie</small>
          </strong>
          
      </div> 
    </div>
   </div>
     
      
      
  );
}

export default App;
