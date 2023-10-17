"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, IconButton, Pagination, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const ReportsInfo = ({ items }:any) => {
  return (
    <div>
      <Box mr={3} mt={0.3}>
        <Paper variant="outlined">
          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
              <Grid container ml={1}>
                <Grid item xs={4}>
                  <Checkbox size="small" />
                </Grid>
                <Grid item xs={6}>
                  <IconButton>
                    <RemoveRedEyeIcon fontSize="small" />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle1" noWrap>
                {items.name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" noWrap>
                {items.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {items.phone}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                noWrap
                display={"flex"}
                justifyContent={"space-around"}
              >
                {items.address.city}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="subtitle1"
                display={"flex"}
                justifyContent={"space-around"}
                noWrap
              >
                {items.address.street}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default ReportsInfo;
