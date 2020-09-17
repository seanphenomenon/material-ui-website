import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../../src/assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },

  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  // in order to apply/access the same link functionalities as the header, you need to pass it as props to this footer file from parent app.js file. Therefore, add the same variables and function to app.js file and pass them down to both the header file and footer file.

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        {" "}
        {/* grid will be hidden from medium breakpoint and down */}
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => props.setValue(0)}
              >
                <div>Home</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Customer Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
              >
                Mission Statement
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
                onClick={() => props.setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
                onClick={() => props.setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />

      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon}/>
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
