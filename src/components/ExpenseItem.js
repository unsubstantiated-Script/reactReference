import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = ({ expense }) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={expense.date} />
			<div className='expense-item__description'>
				<h2>{expense.title}</h2>
				<Card className='expense-item__price'>{expense.amount}</Card>
			</div>
		</Card>
	);
};

export default ExpenseItem;
