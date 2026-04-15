// Simple JavaScript for Artjective

document.addEventListener('DOMContentLoaded', function() {
    console.log('Artjective website loaded');

    const clickedLinks = JSON.parse(localStorage.getItem('clickedLinks') || '[]');

    const updateLinkState = (link) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;
        if (clickedLinks.includes(href)) {
            link.classList.add('clicked-link');
        }
    };

    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
        updateLinkState(link);
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;
            if (!clickedLinks.includes(href)) {
                clickedLinks.push(href);
                localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks));
            }
            this.classList.add('clicked-link');
        });
    });

    // Modal functions
    window.openLogin = function() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    };

    window.closeLogin = function() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'none';
        }
    };

    // Handle login button clicks
    const loginButtons = document.querySelectorAll('button[onclick*="openLogin"], a[href*="login"]');
    loginButtons.forEach(btn => {
        if (btn.tagName === 'A') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                openLogin();
            });
        }
    });
});