import React from "react";
import Card from "../UI/Card";
import "./ExpenseDate.css";
import moment from "moment";

const ExpenseDate = ({ date }) => {
	const month = moment(date).format("MMMM");
	const year = moment(date).format("YYYY");
	const day = moment(date).format("Do");

	return (
		<Card className='expense-date'>
			<div className='expense-date__month'>{month}</div>
			<div className='expense-date__year'>{year}</div>
			<div className='expense-day'>{day}</div>
		</Card>
	);
};

export default ExpenseDate;
