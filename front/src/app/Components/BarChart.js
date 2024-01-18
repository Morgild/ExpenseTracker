import React from "react";
import { format } from "date-fns";
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

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "short" });
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart() {
  const { dashboardRecords } = useText();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const labels = dashboardRecords.map((item) => getMonthName(format(item.date, "MM")));

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map(() =>
        dashboardRecords
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
        dashboardRecords
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
