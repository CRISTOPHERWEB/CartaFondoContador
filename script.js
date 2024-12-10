// Selección de elementos
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

// Evento para reproducir el video
playButton.addEventListener('click', () => {
  // Intenta reproducir el video
  video.play()
    .then(() => {
      console.log('Video reproduciéndose con audio.');
    })
    .catch((error) => {
      console.error('Error al intentar reproducir el video:', error);
    });
});

// Selección de elementos
const container = document.getElementById("container-heart");
const heart = document.getElementById("heart");
const button = document.getElementById("trans1");

// Evento de clic
button.addEventListener("click", () => {
  // Cambia el color del fondo
  container.classList.add("active");

  // Desvanecer el corazón después de 1 segundo
  setTimeout(() => {
    heart.classList.add("hidden");
  }, 1000); // Tiempo sincronizado con la transición del fondo
});

// Seleccionar elementos
const tapa = document.getElementById('tapaAudio');
const audio = document.getElementById('audio');

// Reproducir audio al hacer clic en la tapa
tapa.addEventListener('click', () => {
  audio.currentTime = 0; // Reinicia el audio
  audio.play(); // Reproduce el audio
});