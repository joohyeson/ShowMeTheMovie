import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['남', '여'],
    datasets: [
        {
        data: [52.5, 47.5],
        backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 2,
        },
    ],
};
        
export const options = {
    responsive: false,

    plugins: {
    legend: {
        display: true
        },
    },

    

}
class LeftGraph extends Component {

    

    
    render() {
        return (

                <Doughnut data={data} options={options}
                style={{ width: "20vw", height: "20vh", margin:"30px auto" }} />

        );
    }
}

export default LeftGraph;