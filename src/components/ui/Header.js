import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // threshold controls how far user has to start scrolling before it triggers navbar elevation
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0, //once triggered, it will return the elevation of 4. Otherwise, it will remain flat(0).
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar, //using spread operator here copies the styles over from default theme mixin to be able to apply them to components/elements. Helps to push text from under toolbar.
    marginBottom: "3em",
  },
  logo: {
    height: "8em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent", // this hover property gets rid of logo button opacity on hover
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },

  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },

  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0); // this controls which nav tab we selected
  const [anchorEl, setAnchorEl] = useState(null); // this stores the drop down services tab menu item we clicked on and what we want to be rendered
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  // The useEffect lifecycle method is used here to make sure that when the page is refreshed, the nav tab stays on the current tab, and does not default to the 'Home' tab.
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/estimate" && value !== 5) {
      setValue(5);
    }

    // switch statement is created below to refactor useEffect statements above and fix highlighted menu items when browser is refreshed.
    switch (window.location.pathname) {
      case "/":
      if (value !== 0) {
        setValue(0);
      }
      break;
      case "/services":
      if (value !== 1) {
        setValue(1);
        setSelectedIndex(0); // this index number is set in relation to the array created for menu options
        }
      break;

      case "/customsoftware":
        if (value !== 1) {
        setValue(1);
        setSelectedIndex(1);
        }
      break;

      case "/mobileapps":
        if (value !== 1){
        setValue(1);
        setSelectedIndex(2);
       }
      break;

      case "/websites":
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
      break;

      case "/revolution":
        if (value !== 2) {
          setValue(2);
        }
      break;

      case "/about":
        if (value !== 3) {
          setValue(3);
        }
      break;

      case "/contact":
        if (value !== 4) {
          setValue(4);
        }
      break;

      case "/estimate":
        if (value !== 5) {
          setValue(5);
        }
      break;

      default:
        break;
    }
  }, [value]); // we need to pass the value array here at the end of the function, to prevent infinite chain of updates, using the state of value depdendencies. If value doesnt change, we do not want to run the useEffect function.

  return (
    <React.Fragment>
      {/* react fragment allows the use of div below without needing enclosing wrapper div element. */}
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true}>
            {/* disable gutters gets rid of default padding on the sides of the toolbar*/}

            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              disableRipple
            >
              {/* we also must wrap/make the logo a button to return to the home page, offset the Button component default padding, and make sure it routes back to home page by adding onclick and updating value state. */}
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                value={0}
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : "undefined"}
                aria-haspopup={anchorEl ? "true" : "undefined"}
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                component={Link}
                to="/services"
                value={1}
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                value={2}
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                value={3}
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                value={4}
                label="Contact Us"
              />
            </Tabs>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              component={Link}
              to="/estimate"
              value={5}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }} //this is used to customize paper styling background within drop down menu
              elevation={0}
            >
              {/* <MenuItem onClick={()=> {handleClose(); setValue(1)}} component={Link} to='/services' classes={{root: classes.menuItem}}>Services</MenuItem> created another services menu item here to be able to see nav tab through drop down menu */}
              {/* <MenuItem onClick={()=> {handleClose(); setValue(1)}} component={Link} to='/customsoftware'  classes={{root: classes.menuItem}} >Custom Software Development</MenuItem>
              <MenuItem onClick={()=> {handleClose(); setValue(1)}} component={Link} to='/mobileapps'  classes={{root: classes.menuItem}} >Mobile App Development</MenuItem>
              <MenuItem onClick={()=> {handleClose(); setValue(1)}} component={Link} to='/websites' classes={{root: classes.menuItem}} > Website Development </MenuItem> */}

              
              
              {/*array of menu items created below instead to showcase link that is currently active and to refactor MenuItem code above */}
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, index);
                    setValue(1);
                    handleClose();
                  }}
                  selected={index === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* This will  push text out from under navbar, by applying min height to app bar. */}
    </React.Fragment>
  );
}
