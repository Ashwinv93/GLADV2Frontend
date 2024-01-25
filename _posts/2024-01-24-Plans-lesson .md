---
toc: false
comments: true
layout: post
title: Top Decks
courses: { timebox: {week: 2} }
type: tangibles	
---

<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Top Clash Royale Decks</h1>
    <ul id="deckList">
        <!-- Decks will be dynamically added here using JavaScript -->
    </ul>
    <script>
        // Replace 'YOUR_API_KEY' with your actual Clash Royale API key
        const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE1NmRmNDhlLTJiZDUtNDkzZi1hODA0LTkxZmUzYTQ1Njg4MSIsImlhdCI6MTcwNjIwODE0Niwic3ViIjoiZGV2ZWxvcGVyLzhhNmQ0ZjdlLWVkNjAtYzQ5NC0yYjM4LWU1ZWM1NDQ2ZDYxOSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.8M5Ror_wZTDo1AZ4fZQwF9BMGiOyiJk458NequhdCfNHhfM0YRER0Fbk-AT8llC1QaD0Osf7G2fiah5Lpu6uOA';
        const apiUrl = 'https://api.clashroyale.com/v1/decks/top?limit=10';
        // Function to make an API request and populate the deck list
        async function fetchTopDecks() {
            try {
                const response = await fetch(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Accept': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Unable to fetch top decks');
                }
                const data = await response.json();
                const deckList = document.getElementById("deckList");
                data.items.forEach((deck, index) => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `Deck ${index + 1}: ${deck.name} - Average Elixir Cost: ${deck.averageElixirCost}`;
                    deckList.appendChild(listItem);
                });
            } catch (error) {
                console.error(error.message);
            }
        }
        // Populate the deck list when the page loads
        window.onload = fetchTopDecks;
    </script>
</body>
</html>