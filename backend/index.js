const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const ExpenseRouter = require('./Routes/ExpenseRouter');
const ensureAuthenticated = require('./Middlewares/Auth');

// Loading environment variables
require('dotenv').config();

// Connecting to MongoDB database using Mongoose
require('./Models/db');
const PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/expenses',ensureAuthenticated,ExpenseRouter);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})