// Array of registered users and their passwords
var registeredUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

document.addEventListener("DOMContentLoaded", function() {
    var loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showNavigationBar();
    }
});

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if user exists in registeredUsers array
    var user = registeredUsers.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        sessionStorage.setItem("loggedInUser", username);
        showNavigationBar();
    } else {
        alert("Invalid username or password. Please register.");
    }
}

function register() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;

    // Check if username already exists
    var existingUser = registeredUsers.find(function(user) {
        return user.username === username;
    });

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        // Add the new user to the registeredUsers array
        registeredUsers.push({ username: username, password: password });
        alert("Registration successful. Please login.");
        showLogin();
    }
}

function showNavigationBar() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('navigation-bar').style.display = 'block';
}

// Other functions remain the same...
