import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  // {
  //   id: "e1",
  //   title: "Schoole Fee",
  //   amount: 500,
  //   date: new Date(2022, 1, 18),
  // },
  // {
  //   id: "e2",
  //   title: "Rent",
  //   amount: 7000,
  //   date: new Date(2022, 1, 15),
  // },
  // {
  //   id: "e3",
  //   title: "Books",
  //   amount: 840,
  //   date: new Date(2022, 1, 1),
  // },
  // {
  //   id: "e4",
  //   title: "Food",
  //   amount: 500,
  //   date: new Date(2022, 1, 18),
  // },
];

const App = () => {
  let h2Hdr = "Let us start !!!";
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const newExpenseDataHandler = (enteredExpenseData) => {
    const updatedExpense = [enteredExpenseData, ...expenses];
    setExpenses(updatedExpense);
    console.log(enteredExpenseData);
  };

  return (
    <div>
      <h2>{h2Hdr}</h2>
      <NewExpense newExpensData={newExpenseDataHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
