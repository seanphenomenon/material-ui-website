import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import MobileIcon from "../assets/mobileIcon.svg";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.arcOrange,
    fontSize: "1.5rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: "35px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
 
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

export default function ServicesPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em"
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          align={matchesSM ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>

          {/* ---- iOS/Android Block ------ */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              src={MobileIcon}
              alt="mobile phone icon"
              className={classes.icon}
              width="250em" //fixed width here for icon aligns it properly with website icon
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
          {/*----- Custom Software Block ------ */}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }}
          >
            <Typography variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/customsoftware"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={CustomSoftwareIcon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
     </Grid>
        <Grid item>
            {/* ----- Websites Block ------ */}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? "center" : "flex-end"}
            style={{ marginBottom: "10em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4" >
                Website Development
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for Seach Engines, built for speed.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                <span style={{ marginRight: "10px" }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
              <img
                src={WebsiteIcon}
                alt="website icon"
                className={classes.icon}
                width="250em" //fixed width here for icon aligns it properly with ios mobile icon
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}
