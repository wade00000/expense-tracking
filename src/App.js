import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';
import React, {useState} from 'react'

function App() {
  const [search,setSearch] = useState("")
  const [expenses,setExpenses] = useState([
    {category: 'Food' ,description: 'Groceries', amount: 50, },
    {category: 'Transport' ,description: 'Transport', amount: 20, }
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
    <div className="App">
     <Search search = {search} onSearchChange={setSearch}/>
     <Form onAddExpense={handleAddExpense}/>
     <Table expenses = {filteredExpenses}/>
    </div>
  );
}

export default App;
