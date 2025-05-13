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
    updateCarousel();
  }
  setInterval(() => {
  nextImage();
}, 5000); // troca a imagem a cada 5000ms (5 segundos)


    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.querySelectorAll('.product-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }

    // Fechar ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
