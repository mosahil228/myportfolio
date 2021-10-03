import React from "react";
import clsx from "clsx";
import { Link } from "react-scroll";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MuiSwitch from "./MuiSwicth";
import LG from "../images/LG.png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div id="HamBM " className="HamBMM">
      <Toolbar className="IT">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          id="hamBg"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon className={props.mode ? "fff mIcon" : "ooo mIcon"} />
        </IconButton>
      </Toolbar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div  className={classes.drawerHeader} id="tHam" >
          <div className="navLogo">
            <img src={LG} alt="logo" />
          </div>
          <IconButton className="ibtn" onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <div className="wrapItems  ">
            <div className="navItems lk1 ">
              <Link to="skills">Skills</Link>
            </div>
            <div className="navItems lk1 ">
              <Link to="experience">Work experience</Link>
            </div>
            <div className="navItems lk1  ">
              <Link to="testi">Testimonials</Link>
            </div>

            <div className="navItems lk1 ">
              <Link to="design">Designs</Link>
            </div>
            <div className="navItems lk1 ">
              <Link to="blogs">blogs</Link>
            </div>
            <div className="navItems lk1 ">
              <Link to="contact">Contact me</Link>
            </div>
            <div className="lk1 ">
              <MuiSwitch toggleMode={props.toggleMode}/>
            </div>
          </div>
        </List>
      </Drawer>
    </div>
  );
}
