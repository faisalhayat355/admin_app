"use client";
import React from "react";
import { Grid, Paper } from "@mui/material/";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sal..", "Exp.."],
  ["2014", 500, 320],
  ["2015", 270, 260],
  ["2016", 360, 120],
  ["2017", 330, 140],
];

export const data2 = [
  ["Month", "Sal..", "Exp.."],
  ["2014", 1300, 220],
  ["2015", 1170, 360],
  ["2016", 1260, 290],
  ["2017", 1030, 600],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses",
  },
};

export const dataPie = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const areaData = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1400, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1320],
  ["2016", 1030, 540],
];

export const areaOptions = {
  isStacked: true,
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
};

export const pieoptions = {
  title: "My Daily Activities",
};

export const barChartData = [
  ["City", "2010", "2020"],
  ["India", 8175000, 8008000],
  ["Srilanka", 3792000, 3694000],
  ["Australia", 2695000, 2896000],
  ["Dubai", 2099000, 1953000],
  ["Indonesia", 1526000, 1517000],
];

export const barChartOptions = {
  title: "Population of Largest U.S. Cities",
  chartArea: { width: "50%" },
  isStacked: true,
  hAxis: {
    title: "2010 year to 2020 year",
    minValue: 0,
  },
};

export const columnChartData = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 16.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 41.45, "color: #e5e4e2"], // CSS-style declaration
];

export const languageData = [
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

export const languageOptions = {
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

const DashboardComponent = () => {
  return (
    <div >
      <Box style={{ marginRight: "1.1rem",marginBottom:'1rem',marginLeft:'1rem',marginTop:'1.5rem' }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"#84cc16"}>
                    +6%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    43
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    New Tickets
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"red"}>
                    -3%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    17
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    Closed Today
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"#84cc16"}>
                    +9%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    7
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    New Replies
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"#84cc16"}>
                    +3%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    27.3k
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    Followers
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"red"}>
                    -2%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    $95
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    Daily earnings
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"red"}>
                    -1%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    621
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    color={"#374151"}
                    mb={1}
                  >
                    Products
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Paper elevation={0} style={{ paddingBottom: "0.5rem" }}>
        <Grid container spacing={1} style={{ paddingLeft: "1rem" }}>
          <Grid item xs={2.3}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography style={{ marginTop: "1rem", fontSize: "0.8rem",marginLeft:'1rem' }}>
                    Opportunity Count
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    fontSize={"1.5rem"}
                    style={{
                      marginTop: "3rem",
                      textAlign: "center",
                      marginBottom: "1.8rem",
                    }}
                  >
                    7656
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={2.4}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Chart chartType="Bar" height="150px" width="110%" data={data} />
            </Paper>
          </Grid>
          <Grid item xs={2.3}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Chart chartType="Bar" height="150px" width="110%" data={data2} />
            </Paper>
          </Grid>
          <Grid item xs={2.4}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Chart
                chartType="PieChart"
                height="150px"
                width="100%"
                data={dataPie}
              />
            </Paper>
          </Grid>
          <Grid item xs={2.4}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    style={{
                      marginTop: "1rem",
                      marginLeft: "1rem",
                      fontSize: "0.8rem",
                    }}
                  >
                    Revenue
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    fontSize={"1.5rem"}
                    style={{
                      marginTop: "3rem",
                      textAlign: "center",
                      marginBottom: "1.8rem",
                    }}
                  >
                    $2bn
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} style={{ marginTop: "0.5rem" }}>
        <Grid container spacing={1} style={{ paddingLeft: "1rem" }}>
          <Grid item xs={4.8}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Chart
                chartType="AreaChart"
                height="230px"
                width="100%"
                data={areaData}
                options={options}
              />
            </Paper>
          </Grid>
          <Grid item xs={4.7}>
            <Paper
              elevation={0}
              style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
            >
              <Chart
                chartType="BarChart"
                height="230px"
                width="100%"
                data={barChartData}
                options={barChartOptions}
              />
            </Paper>
          </Grid>
          <Grid item xs={2.3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
                >
                  <Chart
                    chartType="ColumnChart"
                    height="111px"
                    width="100%"
                    data={columnChartData}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
                >
                  <Chart
                    chartType="PieChart"
                    data={languageData}
                    options={languageOptions}
                    height="110px"
                    width="100%"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default DashboardComponent;
