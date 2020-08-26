import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const MenuBar = ({ sideBarSize }) => {
  const useStyles = makeStyles((theme) => ({
    toolbar: {
      display: "flex"
    },
    appBar: {
      width: `calc(100% - ${sideBarSize}px)`,
      marginLeft: sideBarSize
    }
  }));
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <Typography style={{ flex: 1 }}>My HomePage</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
