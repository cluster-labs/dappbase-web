import React from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import blue from "@material-ui/core/colors/blue";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";

import DappkitLogo from "../assets/img/dappkit_logo.png"

import {
  DeveloperBoard,
  NotificationsActive,
  Stars,
  Healing,
  AllInbox,
  Assessment,
  Cloud,
  Public
} from "@material-ui/icons/";

import Users from "@material-ui/icons/SupervisedUserCircle";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const drawerWidth = 240;

const darkThemeDrawer = createMuiTheme({
  typography: {
    fontFamily: "\"Montserrat\", sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    type: "dark", // Switching the dark mode on is a single property value change.
    background: {
      paper: "#19212B",
      default: "#262F3D"
    },
    primary: {
      main: '#6b61fc'
    },
    secondary: {
      main: "#f44336"
    }
  }
});

const useStyles = makeStyles(theme => ({
  palette: {
    type: "dark"
  },
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  },
  dappkitHomeLink: {
    cursor: 'pointer'
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function NavLink(props) {
    return (
      <Link className={styles.nav_link} to={props.link}>
        <ListItem button key={props.title}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItem>
      </Link>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={darkThemeDrawer}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {window.location.href.split('/').pop().split('-')[0]}
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <ThemeProvider theme={darkThemeDrawer}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open
            })
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <img className={classes.dappkitHomeLink} src={DappkitLogo} width={30} onClick={() => { window.location = "https://dappkit.io" }} />
            <Typography className={classes.dappkitHomeLink} style={{ paddingLeft: '16px' }} variant="h6" onClick={() => { window.location = "https://dappkit.io" }}>
              <b>Dappkit</b>
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                  <ChevronLeftIcon />
                )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              { title: "Authentication", link: "/authentication", icon: <Users /> },
              { title: "Database", link: "/database", icon: <AllInbox /> },
              { title: "Storage", link: "/storage", icon: <Cloud /> },
              { title: "Hosting", link: "/hosting", icon: <Public /> },
              {
                title: "Functions",
                link: "/functions",
                icon: <DeveloperBoard />
              }
            ].map((menu, index) => (
              <NavLink key={index} {...menu} />
            ))}
          </List>
          <Divider />
          <List>
            {[
              { title: "Crashlytics", link: "/crashlytics", icon: <Healing /> }
            ].map((menu, index) => (
              <NavLink key={index} {...menu} />
            ))}
          </List>
          <Divider />
          <List>
            {[
              { title: "Analytics", link: "/analytics", icon: <Assessment /> }
            ].map((menu, index) => (
              <NavLink key={index} {...menu} />
            ))}
          </List>
          <Divider />
          <List>
            {[
              {
                title: "Notifications",
                link: "/notifications",
                icon: <NotificationsActive />
              },
              { title: "Ad Service", link: "/adservice", icon: <Stars /> }
            ].map((menu, index) => (
              <NavLink key={index} {...menu} />
            ))}
          </List>
        </Drawer>
      </ThemeProvider>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
