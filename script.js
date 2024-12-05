document.getElementById('button').addEventListener('click', function () {
    // Selecciona el elemento 'section'
    const section = document.getElementById('main-section');
  
    // Selecciona el título 'h1'
    const h1 = section.querySelector('h1');
  
    // Cambia el fondo a negro y el texto a blanco
    section.classList.add('black-bg');
    h1.classList.add('black-text');
  
    // Activa la animación del corazón
    document.querySelector('.heart').classList.add('animate');
  
    // Muestra los textos adicionales después de un tiempo
    setTimeout(() => {
      document.getElementById('text1').classList.add('visible'); // Muestra el primer texto
    }, 3000); // Después de 3 segundos
  
    setTimeout(() => {
      document.getElementById('text2').classList.add('visible'); // Muestra el segundo texto
    }, 6000); // Después de 6 segundos

    // Después de 8 segundos, muestra el video y el audio
    setTimeout(() => {
        document.getElementById('media-container').classList.remove('hidden'); // Muestra el contenedor multimedia
    }, 8000); // Después de 8 segundos
  });
  