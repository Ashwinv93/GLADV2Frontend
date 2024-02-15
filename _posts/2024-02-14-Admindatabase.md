---
toc: false
comments: true
layout: post
title: Users Database
courses: { timebox: {week: 2} }
type: tangibles	
permalink: /database
---

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }

    .container {
        width: 80%;
        margin: 50px auto; /* Center align the container */
        margin-top: 20px; /* Add buffer between the container and the navbar */
    }

    table {
        width: 80%;
        background-color: #fff;
        margin: 50px auto; /* Center align the container */
        margin-top: 20px; /* Add buffer between the container and the navbar */
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #007bff;
        color: white;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }
</style>

<script type="module">
  // uri variable and options object are obtained from config.js
  import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

  // Function to get JWT token from cookies
  function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Check if the user is authenticated
  const jwtToken = getCookie('jwt');
  if (!jwtToken) {
      window.location.href = '{{site.baseurl}}/login'; // Redirect to login page if not authenticated
  }

  // Get user role from JWT token
  const tokenParts = jwtToken.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));

  // Check if the user has the "Admin" role
  if (payload.role !== "Admin") {
      window.location.href = '{{site.baseurl}}/401'; // Redirect to unauthorized page
  }

  // Set Users endpoint (list of users)
  const url = uri + '/api/users/all';

  // prepare HTML result container for new output
  const resultContainer = document.getElementById("result");

  // fetch the API
  const authOptions = {
      ...options, // This will copy all properties from options
      method: 'GET', // Override the method property
      cache: 'no-cache', // Set the cache property
      headers: {
          'uid': localStorage.getItem('uid') // Set the uid as a header
      }        
  };

  fetch(url, authOptions)
      // response is a RESTful "promise" on any successful fetch
      .then(response => {
          // check for response errors and display
          if (response.status === 401) {
              // Redirect to the login page
              window.location.href = '{{site.baseurl}}/401';
          }
          if (response.status !== 200) {
              const errorMsg = 'Database response error: ' + response.status;
              console.log(errorMsg);
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              td.innerHTML = errorMsg;
              tr.appendChild(td);
              resultContainer.appendChild(tr);
              return;
          }
          // valid response will contain JSON data
          response.json().then(data => {
              console.log(data);
              for (const row of data) {
                  // tr and td build out for each row
                  const tr = document.createElement("tr");
                  const name = document.createElement("td");
                  const id = document.createElement("td");
                  const age = document.createElement("td");
                  // data is specific to the API
                  name.innerHTML = row.name; 
                  id.innerHTML = row.uid; 
                  age.innerHTML = row.age; 
                  // this builds td's into tr
                  tr.appendChild(name);
                  tr.appendChild(id);
                  tr.appendChild(age);
                  // append the row to table
                  resultContainer.appendChild(tr);
              }
          })
      })
      // catch fetch errors (ie ACCESS to server blocked)
      .catch(err => {
          console.error(err);
          const tr = document.createElement("tr");
          const td = document.createElement("td");
          td.innerHTML = err + ": " + url;
          tr.appendChild(td);
          resultContainer.appendChild(tr);
      });
</script>

<!-- HTML table layout for page.  The table is filled by JavaScript below. -->
<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>ID</th>
        <th>Age</th>
    </tr>
    </thead>
    <tbody id="result">
    <!-- javascript generated data -->
    </tbody>
</table>
