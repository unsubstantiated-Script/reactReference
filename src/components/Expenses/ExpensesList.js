import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
	//Funky way of doing this...but more "reacty"
	//If isolated enough, this is how to chose to return two different components in React
	if (items.length === 0) {
		return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
	}

	return (
		<ul className='expenses-list'>
			{items.map((expense, index) => (
				<ExpenseItem key={index} expense={expense} />
			))}
		</ul>
	);
};

export default ExpensesList;
