import React from 'react'

function ExpensesTable({ expenses, handleDeleteExpense }) {
  console.log("ExpensesTable : ", expenses)
  return (
    <div className='expense-list'>
      {
        expenses.map((expense, index) => (
          <div key={index} className='expense-item'>
            <button 
            onClick={() => handleDeleteExpense(expense._id)} className='delete-button'>X</button>
            <div className='expense-description'>{expense.text}</div>
            <div className='expense-amount'
              style={{
                color: expense.amount < 0 ? 'crimson' : 'green'
              }}
            >
              {expense.amount}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ExpensesTable