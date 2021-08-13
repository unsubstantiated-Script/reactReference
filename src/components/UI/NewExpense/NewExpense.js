import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
	const [showForm, setShowForm] = useState(false);

	const rando = (min, max) => {
		return Math.random() * (max - min) + min;
	};

	const onClickHandler = () => {
		setShowForm((priorState) => !priorState);
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
			{showForm ? (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					clickHandler={onClickHandler}
				/>
			) : (
				<button onClick={onClickHandler}>Add a New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
