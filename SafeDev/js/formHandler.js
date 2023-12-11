document.addEventListener('DOMContentLoaded', function() {
    var savedMessage = localStorage.getItem('welcomeMessage');
    if (savedMessage) {
        document.getElementById('memberMessage').textContent = savedMessage;
        document.getElementById('registrationForm').style.display = 'none';
    }

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var username = document.querySelector('input[name="username"]').value;
        var welcomeMessage = 'Welcome to the Club, ' + username + '!';

    
        document.getElementById('memberMessage').textContent = welcomeMessage;
    
        localStorage.setItem('welcomeMessage', username);
        this.style.display = 'none';
        localStorage.setItem('isSignedUp', true);
    });
});


