import React, {useState} from "react";
import Header from "../components/ui/Header";
import Footer from '../components/ui/Footer';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../components/ui/Theme";
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  // value and selectedindex props have been added here from original header file to pass down and use in both the header and footer components
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header value={value} setValue={setValue}  selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Switch> {/* Switch component only renders the first component which matches the given route to prevent two different routes with the same URL, and accidently render both components at the same time. */}
  <Route exact path='/' component={()=> <div style={{height: '2000px'}}>Home</div>} />
  <Route exact path='/services' component={()=> <div>Services</div>} />
  <Route exact path='/customsoftware' component={()=> <div>Custom Software</div>} />
  <Route exact path='/mobileapps' component={()=> <div>Mobile Apps</div>} />
  <Route exact path='/websites' component={()=> <div>Websites</div>} />
  <Route exact path='/revolution' component={()=> <div>The Revolution</div>} />
  <Route exact path='/about' component={()=> <div>About Us</div>} />
  <Route exact path='/contact' component={()=> <div>Contact Us</div>} />
  <Route exact path='/estimate' component={()=> <div>Estimate</div>} />
      </Switch>
      <Footer value={value} setValue={setValue}  selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;