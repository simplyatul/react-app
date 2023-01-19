import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import React, { useState } from "react";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((e) => (
        <ExpenseItem
          key={e.id}
          date={e.date}
          title={e.title}
          amount={e.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;
