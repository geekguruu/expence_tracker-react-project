import React from 'react'

function Expense(props) {
    return (
        <div>
            <span>Title: {props.title}</span> <span>Amount: {props.amount}</span> <br />
        </div>

    )
}

export default Expense