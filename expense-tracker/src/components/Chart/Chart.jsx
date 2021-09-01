import React from 'react';
import ChartBar from './ChartBar';
import './styles/Chart.css';

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map(({ value }) => value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map(point => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />
      ))}
    </div>
  );
}
