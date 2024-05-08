document.addEventListener('DOMContentLoaded', function () {
    const pantalla = document.getElementById('pantalla'); // se obtiene el elemento pantalla
    let numeroActual = ''; // se inicializa la variable numeroActual
    let operador = ''; // se inicializa la variable operador
    let numeroAnterior = ''; // se inicializa la variable numeroAnterior

    function actualizarPantalla(valor) { // se actualiza la pantalla con el valor que se le pase
        pantalla.value = valor; // se actualiza el valor de la pantalla
    } // value sirve para actualizar el valor de un elemento

    function realizarOperacion() { // se realiza la operacion segun el operador
        const numActual = parseFloat(numeroActual); // parseFloat convierte un string en un numero
        const numAnterior = parseFloat(numeroAnterior); // parseFloat convierte un string en un numero
        switch (operador) { // se realiza la operacion segun el operador
            case '+': // si el operador es +
                numeroActual = (numAnterior + numActual).toString(); // se realiza la operacion y se convierte en string, toString convierte un numero en un string
                break; // se rompe el switch
            case '-': // si el operador es -
                numeroActual = (numAnterior - numActual).toString(); // se realiza la operacion y se convierte en string
                break;
            case '*':
                numeroActual = (numAnterior * numActual).toString();
                break;
            case '/':
                if (numActual !== 0) {
                    numeroActual = (numAnterior / numActual).toString();
                } else {
                    numeroActual = 'Error';
                }
                break;
        }
        operador = '';
        numeroAnterior = '';
        actualizarPantalla(numeroActual);
    }

    clear.addEventListener('click', function () {
        numeroActual = '';
        operador = '';
        numeroAnterior = '';
        actualizarPantalla('000');
    });

    borrar.addEventListener('click', function () {
        numeroActual = numeroActual.slice(0, -1);
        actualizarPantalla(numeroActual);
    });

    porcentaje.addEventListener('click', function () {
        if (numeroActual !== '') {
            numeroActual = (parseFloat(numeroActual) / 100).toString();
            actualizarPantalla(numeroActual);
        }
    });

    division.addEventListener('click', function () {
        operador = '/';
        if (numeroActual !== '') {
            numeroAnterior = numeroActual;
            numeroActual = '';
        }
    });

    siete.addEventListener('click', function () {
        numeroActual += '7';
        actualizarPantalla(numeroActual);
    });

    ocho.addEventListener('click', function () {
        numeroActual += '8';
        actualizarPantalla(numeroActual);
    });

    nueve.addEventListener('click', function () {
        numeroActual += '9';
        actualizarPantalla(numeroActual);
    });

    multiplicacion.addEventListener('click', function () {
        operador = '*';
        if (numeroActual !== '') {
            numeroAnterior = numeroActual;
            numeroActual = '';
        }
    });

    cuatro.addEventListener('click', function () {
        numeroActual += '4';
        actualizarPantalla(numeroActual);
    });

    cinco.addEventListener('click', function () {
        numeroActual += '5';
        actualizarPantalla(numeroActual);
    });

    seis.addEventListener('click', function () {
        numeroActual += '6';
        actualizarPantalla(numeroActual);
    });

    restar.addEventListener('click', function () {
        operador = '-';
        if (numeroActual !== '') {
            numeroAnterior = numeroActual;
            numeroActual = '';
        }
    });

    uno.addEventListener('click', function () {
        numeroActual += '1';
        actualizarPantalla(numeroActual);
    });

    dos.addEventListener('click', function () {
        numeroActual += '2';
        actualizarPantalla(numeroActual);
    });

    tres.addEventListener('click', function () {
        numeroActual += '3';
        actualizarPantalla(numeroActual);
    });

    sumar.addEventListener('click', function () {
        operador = '+';
        if (numeroActual !== '') {
            numeroAnterior = numeroActual;
            numeroActual = '';
        }
    });

    dosCeros.addEventListener('click', function () {
        numeroActual += '00'; 
        actualizarPantalla(numeroActual);
    });

    cero.addEventListener('click', function () {
        if (numeroActual !== '' && numeroActual !== '0') { // !== para que no se repita el 0
            numeroActual += '0';
        } else if (numeroActual === '') {
            numeroActual = '0';
        }
        actualizarPantalla(numeroActual);
    });

    punto.addEventListener('click', function () {
        if (numeroActual === '') {
            numeroActual = '0.';
        } else if (!numeroActual.includes('.')) {
            numeroActual += '.';
        }
        actualizarPantalla(numeroActual);
    });

    igualar.addEventListener('click', function () {
        if (operador !== '' && numeroActual !== '' && numeroAnterior !== '') {
            realizarOperacion();
        }
    });
});
