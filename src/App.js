import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';
import React, {useState} from 'react'

function App() {
  const [expenses,setExpenses] = useState([
    {category: 'Food' ,description: 'Groceries', amount: 50, },
    {category: 'Transport' ,description: 'Transport', amount: 20, }
  ])
  return (
    <div className="App">
     <Search/>
     <Form/>
     <Table expenses = {expenses}/>
    </div>
  );
}

export default App;
