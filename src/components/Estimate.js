import React, { useState } from "react";
import axios from "axios";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  icon: {
    width: "12em",
    height: "10em",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.arcOrange,
    height: 50,
    width: 225,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  messageBox: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: "3em",
    marginBottom: "2em",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.arcOrange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];

// //using lodash cloneDeep for the newQuestions instead of copying [...defaultQuestions] below, it helps us to no longer mutating the state of selected value in nested arrays and objected.
// const newQuestions = cloneDeep(defaultQuestions); // cloneDeep produces an ACTUAL(or immutable) copy of defaultQuestions state values, and not a mutable copy.
// newQuestions[0].options[0].selected = true;
// console.log(defaultQuestions[0].options[0]);

// Next, we're splitting the rest of the questions up below for easier estimation in the end below

const softwareQuestions = [
  { ...defaultQuestions[0], active: false }, // this references the defaultQuestions and copies over the contents of the first question, but changes the active property to false. Which enables us to switch over to software questions, but still be able to go back to the first question.
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1, // this cost is a multiplier to the final estimate
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25, // this cost is a multiplier to the final estimate
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5, // this cost is a multiplier to the final estimate
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [questions, setQuestions] = useState(defaultQuestions); //default question 'What services are you interested in?"  is in state, and displays first.
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState(""); // from ContactUs page
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState(""); //  from ContactUs page
  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");

  const [loading, setLoading] = useState(false); //  variable for circular progress animation

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const estimateOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions); //creating new copy of questions stored in state.
    const currentlyActive = newQuestions.filter((question) => question.active); // figures out which question we are currently on. filters individual question, checks if active is true, and returns new array.
    const activeIndex = currentlyActive[0].id - 1; //accces the first element of array and the id of that element. minus 1 because the id is one higher than its index in the array.
    const nextIndex = activeIndex + 1; // this takes whatever index we are on in the array, and adds one to it to move to the next question.

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false }; //taking the currently active question, copying the contents of it, and changing the active property to false.
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions); //creating new copy of questions stored in state.
    const currentlyActive = newQuestions.filter((question) => question.active); // figures out which question we are currently on. filters individual question, checks if active is true, and returns new array.
    const activeIndex = currentlyActive[0].id - 1; //accces the first element of array and the id of that element. minus 1 because the id is one higher than its index in the array.
    const nextIndex = activeIndex - 1; // this takes whatever index we are on in the array, and minus one to it to move to the previous question.

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false }; //taking the currently active question, copying the contents of it, and changing the active property to false.
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      // if we're on the first question w/id of 1 (which service are you interested in?) and its active,
      return true; //  return true because we are disabled
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active); // checks currently active question
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      // so were finding length of questions array, subtracting 1, to give us the last index of the array. and then check the id of that question.
      return true; //  return true because we are disabled
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1]; //whenever we call the id, the index is one less than.
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    //switch case statement below targets only the select one subtitles, to only allow one selected item question option.
    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          // if there's any option selected before this question, turn off the selection for previous selection, and turn on for new selection. That way we only have one option selected every time.
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    // switching over the titles of option we just clicked on, to tell which option we selected. Case titles must be exact.
    switch (newSelected.title) {
      case "Custom Software Development": // if we're clicking this section, it will move on to softwareQuestions etc.
        setQuestions(softwareQuestions);
        setService(newSelected.title); // this stores selected service in state for selection review.
        setPlatforms([]); //makes sure to clear out previous selections.state in these sections
        setFeatures([]); //makes sure to clear out previous selections/state in these sections
        setCustomFeatures(""); //makes sure to clear out previous selections.state in these sections
        setCategory(""); //makes sure to clear out previous selections/state in these sections
        setUsers(""); //makes sure to clear out previous selections/state in these sections
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]); //makes sure to clear out previous selections.state in these sections at review, when going back to edit previous selections
        setFeatures([]); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        setCustomFeatures(""); //makes sure to clear out previous selections.state in these sections at review, when going back to edit previous selections
        setCategory(""); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        setUsers(""); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]); //makes sure to clear out previous selections.state in these sections at review, when going back to edit previous selections
        setFeatures([]); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        setCustomFeatures(""); //makes sure to clear out previous selections.state in these sections at review, when going back to edit previous selections
        setCategory(""); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        setUsers(""); //makes sure to clear out previous selections/state in these sections at review, when going back to edit previous selections
        break;
      default:
        setQuestions(newQuestions); // if we're clicking on anything else, we are just on a regular question. So we set questions, to newQuestions that we have used to toggle the selection.
    }
  };

  //Onchange function below is from ContactUs page
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone number");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;

    // from questions state, map over questions so we get access, then take the question options, then  filter  options of each question, and see if the selected option is selected or true. Then, filter that question length is greater than 0, so we dont have an empty array in console, for selecting the first question item. Console will just display chosen items with cost amount .
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost))); // for selected items, map over and add cost value to cost variable above to get total.

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsers(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;
      console.log(cost);
    }

    setTotal(cost); //setting total state to cost.

    console.log(selections); // this will console log all selected items(arrays)
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      // in the case that we have more than 2 questions, return array at first index containing the actual question, map over array to give us that individual question thats selected set to true.
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));
      console.log(newPlatforms);

      setPlatforms(newPlatforms);
    }
  };
  const getFeatures = () => {
    let newFeatures = []; //creates an array for all selected features

    if (questions.length > 2) {
      // in the case that we have more than 2 questions, return array at first index containing the actual question, map over array to give us that individual question thats selected set to true.
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      console.log(newFeatures);
      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;
      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    //copied from contact us
    setLoading(true);

    axios
      .get(
        "https://us-central1-material-ui-course-14395.cloudfunctions.net/sendMail", // this is using firebase cloud function URL. This is immediately called when network request is executed.
        {
          params: {
            // this is the query string to be able to send off form values to email. Everytime the function is called, we will pass on these values.
            name: name,
            email: email,
            phone: phone,
            message: message,
            total: total,
            category: category,
            service: service,
            platforms: platforms,
            features: features,
            customFeatures: customFeatures,
            users: users,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
        setDialogOpen(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, Please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  //disable estimate button conditionals/function below:
  const estimateDisabled = () => {
    let disabled = true;
    // goes into each question to see if any are selected, and retue if true. if nothing selected, array will be empty/zero. if zero, we are left with all questions not answered yet.
    const emptySelections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelections.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      disabled = false;
    }

    return disabled;
  };

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 0 &&
            features.length !== 1 &&
            features.length !== 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${users} users.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
  const websiteSelection = (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a Basic Website"
              : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h2" align={matchesMD ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? 0 : "10em",
            maxWidth: "50em",
            marginTop: "7.5em",
          }}
        >
          <Lottie options={estimateOptions} height="100%" Width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {/* below we are going to filter & map through questions state array to render only the active question */}
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              {" "}
              {/* key is needed here because we are mapping*/}
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginTop: "5em",
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}{" "}
                  {/* subtitle is rendering nothing/null but still maintans its space */}
                </Typography>
              </Grid>
              <Grid item container direction="row">
                {question.options.map((option, index) => (
                  //we are dynamically rendering each grid item here and targeting each option.
                  <Grid
                    item
                    container
                    direction="column"
                    md
                    key={index}
                    component={Button} // component prop turns each grid item in question to clickable button.
                    // these style props, changes grid item button components back to normal style, while maintaining clickable button component functionality.
                    onClick={() => handleSelect(option.id)} // selects the appropriate id of item, and backgroundColor ternary in style above, will change color when item is selected.
                    style={{
                      display: "grid",
                      textTransform: "none",
                      borderRadius: 10,
                      margin: 5,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        ? theme.palette.common.arcOrange
                        : null,
                    }}
                  >
                    <Grid item style={{ maxWidth: "14em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          direction="row"
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              onClick={previousQuestion}
              disabled={navigationPreviousDisabled()}
            >
              <img
                src={
                  navigationPreviousDisabled() ? backArrowDisabled : backArrow
                }
                alt="Previous question"
              />{" "}
              {/* nav function disabled ternary is called upon render. If true, it displays back arrow disabled(gray). if false, display normal arrow. */}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              {" "}
              {/* once it reaches the last question, arrow disables. */}
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="Next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
            disabled={estimateDisabled()} //calling it right away if its being returned as true or false. displays total unanswered question arrays in console for each question. first question, always shows/leaves an empty array.
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth //this full width prop is needed in order to use maxWidth prop below. This helps to give space in-between estimate inputs and checklist
        maxWidth="lg"
        fullScreen={matchesSM}
        style={{ zIndex: 1302 }}
      >
        <Grid container justify="center">
          <Grid item>
            <Typography
              variant="h2"
              align="center"
              style={{ marginTop: "1em", marginBottom: "1em" }}
            >
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justify="space-around"
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  id="name"
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
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
              <Grid item style={{ marginBottom: "0.5em" }}>
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
              <Grid item style={{ width: "20em" }}>
                <TextField
                  InputProps={{ disableUnderline: true }} // these are props passed down to the base input component, to get rid of default blue underline on input textfield.
                  value={message}
                  multiline
                  rows={10}
                  id="message"
                  fullWidth
                  onChange={(event) => setMessage(event.target.value)}
                  className={classes.messageBox}
                  placeholder="Tell us more about your project"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                  style={{ lineHeight: 1.25 }}
                >
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>{" "}
                  {/* to fixed created total with two decimal places */}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Fill out your name, phone number, and email, place your
                  request, and we'll get back with you with details moving
                  forward and a final price.
                </Typography>
              </Grid>
            </Grid>
            {/* --------- Checklist Selection Review ---------- */}
            <Grid
              item
              container
              direction="column"
              md={5}
              style={{ maxWidth: "30em" }}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2 ? softwareSelection : websiteSelection}
                </Grid>
              </Hidden>

              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  } // to check
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <React.Fragment>
                      {" "}
                      {/* snackbar popup from contact us added here. if loading, display circular progress, if not, render original button */}
                      Place Request
                      <img
                        src={send}
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </React.Fragment>
                  )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginBottom: matchesSM ? "5em" : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // where the snackbar will appear on screen
        onClose={() => setAlert({ ...alert, open: false })} // passing in current alert state, and override open value to false.
        autoHideDuration={4000} //after a certain amount of time, snackbar will dissappear (set in milliseconds)
      />
    </Grid>
  );
}
