import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Avatar, List } from "@material-ui/core";

const AvatarPaper = () => {
  const useStyle = makeStyles((theme) => ({
    avatarStyle: {
      marginTop: "30px",
      marginBottom: "30px",
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  }));
  const classes = useStyle();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Avatar variant="rounded" className={classes.avatarStyle}>
        <h1>B</h1>
      </Avatar>
    </Grid>
  );
};

export default AvatarPaper;
