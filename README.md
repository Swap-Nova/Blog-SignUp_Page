<h2> Why do we need APIs? </h2>
<p> An API is a set of commands, protocols, and objects that programmers can use to create software or interact with an external system. Eg: jQuery. </p>

<h2> Using Postman </h2>
<p> Using postman, we can create API requests. So, in this workspace, we will add the API and send the API request to the web to print the results in a JSON format. </p>

<h2> Building the Page </h2>

* Firstly, in order for our server to load up static files such as CSS and images, then we need to use a special function of the express, i.e., Static.

* Create a folder named Public and place all the static files inside that folder. Through this, the backend can refer to the static files through the relative URL in our HTML file.

<h2> MailChimp API </h2>

* For building the signup page backend, we can use the <a href="https://mailchimp.com/developer/"> Mailchimp </a> website to generate API keys.
* Batch subscribes to many or some people. We need a list_id and we can provide the members that we want to subscribe to in the body of our request.
* Creating a variable and inside the members, column makes a variable from mail chimp email_address, status, and merge fields for the mail chimp.
* The list_key which is the unique id for the audience, and the usx the x value will be the one that is present in our API key at the end. For eg: us4
```
https://usx.api.mailchimp.com/3.0/lists/list_key
```

<h3> Node https request callback </h3>

```bash
const request=https.request(url,option,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
request.write(jsonData);
    // to specify that we are done with the request
request.end();
```

<h3> Using .env files </h3>
<p> DotEnv is a lightweight npm package that automatically loads environment variables from a .env file into the process.env object. </p>

<p> To use DotEnv, first install it using the command: npm i dotenv. Then in your app, require and configure the package like this: 

```bash
require('dotenv').config().
```

<h3> 👉 The data is stored in the server-side in this form (is present in the subscriber list of Mailchimp): </h3>
        <img width="1143" alt="image" src="https://user-images.githubusercontent.com/92979885/216839069-f1ffe0bc-8120-4c0a-b824-75aaebebe2da.png">
<h4>☢️ To run this in your local terminal. </h4>

```bash

node index.js

```

<h3> If there is an occur from the server-side then the Webpage: </h3>


* Failure Page (From server side. You can redirect to the home page if failure of page occurs and retry.) </li> <br>
  <img width="600" alt="image" src="https://user-images.githubusercontent.com/92979885/215313903-db352b52-7df5-40cd-9349-6275afd97cd0.png"><br>

<hr><br>
PS: We cannot use GitHub pages or any static content until we want to build a webpage with our own service stack and live with noisy servers 24/7.
