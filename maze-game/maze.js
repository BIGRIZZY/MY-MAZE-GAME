const readlineSync = require('readline-sync');

// Define the maze
const maze = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', ' ', '#', ' ', ' ', ' ', '#', ' ', '#'],
  ['#', ' ', '#', ' ', '#', ' ', '#', ' ', '#'],
  ['#', ' ', ' ', ' ', '#', ' ', '#', ' ', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', '#'],
];

// Define the player's starting position
let playerX = 1;
let playerY = 1;

// Define the goal position
const goalX = 7;
const goalY = 3;

// Define the game loop
while (true) {
  // Display the maze
  for (let y = 0; y < maze.length; y++) {
    let row = '';
    for (let x = 0; x < maze[y].length; x++) {
      if (x === playerX && y === playerY) {
        row += '@'; // Player's icon
      } else {
        row += maze[y][x];
      }
    }
    console.log(row);
  }

  // Ask the player for their next move
  const move = readlineSync.question('Which way? (up, down, left, right) ');

  // Update the player's position based on their move
  if (move === 'up' && maze[playerY - 1][playerX] !== '#') {
    playerY--;
  } else if (move === 'down' && maze[playerY + 1][playerX] !== '#') {
    playerY++;
  } else if (move === 'left' && maze[playerY][playerX - 1] !== '#') {
    playerX--;
  } else if (move === 'right' && maze[playerY][playerX + 1] !== '#') {
    playerX++;
  }

  // Check if the player has reached the goal
  if (playerX === goalX && playerY === goalY) {
    console.log('Congratulations, you win!');
    break;
  }
}

