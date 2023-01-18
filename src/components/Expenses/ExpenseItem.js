import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  let title = props.title;
  const clickHnandler = () => {
    title = "New Title..";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <h2 className="expense-item__price"> $ {props.amount} </h2>
      </div>

      <button onClick={clickHnandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
