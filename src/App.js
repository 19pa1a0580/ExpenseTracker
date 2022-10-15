import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './components/NewExpense/ExpenseForm.css';

const dummyExpenses = [
  { id:'e1', title: "Car Insurance", amount: "220", date: new Date(2021, 7, 2), },
  { id:'e2', title: "Some books", amount: "20", date: new Date(2021, 7, 7), },
  { id:'e3', title: "Food", amount: "120", date: new Date(2021, 7, 3), },
];

const App = () => {
  const [expenses,setNewExpenses]=useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
