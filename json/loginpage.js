document.addEventListener('DOMContentLoaded', function() {
    let profiles = [];

    // Fetch profiles data from JSON file
    fetch('profiles.json')
        .then(response => response.json())
        .then(data => {
            profiles = data;  // Store profiles data globally
        })
        .catch(error => console.error('Error fetching profiles:', error));

    // Handle login button click
    document.getElementById('login').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Find profile matching the provided username and password
        const profile = profiles.find(profile => profile.username === username && profile.password === password);

        if (profile) {
            document.getElementById('conpass-error').style.display = 'none';
            // Redirect to dashboard page with 'login' query parameter
            window.location.href = "dashboard.html?login=true";
        } else {
            // Show error message if credentials are invalid
            document.getElementById('conpass-error').style.display = 'block';
        }
    });

    // Handle password visibility toggle
    document.getElementById('togglePassword').addEventListener('click', function() {
        const passwordField = document.getElementById('password');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
});
