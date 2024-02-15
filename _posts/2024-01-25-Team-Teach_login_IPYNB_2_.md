---
toc: False
comments: True
layout: notebook
title: Project Plans
description: Plans and initial designs for CPT project
courses: {'timebox': {'week': 1}}
type: plans
---

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login and Registration</title>
    <style>
        /* Add your CSS styling here */
        body { font-family: Arial, sans-serif; }
        .form-container { margin: auto; width: 300px; padding: 20px; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Register</h2>
        <form id="registerForm">
            <input type="text" id="registerUsername" placeholder="Username" required><br>
            <input type="password" id="registerPassword" placeholder="Password" required><br>
            <button type="submit">Register</button>
        </form>
    </div>

    <div class="form-container">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="loginUsername" placeholder="Username" required><br>
            <input type="password" id="loginPassword" placeholder="Password" required><br>
            <button type="submit">Login</button>
        </form>
    </div>

    <script>
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            fetch('/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => alert(data.message));
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => alert(data.message));
        });
    </script>
</body>
</html>
```