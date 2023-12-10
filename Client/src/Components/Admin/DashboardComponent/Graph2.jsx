import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = [
  { year: 2010, count: 50 },
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

    const ctx = document.getElementById("myChartt").getContext("2d");

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
            backgroundColor: "rgba(97, 215, 255, 0.84)",
            borderColor: "rgba(97, 113, 255, 0.65)",
            borderWidth: 2,
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
      <canvas id="myChartt" width="300" height="300"></canvas>
    </div>
  );
}

export default Graph;
