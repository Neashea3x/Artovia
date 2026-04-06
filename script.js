// Simple JavaScript for Artovia

document.addEventListener('DOMContentLoaded', function() {
    console.log('Artovia website loaded');

    // Example: Add click event to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navigating to:', this.href);
        });
    });
});