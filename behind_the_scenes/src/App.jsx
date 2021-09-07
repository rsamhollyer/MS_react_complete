import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('APP RUNNING');

  const togglePara = useCallback(() => {
    if (allowToggle) setShowPara((prev) => !prev);
  }, [allowToggle]);

  const toggleToggle = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={toggleToggle}>Allow ParaGraph</Button>
      <Button onClick={togglePara}>Toggle ParaGraph</Button>
    </div>
  );
}

export default App;
