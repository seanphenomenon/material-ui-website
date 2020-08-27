import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";

import animationData from "../animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down('sm')]: {
        maxWidth: '30em'
    }
  },
  mainContainer:{
      marginTop: '5em',
      [theme.breakpoints.down("md")]: {
        marginTop: "3em",
      },
      [theme.breakpoints.down("xs")]: {
        marginTop: "2em",
      },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: "50px",
    height: "45px",
    width: "145px",
    marginRight: "40px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light, // this sets the secondary color, to a lighter shade. 
    },
  },
  learnButton: {
      borderColor: theme.palette.common.arcBlue,
      color: theme.palette.common.arcBlue,
      borderWidth: '2px',
      textTransform: 'none',
      borderRadius: '50px',
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      height: '45px',
      width: '145px'

  },
  buttonContainer: {
    marginTop: "1em",
  },
  heroTextContainer:{
      minWidth: '21.5em',
      marginLeft: '1em',
      [theme.breakpoints.down('xs')]:{
          marginLeft: 0
      }
  }
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();

  // default options animations object usage found through react-lottie github page. 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{marginRight: '10px'}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.arcBlue}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
