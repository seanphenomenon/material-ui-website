import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Lottie from "react-lottie";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import backArrow from "../../src/assets/backArrow.svg";
import forwardArrow from "../../src/assets/forwardArrow.svg";
import lightBulb from "../assets/bulb.svg";
import stopWatch from "../assets/stopwatch.svg";
import cash from "../assets/cash.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
  customSoftwareContainer: {
    marginTop: "5em",
    marginLeft: "5em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "40em", //this makes sure that the paragraphs do not extend to the full width of the page
  },
  
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }} // style here on grid item adds space between arrow and text, and pulls arrow back to the left, to properly align paragraph content all the way down the page
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)} //set to 0 for services as active tab in menu
            >
              <img src={backArrow} alt="back arrow to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)} //set to 2 for ios/andriod as active tab in menu
            >
              <img
                src={forwardArrow}
                alt="forward arrow to ios/adroid app development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid item container direction="row" justify='center' style={{marginTop: '15em', marginBottom:'20em'}}>
        <Grid item container direction="column" md alignItems='center' style={{maxWidth:'40em'}}> {/* Grid item container defaults to a width of 100% (the whole left to right space). In order to place columns in a row, you need to explicitly define (sm,md,lg) in order for them to share the same space of container.*/}
          <Grid item sm>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="light bulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems='center' style={{maxWidth:'40em'}}>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt="stop watch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems='center'style={{maxWidth:'40em'}}>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
