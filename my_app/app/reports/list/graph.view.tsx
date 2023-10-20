"use client";
import React from "react";
import { Chart } from "react-google-charts";
import { Card, Grid } from "@mui/material/";

export const data = [
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

export const options1 = {
  title: "My Daily Activities",
  is3D: true,
};

export const data4 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

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
const GraphView = ({users}:any) => {
  return (
    <div>
      <Grid container style={{ marginRight: "1rem", marginTop: "1rem" }}>
        <Grid item xs={7}>
          <Card style={{marginLeft: "1rem",marginRight: "1rem",padding: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",border: "none",}}>
            <Chart
              chartEvents={[
                {
                  eventName: "select",
                  callback: ({ chartWrapper }) => {
                    const chart = chartWrapper.getChart();
                    const selection = chart.getSelection();
                    if (selection.length === 0) return;
                    const region = data[selection[0].row + 1];
                    console.log("Selected : " + region);
                  },
                },
              ]}
              chartType="GeoChart" width="100%" height="368px"
              data={data}/>
          </Card>
        </Grid>
        <Grid item xs={4.7}>
          {/* <Grid item xs={5.9}>
              <Card
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
                  border: "none",
                }}
              >
                <Chart
                  chartType="PieChart"
                  data={data1}
                  options={options1}
                  width={"100%"}
                  height={"300px"}
                />
              </Card>
            </Grid> */}

          {/* <Grid item xs={5.93}>
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
            </Grid> */}

          <Card style={{boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",border: "none"}}>
            {/* <Chart
              chartType="PieChart"
              data={data1}
              options={options1}
              width={"100%"}
              height={"300px"}
            /> */}
            <Chart chartType="PieChart" data={data3} options={options3}
              width={"100%"} height={"400px"}/>
          </Card>
        </Grid>

        {/* <Grid item xs={6}>
          <Card
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
              border: "none",
            }}
          >
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data4}
              options={options}
            />
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default GraphView;
