import React from 'react';
import './styles/Chartbar.css';

export default function ChartBar({ value, maxValue, label }) {
  const valueRatio = () => {
    const fillHeight = `${Math.round((value / maxValue) * 100)}%` || '0%';
    return fillHeight;
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: valueRatio() }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
