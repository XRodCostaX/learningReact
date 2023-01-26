// 3 alterando contexto

import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function ChangeCounter() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add Value to Counter</button>
    </div>
  );
}

export default ChangeCounter;
