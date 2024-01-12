import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useText } from './provider/AuthProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
  const {records}=useText();
  const options = {
    responsive: false,
    plugins: {
      legend:
       {
        position: "right",
      },
    },
  };

const data = {
  labels: records.map((item,index)=>(item.category)),
  datasets: [
    {
      label: 'Expense by category ',
      data: records
      .filter((item)=>{return item.type=="expense"})
      .map((item)=>(item.amount))
      
      // .reduce((sum, currentValue) => {
      //   return sum + currentValue.amount;
      // }, 0) 
      ,
      backgroundColor:
      records.map((item,index)=>(item.categoryColor)),
    },
  ],
}; 
  return <Doughnut options={options} data={data}/>;
}