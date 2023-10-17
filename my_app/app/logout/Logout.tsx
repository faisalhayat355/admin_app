import AddIcon from "@mui/icons-material/Add";
import { AppBar,  Button, Grid, Toolbar } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';



const Logout = ({ setToken }:any) => {
  const handleLogout = () => {
    setToken("");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar sx={{ backgroundColor: "#635cf7" }}>
            <Grid container alignItems="center">
              <Grid item xs={9} display="flex" alignItems="center">
                <img src="kernalhacker.png" />
                <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  Hacker-Kernal
                </Typography>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="flex-end">
                {/* <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                  +
                </Typography> */}
                <Stack direction="row">
                  {/* <AddIcon style={{color:'white'}} /> */}
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="small" onClick={handleOpen}
                    endIcon={<AddIcon />}
                  >
                    Create
                  </Button>
                </Stack>

                {/* <CreateComponent open={open} handleClose={handleClose} /> */}
              </Grid>
              <Grid item xs={1} textAlign="right">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogout}
                  size="small"
                >
                  Logout
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Logout;
