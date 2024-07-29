document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const resetButton = document.getElementById("reset-button");
    const aiToggleButton = document.getElementById("ai-toggle-button");
    const humanToggleButton = document.getElementById("human-toggle-button");
    const undoButton = document.getElementById("undo-button");
    const aiDifficultySelect = document.getElementById("ai-difficulty");
    const themeToggleButton = document.getElementById("theme-toggle-button");
    const message = document.getElementById("message");
    const timerElement = document.getElementById("timer");
    const winSound = document.getElementById("win-sound");
    const lossSound = document.getElementById("loss-sound");
    const drawSound = document.getElementById("draw-sound");
    const playerXScoreElement = document.getElementById("playerX-score");
    const playerOScoreElement = document.getElementById("playerO-score");

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isAI = false;
    let isHuman = true;
    let gameActive = true;
    let playerXScore = 0;
    let playerOScore = 0;
    let moveHistory = [];
    let startTime, timerInterval;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function createBoard() {
        gameBoard.innerHTML = "";
        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell", "w-full", "h-full", "bg-white", "border", "border-gray-800", "flex", "items-center", "justify-center", "text-2xl", "cursor-pointer");
            cellElement.dataset.index = index;
            cellElement.addEventListener("click", handleCellClick);
            gameBoard.appendChild(cellElement);
        });
    }

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.dataset.index;

        if (board[index] !== "" || !gameActive) {
            return;
        }

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add("animated");

        moveHistory.push({ player: currentPlayer, index: index });

        if (checkWin()) {
            gameActive = false;
            message.textContent = `${currentPlayer} Wins!`;
            if (currentPlayer === "X") {
                winSound.play();
                playerXScore++;
            } else {
                lossSound.play();
                playerOScore++;
            }
            updateScore();
            clearInterval(timerInterval);
        } else if (board.every(cell => cell !== "")) {
            gameActive = false;
            message.textContent = "Draw!";
            drawSound.play();
            clearInterval(timerInterval);
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (isAI && currentPlayer === "O") {
                setTimeout(aiMove, 500); // AI move after a brief delay for a better user experience
            }
        }
    }

    function checkWin() {
        return winningConditions.some(condition => {
            return condition.every(index => {
                return board[index] === currentPlayer;
            });
        });
    }

    function aiMove() {
        let availableMoves = board
            .map((cell, index) => (cell === "" ? index : null))
            .filter(index => index !== null);

        let move;
        const difficulty = aiDifficultySelect.value;

        if (difficulty === "easy") {
            move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        } else if (difficulty === "medium" || difficulty === "hard") {
            // Add basic strategy for medium and hard difficulty
            move = availableMoves.find(index => {
                board[index] = "O";
                let win = checkWin();
                board[index] = "";
                return win;
            });

            if (move === undefined) {
                move = availableMoves.find(index => {
                    board[index] = "X";
                    let win = checkWin();
                    board[index] = "";
                    return win;
                });
            }

            if (move === undefined) {
                move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            }
        }

        board[move] = "O";
        const cell = document.querySelector(`[data-index='${move}']`);
        cell.textContent = "O";
        cell.classList.add("animated");

        if (checkWin()) {
            gameActive = false;
            message.textContent = "O Wins!";
            lossSound.play();
            playerOScore++;
            updateScore();
            clearInterval(timerInterval);
        } else if (board.every(cell => cell !== "")) {
            gameActive = false;
            message.textContent = "Draw!";
            drawSound.play();
            clearInterval(timerInterval);
        } else {
            currentPlayer = "X";
        }
    }

    function updateScore() {
        playerXScoreElement.textContent = playerXScore;
        playerOScoreElement.textContent = playerOScore;
    }

    function startTimer() {
        startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            timerElement.textContent = `Time: ${elapsedTime}s`;
        }, 1000);
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        gameActive = true;
        message.textContent = "";
        createBoard();
        moveHistory = [];
        clearInterval(timerInterval);
        timerElement.textContent = "Time: 0s";
        startTimer();
    }

    function undoMove() {
        if (moveHistory.length === 0 || !gameActive) {
            return;
        }

        const lastMove = moveHistory.pop();
        board[lastMove.index] = "";
        const cell = document.querySelector(`[data-index='${lastMove.index}']`);
        cell.textContent = "";

        currentPlayer = lastMove.player;
        message.textContent = "";
        gameActive = true;
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    }

    resetButton.addEventListener("click", resetGame);

    aiToggleButton.addEventListener("click", () => {
        isAI = true;
        isHuman = false;
        aiToggleButton.textContent = "Playing Against AI";
        humanToggleButton.textContent = "Play Against Human";
        resetGame();
    });

    humanToggleButton.addEventListener("click", () => {
        isAI = false;
        isHuman = true;
        aiToggleButton.textContent = "Play Against AI";
        humanToggleButton.textContent = "Playing Against Human";
        resetGame();
    });

    undoButton.addEventListener("click", undoMove);

    themeToggleButton.addEventListener("click", toggleTheme);

    createBoard();
    startTimer();
});
