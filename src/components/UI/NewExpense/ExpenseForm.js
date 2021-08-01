import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
	const [userInput, setUserInput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: e.target.value,
			};
		});
	};

	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: e.target.value,
			};
		});
	};

	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				date: e.target.value,
			};
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const { title, amount, date } = userInput;
		const expenseData = {
			title,
			amount,
			date: new Date(date),
		};
		onSaveExpenseData(expenseData);
		setUserInput({
			title: "",
			amount: "",
			date: "",
		});
	};

	const { title, amount, date } = userInput;

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor=''>Title</label>
					<input type='text' value={title} onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Amount</label>
					<input
						type='number'
						value={amount}
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor=''>Date</label>
					<input
						type='date'
						value={date}
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
