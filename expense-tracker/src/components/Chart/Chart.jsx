import React from 'react';
import ChartBar from './ChartBar';
import './styles/Chart.css';

export default function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map(point => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={null}
          label={point.label}
        />
      ))}
    </div>
  );
}
