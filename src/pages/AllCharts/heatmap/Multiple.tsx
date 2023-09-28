import React from "react";
import ReactApexChart from "react-apexcharts";

const Multiple = () => {
  const generateData = (count: any, yrange: any) => {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  };

  const data = [
    {
      name: "W1",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W2",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W3",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W4",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W5",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W6",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W7",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W8",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W9",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W10",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W11",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W12",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W13",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W14",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "W15",
      data: generateData(8, {
        min: 0,
        max: 90,
      }),
    },
  ];

  data.reverse();

  const colors = [
    "#f7cc53",
    "#f1734f",
    "#663f59",
    "#6a6e94",
    "#4e88b4",
    "#00a7c6",
    "#18d8d8",
    "#a9d794",
    "#46aF78",
    "#a93f55",
    "#8c5e58",
    "#2176ff",
    "#5fd0f3",
    "#74788d",
    "#51d28c",
  ];

  colors.reverse();

  const series = data;

  var options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#038edc",
      "#e83e8c",
      "#f7cc53",
      "#564ab1",
      "#51d28c",
      "#f1734f",
      "#5fd0f3",
      "#f34e4e",
    ],
    xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
      ],
    },
    title: {
      text: "HeatMap Chart (Different color shades for each series)",
      style: {
        fontWeight: 500,
      },
    },
    grid: {
      padding: {
        right: 20,
      },
    },
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={450}
      />
    </React.Fragment>
  );
};

export default Multiple;
