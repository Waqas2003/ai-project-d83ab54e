import React from 'react';
import './Players.css';

const players = [
  { name: 'Cristiano Ronaldo', image: 'player1.jpg' },
  { name: 'João Félix', image: 'player2.jpg' },
  { name: 'Bruno Fernandes', image: 'player3.jpg' },
  // ...
];

const Players = () => {
  return (
    <section className="players">
      <h2>Our Star Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            <img src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Players;
```
**src/components/Footer.js:**