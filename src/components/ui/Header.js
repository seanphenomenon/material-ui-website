import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";

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
    height: "7em",
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
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      {/* react fragment allows the use of div below without needing enclosing wrapper div element. */}
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true}>
            {" "}
            {/* disable gutters gets rid of default padding on the sides of the toolbar*/}
            <img src={logo} alt="company logo" className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      {/* This will  push text out from under navbar, by applying min height.*/}
    </React.Fragment>
  );
}
