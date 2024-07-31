import User from './User';

function App() {

  const userData = {
    name:"Munish",
    age:"25",
    phone:"9585268836",
    email:"munishwaran933@gmail.com",
  };

  return (
    <div>
      <h1>Hello </h1>
      <User name={userData.name}
      age={userData.age} 
      phone={userData.phone} 
      email={userData.email}  
      />

    </div>
  )
}

export default App;