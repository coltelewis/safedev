document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem('welcomeMessage');
    var loginRegisterLink = document.querySelector('.login-register-link');
    var loginRegisterText = document.querySelector('.login-register');

    if (username) {
        if (loginRegisterLink) {
            loginRegisterLink.href = 'profile.html';
        }
     
        if (loginRegisterText) {
            loginRegisterText.textContent = 'Profile';
        }
    }
});
