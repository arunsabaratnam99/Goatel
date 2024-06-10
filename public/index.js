document.addEventListener('DOMContentLoaded', function () {
  const prevButtons = document.querySelectorAll('.carousel-control.prev');
  const nextButtons = document.querySelectorAll('.carousel-control.next');
  const tracks = document.querySelectorAll('.carousel-track');

  prevButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const track = tracks[index];
      const trackWidth = track.offsetWidth;
      track.scrollBy({
        left: -trackWidth / 3,
        behavior: 'smooth'
      });
    });
  });

  nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const track = tracks[index];
      const trackWidth = track.offsetWidth;
      track.scrollBy({
        left: trackWidth / 3,
        behavior: 'smooth'
      });
    });
  });
});
