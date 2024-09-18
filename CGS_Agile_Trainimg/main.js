// Initialize vote counts
let votes = [0, 0, 0, 0]; // Array to keep track of votes for BJP, Congress, BRS, and JANASENA

// Function to increment vote count
function incrementVote(index) {
    votes[index]++; // Increment the vote count for the party at the given index
    document.getElementById('s' + (index + 1)).querySelector('h4').innerText = votes[index]; // Update the displayed vote count
}

// Add event listeners for each vote button
document.getElementById('btn1').addEventListener('click', () => incrementVote(0)); // Button for BJP
document.getElementById('btn2').addEventListener('click', () => incrementVote(1)); // Button for Congress
document.getElementById('btn3').addEventListener('click', () => incrementVote(2)); // Button for BRS
document.getElementById('btn4').addEventListener('click', () => incrementVote(3)); // Button for JANASENA
