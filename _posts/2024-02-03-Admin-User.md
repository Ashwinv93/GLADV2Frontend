---
toc: true
comments: true
layout: notebook
title: admin demo 
courses: { timebox: {week: 3} }
type: tangibles
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <!-- Add any additional CSS here -->
</head>
<body>
    <div>
        <h2>Create New Account</h2>
        <form id="registerForm">
            <input type="text" id="regName" placeholder="Full Name" required><br>
            <input type="text" id="regUid" placeholder="Username" required><br>
            <input type="password" id="regPassword" placeholder="Password" required><br>
            <button type="submit">Create Account</button>
        </form>
    </div>

<script type="module">
        import { uri, options } from './config.js'; // Adjust the path as needed

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const newUser = {
                name: document.getElementById('regName').value,
                uid: document.getElementById('regUid').value,
                password: document.getElementById('regPassword').value,
                admin: 'no' // Defaulting as non-admin user
            };

            fetch(uri + 'api/users/', {
                ...options,
                method: 'POST',
                body: JSON.stringify(newUser)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert('Account created successfully!');
                console.log(data);
                // Attempt to access admin-only page
                redirectToAdminPage();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to create account');
            });
        });

        function redirectToAdminPage() {
            fetch(uri + 'path-to-our-server/admin-page-endpoint', { credentials: 'include' }) // Include credentials if needed
            .then(response => {
                if (response.ok) {
                    window.location.href = '/admin_page.html'; // Admin page URL
                } else if (response.status === 403) {
                    alert('Access denied: You are not an admin.');
                } else {
                    throw new Error('Failed to fetch admin page');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>
