---
toc: false
comments: true
layout: post
title: Chest Open
courses: { timebox: {week: 2} }
type: tangibles	
permalink: /ChestOpen
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .card {
      width: 200px;
      height: 300px;
      perspective: 1000px;
      display: inline-block;
      margin: 10px;
    }
    .card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      cursor: pointer;
    }
    .card.flipped .card-inner {
      transform: rotateY(180deg);
    }
    .card-front, .card-back {
      width: 100%;
      height: 100%;
      position: absolute;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px;
    }
    .card-front {
      background-color: #607EE2;
      font-size: 18px;
      color: white;
    }
    .card-back {
      background-color: #607EE2;
      transform: rotateY(180deg);
      font-size: 12px;
      color: white;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>

<body>
  <div style="text-align: center;">
    <div id="initialImageContainer" style="display: inline-block;">
      <img width="400px" id="initialImage" src="./images/Golden_Chest.png" alt="Initial Image" style="cursor: pointer;">
    </div>
    <div id="chestImageContainer" style="display: inline-block; margin-left: 20px;">
      <img id="chestImage" src="./images/main-qimg-ebf779b9c04319a5428a1a314fb84800.png" alt="Chest Image" style="cursor: pointer;">
    </div>
  </div>
  <div id="cardContainer" style="text-align: center; display: none;"></div>
  <button id="resetButton" style="display: none;">Reset</button>

  
  <script>

  function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
  }

  // Check if the user is authenticated
  const jwtToken = getCookie('jwt');
  const tokenParts = jwtToken.split('.');
  const payload = JSON.parse(atob(tokenParts[1]));
  const id = payload.id;
    
  function displayCards(apiEndpoint) {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          displayCardIcons(data);
        } else {
          console.error('Invalid or empty response from the API:', data);
        }
      })
      .catch(error => console.error('Error fetching cards:', error));
  }

  function displayCardIcons(cards) {
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "block";
    cardContainer.innerHTML = "";

    cards.forEach(function(card) {
      var cardElement = createCardElement(card.icon_url_medium);
      cardContainer.appendChild(cardElement);
    });

    document.getElementById("resetButton").style.display = "inline";
  }

  function createCardElement(iconUrl) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");

    var cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    var cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.innerHTML = `<img src="${iconUrl}" alt="Card Icon">`;

    cardInner.appendChild(cardFront);
    cardElement.appendChild(cardInner);

    return cardElement;
  }

document.getElementById('initialImage').addEventListener('click', function() {
displayCards('http://127.0.0.1:8086/api/card/commonChest?id=' + id);
});

document.getElementById('chestImage').addEventListener('click', function() {
displayCards('http://127.0.0.1:8086/api/card/legendaryChest?id=' + id);
});

document.getElementById("resetButton").addEventListener("click", resetDisplay);

function resetDisplay() {
var initialImageContainer = document.getElementById("initialImageContainer");
initialImageContainer.style.display = "inline-block";
  var chestImageContainer = document.getElementById("chestImageContainer");
chestImageContainer.style.display = "inline-block";

var cardContainer = document.getElementById("cardContainer");
cardContainer.style.display = "none";
cardContainer.innerHTML = "";

document.getElementById("resetButton").style.display = "none";
}
</script>
</body>
</html>
