import {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseFrom';
const NewExpense=(props)=>{
    const[isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler=()=>{
        setIsEditing(true);
    };
    const onCancleHandler=()=>{
        setIsEditing(false);
    };
    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={onCancleHandler}/>}
    </div>
}

export default NewExpense;