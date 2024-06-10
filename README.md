# Connect 4 Game

Welcome to the Connect 4 game implemented in React! This project includes the classic Connect 4 game, where two players take turns dropping colored discs into a grid, aiming to be the first to connect four discs in a row vertically, horizontally, or diagonally.

<div style="display: flex; justify-content: center;">
    <img src="https://github.com/parita2003/Connect-4-Game/assets/126491686/237ad7bf-3bc5-4965-a85f-809da0fb2bfc" alt="image" style="width: 200px; margin-right: 20px;">
    <img src="https://github.com/parita2003/Connect-4-Game/assets/126491686/3711ad2b-6483-44ab-a709-2c42587fa4a6" alt="image" style="width: 200px;">
</div>

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
