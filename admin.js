document.addEventListener('DOMContentLoaded', function() {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var tableBody = document.getElementById('user-table-body');
    users.forEach(function(user) {
        var row = tableBody.insertRow();
        var cellUsername = row.insertCell(0);
        var cellEmail = row.insertCell(1);
        cellUsername.textContent = user.username;
        cellEmail.textContent = user.email;
    });
});
