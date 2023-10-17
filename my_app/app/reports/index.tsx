"use client";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FilterListIcon from "@mui/icons-material/FilterList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SearchIcon from "@mui/icons-material/Search";
import { Grid, IconButton, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Case, Default, Switch } from "react-if";
import { ViewTypes } from "../utility/view.type";
import CalendarView from "./list/calendar.view";
import GraphView from "./list/graph.view";
import GridViewComponent from "./list/grid.view";
import ListComponent from "./list/list.component";
import ReportViewsComponent from "./views";
import makeStyles from "@material-ui/core/styles/makeStyles";
import KanbanComponent from "./list/kanban.component";

const useStyles = makeStyles({
  customTextField: {
    "& input::placeholder": {
      fontSize: "11px"
    }
  }
});

const CreateHome = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [users, setUsers] = useState ([]);
  const [viewType, setViewType] = useState<ViewTypes>(ViewTypes.LIST);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const filterOpen = Boolean(anchorElFilter);
  const filterhandleClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };
  const filterhandleClose = () => {
    setAnchorElFilter(null);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  const handleCount = (view: ViewTypes) => {
    setViewType(view);
  };

  console.log("usersusers",users);
  
  return (
    <div>
      <Grid container style={{ paddingLeft: "1.5rem" }}>
        <Grid
          item
          xs={11.7}
          display={"flex"}
          justifyContent={"flex-end"}
          mt={2}
        >
          <Link
            href={"/reports/create"}
            passHref
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" size="small">
              Create
            </Button>
          </Link>
        </Grid>
        <Grid item xs={3.5}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 290,
              height: 38,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search here.."
              style={{ fontSize: "0.8rem" }}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Filter">
              <IconButton
                aria-label="FilterListIcon"
                id="basic-button"
                aria-controls={filterOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={filterOpen ? "true" : undefined}
                onClick={filterhandleClick}
              >
                <FilterListIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <Menu
              id="basic-menu"
              anchorEl={anchorElFilter}
              open={filterOpen}
              onClose={filterhandleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Grid
                container
                style={{
                  padding: "1rem",
                }}
              >
                <Paper elevation={0} style={{ width: "45vh" }}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Grid item xs={2}>
                        <Typography>Name</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Autocomplete
                          id="free-solo-demo"
                          freeSolo
                          options={users?.map((option) => option.name)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Search by Name.."
                              variant="outlined"
                              fullWidth
                              size="small" classes={{ root: classes.customTextField }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      style={{ display: "flex", alignItems: "center" }}
                      mt={2}
                    >
                      <Grid item xs={2}>
                        <Typography>Email</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Autocomplete
                          id="free-solo-demo"
                          freeSolo
                          options={users?.map((option) => option.email)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Search by Email.."
                              variant="outlined"
                              fullWidth
                              size="small" classes={{ root: classes.customTextField }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      style={{ display: "flex", alignItems: "center" }}
                      mt={2}
                    >
                      <Grid item xs={2}>
                        <Typography>Phone</Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography>:</Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <Autocomplete
                          id="free-solo-demo"
                          freeSolo
                          options={users?.map((option) => option.phone)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Search by Phone.."
                              variant="outlined"
                              fullWidth
                              size="small" classes={{ root: classes.customTextField }}
                            />
                          )}
                        />
                      </Grid>
                    </Grid>

                    <Grid container mt={3}>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs={9.3}>
                            <Button
                              variant="contained"
                              size="small"
                              style={{ width: "16vh" }}
                              onClick={filterhandleClose}
                            >
                              Cancel
                            </Button>
                          </Grid>
                          <Grid item xs={2.7}>
                            <Button
                              variant="contained"
                              size="small"
                              style={{ width: "16vh" }}
                            >
                              Save
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Menu>
            <Tooltip title="Import">
              <IconButton aria-label="download">
                <FileDownloadIcon
                  fontSize="small"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Typography fontSize={"0.8rem"}>CSV</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography fontSize={"0.8rem"}>Excell</Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography fontSize={"0.8rem"}>PDF</Typography>
              </MenuItem>
            </Menu>
            <Tooltip title="Export">
              <IconButton aria-label="ImportExportIcon">
                <ImportExportIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Print">
              <IconButton aria-label="LocalPrintshopIcon">
                <LocalPrintshopIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Grid>

        <Grid item xs={3} style={{ display: "flex" }}>
          <ReportViewsComponent handleCount={handleCount} />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Switch>
          <Case condition={viewType === ViewTypes.GRID}>
            <GridViewComponent users={users} />
          </Case>
          <Case condition={viewType === ViewTypes.GRAPH}>
            <GraphView users={users} />
          </Case>
          <Case condition={viewType === ViewTypes.KANBAN}>
            <KanbanComponent users={users} />
          </Case>
          <Case condition={viewType === ViewTypes.CALENDAR}>
            <CalendarView users={users} />
          </Case>
          <Default>
            <ListComponent users={users} />
          </Default>
        </Switch>
      </Grid>
      {/* <ListComponent users={users}/> */}
    </div>
  );
};

export default CreateHome;
