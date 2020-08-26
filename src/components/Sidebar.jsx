import React from "react";
import Avatar from "./Avatar";
import MenuList from "./MenuList";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const Sidebar = ({ size }) => {
  const useStyle = makeStyles((theme) => ({
    drawer: {
      width: drawerWidth,
      flex: 0
    },
    drawerPaper: {
      width: drawerWidth
    }
  }));

  const classes = useStyle();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <Avatar />
        <MenuList />
      </Drawer>
    </div>
  );
};

export default Sidebar;
