---
title: Login
permalink: /login
---
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  .container {
    max-width: 500px;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .container h2 {
    text-align: center;
    color: #333;
  }

  .userInput {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  .signup-link {
    text-align: center;
    margin-top: 10px;
  }

  .signup-link a {
    color: #007bff;
    text-decoration: none;
  }

  .signup-link a:hover {
    text-decoration: underline;
  }
</style>

<div class="container">
  <h2>Login</h2>
  <div id="error-message" style="color: red; text-align: center; margin-bottom: 10px;"></div>
  <form id="username" action="javascript:login_user()">
    <p><input class="userInput" type="text" name="uid" id="uid" placeholder="User ID" required></p>
    <p><input class="userInput" type="password" name="password" id="password" placeholder="Password" required></p>
    <p><button>Login</button></p>
    <p class="signup-link">
      <a href="{{site.baseurl}}/createUser">Create New User</a>
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
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                if (response.status === 400) {
                    // Display error message
                    document.getElementById("error-message").textContent = "Invalid username or password.";
                } else {
                    console.error('Login error: ' + response.status);
                }
                return;
            }
            // Success!!!
            // Redirect to the database page
            localStorage.setItem('uid', document.getElementById("uid").value);
            window.location.href = "{{site.baseurl}}/cards";
        })
        // catch fetch errors (ie ACCESS to server blocked)
        .catch(err => {
            console.error(err);
        });
    }

    // Attach login_user to the window object, allowing access to form action
    window.login_user = login_user;
</script>