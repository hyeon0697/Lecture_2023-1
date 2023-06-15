const readline = require('readline');

const gridSize = 7;
const playerChar = 'P';
const treasureChar = 'T';
const trapChar = 'X';

const gameBoard = Array.from(Array(gridSize), () => Array(gridSize).fill('#'));

function generateDungeon() {
  const dungeon = Array.from(Array(gridSize), () => Array(gridSize).fill('#'));

  function createRoom(x, y) {
    dungeon[y][x] = ' ';

    const directions = [
      [0, -2], // 위쪽
      [0, 2], // 아래쪽
      [-2, 0], // 왼쪽
      [2, 0], // 오른쪽
    ];

    shuffleArray(directions);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
        if (dungeon[ny][nx] === '#') {
          dungeon[ny][nx] = ' ';
          dungeon[y + dy / 2][x + dx / 2] = ' ';
          createRoom(nx, ny);
        }
      }
    }
  }

  createRoom(Math.floor(gridSize / 2), Math.floor(gridSize / 2));

  return dungeon;
}

function setPlayerInitialPosition() {
  return {
    x: Math.floor(gridSize / 2),
    y: Math.floor(gridSize / 2),
  };
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function printGame() {
  for (let i = 0; i < gridSize; i++) {
    let row = '';
    for (let j = 0; j < gridSize; j++) {
      if (gameBoard[i][j] !== '.') {
        row += gameBoard[i][j];
      } else {
        row += dungeon[i][j];
      }
      row += ' ';
    }
    console.log(row);
  }
}

function handleUserInput(input) {
  const direction = input.toLowerCase();

  let newX = playerPosition.x;
  let newY = playerPosition.y;
  switch (direction) {
    case 'w':
      newY--;
      break;
    case 's':
      newY++;
      break;
    case 'a':
      newX--;
      break;
    case 'd':
      newX++;
      break;
    default:
      console.log('Invalid input! Use WASD to move.');
      return;
  }

  if (newX >= 0 && newX < gridSize && newY >= 0 && newY < gridSize) {
    const currentRoom = dungeon[newY][newX];

    if (currentRoom === trapChar) {
      console.log('You stepped on a trap! Game over.');
      process.exit(0);
    }

    if (currentRoom !== '#') {
      gameBoard[playerPosition.y][playerPosition.x] = '.';
      playerPosition.x = newX;
      playerPosition.y = newY;
      gameBoard[playerPosition.y][playerPosition.x] = playerChar;

      console.clear();
      printGame();

      if (newX === treasurePosition.x && newY === treasurePosition.y) {
        console.log('Congratulations! You found the treasure!');
        process.exit(0);
      }
    } else {
      console.log('Invalid move! You cannot go to that room.');
    }
  } else {
    console.log('Invalid move! You cannot go outside the game board.');
  }
}

const dungeon = generateDungeon();
const treasurePosition = {
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
};
const trapPosition = {
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
};

while (dungeon[treasurePosition.y][treasurePosition.x] === '#'
  || dungeon[trapPosition.y][trapPosition.x] === '#'
  || (treasurePosition.x === trapPosition.x && treasurePosition.y === trapPosition.y)) {
  treasurePosition.x = Math.floor(Math.random() * gridSize);
  treasurePosition.y = Math.floor(Math.random() * gridSize);
  trapPosition.x = Math.floor(Math.random() * gridSize);
  trapPosition.y = Math.floor(Math.random() * gridSize);
}

dungeon[treasurePosition.y][treasurePosition.x] = treasureChar;
dungeon[trapPosition.y][trapPosition.x] = trapChar;

let playerPosition = setPlayerInitialPosition();
gameBoard[playerPosition.y][playerPosition.x] = playerChar;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to the advanced roguelike game!\nUse WASD to move.\nPress Enter to start...', () => {
  console.clear();
  printGame();
  rl.on('line', (input) => {
    handleUserInput(input);
  });
});
