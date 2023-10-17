import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";

async function loginUser(credentials) {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "eve.holt@reqres.in" && password === "pistol") {
      const token = await loginUser({
        email,
        password,
      });
      setToken(token);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent="center" py={18}>
          <Grid item xs={12} md={4}>
            <Card elevation={3}>
              <Grid justifyContent="center" display="flex" mt={2}>
                <Avatar sx={{ backgroundColor: "#635cf7" }}>F</Avatar>
              </Grid>
              <Grid>
                <Typography textAlign="center" fontSize="1.2rem">
                  SignIn
                </Typography>
              </Grid>
              <Grid container px={4} py={4}>
                <Grid item xs={12}>
                  <Grid mb={3}>
                    <Typography>Email</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid mb={3}>
                    <Typography>Password</Typography>
                    <TextField
                      fullWidth
                      size="small"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ backgroundColor: "#635cf7" }}
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
