// jshint version:6

const dotenv=require("dotenv");
const express=require("express");
const bodyParser=require("body-parser");
// const request=require("request");

const app=express();

const https=require("https");

dotenv.config( {path: ".env"});
// const { callbackify } = require("util");

// using a public directory for static files
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/signup.html");
});


app.post("/", function(req, res) {
// as we are not changing these variables we can convert them to constants
  const firstName=req.body.fname;
  const lastName=req.body.lname;
  const email=req.body.email;

  // console.log(firstName,lastName,email);
  const data={
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData= JSON.stringify(data);

  // the url will be coming from mail chimp
  const url=process.env.host;
  const options={
    method: "POST",
    auth: process.env.authorization,
  };
    // using https request node module
  const request=https.request(url, options, function(response) {
    if (response.statusCode==200) {
      res.sendFile(__dirname+"/success.html");
    } else {
      res.sendFile(__dirname+"/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  // to specify that we are done with the request
  request.end();
});

app.post("/failure", function(req, res) {
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started at port 3000");
});