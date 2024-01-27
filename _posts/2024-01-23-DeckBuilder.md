---
toc: false
comments: true
layout: post
title: Deck Builders
courses: { timebox: {week: 2} }
type: tangibles	
---

<html lang="en">
<body>
    <h1>Clash Royale Deck Builder</h1>
    <div id="deck" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <div id="card-container" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <script>
        let draggedCard = null;
        let cardData = [];
        // Array to store selected cards in the deck
        let deck = [];
        // Function to render the deck
        function renderDeck() {
            const deckContainer = document.getElementById('deck');
            deckContainer.innerHTML = '';
            deck.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.textContent = card.name;
                cardElement.addEventListener('click', () => removeCard(card));
                deckContainer.appendChild(cardElement);
            });
        }
        // Function to add a card to the deck
        function addCard(card) {
            if (deck.length < 8 && !deck.some(c => c.id === card.id)) {
                deck.push(card);
                renderDeck();
            }
        }
        // Function to remove a card from the deck
        function removeCard(card) {
            deck = deck.filter(item => item.id !== card.id);
            renderDeck();
        }
        // Function to allow dropping cards
        function allowDrop(event) {
            event.preventDefault();
        }
        // Function to handle card drag start
        function dragStart(event, card) {
            draggedCard = card;
        }
        // Function to handle dropping a card into the deck
        function drop(event) {
            event.preventDefault();
            if (draggedCard) {
                addCard(draggedCard);
                draggedCard = null;
            }
        }
        // Function to fetch card data from the Clash Royale API
        async function fetchCardData() {
            const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1NmRmNDhlLTJiZDUtNDkzZi1hODA0LTkxZmUzYTQ1Njg4MSIsImlhdCI6MTcwNjIwODE0Niwic3ViIjoiZGV2ZWxvcGVyLzhhNmQ0ZjdlLWVkNjAtYzQ5NC0yYjM4LWU1ZWM1NDQ2ZDYxOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.8M5Ror_wZTDo1AZ4fZQwF9BMGiOyiJk458NequhdCfNHhfM0YRER0Fbk-AT8llC1QaD0Osf7G2fiah5Lpu6uOA';
            const response = await fetch(`https://api.clashroyale.com/v1/cards`, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                cardData = data.items;
                initializeCards();
            } else {
                console.error('Failed to fetch card data');
            }
        }
        // Function to initialize the available cards
        function initializeCards() {
            const cardContainer = document.getElementById('card-container');
            cardData.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.textContent = card.name;
                cardElement.draggable = true;
                cardElement.addEventListener('dragstart', (event) => dragStart(event, card));
                cardContainer.appendChild(cardElement);
            });
        }
        // Initialize the available cards and render the initial deck
        fetchCardData();
        renderDeck();
    </script>
</body>
</html>