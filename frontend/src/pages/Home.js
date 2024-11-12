import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { APIUrl, handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import ExpensesTable from './ExpensesTable';
import ExpenseTrackerForm from './ExpenseTrackerForm';
import ExpenseDetails from './ExpenseDetails';
import Graph from './Graph';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [expenses, setExpenses] = useState([]);
    const [expenseAmt, setExpenseAmt] = useState(0);
    const [incomeAmt, setIncomeAmt] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    useEffect(() => {
        const amounts = expenses.map((item) => item.amount);
        console.log(amounts);

        const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc + item), 0);
        console.log(income);
        setIncomeAmt(income);

        const exp = amounts.filter(item => item < 0).reduce((acc, item) => (acc + item), 0) * -1;
        console.log(exp);
        setExpenseAmt(exp);

    }, [expenses])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedmout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchExpenses = async () => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            if (response.status === 403) {
                navigate('./login');
            }
            const result = await response.json();
            // console.log(result);
            console.log(result.data);
            setExpenses(result.data);
        } catch (err) {
            handleError(err);
        }
    }

    const addExpenses = async (data) => {
        try {
            const url = `${APIUrl}/expenses`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            }
            const response = await fetch(url, headers);
            if (response.status === 403) {
                navigate('./login');
            }
            const result = await response.json();
            // console.log(result);
            console.log(result.data);
            setExpenses(result.data);
            handleSuccess(result.message);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchExpenses()
    }, [])

    const handleDeleteExpense = async (expenseId) => {
        try {
            const url = `${APIUrl}/expenses/${expenseId}`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }
            const response = await fetch(url, headers);
            if (response.status === 403) {
                navigate('./login');
            }
            const result = await response.json();
            // console.log(result);
            console.log(result.data);
            setExpenses(result.data);
            handleSuccess(result.message);
        } catch (err) {
            handleError(err);
        }
    }

    return (
        <div>
            <div className='navbar'>
                <h1>Welcome {loggedInUser}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='body_section'>
                <ExpenseTrackerForm addExpenses={addExpenses} />
                <div className='inner_section'>
                    <div className='Section'>
                        <ExpenseDetails incomeAmt={incomeAmt} expenseAmt={expenseAmt} />
                        <ExpensesTable
                            expenses={expenses}
                            handleDeleteExpense={handleDeleteExpense}
                        />
                    </div>
                    <div className='Graph_Section'>
                        <Graph incomeAmt={incomeAmt} expenseAmt={expenseAmt} />
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

export default Home