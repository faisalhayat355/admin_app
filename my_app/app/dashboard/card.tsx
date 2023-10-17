import React from 'react'
import Box from "@mui/material/Box";
import { Card, Grid } from "@mui/material/";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


const CardComponent = () => {
  return (
    <div>
       <Box style={{ margin: "1rem" }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ margin: "1rem" }}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"#84cc16"}>
                    +19%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    98
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"red"}>
                    -6%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    20
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"#84cc16"}>
                    +17%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    14
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
                    43.1k
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
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
                    $76
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
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <Grid container>
                <Grid item xs={12}>
                  <Typography textAlign={"right"} mr={1} color={"red"}>
                    -4%
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    textAlign={"center"}
                    fontSize={"1.7rem"}
                    color={"#374151"}
                    fontWeight={"bold"}
                  >
                    432
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
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default CardComponent
