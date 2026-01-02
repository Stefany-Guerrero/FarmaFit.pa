const video = document.getElementById('promoVideo');
const btn = document.getElementById('soundBtn');

// Video autoplay inicial (mute obligatorio en muchos navegadores)
video.muted = true;
video.play();

// Función para alternar sonido
btn.addEventListener('click', () => {
  if(video.muted){
    video.muted = false;
    btn.textContent = '🔇 Silenciar';
  } else {
    video.muted = true;
    btn.textContent = '🔊 Activar sonido';
  }
});

// Intersection Observer para pausar y silenciar cuando la sección no está visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      video.play();
    } else {
      video.pause();
      video.muted = true;
      btn.textContent = '🔊 Activar sonido'; // reset del botón
    }
  });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.promocionales'));
