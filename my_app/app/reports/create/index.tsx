"use client";
import { useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const ReportCreate = () => {
  // const navigate = useNavigate();
  const [inputData, setInputData] = useState({name:"",email:"",mobile:"",address:"",});
  function handleSubmit(event:any) {
    event.preventDefault();
    axios
      .post("http://localhost:3030/users", inputData)
      .then((res) => {
        alert("Data Submited Successfully");
        // navigate("reports");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Paper elevation={0}
          style={{boxShadow:"rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
            padding: "3rem", marginRight: "1rem", marginLeft: "1rem", marginTop: "1rem",}}>
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
                  <TextField id="outlined-basic"
                    placeholder="Enter your First Name" variant="outlined" size="small" fullWidth
                    onChange={(e) => setInputData({ ...inputData, fname: e.target.value })}/>
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
                  <TextField id="outlined-basic"placeholder="Enter your Last Name" variant="outlined" size="small"
                    fullWidth onChange={(e) => setInputData({ ...inputData, lname: e.target.value })}/>
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
                  <TextField id="outlined-basic" placeholder="Enter your Age"
                    variant="outlined" size="small" fullWidth onChange={(e) =>
                      setInputData({ ...inputData, age: e.target.value })}/>
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
                  <TextField id="outlined-basic"
                    placeholder="Enter your Email" variant="outlined" size="small" fullWidth
                    onChange={(e) => setInputData({ ...inputData, email: e.target.value })}/>
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
                  <TextField id="outlined-basic" placeholder="Enter your Mobile Number"
                    variant="outlined" size="small" fullWidth
                    onChange={(e) => setInputData({ ...inputData, mobile: e.target.value })}/>
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
                  <TextField id="outlined-basic" placeholder="Enter your full Address"
                    variant="outlined" size="small" fullWidth
                    onChange={(e) => setInputData({ ...inputData, address: e.target.value })}/>
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
                  <TextField id="outlined-basic" placeholder="Enter your City"
                    variant="outlined" size="small"fullWidth 
                    onChange={(e) => setInputData({ ...inputData, city: e.target.value })}/>
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
                  <TextField id="outlined-basic" placeholder="Enter your State"
                    variant="outlined" size="small" fullWidth 
                    onChange={(e) => setInputData({ ...inputData, state: e.target.value })}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container mt={7}>
            <Grid item xs={8.55}></Grid>
            <Grid item xs={1.85}>
              <Link href={"/reports"} passHref style={{ textDecoration: "none" }}>
                {/* <Button variant="contained" style={{ width: "125px" }}>
                  Cancel
                </Button> */}
                <button
                  style={{ width: "125px",height: "37px",border: "none",background: "#2563eb",
                    color: "white", borderRadius: "6px", fontSize: "1rem", cursor: "pointer", }}>
                  Cancel
                </button>
              </Link>
            </Grid>
            <Grid item xs={1}>
              {/* <Button variant="contained" style={{ width: "125px" }}>
              Save
            </Button> */}
              <button
                style={{ width: "125px",height: "37px", border: "none",background: "#2563eb",
                  color: "white",borderRadius: "6px", fontSize: "1rem",cursor: "pointer"}}>
                Save
              </button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
};

export default ReportCreate;
