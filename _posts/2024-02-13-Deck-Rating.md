---
toc: false
comments: true
layout: post
title: Top Decks
courses: { timebox: {week: 3} }
type: hacks	
permalink: /topdecks
---

<label for="sortSelect">Sort by:</label>
<select id="sortSelect" onchange="sortDecks()">
    <option value="winrate">Win Rate</option>
    <option value="popularity">Popularity</option>
</select>

<table id="decksTable" border="1">
    <thead>
        <tr>
            <th>Deck Image</th>
            <th>Win Percentage</th>
            <th>Games Played</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data for the decks -->
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760898899447869/xbox.PNG?ex=65e0d1fd&is=65ce5cfd&hm=920de81b415f61bb4c7592671adb6947a419c4ca7a80246b55d63b0c892bc723&=&format=webp&quality=lossless&width=1440&height=200" alt="Xbow"></td>
            <td>63.18%</td>
            <td>1062</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760899285192734/2.6_hog.PNG?ex=65e0d1fd&is=65ce5cfd&hm=591112f85f2acc874096ecb1e0b2e2d6f6b58178b0e82a5da72f9f9189c3c979&=&format=webp&quality=lossless&width=1440&height=208" alt="2.6 Hog Cycle"></td>
            <td>62.15%</td>
            <td>6740</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760899587440721/bowlerloon.PNG?ex=65e0d1fd&is=65ce5cfd&hm=a84523a1432d2cc0f6a8e85aadfef682c58d68c8b0b8d01feb9181e7277c05a3&=&format=webp&quality=lossless&width=1008&height=141" alt="Lumber Loon"></td>
            <td>71.86%</td>
            <td>398</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760900212138104/littleprince_graveyard.PNG?ex=65e0d1fd&is=65ce5cfd&hm=3576f15199fbe22b7a253b97776e54174d301270ee84f0429a8b9babb9d8d0d2&=&format=webp&quality=lossless&width=1008&height=141" alt="Little Graveyard"></td>
            <td>68.46%</td>
            <td>436</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760900535357481/logbait.PNG?ex=65e0d1fd&is=65ce5cfd&hm=9eed86e3016a3b7639f76fc2aa90fae0addde6a4f255c87c381ae8c506659797&=&format=webp&quality=lossless&width=1008&height=148" alt="Log Bait"></td>
            <td>63.84%</td>
            <td>6927</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760900849803345/miner_wall_breaker_cycle.PNG?ex=65e0d1fd&is=65ce5cfd&hm=40599c4836103102fe0ff312206723a0ea3fe632be22e98f1408621aeafd06dd&=&format=webp&quality=lossless&width=1008&height=146" alt="Wall Breaker Miner"></td>
            <td>53.03%</td>
            <td>1823</td>
        </tr>
        <tr>
            <td><img src="https://media.discordapp.net/attachments/1207760856704614511/1207760901168431154/pekka_bridge_rush.PNG?ex=65e0d1fd&is=65ce5cfd&hm=05a8b77567c0d76da81e38ca0126c5b0eb94eb6b8e5250a9d5234071a5bea17d&=&format=webp&quality=lossless&width=1008&height=142" alt="Pekka Bridge Spam"></td>
            <td>64.98%</td>
            <td>1208</td>
        </tr>
    </tbody>
</table>

<script>
    function sortDecks() {
        var sortBy = document.getElementById("sortSelect").value;
        var decksTable = document.getElementById("decksTable");
        var rows, switching, i, x, y, shouldSwitch;
        switching = true;
        while (switching) {
            switching = false;
            rows = decksTable.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[1];
                y = rows[i + 1].getElementsByTagName("TD")[1];
                if (sortBy === "winrate") {
                    if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (sortBy === "popularity") {
                    x = rows[i].getElementsByTagName("TD")[2];
                    y = rows[i + 1].getElementsByTagName("TD")[2];
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
</script>
