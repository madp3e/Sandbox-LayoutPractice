import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  cardSize: {
    width: 220,
    marginTop: "20px",
    marginLeft: "20px"
  },
  cardImage: {
    height: 140
  }
}));

export default function ContentCard() {
  const classes = useStyles();
  const numberofCard = [1, 2, 3, 4, 5, 6];

  return (
    <Grid spacing={3} container direction="row">
      {numberofCard.map((number) => (
        <Card className={classes.cardSize}>
          <CardContent>
            <CardMedia src="" className={classes.cardImage} />
            <Typography color="secondaryText" variant="h5">
              Lisa
            </Typography>
            <CardActions>
              <Button
                classname={classes.cardFont}
                variant="outlined"
                color="primary"
              >
                POSTED
              </Button>
              <Button variant="outlined" color="secondary">
                UnPOSTED
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
