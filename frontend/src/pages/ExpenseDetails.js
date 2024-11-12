import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
        <div className='info'>
            <div className='balance'>
                Your Balance is ₹ {incomeAmt - expenseAmt}
            </div>
            {/* Show Income & Expense amount */}
            {/* <div className="amounts-container"> */}
            <hr/>
            <div>
            Income : 
            <span className="income-amount">  ₹{incomeAmt}</span>
            </div>
            <hr/>
            <div>
            Expense :
            <span className="expense-amount">  ₹{expenseAmt}</span>
            </div>
        </div> 
        <hr/>
        </div> 
        // </div>
    )
}

export default ExpenseDetails