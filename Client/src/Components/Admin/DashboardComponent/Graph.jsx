import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = [
  { year: 2010, count: 30 },
  { year: 2011, count: 36 },
  { year: 2012, count: 22 },
  { year: 2013, count: 25 },
  { year: 2014, count: 42 },
  { year: 2015, count: 25 },
  { year: 2016, count: 28 },
];

function Graph() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("myChart").getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="myChart" width="500" height="250"></canvas>
    </div>
  );
}

export default Graph;
