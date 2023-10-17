import React, {useState} from 'react'
import { PaginationHandler } from '../../utility/pagination';
import { Pagination, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";



const GridViewComponent = ({users}:any) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(users.length / PER_PAGE);
  const paginationHandler = PaginationHandler(users, PER_PAGE);

  const handleChangePage = (e: any, p: number) => {
    setPage(p);
    paginationHandler.jump(p);
  };
  return (
    <div style={{paddingLeft:'1.5rem'}}>
    <Box style={{ height: "60.4vh" }} mr={3}>
      <Grid container spacing={2} mt={0.1}>
        {paginationHandler
        .currentData()
        .reverse()?.map((item) => {
            return (
              <Grid item xs={4} md={4} sm={4} lg={4} key={item.id}>
                <Paper variant="outlined">
                  <Box paddingLeft={2} paddingTop={0.6}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Typography variant="subtitle3">Company Name</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6} paddingLeft={2}>
                        <Typography noWrap variant="subtitle1">{item?.name}</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box  paddingLeft={2}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Typography variant="subtitle3">Email</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6} paddingLeft={2}>
                        <Typography noWrap variant="subtitle1">{item?.email}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box paddingLeft={2}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Typography variant="subtitle3">Contact</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6} paddingLeft={2}>
                        <Typography noWrap variant="subtitle1">{item?.phone}</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box paddingLeft={2} paddingBottom={1}>
                    <Grid container>
                      <Grid item xs={5}>
                        <Typography variant="subtitle3">Address</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography> :</Typography>
                      </Grid>
                      <Grid item xs={6} paddingLeft={2}>
                        <Typography noWrap variant="subtitle1">{item?.address.city}</Typography>
                      </Grid>
                    </Grid>
                  </Box>

                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Box>
    <Grid container mt={7}>
      <Grid item xs={11.77} display={"flex"} justifyContent={"flex-end"}>
        <Grid style={{ position: "fixed" }}>
          <Pagination
            count={count}
            size="small"
            page={page}
            variant="outlined"
            color="primary"
            onChange={handleChangePage}
          />
        </Grid>
      </Grid>
      {/* <Grid item xs={0.3}></Grid> */}
    </Grid>
  </div>
  )
}

export default GridViewComponent
