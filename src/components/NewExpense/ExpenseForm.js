import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  function fetchData(movieName) {
    let api = "http://localhost:9009/demo/v1/movies/" + movieName;
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          alert(
            "Fetch movie request failed with error code: " + response.status
          );
          throw new Error("Get Movie: Non 2xx response", { cause: response });
        } else {
          console.log(response);
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        const movieData = {
          date: new Date(data.released, 0),
          title: data.title,
          amount: data.description,
        };
        console.log("movieData: ", movieData);
        props.onSaveExpenseData(movieData);
      });
  }

  const getMovie = (event) => {
    event.preventDefault();
    console.log("In getMovie");
    fetchData(title);
  };

  const saveMovie = (movie) => {
    let api = "http://localhost:9009/demo/v1/movies/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    };

    fetch(api, options).then((response) => {
      if (!response.ok) {
        alert(
          "Saving movie request failed with error code: " + response.status
        );
        throw new Error("Save Movie: Non 2xx response", { cause: response });
      } else {
        console.log(response);
        alert(movie.title + " Movie Saved Successfully");
        return response.json();
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // avoid page to reload/refresh

    const movieData = {
      title: title,
      description: amount,
      released: date,
    };
    console.log(movieData);
    saveMovie(movieData);
    // props.onSaveExpenseData(expenseData);

    // setTitle("");
    // setAmount("");
    // setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Movie Name</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label> Movie Description </label>
          <input value={amount} type="text" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label> Release Year </label>
          <input
            type="number"
            value={date}
            min="1000"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__getmovie">
        <button onClick={getMovie}>Get Movie</button>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Movie</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
