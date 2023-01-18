import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React from "react";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />

      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
    </Card>
  );
}

export default Expenses;
