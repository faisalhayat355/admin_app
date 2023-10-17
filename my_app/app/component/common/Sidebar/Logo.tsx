import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton } from "@mui/material";

interface logoProps {
  show: boolean;
  handleMenu: () => void;
}
const Logo = ({ handleMenu, show }: logoProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}>
      {show && (
        <Grid textAlign={"left"} pt={1}
          display={{ xs: "none", sm: "none", md: "block" }}>
          <img src="./images/faisallogo1.png" alt="logo icon crashed"
            style={{ height: "80%", width: "100%", marginLeft: "-0.9em"  }} />
        </Grid>
      )}
      <div style={{ marginLeft: "-0.7em" }}>
        <IconButton onClick={handleMenu}>
          {show ? <MenuIcon /> : <ListIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Logo;
