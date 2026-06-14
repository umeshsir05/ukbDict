document.addEventListener('DOMContentLoaded', function() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentFile) {
            link.classList.add('active');
        }
    });
});