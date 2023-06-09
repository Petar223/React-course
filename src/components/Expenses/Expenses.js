import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";


function Expenses(props) {

    const expenseItem = props.items.map((item) => {
        return <ExpenseItem  key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    });

    return (
        <Card className={'expenses'}>
            {expenseItem}
        </Card>
    )
}

export default Expenses;