import React from 'react'
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const App = () => {
  const [number,setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const doubleNumber = useMemo (() =>{
    return slowFunction(number)
  },[number]);

  const [doubleNumber, setDoubleNumber] = useState(0)

  useEffect(() =>{
    setDoubleNumber(slowFunction(number))
  },[number]);

  const themeStyles ={
    backgroundColor: dark ?"black" : "white",
    color: dark ?"white": "black",
  };


  return (
    <div>
      <input type="number"
      value={number}
      onClick={(e) => setNumber(e.target.value)} 
      />
    <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default App;

function slowFunction(num) {
  for(let i=0; i<100000000; i++) {}
  return num * 2;
  }