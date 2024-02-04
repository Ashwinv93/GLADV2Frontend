---
toc: true
comments: true
layout: notebook
title: admin login demo 
courses: { timebox: {week: 3} }
type: tangibles
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Add any additional CSS here -->
</head>
<body>
    <div>
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="loginUid" placeholder="Username" required><br>
            <input type="password" id="loginPassword" placeholder="Password" required><br>
            <button type="submit">Login</button>
        </form>
    </div>

<script type="module">
        import { uri, options } from './config.js'; // Adjust the path as needed

        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        };

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const userCredentials = {
                uid: document.getElementById('loginUid').value,
                password: document.getElementById('loginPassword')..value
            };

            fetch(uri + 'api/users/authenticate', {
                ...options,
                method: 'POST',
                body: JSON.stringify(userCredentials)
            })
            .then(response => response.json())
            .then(data => {
                const payload = parseJwt(data.token);
                if (payload.isAdmin && payload.isAdmin === 'yes') {
                    window.location.href = '/admin_page.html'; // Admin page URL
                } else {
                    window.location.href = '/normal_user_page.html'; // Normal user page URL
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Login failed');
            });
        });
    </script>
</body>
</html>
