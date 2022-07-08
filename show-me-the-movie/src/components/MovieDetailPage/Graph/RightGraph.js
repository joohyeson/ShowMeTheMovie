import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
    title: {
    display: true,
    text: 'Chart.js Bar Chart',
    },
},
};

const labels = ['10대', '20대', '30대', '40대', '50대', 'June', 'July'];

export const data = {
    labels,
    ddatasets:
    { //데이터
        label: 'test1', //차트 제목
        fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
        data: [
            21, 19, 25, 20, 23, 26, 25 //x축 label에 대응되는 데이터 값
        ],
        backgroundColor: [
            //색상
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            //경계선 색상
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1 //경계선 굵기
    }
}

class RightGraph extends Component {
    render() {
        return (
            <div>
                <Bar data={data} options={options}
                style={{ width: "20vw", height: "20vh", margin:"30px auto" }}/>
            </div>
        );
    }
}

export default RightGraph;