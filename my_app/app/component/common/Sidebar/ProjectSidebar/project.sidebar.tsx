"use client";
import AppsIcon from "@mui/icons-material/Apps";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReportIcon from "@mui/icons-material/Report";
import StoreIcon from "@mui/icons-material/Store";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import { useState } from "react";
import { headerstyle as style } from "./project.style";

const ProjectSidebar = ({ show }: any) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };
  return (
    <Box>
      <List component="nav" aria-label="main mailbox folders">
        <Link href="/dashboard" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            style={{ marginLeft: "-1rem" }}
          >
            <ListItemIcon>
              <DashboardIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Dashboard
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/reports" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            style={{ marginLeft: "-1rem" }}
          >
            <ListItemIcon>
              <ReportIcon fontSize={"small"} />
            </ListItemIcon>{" "}
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Report
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/project" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
            style={{ marginLeft: "-1rem" }}
          >
            <ListItemIcon>
              {" "}
              <AppsIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Project
              </Typography>
            )}
          </ListItemButton>
        </Link>

        <Link href="/company" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 3}
            onClick={(event) => handleListItemClick(event, 3)}
            style={{ marginLeft: "-1rem" }}
          >
            <ListItemIcon>
              <StoreIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Company
              </Typography>
            )}
          </ListItemButton>
        </Link>
        <Link href="/customer" passHref style={{ textDecoration: "none" }}>
          <ListItemButton
            selected={selectedIndex === 4}
            onClick={(event) => handleListItemClick(event, 4)}
            style={{ marginLeft: "-1rem" }}
          >
            <ListItemIcon>
              <SupportAgentIcon fontSize={"small"} />
            </ListItemIcon>
            {show && (
              <Typography
                display={{ xs: "none", sm: "none", md: "block" }}
                style={style.typography}
              >
                Customer
              </Typography>
            )}
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};
export default ProjectSidebar;
