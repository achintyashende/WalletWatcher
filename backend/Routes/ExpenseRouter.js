const { fetchExpenses, deleteExpenses, addExpenses } = require('../Controllers/ExpenseController');

const router = require('express').Router();


// fetch all the expenses of user based on user id
router.get('/', fetchExpenses)

//add expense
router.post('/', addExpenses)

//delete 
router.delete('/:expenseId', deleteExpenses)


module.exports = router;