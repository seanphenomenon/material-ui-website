import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";


import animationData from "../animations/landinganimation/data";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import MobileIcon from '../assets/mobileIcon.svg';
import WebsiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  // ----- Hero Block ------//
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  mainContainer: {
    marginTop: "5em",
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
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: "45px",
    width: "145px",
  },
  buttonContainer: {
    marginTop: "1em",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  // --------- Custom Software Block ------------- //
  serviceContainer: {
      marginTop:'12em',
      [theme.breakpoints.down('sm')]: {
          padding: '25px'
      }
  },
  specialText: {
      fontFamily: 'Pacifico',
      color: theme.palette.common.arcOrange,
      fontSize: '1.5rem',

  },
  learnButton: {
      ...theme.typography.learnButton,
      fontSize: '0.7rem',
      height: '35px',
      padding: '5px',
      [theme.breakpoints.down('sm')]: {
          marginBottom: '2em'
      }
  },
  subtitle: {
      marginBottom: '1em'
  },
  icon :{
      marginLeft: '2em',
      [theme.breakpoints.down('xs')]: {
          marginLeft: 0,
      },  
  },
  
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); // this is used to style service container using ternary/conditional rendering only at small breakpoint and not all the time.

  // default options animations object usage                                                                                                                                                                                                                                                                                                                                                                                                                           found through react-lottie github page.
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
        {/* --------------------------------- Hero Block --------------------------------- */}
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
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {" "}
        {/* ----------------------------------------- Services Block ----------------------------------- */}
        <Grid container className={classes.serviceContainer}  justify={matchesSM ? 'center': undefined}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
                <Typography variant="h4" className={classes.title}>
                  Custom Software Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Complete digital solutions, from investigation to{" "}
                  <span className={classes.specialText}>celebration.</span>
                </Typography>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
              <Grid Item >
                <img src={CustomSoftwareIcon} alt='custom software icon' className={classes.icon} />
              </Grid>
          </Grid>
          {/* -------------------------------- IOS/Android App Development Block --------------------------- */}
          <Grid container className={classes.serviceContainer}  justify={matchesSM ? 'center': 'flex-end'}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
                <Typography variant="h4" className={classes.title}>
                  iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increase Engagement
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Integrate your web experience or create a standalone app 
                  {matchesSM ? null :<br/>} with either mobile platform.
                </Typography>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
              <Grid Item style={{ marginRight: matchesSM ? 0 : '5em'}} >
                <img src={MobileIcon} alt='mobile phone icon' className={classes.icon} />
              </Grid>
          </Grid>

        {/* ---------------------------- Website Development Block ------------------------------------- */}
          <Grid container className={classes.serviceContainer}  justify={matchesSM ? 'center': undefined}>
              <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined}}>
                <Typography variant="h4" className={classes.title}>
                  Website Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Reach More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for Seach Engines, built for speed. 
                </Typography>
                <Button variant="outlined" className={classes.learnButton}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
              <Grid Item >
                <img src={WebsiteIcon} alt='website icon' className={classes.icon} />
              </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}
