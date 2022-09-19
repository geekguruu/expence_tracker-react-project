import React, { useState } from 'react'
import Expense from './Expense';

function Main() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    // array to store all the transactions in form of objects of title and amount
    const [transactions, setTransactions] = useState([{ title: 'Salary', amount: 5000 }, { title: 'Book', amount: -100 }, { title: 'Camera', amount: -500 }]);

    function handleSubmit(e) {
        e.preventDefault();
        addExpense();
        console.log("Submitted");
    }

    function addExpense() {
        // get the amount and title from state varaibles and create a new object from it
        const newExpense = { title, amount };
        setTransactions([...transactions, newExpense]);
        setTitle('');
        setAmount(0);
        console.log(transactions);
    }

    return (
        <>
            <div className="container-fluid mt-3">

                <form onSubmit={handleSubmit}>
                    <fieldset disabled="">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title of Transaction"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => { setAmount(e.target.value) }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </fieldset>
                </form>
            </div>
            <hr />
            {transactions.map((transaction) => {
                return <Expense title={transaction.title} amount={transaction.amount} />
            })}
        </>
    )
}

export default Main