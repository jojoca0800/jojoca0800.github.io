// Smooth scrolling for navigation links
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

  let currentIndex = 0;
  const images = document.querySelectorAll('#carousel-images img');
  const totalImages = images.length;

  function updateCarousel() {
    const carousel = document.getElementById('carousel-images');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function prevImage() {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updateCarousel();
  }

  function nextImage() {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;


 const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
    updateCarousel();
  }
  setInterval(() => {
  nextImage();
}, 5000); // troca a imagem a cada 5000ms (5 segundos)
