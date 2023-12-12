
    let instrumentosBateria = document.querySelectorAll('.grid-item');

    instrumentosBateria.forEach(function(instrumento) {
        instrumento.addEventListener('click', function() {
            // Obtiene el ID del sonido asociado al elemento
            let idSonido = instrumento.querySelector('audio').id;
            
            // Reproduce el sonido
            let sonido = document.getElementById(idSonido);
            sonido.currentTime = 0;  // Reinicia la reproducción si ya está en curso
            sonido.play();
        });
    });