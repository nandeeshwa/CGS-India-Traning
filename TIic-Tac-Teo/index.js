document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const winnerDisplay = document.getElementById('winner');
    
    let currentPlayer = 'X';
    let board = Array(9).fill(null);
    let gameActive = true;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    const checkWinner = () => {
        for (const [a, b, c] of winPatterns) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleClick = (e) => {
        const index = e.target.dataset.index;
        if (board[index] || !gameActive) return;

        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        const winner = checkWinner();

        if (winner) {
            winnerDisplay.textContent = `Player ${winner} wins!`;
            gameActive = false;
        } else if (board.every(cell => cell)) {
            winnerDisplay.textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    boxes.forEach(box => box.addEventListener('click', handleClick));
});
