import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from "./MyButton";

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  const initialState = Math.floor(Math.random() * 10) + 1;
  const [count, setCount] = useState(initialState);

  const doubleIncrement = () => setCount(count + 2);
  const doubleDecrement = () => setCount(count - 2);

  return (
    <>
      <Welcome name="Kitagawa" />
      <p>count = {count} </p>
      <MyButton display="-" onClickAction={ () => setCount(count - 1)} />
      <MyButton display="+" onClickAction={ () => setCount(count + 1)} />
      <MyButton display="alert" onClickAction={ () => alert("debug")} />
      <div>
          <MyButton display="++" onClickAction={doubleIncrement} />
          <MyButton display="--" onClickAction={doubleDecrement} />
      </div>
    </>
  );
}

export default App;
