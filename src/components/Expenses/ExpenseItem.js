import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expense }) => {
	const [title, setTitle] = useState(expense.title);

	const clickHandler = () => {
		setTitle("Updated!");
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={expense.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<Card className='expense-item__price'>{expense.amount}</Card>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
