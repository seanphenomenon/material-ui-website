import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "../components/ui/ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";

import CallToAction from "../components/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down('md')]:{
        backgroundImage: `url(${mobileBackground})`
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: "50px",
    height: "80px",
    width: "205px",
    marginRight: "2em",
    marginLeft: "2em",
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light, // this sets the secondary color, to a lighter shade.
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: "35px",
    padding: "5px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  messageBox: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export default function ContactUs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState(""); // emailHelper is message displayed to user when we have invalid email address. setEmail controls the state

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState(""); //  phoneHelper is message displayed to user when we have invalid phone number . setPhone controls the state. 

  const [message, setMessage] = useState("");

  const onChange = event => {
      let valid;

    // each case targets the unique id of each text field needing validation using switch case. This function checks if each value is valid. 
      switch(event.target.id) {
          case 'email': // textfield id
          setEmail(event.target.value) //  targets value in input and also makes sure text is popping up on screen before validation.
          valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value) // regex tests for valid email address. '.test' is a built-in regex method (seperate from regex code provided) to test for a match between regex and a specified string. test method returns true(a boolean) if email is valid/passes and meets the pattern. Here we are passing in the input value to test against the regex. 

          if(!valid){
            setEmailHelper('Invalid email')
          } else {
              setEmailHelper('') // if email input is valid, it sets string length back to 0 or in other words, an empty string. helper text determines if error style is applied. 
          }
          break;
          case 'phone':
              setPhone(event.target.value)
              valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value) //regex test for valid phone number

              if (!valid){
                  setPhoneHelper('Invalid phone number')
              } else {
                  setPhoneHelper('')
              }
              break;
          default:
              break;
      }
  }

  const disabled = event => {

  }

  return (
    <Grid container direction="row">
      {" "}
      {/* we need to set page up as a row because we will have the components next to one another */}
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{marginBottom: matchesMD ? '5em' : 0, marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0}} //nested ternary style
        lg={4}
        xl={3}
      >
        <Grid item>
          {" "}
          {/* wrapping grid item is placed around entire form to align parent column container above to center */}
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined} style={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
              style={{ color: theme.palette.common.arcBlue }}
            >
              We're waiting.
            </Typography>
          </Grid>
          <Grid item container direction="row" style={{ marginTop: "2em" }}>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: "0.5em", verticalAlign: "bottom" }} //verticalAlign tells which point on the image should be anchored to page. this brings it down to the same line as the text.
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.arcBlue,
                  fontSize: "1rem",
                }}
              >
               <a href='tel:5555555555' style={{textDecoration: 'none', color: 'inherit'}} >(555) 555 - 5555</a> {/* wrapping in 'a href:tel' will allow pop up to make phone call on any device.*/}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="row" style={{ marginBottom: "2em" }}>
            <Grid item>
              <img
                src={emailIcon}
                alt="envelope"
                style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.arcBlue,
                  fontSize: "1rem",
                }}
              >
                <a href='mailto:zachary@gmail.com' style={{textDecoration: 'none', color: 'inherit'}}>zachary@gmail.com</a> {/* wrapping the email in 'a' tag 'w/mailto:' will allow email client to pop up */}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container 
          direction="column" 
          style={{ maxWidth: "20em" }}
          >
            <Grid item style={{marginBottom: '0.5em'}}>
              <TextField
                id="name"
                label="Name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{marginBottom: '0.5em'}}>
              <TextField
                id="email"
                label="Email"
                fullWidth
                value={email}
                onChange={onChange} // using the onchange function above
                error={emailHelper.length !== 0} //returns true if emailHelper string (in onChange function above) does not equal 0 (in other words, if we have anything in state BUT 0, it's not valid, we must have helper text in display, which means we have invalid email.)
                helperText={emailHelper} // helperText prop provides feedback to user about the error

              />
            </Grid>
            <Grid item style={{marginBottom: '0.5em'}}>
              <TextField
                id="phone"
                label="Phone"
                fullWidth
                value={phone}
                onChange={onChange} // using the onchage function above
                error={phoneHelper.length !== 0} // if we have a useState length greater than 0, then it must mean we have helper text in state, and we must have an invalid phone number.  
                helperText={phoneHelper} // helperText prop provides feedback to user about the error
              />
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                InputProps={{ disableUnderline: true }} // these are props passed down to the base input component, to get rid of default blue underline on input textfield.
                value={message}
                multiline
                rows={10}
                id="message"
                placeholder="Hello! We have an idea that we’d just love to share."
                fullWidth
                onChange={(event) => setMessage(event.target.value)}
                className={classes.messageBox}
              />
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Button
              variant="contained"
              className={classes.sendButton}
              style={{ marginTop: "2em" }}
              disabled={
                  name.length === 0 ||
                   email.length === 0 || 
                   phone.length === 0|| 
                   message.length === 0 ||
                    phoneHelper.length !== 0 || 
                    emailHelper.length !== 0
                } // to check for validity of contact us form, the button is set to disabled until ALL fields include valid text.
            >
              Send message
              <img
                src={airplane}
                alt="paper airplane"
                style={{ marginLeft: "1em" }}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column':"row"}
        alignItems="center"
        justify={matchesMD ? 'center' : undefined}
        className={classes.background}
        lg={8}
        xl={9} //adding the xl prop allows more space  all round for contact us form (similar to padding)
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column" >
            <Grid item>
              <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ color: "white", fontSize: "1.5rem" }}
                align={matchesMD ? 'center' : undefined}
              >
                Take advantage of the 21st century.
              </Typography>
              <Grid item container justify={matchesMD ? "center" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
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
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => props.setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
