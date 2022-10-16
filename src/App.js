import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/NewExpense/ExpenseForm.css";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 220,
    date: new Date(2021, 7, 2),
  },
  { 
   id: "e2", 
   title: "Some books", 
   amount: 20, 
   date: new Date(2021, 7, 7),
  },
  { 
    id: "e3", 
    title: "Food", 
    amount: 120, 
    date: new Date(2021, 7, 3) 
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e5",
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e6",
    title: "Car Insur",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e7",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setNewExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
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
