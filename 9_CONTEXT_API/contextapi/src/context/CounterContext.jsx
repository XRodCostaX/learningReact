/* eslint-disable react/jsx-no-constructed-context-values */
//  1 - criar context

import { createContext, useState } from 'react';

export const CounterContext = createContext();

// 2 - Criar provider
export function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(5);

  return <CounterContext.Provider value={{ counter, setCounter }}>{children}</CounterContext.Provider>;
}
