# WalletWatcher

**WalletWatcher** is a web application to track personal expenses. It features user authentication, the ability to add, view, edit, and delete expenses, and an optional visual representation of expenses using a pie chart.

## Features
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Expense Management**: Users can add new expenses, view them in a table format, and edit or delete existing expenses.
- **Category-Wise Visualization** (Optional): Display a pie chart to show the distribution of expenses by category.

## Technologies Used
- **Frontend**: React.js, HTML, CSS, JavaScript (with optional charting library like Chart.js for the pie chart).
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or any preferred database)
- **Authentication**: JWT (JSON Web Token) or basic authentication.
  
## Screenshots
## Screenshots 

### Dashboard/Main Page
![Dashboard](https://github.com/user-attachments/assets/01013afd-fdd7-44c2-9e33-09c2472076a8)

### Sign Up & Login Pages
<div style="display: flex; justify-content: space-between; gap: 20px;">
  <img src="https://github.com/achintyashende/WalletWatcher/assets/2294082b-459c-4115-909a-bf2a7364e68b" alt="Sign Up Page" width="48%" />
  <img src="https://github.com/achintyashende/WalletWatcher/assets/c9ff319b-75a5-455e-9b39-edbf51d893ef" alt="Login Page" width="48%" />
</div>
  
## Installation

### 1. Clone the repository
```bash
git clone https://github.com/achintyashende/WalletWatcher.git
```

### 2. Install dependencies
For both frontend and backend, install the dependencies by navigating to each folder and running:

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

### 3. Set up environment variables
- Create a `.env` file in the `backend` directory and add necessary environment variables like `DB_URI` (for MongoDB connection) and `JWT_SECRET`.

### 4. Start the application
- In the `backend` folder, start the server:
  ```bash
  npm run dev
  ```

- In the `frontend` folder, start the React development server:
  ```bash
  npm start
  ```

Visit the application at `http://localhost:3000`.

## Usage

- **Sign Up / Login**: Create a new account or log in to an existing one.
- **Add Expense**: Enter the category, amount, and an optional comment to add an expense.
- **View Expenses**: View your expenses in a table sorted by the most recent.
- **Delete Expenses**: Update or remove your previously added expenses.

### Data Visualization
(optional) On the expenses page, view a pie chart that visualizes the distribution of your expenses by category.


## Contributing
Feel free to fork the repository and submit a pull request. Make sure to follow the code style and write tests where necessary.
