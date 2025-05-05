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

// Basic form submission alert (replace with actual submission logic)
document.querySelector('.form-container form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual submission for this example
    alert('Formulário enviado! (Esta é uma demonstração)');
    // In a real scenario, you would send the data to a server here.
    this.reset(); // Optional: reset form after submission
});

// Add active class to nav link on scroll (optional enhancement)
// This requires more complex logic to track scroll position relative to sections.
// For simplicity, this is omitted in this basic version.

// Cookie consent banner logic (optional)
// Could be added here if needed.
