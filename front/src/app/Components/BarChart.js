import { useRef } from 'react';
import { Bar, getDatasetAtEvent } from 'react-chartjs-2';

export function BarChart() {
    const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

  return (
<></>
  );
}