import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em' 
  },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down('md')]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em' 
  },
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
    '&:hover':{
      backgroundColor: theme.palette.secondary.light
      }
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
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: 'transparent'
    },
    marginLeft: 'auto'
  }, 
  drawerIcon: {
    height: '50px',
    width: '50px'
  }, 
  drawer: {
     backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: '0.7'
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.arcOrange,
  },
  drawerItemSelected: {
    opacity: '1'
  }, 
  appBar: {
    zIndex: theme.zIndex.modal + 1, // this is created to make app bar appear on top of drawer
  }
}));

export default function Header(props) {

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('md')); //this will select anything that is medium and below to return true. 


// Hooks:
  // const [value, setValue] = useState(0); // this controls which nav tab we selected and its route.
  const [anchorEl, setAnchorEl] = useState(null); // this stores the drop down services tab menu item we clicked on and what we want to be rendered
  const [openMenu, setOpenMenu] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(0);



  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "iOS/Android App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  // The useEffect lifecycle method is used here to make sure that when the page is refreshed, the nav tab stays on the active tab, and does not default to the 'Home' tab.
  useEffect(() => {
    if (window.location.pathname === "/" && props.value !== 0) {
      props.setValue(0);
    } else if (window.location.pathname === "/services" && props.value !== 1) {
      props.setValue(1);
    } else if (window.location.pathname === "/revolution" && props.value !== 2) {
      props.setValue(2);
    } else if (window.location.pathname === "/about" && props.value !== 3) {
      props.setValue(3);
    } else if (window.location.pathname === "/contact" && props.value !== 4) {
      props.setValue(4);
    } else if (window.location.pathname === "/estimate" && props.value !== 5) {
      props.setValue(5);
    }

    // switch statement is created below to refactor useEffect statements above and fix highlighted menu items when browser is refreshed.
    switch (window.location.pathname) {
      case "/":
      if (props.value !== 0) {
        props.setValue(0); 
      }
      break;
      case "/services":
      if (props.value !== 1) {
        props.setValue(1);
        props.setSelectedIndex(0); // this index number is set in relation to target the array created for drop down menu options
        }
      break;

      case "/customsoftware":
        if (props.value !== 1) {
        props.setValue(1);
        props.setSelectedIndex(1);
        }
      break;

      case "/mobileapps":
        if (props.value !== 1){
        props.setValue(1);
        props.setSelectedIndex(2);
       }
      break;

      case "/websites":
        if (props.value !== 1) {
          props.setValue(1);
          props.setSelectedIndex(3);
        }
      break;

      case "/revolution":
        if (props.value !== 2) {
          props.setValue(2);
        }
      break;

      case "/about":
        if (props.value !== 3) {
          props.setValue(3);
        }
      break;

      case "/contact":
        if (props.value !== 4) {
          props.setValue(4);
        }
      break;

      case "/estimate":
        if (props.value !== 5) {
          props.setValue(5);
        }
      break;

      default:
        break;
    }
  }, [props.value, props]); // we need to pass the value array here at the end of the function, to prevent infinite chain of updates, using the state of value dependencies. If value doesnt change, we do not want to run the useEffect function.


const tabs = (
  <React.Fragment>
  <Tabs
  value={props.value}
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
  onClick={() => props.setValue(5)} //passing in non-existant value of 5 will clear off any existing active tab./ 
>
  Free Estimate
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  open={openMenu}
  onClose={handleClose}
  MenuListProps={{ onMouseLeave: handleClose }}
  classes={{ paper: classes.menu }} //this is used to customize paper styling background within drop down menu
  elevation={0}
  style={{zIndex: 1302}} // makes sure service menu stays on top of appbar. Prevents appbar zindex from covering services menu 
  
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
        props.setValue(1);
        handleClose();
      }}
      selected={index === props.selectedIndex && props.value === 1} //the selected prop allows us to indicate which menu item is currently selected/active
    >
      {option.name}
    </MenuItem>
  ))}
</Menu>
  </React.Fragment>
);


const drawer = (
  <React.Fragment>
    <SwipeableDrawer 
    disableBackdropTransition={!iOS} //this helps optimize for mobile performance
    disableDiscovery={iOS} // this helps optimize for mobile performance
    open={openDrawer} 
    onClose={() => setOpenDrawer(false)} 
    onOpen={()=> setOpenDrawer(true)} 
    classes={{paper: classes.drawer }}
    >
    <div className={classes.toolbarMargin}/> {/* this is used to help push the drawer menu under the appbar */}
      <List disablePadding>
        <ListItem   divider button component={Link} to='/' onClick={()=> {setOpenDrawer(false); props.setValue(0)}} selected={props.value === 0}>
          <ListItemText className={props.value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
        </ListItem>

         <ListItem divider button component={Link} to='/services' onClick={()=> {setOpenDrawer(false); props.setValue(1)}} selected={props.value === 1}>
          <ListItemText className={props.value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
         </ListItem>

          <ListItem  divider button component={Link} to='/revolution' onClick={()=> {setOpenDrawer(false); props.setValue(2)}} selected={props.value === 2}>
            <ListItemText className={props.value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>The Revolution</ListItemText>
          </ListItem>

          <ListItem  divider button component={Link} to='/about' onClick={()=> {setOpenDrawer(false); props.setValue(3)}} selected={props.value === 3}>
            <ListItemText className={props.value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>About Us</ListItemText>
          </ListItem>

          <ListItem   divider button component={Link} to='/contact' onClick={()=> {setOpenDrawer(false); props.setValue(4)}} selected={props.value === 4}>
            <ListItemText className={props.value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
          </ListItem>

          <ListItem className={classes.drawerItemEstimate} divider button component={Link} to='/estimate' onClick={()=> {setOpenDrawer(false); props.setValue(5)}} selected={props.value === 5}>
            <ListItemText className={props.value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
          </ListItem>
      </List>
    </SwipeableDrawer>
    <IconButton  className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
      <MenuIcon className={classes.drawerIcon}/>
    </IconButton>
  </React.Fragment>
)



  return (
    <React.Fragment>
      {/* react fragment allows the use of div below without needing enclosing wrapper div element. */}
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters={true}>
            {/* disable gutters gets rid of default padding on the sides of the toolbar*/}

            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
              disableRipple
            >
              {/* we also must wrap/make the logo a button to return to the home page, offset the Button component default padding, and make sure it routes back to home page by adding onclick and updating value state. */}
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>

            {matches ? drawer: tabs} 
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* This will  push text out from under navbar, by applying min height to app bar. */}
    </React.Fragment>
  );
}
