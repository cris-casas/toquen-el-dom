// Agrega un event listener para detectar eventos de teclado en el documento
document.addEventListener( 'keydown', function ( event )
{
    // Define un array con las teclas que se van a verificar
    const keysToCheck = [ 'q', 'w', 'e', 'r', 'a', 's', 'd', 'x' ];

    // Verifica si la tecla presionada está en el array
    if ( keysToCheck.includes( event.key ) )
    {
        // Si la tecla está en el array, llama a la función playSound con la tecla como argumento
        playSound( event.key );
    }
} );

// Función para reproducir el sonido asociado a una tecla
function playSound ( key )
{
    // Obtiene el elemento de audio correspondiente a la tecla
    let audioElement = document.getElementById( 'sound' + key.toUpperCase() );

    // Verifica si el elemento de audio existe
    if ( audioElement )
    {
        // Reinicia la reproducción al inicio y reproduce el sonido
        audioElement.currentTime = 0;
        audioElement.play();
    }
}