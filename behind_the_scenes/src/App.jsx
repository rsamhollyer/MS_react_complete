import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log('APP RUNNING');

  const paraHandler = () => {
    setShowPara((prevshowPara) => !prevshowPara);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={paraHandler}>Toggle ParaGraph</Button>
    </div>
  );
}

export default App;
