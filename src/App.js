// import logo from './logo.svg';
// import './App.css';
import ExpenseItem from './components/ExpenseItem'

function App () {

  let expenses = [
    {
      id: 'e1',
      title: 'Schoole Fee',
      amount: 300,
      date: new Date(2022, 1, 18)
    },
    {
      id: 'e2',
      title: 'Rent',
      amount: 7000,
      date: new Date(2022, 1, 15)
    },
    {
      id: 'e3',
      title: 'Books',
      amount: 840,
      date: new Date(2022, 1, 1)
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 500,
      date: new Date(2022, 1, 18)
    }
  ];
  let h2Hdr = 'Let us start !!!';
  return (
      <div> 
        <h2>
          { h2Hdr }
        </h2>
        <ExpenseItem 
          date={expenses[0].date} 
          title={expenses[0].title} 
          amount={expenses[0].amount}>
        </ExpenseItem> 

        <ExpenseItem 
          date={expenses[1].date} 
          title={expenses[1].title} 
          amount={expenses[1].amount}>
        </ExpenseItem> 

      </div>
  );

}

export default App;



