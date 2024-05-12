document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const datos = document.getElementById('datos');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        nombre = document.getElementById('nombre').value;
        correo = document.getElementById('correo').value;
        password = document.getElementById('password').value;
        alert('Tus datos son: ' + '\n' + 'Nombre: ' + nombre + '\n' + 'Correo: ' + correo + '\n' + 'Contraseña: ' + password);
        insertar();
    });

    function insertar () {
        resName.value += nombre;
        resCorreo.value += correo;
        resPassword.value += password;
        form.reset();
        if (nombre == 'Brayan-chan') {
            alert('Bienvenido Brayan')
            location.href = 'acceso.html'
        } else {
            alert('No eres administrador')
            alert('Vuelve a intentarlo')
        }
    }

});