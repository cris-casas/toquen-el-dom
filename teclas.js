document.addEventListener( 'DOMContentLoaded', function ()
{
    let sonidoTecla = document.getElementById( "q" );

    // Asegúrate de que keypress esté definida antes de usarla
    if ( typeof keypress !== 'undefined' )
    {
        // Configura la tecla 'q' con la librería keypress
        keypress.register_combo( {
            "keys": 'q',
            "on_keydown": function ()
            {
                console.log( "Tecla 'q' presionada" );
                playSound();
            }
        } );
    } else
    {
        console.error( "La librería keypress no está cargada correctamente." );
    }

    function playSound ()
    {
        console.log( "Intentando reproducir sonido" );
        let audioElement = document.getElementById( 'soundQ' );
        if ( audioElement )
        {
            audioElement.currentTime = 0;
            audioElement.play();
        } else
        {
            console.error( "Elemento de audio no encontrado" );
        }
    }
} );


/*
key: q;hi - hat
key: r;ride cymbal
key: w;high tom
key: e;mid tom
key: a;crash cymbal
key: s;crash cymbal
key: d;snare drum
key: f;floor tom
key: x;bass drum 
 */