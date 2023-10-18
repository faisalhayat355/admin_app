"use client";
import { Card, Grid } from "@mui/material/";
import { Chart } from "react-google-charts";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 5000, 1840, 1200],
  ["2015", 4170, 1460, 2150],
  ["2016", 3370, 2120, 2300],
  ["2017", 4912, 2344, 1710],
];
export const mapdata = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const data1 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options1 = {
  title: "Population of Largest India",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

export const data3 = [
  ["Language", "Speakers (in millions)"],
  ["Assamese", 13],
  ["Bengali", 83],
  ["Bodo", 1.4],
  ["Dogri", 2.3],
  ["Gujarati", 46],
  ["Hindi", 300],
  ["Kannada", 38],
  ["Kashmiri", 5.5],
  ["Konkani", 5],
  ["Maithili", 20],
  ["Malayalam", 33],
  ["Manipuri", 1.5],
  ["Marathi", 72],
  ["Nepali", 2.9],
  ["Oriya", 33],
  ["Punjabi", 29],
  ["Sanskrit", 0.01],
  ["Santhali", 6.5],
  ["Sindhi", 2.5],
  ["Tamil", 61],
  ["Telugu", 74],
  ["Urdu", 52],
];

export const options3 = {
  title: "Indian Language Use",
  legend: "none",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};
const ChartComponent = () => {
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <div>
      <Grid container style={{ marginRight: "1rem" }}>
        <Grid item xs={5.9}>
          <Card
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
              border: "none",
            }}
          >
            {/* <Chart
              chartType="Bar"
              width="100%"
              height="267px"
              data={data}
              options={options}
            /> */}

            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = mapdata[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart"
              width="100%"
              height="268px"
              data={mapdata}
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={1}>
            <Grid item xs={5.9}>
              <Card
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  border: "none",
                }}
              >
                {/* <Chart
                  chartType="PieChart"
                  data={data1}
                  options={options1}
                  width={"100%"}
                  height={"300px"}
                /> */}
                <Chart
                  chartType="BarChart"
                  width="112%"
                  height="300px"
                  style={{ marginLeft: "-2rem" }}
                  data={data}
                  options={options1}
                />
                {/* <div width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data01}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#8884d8"
                    />
                    <Pie
                      data={data02}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      fill="#82ca9d"
                      label
                    />
                  </PieChart>
                </div> */}
              </Card>
            </Grid>

            <Grid item xs={5.93}>
              <Card
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  border: "none",
                }}
              >
                <Chart
                  chartType="PieChart"
                  data={data3}
                  options={options3}
                  width={"100%"}
                  height={"300px"}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartComponent;
