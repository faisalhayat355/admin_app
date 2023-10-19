"use client";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Link from "next/link";

const style = {
  position: "absolute",
  top: "15%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 310,
  bgcolor: "background.paper",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  p: 2,
  borderRadius: "4px",
};

const ReportsInfo = ({ items }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleSubmit (id:any){
    const conf = window.confirm("Do you want to delete ?");
    if(conf){
      axios.delete('http://localhost:3030/users/'+id)
      .then(res=> {
        alert('Record Deleted Successfully')
        window.location.reload();
        // navigate("/")
      }).catch(err => console.log(err))
    }
  }

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
               {items.fname} {items.lname}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" noWrap>
                {items.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle1" noWrap
                display={"flex"} justifyContent={"space-around"}>
                {items.mobile}
              </Typography>
            </Grid>
            <Grid item xs={2.6}>
              <Typography variant="subtitle1" noWrap
                display={"flex"} justifyContent={"space-around"} >
                {items.address}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Link href={"/reports/edit"} passHref style={{ textDecoration: "none" }} >
                    <IconButton aria-label="delete">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <IconButton aria-label="delete"  onClick={e => handleSubmit (items.id)}>
                    <DeleteOutlineIcon fontSize="small" />
                  </IconButton>
                </Grid>
                <Modal aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description" open={open} onClose={handleClose}
                  closeAfterTransition slots={{ backdrop: Backdrop }}
                  slotProps={{ backdrop: {
                      timeout: 500,},}}>
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography id="transition-modal-description">
                        Are you sure you want to delete ?
                      </Typography>
                      <Grid container style={{display: "flex", marginTop: "2rem", justifyContent: "flex-end"}}>
                        <Button variant="contained" size="small" onClick={handleClose} >
                          Cancel
                        </Button>
                        <Button variant="contained" size="small" style={{ marginLeft: "1rem" }}
                          onClick={e => handleSubmit (items.id)} >
                          Yes
                        </Button>
                      </Grid>
                    </Box>
                  </Fade>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default ReportsInfo;
