// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context object
const MyContext = createContext();

// Create a provider component
export function MyProvider({ children }) {
  // Define the state or data you want to share
  const [myData, setMyData] = useState('Initial Value');

  // You can also define functions or methods to modify the state here

  return (
    <MyContext.Provider value={{ myData, setMyData }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContext;
