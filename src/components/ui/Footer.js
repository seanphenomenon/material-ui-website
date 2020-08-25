import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../../src/assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Hidden from '@material-ui/core/Hidden';

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
    top: "5px",
    // left: "10em",
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
}));

export default function Footer(props) {
  const classes = useStyles();
  // in order to apply/access the same link functionalities as the header, you need to pass it as props to this footer file from parent app.js file. Therefore, add the same variables and function to app.js file and pass them down to both the header file and footer file.  

  return (
    <footer className={classes.footer}>
        <Hidden mdDown> {/* grid will be hidden from medium breakpoint and down */}
      <Grid
        container
        className={classes.mainContainer}
        justify="center"
        spacing={2}
      >
        <Grid item className={classes.gridItem}>
          <Grid container direction="column">
            <Grid item className={classes.link} component={Link} to="/" onClick={()=> props.setValue(0)}>
              <div>Home</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/services" onClick={()=> {props.setValue(1); props.setSelectedIndex(0)}}>
              <div>Services</div>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/customsoftware"
              onClick={()=> {props.setValue(1); props.setSelectedIndex(1)}}
            >
              <div>Customer Software Development</div>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/mobileapps"
              onClick={()=> {props.setValue(1); props.setSelectedIndex(2)}}
            >
              <div>IOS/Android App Development</div>
            </Grid>
            <Grid item className={classes.link} component={Link} to="/websites" onClick={()=> {props.setValue(1); props.setSelectedIndex(3)}}>
              <div>Website Development</div>
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
              onClick={()=> props.setValue(2)}
            >
              <div>The Revolution</div>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={()=> props.setValue(2)}
            >
              <div>Vision</div>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={()=> props.setValue(2)}
            >
              <div>Technology</div>
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={()=> props.setValue(2)}
            >
              <div>Process</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link} component={Link} to="/about" onClick={()=> props.setValue(3)}>
              <div>About Us</div>
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about" onClick={()=> props.setValue(3)}>
              <div>Mission Statement</div>
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about" onClick={()=> props.setValue(3)}>
              <div>History</div>
            </Grid>
            <Grid item className={classes.link} component={Link} to="/about" onClick={()=> props.setValue(3)}>
              <div>Team</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column">
            <Grid item className={classes.link} component={Link} to="/contact" onClick={()=> props.setValue(4)}>
              <div>Contact Us</div>
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
    </footer>
  );
}