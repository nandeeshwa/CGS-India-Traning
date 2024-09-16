var email = document.getElementById("email");
var password = document.getElementById("password");
var age = document.getElementById("age");
var passwordContainer = document.getElementById("passwordContainer");
var ageContainer = document.getElementById("ageContainer");
var submit = document.getElementById("submit");
var nextEmail = document.getElementById("nextEmail");
var nextPassword = document.getElementById("nextPassword");
var nextAge = document.getElementById("nextAge");

// Show the password field and next button when the "Next" button for email is clicked
nextEmail.addEventListener("click", function() {
    if (email.value.trim() !== "") {
        passwordContainer.style.display = "block";
        nextEmail.style.display = "none"; // Hide the current Next button
        password.focus();  // Move focus to the next input
    } else {
        alert("Please enter your email.");
    }
});

// Show the age field and next button when the "Next" button for password is clicked
nextPassword.addEventListener("click", function() {
    if (password.value.trim() !== "") {
        ageContainer.style.display = "block";
        nextPassword.style.display = "none"; // Hide the current Next button
        age.focus();  // Move focus to the next input
    } else {
        alert("Please enter your password.");
    }
});

// Show the submit button when the "Next" button for age is clicked
nextAge.addEventListener("click", function() {
    if (age.value.trim() !== "") {
        submit.style.display = "block";
        nextAge.style.display = "none"; // Hide the current Next button
        submit.focus();  // Move focus to the submit button
    } else {
        alert("Please enter your age.");
    }
});

// Log the input values to the console when the submit button is clicked
submit.addEventListener("click", function() {
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    console.log("Age: " + age.value);
});
