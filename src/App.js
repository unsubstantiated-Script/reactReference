import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/UI/NewExpense/NewExpense";
import moment from "moment";

function App() {
	const month = moment().format("MMMM");
	const day = moment().format("DD");
	const year = moment().format("YYYY");

	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: { month, day, year },
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: { month, day, year },
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: { month, day, year },
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: { month, day, year },
		},
	];

	const addExpenseHandler = (expense) => {
		console.log("In App.js");
		console.log(expense);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
