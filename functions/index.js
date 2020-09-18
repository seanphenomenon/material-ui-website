// we are using google firebase to setup a cloud function that we can call on at a certain URL to send off an email.  

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config(); //  this is where we are pulling the configuration out of the function from our firebase dependency, and config allows us to link into our actual firebase function
const cors = require("cors")({ origin: true }); // sets cross origin header to true to allow cross resource sharing for this function (i.e locahost/3000 and firebase communication)
admin.initializeApp(); // this provides complete function setup and access to our node.js code. We are now able to call this function at a specific URL. Now we have to check out nodemailer to figure out what function to set up to call, using network request and send off the email.

//nodemailer set up below
const transporter = nodemailer.createTransport({
  service: "Gmail", //configures the use of gmail services
  auth: { user: config.user.email, pass: config.user.password }, // user and pass props sets specified email/password firebase configuration. (using new temporary gmail account/password here)
});

let mailOptions = {
  from: "Arc Development",
  to: "seanphenomenon04@gmail.com", // using personal email here to verify if test email was sent successfully. 
  subject: "Testing nodemailer",
  text: "Test successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
