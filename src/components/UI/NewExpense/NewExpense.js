import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
	const rando = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.floor(rando(0, 100)).toString(),
			...enteredExpenseData,
		};
		onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
