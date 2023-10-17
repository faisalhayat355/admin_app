"use client";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "11px"
    }
  }
});
const ReportCreate = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper
        elevation={0}
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          padding: "3rem",
          marginRight: "1rem",
          marginLeft: "1rem",
          marginTop: "1rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">First Name</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your First Name" 
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Last Name</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your Last Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Age</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your Age"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Email</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Mobile</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your Mobile Number"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">Address</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your Age"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">City</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your City"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={3}>
                <Typography variant="subtitle1">State</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-basic"
                  classes={{ root: classes.customTextField }}
                  placeholder="Enter your State"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={7}>
          <Grid item xs={8.55}></Grid>
          <Grid item xs={1.85}>
            <Link href={"/reports"} passHref style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ width: "125px" }}>
                Cancel
              </Button>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" style={{ width: "125px" }}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ReportCreate;
