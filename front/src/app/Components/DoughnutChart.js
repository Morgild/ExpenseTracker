import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useText } from './provider/AuthProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart() {
  const { dashboardRecords } = useText();
  const options = {
    responsive: false,
    plugins: {
      legend:
      {
        position: "right",
      },
    },
  };
  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}
// const grouped=groupBy(records,record=>record.category)
  const data = {
    labels: dashboardRecords.map((item, index) => (item.category)),
    datasets: [
      {
        label: 'Expense by category ',
        data: dashboardRecords
          .filter((item) => { return item.type == "expense" })
          .map((item) => (item.amount))


        ,
        backgroundColor:
        dashboardRecords.map((item, index) => (item.categoryColor)),
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}