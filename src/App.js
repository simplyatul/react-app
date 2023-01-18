import Expenses from "./components/Expenses";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "Schoole Fee",
      amount: 500,
      date: new Date(2022, 1, 18),
    },
    {
      id: "e2",
      title: "Rent",
      amount: 7000,
      date: new Date(2022, 1, 15),
    },
    {
      id: "e3",
      title: "Books",
      amount: 840,
      date: new Date(2022, 1, 1),
    },
    {
      id: "e4",
      title: "Food",
      amount: 500,
      date: new Date(2022, 1, 18),
    },
  ];
  let h2Hdr = "Let us start !!!";
  return (
    <div>
      <h2>{h2Hdr}</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
