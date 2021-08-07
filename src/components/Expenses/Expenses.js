import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../UI/NewExpense/ExpensesFilter";

const Expenses = ({ expenses }) => {
	const [pickedYear, setPickedYear] = useState("2020");

	console.log(pickedYear);
	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter
					selectYearState={setPickedYear}
					yearState={pickedYear}
				/>
				{expenses.map((expense) => (
					<ExpenseItem key={expense.id} expense={expense} />
				))}
			</Card>
		</>
	);
};

export default Expenses;
