---
comments: True
layout: post
title: Clash Royale Delete User
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /deleteuser
---

<div class="container">
    <form id="username" action="javascript:login_user()">
        <p>
        <img src="data:image/png;base64,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" width="92px" height="100px">
        </p>
        <p><label>
            User ID:
            <input class="userInput" type="text" name="uid" id="uid" required>
        </label></p>
        <p>
            <button onclick="login_user()">Delete</button>
        </p>
    </form>
</div>


<!-- 
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.

The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed. 
 -->
<script type="module">
    // uri variable and options object are obtained from config.js
    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
    localStorage.setItem('userID',document.getElementById("uid").value);
    const url = uri + '/api/users/authenticate';
    const body = {
            // name: document.getElementById("name").value,
            uid: "toby",
            password: "123toby"
            // dob: document.getElementById("dob").value
        };
    const authOptions = {
            ...options,// This will copy all properties from options
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
            // name: document.getElementById("name").value,
            uid: document.getElementById("uid").value,
            // dob: document.getElementById("dob").value
        };

        // Change options according to Authentication requirements
        const authOptions = {
            ...options, // This will copy all properties from options
            cache: 'no-cache',
            method: 'DELETE',
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