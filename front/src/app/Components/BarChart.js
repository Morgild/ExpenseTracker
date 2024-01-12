import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useText } from "./provider/AuthProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart() {
  const { records } = useText();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const labels = records.map((item) => item.category);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map(() =>
          records
            .filter((item) => {
              return item.type === "income";
            })
            .map((item) => item.amount)
        ),
        backgroundColor: "#84CC16",
      },
      {
        label: "Expense",
        data: labels.map(() =>
          records
            .filter((item) => {
              return item.type === "expense";
            })
            .map((item, index) => item.amount)
        ),
        backgroundColor: "#F97316",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
