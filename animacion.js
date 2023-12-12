

document.querySelector('img').addEventListener("click", () => {

    let elemento = document.querySelector('img');

    // Número de vibraciones
    var numVibraciones = 5;

    // Distancia y dirección del desplazamiento en píxeles
    var distancia = 5;

    // Realizar la animación de vibración
    for (var i = 0; i < numVibraciones; i++) {
        setTimeout(function() {
            // Desplazamiento a la izquierda
            elemento.style.transform = 'translateX(' + -distancia + 'px)';
        }, i * 100);

        setTimeout(function() {
            // Regresar a la posición original
            elemento.style.transform = 'translateX(0)';
        }, (i * 100) + 50);
    }

});