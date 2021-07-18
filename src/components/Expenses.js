import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ expenses }) => {
	return (
		<div>
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} expense={expense} />
			))}
		</div>
	);
};

export default Expenses;
