import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("Hi");

  const [title, setTitle] = useState(props.title);

  const clickHnandler = () => {
    setTitle(newTitle);
  };

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <h2 className="expense-item__price"> $ {props.amount} </h2>
      </div>

      <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHnandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
