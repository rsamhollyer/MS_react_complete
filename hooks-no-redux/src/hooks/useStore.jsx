/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export default function useStore() {
  const setState = useState(globalState)[1];

  useEffect(() => {
    listeners.push(setState);

    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return <div>HI</div>;
}
