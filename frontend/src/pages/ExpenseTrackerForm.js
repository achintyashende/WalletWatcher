import React, { useState } from 'react'
import { handleError, handleSuccess } from '../utils';



function ExpenseTrackerForm({ addExpenses }) {

    const [expenseInfo, setExpenseInfo] = useState({ text: '', amount: '', category: '' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        const copyExpenseInfo = { ...expenseInfo };
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }

    const handleExpense = (e) => {
        e.preventDefault();
        console.log(expenseInfo);
        const { text, amount, category } = expenseInfo;
        if (!text || !amount || !category) {
            handleError('Please fill all fields');
            return;
        }
        setTimeout(() => {
            setExpenseInfo({ text: '', amount: '', category: '' });
        }, 1000)
        addExpenses(expenseInfo);
    }

    return (
        <div className='add_expense'>
            <form className='add_items' onSubmit={handleExpense}>
            {/* <h2>Add Expense</h2> */}
                <div className='expense-description'>
                    {/* <label htmlFor='expense-description'>Expense Description</label> */}
                    <input
                        onChange={handleChange}
                        type='text'
                        name='text'
                        placeholder='Enter your Expense Description...'
                        value={expenseInfo.text}

                    />
                </div>
                <div className='expense-description'>
                    {/* <label htmlFor='category'>Category</label> */}
                    <input
                        onChange={handleChange}
                        type='text'
                        name='category'
                        placeholder='Enter your category...'
                        value={expenseInfo.category}
                    />
                </div>
                <div className='expense-description'>
                    {/* <label htmlFor='amount'>Amount</label> */}
                    <input
                        onChange={handleChange}
                        type='number'
                        name='amount'
                        placeholder='Enter your amount...'
                        value={expenseInfo.amount}
                    />
                </div>
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseTrackerForm
