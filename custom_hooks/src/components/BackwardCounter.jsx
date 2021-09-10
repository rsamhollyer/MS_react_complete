import React from 'react';
import useCounter from '../hook/useCounter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter() * -1;

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
