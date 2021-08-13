import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../UI/NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import moment from "moment";

const Expenses = ({ expenses }) => {
	const [pickedYear, setPickedYear] = useState("2020");

	const filteredExpenses = expenses.filter(
		(object) => moment(object.date).format("YYYY") === pickedYear,
	);

	return (
		<>
			<Card className='expenses'>
				<ExpensesFilter
					selectYearState={setPickedYear}
					yearState={pickedYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</>
	);
};

export default Expenses;
