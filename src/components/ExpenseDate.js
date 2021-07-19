import React from "react";
import Card from "./Card";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
	return (
		<Card className='expense-date'>
			<div className='expense-date__month'>{date.month}</div>
			<div className='expense-date__year'>{date.year}</div>
			<div className='expense-day'>{date.day}</div>
		</Card>
	);
};

export default ExpenseDate;
