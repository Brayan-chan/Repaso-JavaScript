document.addEventListener('DOMContentLoaded', function () {
    const nuevo = document.getElementById('crear');
    const createmail = document.querySelector('.create-mail');
    createmail.style.marginBlock = '50%';

    nuevo.addEventListener('click', function (e) {
        e.preventDefault()
        const contenedor = document.querySelector('.container');
        contenedor.style.display = 'block'
        createmail.style.marginBlock = '2px'
        contenedor.innerHTML = 
        '<form id="nuevoCorreo">' +
            '<label for="remitente" class="gradient-primary p-5">Remitente:</label>' +
            '<input type="email" name="remitente" id="remitente" required>' +
            '<div class="mbl-5">' +
                '<label for="destinatario" class="gradient-primary p-5">Destinatario:</label>' +
                '<input type="email" name="destinatario" id="destinatario" required>' +
            '</div>' +
            '<div class="mbl-5">' +
                '<label for="asunto" class="gradient-primary p-5">Asunto:</label>' +
                '<input type="text" name="asunto" id="asunto" required>' +
            '</div>' +
            '<div class="mbl-5">' +
                '<textarea name="cuerpo" id="cuerpo"' +
                    'placeholder="Aquí va el cuerpo de tu correo electrónico."></textarea>' +
            '</div>' +
            '<div class="mbl-10 acciones" id="acciones">' +
                '<button id="guardar">Guardar</button>' +
                '<button type="submit" id="enviar">Enviar</button>' +
                '<button id="destacar">Destacar</button>' +
                '<button id="archivar">Archivar</button>' +
                '<button id="spam">Spamear</button>' +
                '<button id="bloquear">Bloquear</button>' +
            '</div>' +
        '</form>' 

        contenedor.createElement = ('<script src="acciones.js"></script>')
    });

});