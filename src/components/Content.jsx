import React from "react";
import ContentCard from "./ContentCard";
import { Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Content = ({ sideBarSize }) => {
  const useStyle = makeStyles((theme) => ({
    contentStyle: {
      width: `calc(100% - ${sideBarSize}px)`,
      marginLeft: sideBarSize,
      paddingLeft: "5px",
      marginTop: "10px"
    }
  }));

  const classes = useStyle();

  return (
    <main className={classes.contentStyle}>
      <ContentCard />
    </main>
  );
};

export default Content;
