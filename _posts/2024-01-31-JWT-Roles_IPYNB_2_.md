---
toc: True
comments: True
layout: notebook
title: JWT Roles
courses: {'timebox': {'week': 3}}
type: tangibles
---

# JWT Roles Team Teach
Gershawn, Lincoln, Ashwin, Dante, Vance. 

## Lesson Overview

JWT Roles: JWT (JSON Web Token) roles are used to define the permissions and access levels of a user or system within an application. These roles are typically encoded within the JWT payload.

Cookies With JWT Roles: Cookies and JWT roles work together by storing the JWT securely within an HTTP cookie. When a user logs in, the server generates a JWT with the assigned roles, and this token is then stored as a cookie on the client-side. 

Authentication: A process of verifying that an entity is who they claim to be.

![JWT](https://www.miniorange.com/blog/assets/2023/jwt-structure.webp)

Format:
The header contains information about the type and signing algorithm, the payload holds claims like user details or permissions, and the signature is a cryptographic hash of the header, payload, and a secret key.

## Single Vs. Multi-factor Auth:

Single-factor authentication is used when a user provides a username/email/phone number and a password. This is the most common and weakest authentication factor. The user simply inputs the email and password, and the system checks if the data is valid; if valid, the user gets authenticated and can access the resource. 

Mulit-factor authentication uses more than one factor to authenticate a user. For example, the user tries to log in with an email and password; if the data is correct, a code is sent to the user's account registered phone number. If the user enters the code, the user will be logged in; otherwise, the user is not authenticated. 

## Types of Authentication:

Knowledge Authentication: The user is asked something that only they can provide or know -- e.g., password. This is the most common type and also the easiest.

Property Authentication: The user is asked for something they own or possess. For example, they can use a hardware authentication device like YubiKey or an authenticator app on their phone. The idea is that users will be asked to set an authentication factor that verifies the identity more securely. This isn’t always used alone; it’s used alongside another authentication type, say, Knowledge authentication.

Biological Authentication: The user is asked to verify their identity using something biologically unique to them -- e.g., a fingerprint or iris scan.

## Authentication vs. Authorization

Authentication verifies identity, usually through credential validation and makes sure the user is who they say they are while authorization grants or denies permissions and verifies a user has the correct credentials to execute tasks.

# Rescourses and Info

- A private _role attribute, stored in the database, to track the user's role, with a default role of "User".
- A constructor __init__ to initialize a new User instance with attributes like name, uid, password, dob (date of birth), and role.
- A property role, with a getter and setter, providing controlled access to the _role attribute.
- A method is_admin to check if the user's role is "Admin".
- A method read to convert the user's data into a dictionary, useful for operations like sending user data in a response.


```python
class User(db.Model):
    # ... (existing code)

    _role = db.Column(db.String(20), default="User", nullable=False)

    def __init__(self, name, uid, password="123qwerty", dob=date.today(), role="User"):
        # ... (existing code)
        self._role = role

    @property
    def role(self):
        return self._role

    @role.setter
    def role(self, role):
        self._role = role

    def is_admin(self):
        return self._role == "Admin"
    
    # ... (existing code)

    # CRUD read converts self to dictionary
    # returns dictionary
    def read(self):
        return {
            "id": self.id,
            "name": self.name,
            "uid": self.uid,
            "dob": self.dob,
            "age": self.age,
            "role": self.role,
            "posts": [post.read() for post in self.posts]
        }
```


The initUsers function in a Flask application initializes the database and creates a test user. It uses the Flask app context to access database functionalities, creates the necessary database tables, and then creates a user with specified details, including setting the role to "Admin".


```python
def initUsers():
    with app.app_context():
        """Create database and tables"""
        db.create_all()
        """Tester data for table"""
        u1 = User(name='Thomas Edison', uid='toby', password='123toby', dob=date(1847, 2, 11), role="Admin")a
```


The _Security class in the provided code defines a method for user authentication in a Flask-based API. It handles POST requests, extracts user details (UID and password) from the request body, and checks these credentials against the database. If authenticated successfully, it generates a JWT (JSON Web Token) for the user, which includes the user's UID and role.


```python
    class _Security(Resource):
        def post(self):
            try:
                body = request.get_json()
                if not body:
                    return {
                        "message": "Please provide user details",
                        "data": None,
                        "error": "Bad request"
                    }, 400
                ''' Get Data '''
                uid = body.get('uid')
                if uid is None:
                    return {'message': f'User ID is missing'}, 400
                password = body.get('password')
                
                ''' Find user '''
                user = User.query.filter_by(_uid=uid).first()
                if user is None or not user.is_password(password):
                    return {'message': f"Invalid user id or password"}, 400
                if user:
                    try:
                        token_payload = {
                            "_uid": user._uid,
                            "role": user.role  # Add the role information to the token
                        }

                        token = jwt.encode(
                            token_payload,
                            current_app.config["SECRET_KEY"],
                            algorithm="HS256"
                        )
```

- Function token_required: A decorator for role-based access control in a Flask app.
- Parameters: Optional roles parameter to restrict access to specific user roles.
- Token Retrieval: Extracts JWT from request cookies.
- No Token: Returns 401 Unauthorized if token is missing.
- Token Decoding: Decodes the JWT using the app's secret key.
- User Validation: Fetches user from the database using UID from the token.
- Invalid Token/User: Returns 401 Unauthorized for invalid or non-existent users.
- Role Check: Verifies if the user's role matches the required roles, returns 403 Forbidden if not.
- Error Handling: Catches exceptions, returning a 500 Internal Server Error with error details.
- Function Execution: Proceeds to execute the wrapped function if authentication and authorization succeed.


```python
from functools import wraps
import jwt
from flask import request, abort
from flask import current_app
from model.users import User

def token_required(roles=None):
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            token = request.cookies.get("jwt")
            if not token:
                return {
                    "message": "Authentication Token is missing!",
                    "data": None,
                    "error": "Unauthorized"
                }, 401
            try:
                data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
                current_user = User.query.filter_by(_uid=data["_uid"]).first()
                if current_user is None:
                    return {
                        "message": "Invalid Authentication token!",
                        "data": None,
                        "error": "Unauthorized"
                    }, 401

                # Check if roles are provided and user has the required role
                if roles and current_user.role not in roles:
                    return {
                        "message": "Insufficient permissions. Required roles: {}".format(roles),
                        "data": None,
                        "error": "Forbidden"
                    }, 403

            except Exception as e:
                return {
                    "message": "Something went wrong",
                    "data": None,
                    "error": str(e)
                }, 500

            return f(current_user, *args, **kwargs)

        return decorated

    return decorator
```

![](images/OIP.jpg)

# Implementation 
How we used this in our code.

Users.py


```python
import os
import base64
import json
from datetime import date
from random import randrange
from flask import Flask, current_app
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
from __init__ import app, db

# Initialize Flask App
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'  # SQLite database
app.config['SECRET_KEY'] = '09f26e402586e2faa8da4c98a35f1b20d6b033c60'  # Random secret key
app.config['UPLOAD_FOLDER'] = './uploads'  # Upload folder for images

db = SQLAlchemy(app)

class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer, primary_key=True)
    note = db.Column(db.Text, nullable=False)
    image = db.Column(db.String, nullable=True)
    userID = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, user_id, note, image=None):
        self.userID = user_id
        self.note = note
        self.image = image

    def __repr__(self):
        return f"<Post {self.id}>"

    def create(self):
        try:
            db.session.add(self)
            db.session.commit()
            return self
        except IntegrityError:
            db.session.rollback()
            return None

    def read(self):
        upload_folder = app.config['UPLOAD_FOLDER']
        image_path = os.path.join(upload_folder, self.image) if self.image else None
        image_data = None
        if image_path and os.path.isfile(image_path):
            with open(image_path, 'rb') as file:
                image_data = base64.b64encode(file.read()).decode('utf-8')
        return {
            "id": self.id,
            "userID": self.userID,
            "note": self.note,
            "image": self.image,
            "base64": image_data
        }

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    _name = db.Column(db.String(255), nullable=False)
    _uid = db.Column(db.String(255), unique=True, nullable=False)
    _password = db.Column(db.String(255), nullable=False)
    _dob = db.Column(db.Date, nullable=True)
    _role = db.Column(db.String(20), default="User", nullable=False)
    
    posts = db.relationship('Post', backref='user', lazy=True)

    def __init__(self, name, uid, password, dob=None, role="User"):
        self._name = name
        self._uid = uid
        self._password = generate_password_hash(password)
        self._dob = dob
        self._role = role

    def set_password(self, password):
        self._password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self._password, password)

    def as_dict(self):
        return {
            "id": self.id,
            "name": self._name,
            "uid": self._uid,
            "dob": self._dob.isoformat() if self._dob else None,
            "role": self._role
        }

    @property
    def role(self):
        return self._role

    def is_admin(self):
        return self._role == "Admin"

def init_users():
    with app.app_context():
        db.create_all()
        # Sample users initialization
        users = [
            User(name='Thomas Edison', uid='edison', password='securepassword123', dob=date(1847, 2, 11), role="Admin"),
            # Add more sample users if needed
        ]
        for user in users:
            db.session.add(user)
            for i in range(randrange(1, 5)):
                post = Post(user_id=user.id, note=f'Sample note {i} for {user.name}')
                db.session.add(post)
            try:
                db.session.commit()
            except IntegrityError:
                print(f'Duplicate user or other database error for user: {user._uid}')
                db.session.rollback()

if __name__ == '__main__':
    init_users()

```

User.py


```python
import json
import jwt
from datetime import datetime
from flask import Flask, Blueprint, request, jsonify, current_app, Response
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api, Resource
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
import os

# Initialize Flask App
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mydatabase.db'
app.config['SECRET_KEY'] = '09f26e402586e2faa8da4c98a35f1b20d6b033c60'

db = SQLAlchemy(app)

# User model
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    _name = db.Column(db.String(255), unique=False, nullable=False)
    _uid = db.Column(db.String(255), unique=True, nullable=False)
    _password = db.Column(db.String(255), unique=False, nullable=False)
    _dob = db.Column(db.Date)
    _role = db.Column(db.String(20), default="User", nullable=False)

    def __init__(self, name, uid, password, dob, role="User"):
        self._name = name
        self._uid = uid
        self._password = generate_password_hash(password)
        self._dob = dob
        self._role = role

    def check_password(self, password):
        return check_password_hash(self._password, password)

    def as_dict(self):
        return {
            "id": self.id,
            "name": self._name,
            "uid": self._uid,
            "dob": self._dob.strftime("%Y-%m-%d") if self._dob else None,
            "role": self._role
        }

# Blueprint for user routes
user_api = Blueprint('user_api', __name__, url_prefix='/api/users')
api = Api(user_api)

# User CRUD class
class _CRUD(Resource):
    def post(self): 
        body = request.get_json()
        name = body.get('name')
        uid = body.get('uid')
        password = body.get('password')
        dob = body.get('dob', '')
        role = body.get('role', 'User')

        if not all([name, uid, password]):
            return jsonify({'message': 'Missing required fields'}), 400

        try:
            dob_parsed = datetime.strptime(dob, '%Y-%m-%d').date() if dob else None
            user = User(name=name, uid=uid, password=password, dob=dob_parsed, role=role)
            db.session.add(user)
            db.session.commit()
            return jsonify(user.as_dict()), 201

        except IntegrityError:
            db.session.rollback()
            return jsonify({'message': 'User already exists'}), 409
        except Exception as e:
            return jsonify({'message': str(e)}), 500

    def get(self):
        users = User.query.all()
        return jsonify([user.as_dict() for user in users]), 200

# User Security class
class _Security(Resource):
    def post(self):
        body = request.get_json()
        uid = body.get('uid')
        password = body.get('password')

        user = User.query.filter_by(_uid=uid).first()
        if user and user.check_password(password):
            token = jwt.encode({"_uid": user._uid}, app.config["SECRET_KEY"], algorithm="HS256")
            return jsonify({"token": token}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

# Add resources to the API
api.add_resource(_CRUD, '/')
api.add_resource(_Security, '/authenticate')

# Register Blueprint
app.register_blueprint(user_api)

# Database initialization
@app.before_first_request
def initialize_database():
    db.create_all()

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
```

auth_middleware.py


```python
from functools import wraps
import jwt
from flask import request, current_app
from model.users import User

def token_required(roles=None):
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            token = request.cookies.get("jwt")
            if not token:
                return {
                    "message": "Authentication Token is missing!",
                    "data": None,
                    "error": "Unauthorized"
                }, 401
            try:
                data = jwt.decode(token, current_app.config["SECRET_KEY"], algorithms=["HS256"])
                current_user = User.query.filter_by(_uid=data["_uid"]).first()
                if current_user is None:
                    return {
                        "message": "Invalid Authentication token!",
                        "data": None,
                        "error": "Unauthorized"
                    }, 401

                # Check if roles are provided and user has the required role
                if roles and current_user.role not in roles:
                    return {
                        "message": "Insufficient permissions. Required roles: {}".format(roles),
                        "data": None,
                        "error": "Forbidden"
                    }, 403

            except Exception as e:
                return {
                    "message": "Something went wrong",
                    "data": None,
                    "error": str(e)
                }, 500

            return f(current_user, *args, **kwargs)

        return decorated

    return decorator
```
