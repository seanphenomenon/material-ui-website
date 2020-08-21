import React from "react";
import Header from "../components/ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../components/ui/Theme";
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Switch> {/* Switch component only renders the first component which matches the given route to prevent two different routes with the same URL, and accidently render both components at the same time. */}
  <Route exact path='/' component={()=> <div>Home</div>} />
  <Route exact path='/services' component={()=> <div>Services</div>} />
  <Route exact path='/customsoftware' component={()=> <div>Custom Software</div>} />
  <Route exact path='/mobileapps' component={()=> <div>Mobile Apps</div>} />
  <Route exact path='/websites' component={()=> <div>Websites</div>} />
  <Route exact path='/revolution' component={()=> <div>The Revolution</div>} />
  <Route exact path='/about' component={()=> <div>About Us</div>} />
  <Route exact path='/contact' component={()=> <div>Contact Us</div>} />
  <Route exact path='/estimate' component={()=> <div>Estimate</div>} />
      </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
