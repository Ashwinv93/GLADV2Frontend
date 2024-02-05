---
comments: false
layout: post
title: Sign-Up
description: Sign Up ACTUAL
permalink: /signup
courses: {timebox: {week: 3}}
type: hacks
---

<style>
 #login {
    margin-top: 10px;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    width:100%;
}
.login-container {
  border: 3px solid #f1f1f1;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  margin-left: 200px;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  display: flex;
  justify-items: center;
  text-align: center;
  margin-left: 325px;
  padding-top: 16px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

</style>
<div class="login-container">
  </div>

<form action="javascript:login_user()">
        <label>
            Name:
            <input class="userInput" type="text" name="name" id="name" required>
        </label>
        <p><label>
            User ID:
            <input class="userInput" type="text" name="uid" id="uid" required>
        </label></p>
        <p ><label>
            Password:
            <input class="userInput" type="password" name="password" id="password" required>
        </label></p>
        <p><label>
            Date of Birth:
            <input class="userInput" type="text" id="dob" required>
        </label></p>
        <p>
            <button onclick="login_user()">Submit</button>
        </p>
    <span class="psw"><a href="{{site.baseurl}}/login"> Log in</a></span>
    </form>

<!--
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.
The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed.
 -->
<script type="module">
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
    const url = uri + '/api/users/authenticate';
    const body = {
            // name: document.getElementById("name").value,
            uid: "toby",
            password: "123toby",
            // dob: document.getElementById("dob").value
        };
    const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };
    fetch(url, authOptions)
    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/';
        // Set the body of the request to include login data from the DOM
        const body = {
            name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value,
        };
        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            method: 'POST', // Override the method property
            cache: 'no-cache', // Set the cache property
            body: JSON.stringify(body)
        };

        // Fetch JWT
        fetch(url, authOptions)
        .then(response => {
            // handle error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }
            // Success!!!
            // Redirect to the database page
            window.location.href = "{{site.baseurl}}/login";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
</script>