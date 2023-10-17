import React, { useState } from "react";
import { Grid } from "@mui/material";
import HeaderComponent from "./Header";
import Logo from "./Sidebar/Logo";
import ProjectSidebar from "./Sidebar/ProjectSidebar/project.sidebar";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(true);

  const handleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={show ? 1.5 : 1.5}
          sm={show ? 1.5 : 0.5} md={show ? 2 : 0.5} lg={show ? 2 : 0.5} pl={2} pr={1}
          textAlign={show ? "right" : "left"} style={{background:'#f8fafc',height:'100vh'}}>
          <Logo handleMenu={handleMenu} show={show} />
          {/* <SidebarComponent show={show} /> */}
          <ProjectSidebar show={show} />
        </Grid>
        <Grid item xs={show ? 10.5 : 10.5} sm={show ? 10.5 : 11.5}
          md={show ? 10 : 11.5} lg={show ? 10 : 11.5}>
          <HeaderComponent />
          {children}
        </Grid>
      </Grid>
      {/* <div >{children}</div> */}
    </>
  );
};

export default LayoutComponent;
