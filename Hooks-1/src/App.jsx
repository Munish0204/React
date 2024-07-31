import React,{useState} from 'react';

const App = () => {

    const [num,setNum] = useState(1);


    let x =1;

    const handleAdd = ()=>{
        setNum((currValue) => {
            return currValue + 1;

        });
        
    };

    console.log(x);

  return (
    <div>
        <h1>{num} </h1>
        <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;