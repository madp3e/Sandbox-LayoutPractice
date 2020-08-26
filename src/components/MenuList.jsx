import React, { useState } from "react";
import Avatar from "./Avatar";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import WorkIcon from "@material-ui/icons/Work";

const MenuList = () => {
  const [sideBar, setSideBar] = useState({
    items: [
      {
        name: "MENU",
        children: ["menu1", "menu2"],
        open: false
      },
      {
        name: "ABOUT"
      },
      {
        name: "PROJECT",
        children: ["pro1", "pro2"],
        open: false
      }
    ]
  });
  const useStyle = makeStyles((theme) => ({
    childrenStyle: {
      paddingLeft: "30px",
      fonSize: "12px"
    }
  }));

  const handleOpen = (itemChosen) => {
    console.log(itemChosen);
    const items = sideBar.items.map((item) =>
      item.name === itemChosen ? { ...item, open: !item.open } : { ...item }
    );
    setSideBar({ items });
  };

  const { items } = sideBar;
  const classes = useStyle();
  return (
    <List>
      {items.map((item, index) => (
        <React.Fragment>
          <ListItem button onClick={() => handleOpen(item.name)}>
            {item.name === "MENU" ? <MenuIcon /> : null}
            {item.name === "ABOUT" ? <InfoIcon /> : null}
            {item.name === "PROJECT" ? <WorkIcon /> : null}
            <ListItemText
              style={{ marginLeft: "5px" }}
              key={index}
              primary={item.name}
            />
            {item.open && item.children ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={item.open}>
            {item.children ? (
              <List>
                {item.children.map((child, index) => (
                  <ListItem
                    className={classes.childrenStyle}
                    key={index}
                    button
                  >
                    <ListItemText primary={child} />
                  </ListItem>
                ))}
              </List>
            ) : null}
          </Collapse>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default MenuList;
