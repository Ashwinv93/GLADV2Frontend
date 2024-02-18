// Sample deck data
const decks = [
  ["Knight", "Archer", "Fireball", "Goblin Gang", "Hog Rider", "Ice Spirit", "Log", "Tesla"],
  // Add more decks here
];

// Render decks
const decksContainer = document.getElementById('decks');
decks.forEach((deck, index) => {
  const deckElement = document.createElement('div');
  deckElement.classList.add('deck');
  deck.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
          <img src="${cardData[card].iconUrls.medium}" alt="${card}" width="100">
          <p>${card}</p>
          <button class="vote-btn" data-index="${index}" data-vote="up">Upvote</button>
          <button class="vote-btn" data-index="${index}" data-vote="down">Downvote</button>
      `;
      deckElement.appendChild(cardElement);
  });
  decksContainer.appendChild(deckElement);
});

// Voting functionality
decksContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('vote-btn')) {
      const index = parseInt(event.target.dataset.index);
      const vote = event.target.dataset.vote;
      if (vote === 'up') {
          // Increment upvote
          // For simplicity, we'll just log the upvote for now
          console.log(`Upvoted deck ${index}`);
      } else if (vote === 'down') {
          // Decrement downvote
          // For simplicity, we'll just log the downvote for now
          console.log(`Downvoted deck ${index}`);
      }
  }
});
