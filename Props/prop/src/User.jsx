import React from 'react'
import App from './App';

function User(props) {
  return (
    <div>
        <h1>{props.name} </h1>
        <h2>{props.age} </h2>
        <h2>{props.phone} </h2>
        <h2>{props.email} </h2>
    </div>
  );
}

export default User;