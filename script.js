// Simple JavaScript for Artovia

document.addEventListener('DOMContentLoaded', function() {
    console.log('Artovia website loaded');

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
});