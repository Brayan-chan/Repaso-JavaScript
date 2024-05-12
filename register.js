document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Obtener usuarios registrados o crear un nuevo arreglo vacío
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, email: email, password: password });

    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    window.location.href = 'login.html'; // Redirigir a la página de login
});
