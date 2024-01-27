---
toc: false
comments: true
layout: notebook
title: log in demo 
description: Plans and initial designs for CPT project
courses: { timebox: {week: 1} }
type: tangibles
---
<html lang="en">
    <title>User Registration</title>
    <h1>User Registration</h1>
    <form id="registrationForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>     
        <label for="uid">Username</label>  
        <input type="text" id="uid" name="uid" required><br><br>
        <label for="password">Password</label> 
        <input type="password" id="password" name="password" required><br><br>
        <label for="confirmPassword">Confirm Password</label> 
        <input type="password" id="confirmPassword" name="confirmPassword" required><br><br>
        <label for="dob">Date of Birth</label>
        <input type="text" id="dob" name="dob" required><br><br>
        <input type="submit" value="Create User">
    </form>
    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const name = document.getElementById('name').value;// DEFINE VALUES
            const uid =  document.getElementById('uid').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const dob = document.getElementById('dob').value;
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            const formData = {
                "name": name,
                "uid": uid,
                "password": password,
                "dob": dob
                // Add other form fields as needed
            };            
            fetch('http://127.0.0.1:8240/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
             .then(response => {
                 if (response.ok) {
                    window.location.href = '/frontTri2/login/'; // Redirect upon successful user creation
                } else {
                    console.error('User creation failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</html>
