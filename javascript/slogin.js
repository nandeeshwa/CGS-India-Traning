// Create a dictionary of users and their passwords
const userCredentials = {
    "nandhu@gmail.com": "123456",
    "bittu@gmail.com": "123456",
    "karthik@gmail.com": "123456"
};

// Function to validate user credentials
function validateCredentials(enteredUsername, enteredPassword) {
    // Check if the entered username exists in the dictionary
    if (userCredentials[enteredUsername] === enteredPassword) {
        // Redirect to another page if credentials are correct
        window.location.href = "anotherpage.html"; // Replace with the desired URL
    } else {
        // Show an error message if credentials are incorrect
        document.getElementById("conpass-error").innerText = "Invalid username or password";
        document.getElementById("conpass-error").style.display = "block";
    }
}

// Get the input elements and the login button
var username = document.getElementById("username");
var password = document.getElementById("password");
var btn = document.getElementById("login");

// Add event listener to the login button
btn.addEventListener("click", function() {
    const enteredUsername = username.value;
    const enteredPassword = password.value;
    
    // Validate the entered credentials
    validateCredentials(enteredUsername, enteredPassword);
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
});
