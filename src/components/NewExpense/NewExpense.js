import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //Pulls out Title, amount, date from expenseData (Key-Value Pairs)
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData); //Forwards it to App.js
    };

    return (

        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>


    );

};



export default NewExpense;