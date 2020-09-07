import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Lottie from "react-lottie";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from '../components/ui/CallToAction.js';

import backArrow from "../../src/assets/backArrow.svg";
import forwardArrow from "../../src/assets/forwardArrow.svg";
import swissKnife from "../assets/swissKnife.svg";
import extendAccess from "../assets/extendAccess.svg";
import increaseEngagement from "../assets/increaseEngagement.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json";




const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em", //this makes sure that the paragraphs do not extend to the full width of the page
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  customSoftwareContainer: {
    marginTop: "5em",
    marginLeft: "5em",
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  const integrationOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }} // style here on grid item adds space between arrow and text, and pulls arrow back to the left, to properly align paragraph content all the way down the page
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(0)} //set to 0 for services as active tab in menu
            >
              <img src={backArrow} alt="back arrow to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h2"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Convenience. Connection.
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
              to="/websites"
              onClick={() => props.setSelectedIndex(3)} //set to 3 for web development as active tab in menu
            >
              <img
                src={forwardArrow}
                alt="forward arrow to web development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* ------------ ROW 2: INTEGRATION ------------------------- */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : undefined}
            >
              {" "}
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        {/* --------- IPHONE ------------- */}
        <Grid item md>
          <Lottie
            options={integrationOptions}
            isStopped={true}
            style={{ maxWidth: "20em" }}
          />
        </Grid>

        {/* ----------- PLATFORM -------------------- */}

        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesSM ? "center" : "right"}
            >
              {" "}
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : "right"}
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* ---------  Row 3 IMAGES ------------------ */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" md alignItems="center">
          {" "}
          {/* Grid item container defaults to a width of 100% (the whole left to right space). In order to place columns in a row, you need to explicitly define (sm,md,lg) in order for them to share the same space of container.*/}
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swissKnife} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          //style margin adds the space between items in this row
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={extendAccess}
              alt="extend access"
              style={{ maxWidth: matchesXS ? "20em" : "28em" }}
            />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={increaseEngagement} alt="increase engagement" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
      <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
