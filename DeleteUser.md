---
toc: false
comments: true
layout: post
title: Delete
courses: { timebox: {week: 2} }
type: tangibles	
permalink: /deleteUser
---
<!-- 
A simple HTML login form with a Login action when button is pressed.  

The form triggers the login_user function defined in the JavaScript below when the Login button is pressed.
-->

<style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 500px;
            margin: 100px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .container h2 {
            text-align: center;
            margin-bottom: 20px;
        }
        .container p {
            margin-bottom: 10px;
        }
        .container label {
            display: block;
            font-weight: bold;
        }
        .userInput {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
            box-sizing: border-box;
        }
        .container button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .container button:hover {
            background-color: #0056b3;
        }
        h2 {
            text-align: center;
            color: black;
        }
        p {
            color: black;
        }
    </style>
<body>
    <div class="container">
        <h2>Delete User Form</h2>
        <form id="username" action="javascript:login_user()">
            <p><label for="uid">User ID:</label></p>
            <p><input class="userInput" type="text" name="uid" id="uid" required></p>
            <p><button onclick="login_user()">Delete</button></p>
        </form>
    </div>
</body>


<!-- 
Below JavaScript code is designed to handle user authentication in a web application. It's written to work with a backend server that uses JWT (JSON Web Tokens) for authentication.

The script defines a function when the page loads. This function is triggered when the Login button in the HTML form above is pressed. 
 -->
<script>
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        function login_user() {
            const jwtToken = getCookie('jwt');

            if (jwtToken) {
                const tokenParts = jwtToken.split('.');
                const payload = JSON.parse(atob(tokenParts[1]));

                // Check if the user has the "Admin" role
                if (payload.role === "Admin") {
                    // Proceed with the deletion process
                    const url = "{{site.baseurl}}/api/users/";
                    const body = {
                        uid: document.getElementById("uid").value
                    };
                    const options = {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${jwtToken}`
                        },
                        body: JSON.stringify(body)
                    };

                    fetch(url, options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to delete user');
                        }
                        // Successful deletion, redirect to the login page
                        window.location.href = "{{site.baseurl}}/login";
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                } else {
                    // User does not have the "Admin" role, redirect to unauthorized page
                    window.location.href = "{{site.baseurl}}/401";
                }
            } else {
                // JWT token not found in cookies, redirect to the login page
                window.location.href = "{{site.baseurl}}/login";
            }
        }

        // Trigger the login_user() function when the page loads
        window.onload = login_user;
    </script>