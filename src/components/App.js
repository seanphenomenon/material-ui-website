import React, { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../components/ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import ServicesPage from "../components/ServicesPage";
import CustomSoftware from "../components/CustomSoftware";
import MobileApps from "../components/MobileApps";
import Websites from "../components/Websites";
import Revolution from "../components/Revolution";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Estimate from '../components/Estimate';

function App() {
  // value and selectedindex props have been added here from original header file to pass down and use in both the header and footer components
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          {" "}
          {/* Switch component only renders the first component which matches the given route to prevent two different routes with the same URL, and accidently render both components at the same time. */}
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />{" "}
          {/* adding  value props here allow us to control active nav links and navigation */}
          <Route
            exact
            path="/services"
            render={(props) => (
              <ServicesPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/customsoftware"
            render={(props) => (
              <CustomSoftware
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/mobileapps"
            render={(props) => (
              <MobileApps
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/websites"
            render={(props) => (
              <Websites
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/revolution"
            render={(props) => (
              <Revolution
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <AboutUs
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <ContactUs
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path="/estimate" render={(props) => (
              <Estimate
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
              )} 
              />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
