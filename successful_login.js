document.addEventListener('DOMContentLoaded', function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    
    var successfulLogins = [];
    var unsuccessfulLogins = [];

    users.forEach(function(user) {
        var username = user.username;
        var isAuthenticated = localStorage.getItem('authenticated:' + username) === 'true';

        if (isAuthenticated) {
            successfulLogins.push(username);
        } else {
            unsuccessfulLogins.push(username);
        }
    });

    displayLogins('success-logins', 'Successful Logins', successfulLogins);
    displayLogins('unsuccessful-logins', 'Unsuccessful Logins', unsuccessfulLogins);
});

function displayLogins(containerId, title, logins) {
    var container = document.getElementById(containerId);
    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    container.appendChild(titleElement);

    if (logins.length === 0) {
        var messageElement = document.createElement('p');
        messageElement.textContent = 'No logins found.';
        container.appendChild(messageElement);
    } else {
        var listElement = document.createElement('ul');
        logins.forEach(function(login) {
            var listItem = document.createElement('li');
            listItem.textContent = login;
            listElement.appendChild(listItem);
        });
        container.appendChild(listElement);
    }
}
