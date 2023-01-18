import './ExpenseItem.css'

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  return (
    <div className='expense-item'>
       <div>
        <div> { month } </div>
        <div> { year } </div>
        <div> { day } </div>
      </div>
      <div className='expense-item__description'>
        <h2> { props.title } </h2>
        <h2 className='expense-item__price'> $ { props.amount } </h2>
      </div>
    </div>
  );
}

export default ExpenseItem;

