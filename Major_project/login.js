document.addEventListener('DOMContentLoaded', function() {
    let profiles = [];

    // Fetch profiles data from JSON file
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            profiles = data;  // Store profiles data globally
        })
        .catch(error => console.error('Error fetching profiles:', error));

    // Handle login button click
    document.getElementById('login').addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const selectedRole = document.querySelector('input[name="user"]:checked')?.id;

        // Validate input
        if (!username || !password || !selectedRole) {
            document.getElementById('conpass-error').textContent = 'Please enter both username and password and select a role.';
            document.getElementById('conpass-error').style.display = 'block';
            return;
        }

        // Find profile matching the provided username and password
        const profile = profiles.find(profile => profile.username === username && profile.password === password && profile.role === selectedRole);
        console.log(profile)
        if (profile) {
            document.getElementById('conpass-error').style.display = 'none';
            // Redirect based on selected role
            if (selectedRole === 'admin') {
                window.location.href = "admin-dashboard.html";
            } else {
                window.location.href = "user-dashboard.html";
            }
        } else {
            // Show error message if credentials are invalid
            document.getElementById('conpass-error').textContent = 'Invalid username, password, or role.';
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
