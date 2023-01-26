import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();
export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'red' };
    case 'BLUE':
      return { ...state, color: 'blue' };
    default:
      return state;
  }
};

export function TitleColorContextProvider({ children }) {
  const [state, dispatch] = useReducer(titleColorReducer, { color: 'green' });

  console.log('Title color context', state);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <TitleColorContext.Provider value={{ ...state, dispatch }}>{children}</TitleColorContext.Provider>;
}
