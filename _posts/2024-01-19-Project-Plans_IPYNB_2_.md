---
toc: False
comments: True
layout: notebook
title: Project Plans
description: Plans and initial designs for CPT project
courses: {'timebox': {'week': 1}}
type: plans
---

# Clash Royal Website

### Ashwin - Deck Builder

The game clash royal is a mobile where two people play against eachother with decks of 8 cards. The cards each have different satistics and abilitys. I aim to build a user friendly interface that lets you drag cards from a collection of all the 118 cards into 8 slots for your deck. Once the deck is build it will display the average elixer cost of the cost, and some other statistics if possible.

This is the logo I will be using for the elixer
<img src="https://static.wikia.nocookie.net/clashroyale/images/4/43/Elixir.png/revision/latest/scale-to-width-down/100?cb=20160530182631" alt="Elixir | Clash Royale Wiki | Fandom"/>

This is an example of what my UI will look like
<img src="https://is1-ssl.mzstatic.com/image/thumb/Purple111/v4/46/0b/5f/460b5f5a-bc34-be6c-c0b7-2075915049bb/pr_source.png/643x0w.jpg" alt="Deck Builder For Clash Royale - Building Guide on the App Store"/>

## Message board- Gurshawn
In our clash royal themed project, my feature will be to create a place where all publicly shared desks can be seen. Upon clicking on one of them you will be able to read and review comments about this specific deck. Additionally there will be a rating system where each user leaves a /5 rating and this data can be averaged for sorting. A function will go through each comment to find keywords or characters that indicate a rating. In the "publicly shared" tab ther will be the option to view by newest uploaded, most popular, and highst rated.


Database Setup:

Set up a database to store comments related to each Clash Royale deck. Ensure you have a table that links comments to specific decks, and includes fields for comment content, user ID, timestamp, etc.
Backend/API Implementation:

Develop a backend/API to handle requests related to comments. Create endpoints for adding, retrieving, and updating comments.
Implement authentication mechanisms to ensure that only authorized users can leave comments.
User Interface Integration:

Integrate the comment system into the user interface of your Clash Royale project. This may involve adding a comment section to each deck's detail page.
Comment Form:

Create a form on the UI that allows users to input their comments. Include fields for the comment content and any other relevant details.
Comment Submission:

Implement a mechanism to submit comments to the backend when users fill out the comment form. Ensure that the necessary data (deck ID, user ID, comment content) is sent to the backend.
Backend Processing:

Develop server-side logic to process incoming comments. This includes validating input, associating comments with the correct deck, and storing them in the database.
Retrieving Comments:

Implement functionality to retrieve and display comments associated with a specific Clash Royale deck. This may involve making API requests to fetch comments when a user views a particular deck.
Displaying Comments:

Design a layout to display comments on the UI. Include user information, timestamp, and the comment content. Ensure that the comments are presented in a user-friendly and readable format.
Updating and Deleting Comments:

Implement features to allow users to edit or delete their own comments. Ensure that only authorized users can perform these actions.
Image: https://docs.google.com/drawings/d/10fjbCSRd3wqy5j-LwtVze9CZh1MSEpGAUOCRf8AUPFw/edit?usp=sharing
<html>
<img src = "/GLADV2Frontend/_notebooks/examplemessagecpt(1).png">
</html>

## Lincoln 
Coding Clash Royale cards onto a website aligns with the College Board's Computer Science Principles requirements by demonstrating understanding of programming concepts, algorithms, and data representation. It showcases computational thinking, problem-solving skills, and the ability to design interactive user interfaces, meeting the criteria for the creative development of a project in the context of CSP coursework. I also plan to implement a feature where clicking on a Clash Royale card reveals its information involves using event-driven programming, a key CSP concept. I will do this by employing HTML, SASS, and JavaScript. JavaScript handles the click event, triggering the display of card details. This not only demonstrates proficiency in web development but also showcases knowledge of variables, functions, and conditional statements—integral components of CSP. Additionally, I can explore data structures to efficiently store and retrieve card information.

<img src="https://files.slack.com/files-tmb/TUDAF53UJ-F06EMD72E4T-994d6b3e43/clicks_720.png" alt="Clicks.png"/>

## Dante and Vance
Me and Vance will work on the overall appearance and styling of the website aswell as the backend. Vance is specific will work on the search algorithm and the dragibility of the cards as well as their individual code and information. Also, me and vance together will work on the user interface with the commenting and sharing the decks you create. I will work on databasing and storing all of the card data in the back end since it is all stored temporarily in the front end. Also, I will partially work on the login and databasing all of the unique user info like comments and decks. Vance's individual feature the dragibility of the cards working off of Ashwins feature. My feature can be the log in system.

## see demo in tangibles

## plans
Work on intergrating postman into code
Work on log in creation 
Create working backend
store all clash royal card data into the backend
