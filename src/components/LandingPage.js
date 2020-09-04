import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../components/ui/ButtonArrow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Link} from 'react-router-dom';

import CallToAction from'./ui/CallToAction';

import animationData from "../animations/landinganimation/data";
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg";
import MobileIcon from "../assets/mobileIcon.svg";
import WebsiteIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";


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

  // --------- Service Block ------------- //
  serviceContainer: {
    marginTop: "12em",
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
  // ----------- Revolution Block ----------------- //
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    borderRadius: "15px",
    padding: "10em", //created bigger card with padding around the text
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  // ---------- Information Block ---------------------//
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

}));




export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); // this is used to style service container using ternary/conditional rendering only at small breakpoint and not all the time.
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
                <Button 
                variant="contained" 
                className={classes.estimateButton}
                component={Link}
                to='/estimate'
                onClick={() => props.setValue(5)}//  value of 5 clears the screen of any active tabs when going to the estimate tab.
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" 
                className={classes.learnButtonHero}
                component={Link}
                to='/revolution'
                onClick={() => props.setValue(2)}
                >
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
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
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
            <Button 
            variant="outlined" 
            className={classes.learnButton}
            component={Link}
            to='/customsoftware'
            onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
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
        {/* -------------------------------- IOS/Android App Development Block --------------------------- */}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" className={classes.title}>
              iOS/Android App Development
            </Typography>
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
                to='/mobileapps'
                onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
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
            />
          </Grid>
        </Grid>
        {/* ---------------------------- Website Development Block ------------------------------------- */}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" className={classes.title}>
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
            to='/websites'
            onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}
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
              src={WebsiteIcon}
              alt="website icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
        {/* --------------------------- Revolution Block --------------------------------- */}
        <Grid item>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "100em", marginTop: "12em" }}
          >
            {" "}
            {/* height is needed here in container to allow room for background image to fill/display. background image will cover entire space within container.*/}
            <div className={classes.revolutionBackground} />
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" gutterBottom>
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button 
                    variant="outlined" 
                    className={classes.learnButton}
                    component={Link}
                    to='/revolution'
                    onClick={() => {props.setValue(2)}}
                    >
                      <span style={{ marginRight: "10px" }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.arcBlue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* ----------------- Information Block -------------------------------- */}
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ height: "80em" }}
          >
            <div className={classes.infoBackground} />

            <Grid item container  
            style={{ position: "absolute", textAlign: matchesXS ? 'center':'inherit' }}  //position absolute item container allows both items to be positioned next to each other. 
            direction={matchesXS ? 'column': 'row'}  //column direction of container switches to row at the small breakpoint to stack items. Inherit alignment prop defaults it to go back to what it was doing before. 
            > 

              <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : "5em"}}> {/* nested ternary here checks for xs breakpoint to stack first. if true, set margin left to 0. if not, check sm breakpoint.*/}
                <Grid container style={{marginBottom: matchesXS ? '10em' : 0}} direction='column' > {/* marginBottom here gets rid of horizontal scrolling white space inside component*/}
                  <Typography variant="h2" style={{ color: "white" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Let's get personal
                  </Typography>
                  <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ borderColor: "white", color: "white" }}
                    component={Link}
                to='/about'
                onClick={() => props.setValue(3)}
                  >
                    <span style={{marginRight: '10px'}}>Learn More</span>
                    <ButtonArrow  width={15} height={15} fill="white" />
                  </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? '2em': '5em', textAlign: matchesXS ? 'center': 'right'}}> {/* nested ternary here checks xs breakpoint to stack first. if true, set margin to zero. if false, check sm breakpoint.*/}
                <Grid container direction="column" >
                  <Typography variant="h2" style={{ color: "white" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Say hello!{" "}
                    <span role="img" aria-label="waving hand">
                      👋🏼
                    </span>
                  </Typography>
                  <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ borderColor: "white", color: "white" }}
                    component={Link}
                to='/contact'
                onClick={() => props.setValue(4)}
                  >
                    <span style={{marginRight: '10px'}}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill="white" />
                  </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ------ Call To Action Block ---------------------------- */}
        <CallToAction setValue={props.setValue}/> {/* passing setvalue function  here to handle active tab*/}
      </Grid>
    </Grid>
  );
}
