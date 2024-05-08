document.addEventListener('DOMContentLoaded', function () {
    const language = document.querySelector('.language');
    const doctype = document.querySelector('.doctype');
    const head = document.querySelector('.head');
    const metadatos = document.querySelector('.metadatos');
    const body = document.querySelector('.body');
    const close = document.querySelector('.close');

    doctype.addEventListener('click', function () {
        infoDoctype();
    });

    language.addEventListener('click', function () {
        infoLanguage();
    });

    head.addEventListener('click', function () {
        infoHead();
    });

    metadatos.addEventListener('click', function () {
        infoMeta();
    });

    body.addEventListener('click' , function () {
        infoBody();
    });

    close.addEventListener('click', function () {
        infoClose();
    });
});

function infoDoctype() {
    //innertHTML sirve para insertar informacion tipo html
    document.querySelector('.info').innerHTML =
    '<h1 class="gradient">DOCTYPE</h1> <p>Definición del tipo de documento HTML</p>';
}

function infoLanguage() {
    document.querySelector('.info').innerHTML =
    '<h1 class="gradient">Language EN-ES</h1> <p>Definición del tipo de lenguaje por defecto</p>';
}

function infoHead() {
    document.querySelector('.info').innerHTML =
    '<h1 class="gradient">Head</h1> <p>Definición e importación de metadatos, información que se le brinda al navegador</p>';
}

function infoMeta() {
    document.querySelector('.info').innerHTML =
    '<h1 class="gradient">Metadatos</h1> <p>UTF-8 para aceptar signos de puntuación. <br>Viewport para definir los tamaños en el navegador.</p>';
}

function infoBody () {
    document.querySelector('.info').innerHTML =
    '<h1 class="gradient">Body</h1> <p>Todo el contenido de la página, etiquetas, etc.</p>';
}

function infoClose () {
    document.querySelector('.info').innerHTML = 
    '<h1 class="gradient">Close html</h1> <p>Antes de cerrar html se hacen las imports de los scripts</p>';
}