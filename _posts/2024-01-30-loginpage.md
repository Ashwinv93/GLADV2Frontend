---
toc: False
layout: post
hide: False
title: Clash Royale Login
courses: {timebox: {week: 3}}
permalink: login
type: hacks
---
<!-- 
A simple HTML login form with a Login action when button is pressed.  

The form triggers the login_user function defined in the JavaScript below when the Login button is pressed.
-->

<div class="container">
    <form id="username" action="javascript:login_user()">
        <p>
        <img src="/https://assets1.ignimgs.com/2016/03/02/clash-royale-buttonjpg-c74daf.jpg" width="3000px" height="300px">
        </p>
        <p><label>
            Username:
            <input class="userInput" type="text" name="uid" id="uid" required>
        </label></p>
        <p ><label>
            Password:
            <input class="userInput" type="password" name="password" id="password" required>
        </label></p>
        <p><label>
            Role:
            <input class="userInput" type="text" name="roles" id="roles" required>
        </label></p>
        <p>
            <button>Login</button>
        </p>
        <a href='{{site.baseurl}}/signup'>Create an Acount</a>
    </form>


<!-- 
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.

The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed. 
 -->
<script type="module">

    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function login_user(){
        // Set Authenticate endpoint
        const url = uri + '/api/users/authenticate';

        // Set the body of the request to include login data from the DOM
        const body = {
            // name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
            // dob: document.getElementById("dob").value
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
                if (response.status === 401) {
                    // Unauthorized - Redirect to 401 error page
                    window.location.href = "{{site.baseurl}}/401.html";
                }
                else if (response.status === 400) {
                    // Unauthorized - Redirect to 401 error page
                    window.location.href = "{{site.baseurl}}/400.html";
                }  
                else if (response.status === 403) {
                    // Forbidden - Redirect to 403 error page
                    window.location.href = "{{site.baseurl}}/403.html";
                } 
                else if (response.status === 404) {
                    // Not Found - Redirect to 404 error page
                    window.location.href = "{{site.baseurl}}/404.html";
                } 
                else {
                    // Handle other error responses
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
                }
                return;
            }
            if (document.getElementById("roles").value === "Admin") {
                window.location.href = "{{ site.baseurl }}/database";
            } else {
                window.location.href = "{{ site.baseurl }}/home.html";
            }
            // Success!!!
            // Redirect to the database page
            // Redirect to the database page

            // window.location.href = "{{site.baseurl}}/database";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }
    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;