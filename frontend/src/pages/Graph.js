// import React from 'react'

// function Graph() {
//     return (
//         <div className='graph'>
//             <h1>Graph</h1>
//         </div>
//     )
// }

// export default Graph

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

function Graph({ expenseAmt, incomeAmt }) {
    const data = {
        labels: ['Expense', 'Income'],
        datasets: [
            {
                label: 'Amount',
                data: [expenseAmt, incomeAmt],
                backgroundColor: ['#ff6384', '#36a2eb'],
                hoverBackgroundColor: ['#ff6384', '#36a2eb']
            }
        ]
    };

    return (
        <div className='graph_heading'>
            <h1>Income vs Expense</h1>

        <div className="graph">
            <Doughnut data={data} className='doughnut'/>
        </div>
        </div>
    );
}

export default Graph;
