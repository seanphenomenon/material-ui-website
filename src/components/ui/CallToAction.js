import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import callActionBackground from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: "35px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  callActionBackground: {
    backgroundImage: `url(${callActionBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment:'fixed', //adds a parallax effect on scrool

    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit' //removes parallax effect on mobile
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: "50px",
    height: "80px",
    width: "205px",
    marginRight: "2em",
    marginLeft: '2em',
    fontSize: '1.5rem',
    "&:hover": {
      backgroundColor: theme.palette.secondary.light, // this sets the secondary color, to a lighter shade.
    },
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0
    }
   
    

  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Grid container 
    alignItems='center'
    className={classes.callActionBackground} //setting background here as a prop, and the height of container in styles, instead of using another div, allows us to avoid messing with the absolute positioning, and allows us to use the justify space-between prop to center grid items properly. 
    justify= {matchesSM ? 'center' : 'space-between'}
    direction={matchesSM ? 'column': 'row'}
    >
     
      <Grid item style={{ marginLeft: matchesSM ? 0: '5em', textAlign: matchesSM ? 'center' : 'inherit'}}>
        <Grid container direction="column">
          <Grid item >
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1" style={{color: 'white', fontSize:'1.5rem'}}>
              Take advantage of the 21st century.
            </Typography>
            <Grid item container justify={matchesSM ? 'center' : undefined} >
              <Button variant="outlined" className={classes.learnButton} component={Link}
                to='/revolution' onClick={() => props.setValue(2) }>
                <span style={{ marginRight: "5px" }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
      <Button 
      variant="contained" 
      className={classes.estimateButton} component={Link}
      to='/estimate'
      onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      </Grid>
    </Grid>
  );
}
