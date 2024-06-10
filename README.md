# Connect 4 Game

Welcome to the Connect 4 game implemented in React! This project includes the classic Connect 4 game, where two players take turns dropping colored discs into a grid, aiming to be the first to connect four discs in a row vertically, horizontally, or diagonally.

## Deployed Link

You can play the game [here](https://66668234b7dd97621716fc08--comforting-figolla-10e06c.netlify.app/).

## Components

### Board
The main game component that holds the state of the game and renders the grid. It uses the `Circle` component to render each cell of the grid.

### Circle
A functional component representing a single cell in the grid. It receives props for the player and the click event handler.

### Header
Displays the current game state and the current player's turn or the winner of the game.

### Footer
Contains buttons to start a new game and to get a suggested move.

## Functionality

### isWinner Function
Determines if the current move results in a win for the current player.

### isDraw Function
Determines if the game ends in a draw.

### computermove Function
Suggests a valid move for the current player by randomly selecting an available slot.
