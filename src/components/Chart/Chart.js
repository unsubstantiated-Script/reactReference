import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
import { data } from "browserslist";

const Chart = ({ dataPoints }) => {
	const dataPointValues = dataPoints.map((point) => point.value);
	//Spreading the array to pull out each item and add them up in Math.max
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
				<ChartBar
					// keys don't need to be numbers, they just need to be unique
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
