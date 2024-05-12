document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var isAdmin = (username === 'admin');

    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        localStorage.setItem('authenticated:' + username, 'true'); // Marcar como inicio de sesión exitoso
        if (isAdmin) {
            window.location.href = 'admin.html'; // Redirigir a la página de administrador
        } else {
            window.location.href = 'user.html'; // Redirigir a la página de usuario normal
        }
    } else {
        alert('Invalid username or password');
        localStorage.setItem('authenticated:' + username, 'false'); // Marcar como inicio de sesión no exitoso
    }
});
