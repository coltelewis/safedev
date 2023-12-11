document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('welcomeMessage');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('welcomeMessage');
        localStorage.removeItem('isSignedUp');
        window.location.href = 'index.html';
    });
});