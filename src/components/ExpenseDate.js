import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
	return (
		<div className='expense-date'>
			<div className='expense-date__month'>{date.month}</div>
			<div className='expense-date__year'>{date.year}</div>
			<div className='expense-day'>{date.day}</div>
		</div>
	);
};

export default ExpenseDate;
