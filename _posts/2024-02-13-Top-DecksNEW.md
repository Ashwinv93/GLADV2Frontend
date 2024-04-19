---
toc: false
comments: true
layout: post
title: Top Decks
courses: { timebox: {week: 3} }
type: hacks	
permalink: /newdecks
---
<label for="sortSelect">Sort by:</label>
<select id="sortSelect" onchange="sortDecks()">
    <option value="deckname">Deck Name</option>
    <option value="winrate">Win Rate</option>
    <option value="popularity">Popularity</option>
</select>

<input type="text" id="searchInput" onkeyup="searchDecks()" placeholder="Search for deck names...">

<table id="decksTable" border="1">
    <thead>
        <tr>
            <th>Deck Name</th>
            <th>Deck Image</th>
            <th>Win Percentage</th>
            <th>Games Played</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data for the decks -->
        <!-- Backend will populate this section -->
    </tbody>
</table>

<script>
    async function fetchDecks() {
        try {
            const response = await fetch('http://localhost:8086/api/decks');
            const decksData = await response.json();
            populateDecksTable(decksData);
        } catch (error) {
            console.error('Error fetching decks:', error);
        }
    }

    function populateDecksTable(decksData) {
        const decksTableBody = document.querySelector('#decksTable tbody');
        decksTableBody.innerHTML = '';

        // Check if decksData is an array
        if (!Array.isArray(decksData)) {
            console.error('Error: decksData is not an array');
            return;
        }

        decksData.forEach(deck => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${deck.deckname}</td>
                <td><a href="${deck.image}" target="_blank">${deck.deckname}</a></td>
                <td>${deck.winrate}%</td>
                <td>${deck.popularity}</td>
            `;
            decksTableBody.appendChild(row);
        });
    }

function sortDecks() {
    const sortSelect = document.getElementById("sortSelect");
    const selectedOption = sortSelect.value;
    const decksTableBody = document.querySelector('#decksTable tbody');
    const rows = Array.from(decksTableBody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
        const valueA = rowA.querySelector(`td:nth-child(${getOptionIndex(selectedOption)})`).textContent.trim();
        const valueB = rowB.querySelector(`td:nth-child(${getOptionIndex(selectedOption)})`).textContent.trim();
        
        if (selectedOption === "winrate" || selectedOption === "popularity") {
            return parseFloat(valueB) - parseFloat(valueA);
        } else {
            return valueB.localeCompare(valueA);
        }
    });

    decksTableBody.innerHTML = '';
    rows.forEach(row => decksTableBody.appendChild(row));
}


    function getOptionIndex(option) {
        switch(option) {
            case "deckname":
                return 1;
            case "winrate":
                return 3;
            case "popularity":
                return 4;
            default:
                return 1;
        }
    }

    function searchDecks() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("decksTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    // Fetch decks on page load
    window.onload = function() {
        fetchDecks();
    };
</script>
