import { createMuiTheme } from "@material-ui/core/styles";

// Note: this theme file is used for custom styling we intend to use elsewhere in the application and can be called in other files using spread operator.

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`, // primary and secondary generate light and dark colors
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: "1.5",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      textTransform: "none",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.40rem",
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Raleway',
      color: arcBlue,
      fontWeight: 500,
      lineHeight: 1 
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: "2px",
      textTransform: "none",
      borderRadius: "50px",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300
    },
    caption: {
      fontSize:'1rem',
      fontWeight: 300,
      color: arcGrey
    },
  },
  overrides: { //this theme is for contact us imput fields.
    MuiInputLabel:{
      //style is applied to root element
      root: {
        color: arcBlue,
        fontSize:'1rem'
      }
    },
    MuiInput: {
      root: {
        //changes color of input text from default black to grey
        color: arcGrey,
        fontWeight: 300
      },
      underline: {
        '&:before':{
          //styling before input is clicked
          borderBottom:`2px solid ${arcBlue}`
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          //gets rid of dark color on input hover
          borderBottom:`2px solid ${arcBlue}`

        }
      }
    }
  }
});
