document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. شيفرة القائمة الجانبية والوضع الليلي ---
    const openNavBtn = document.getElementById('openNavBtn');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const sideNav = document.getElementById('side-nav');
    const overlay = document.getElementById('overlay');

    function openNav() { if (sideNav) sideNav.style.width = "280px"; if (overlay) overlay.style.display = "block"; }
    function closeNav() { if (sideNav) sideNav.style.width = "0"; if (overlay) overlay.style.display = "none"; }

    if (openNavBtn) openNavBtn.addEventListener('click', openNav);
    if (closeNavBtn) closeNavBtn.addEventListener('click', closeNav);
    if (overlay) overlay.addEventListener('click', closeNav);
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check if dark mode is saved in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.textContent = '☀️';
    } else {
        if(darkModeToggle) darkModeToggle.textContent = '🌙';
    }

    if(darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = '☀️';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = '🌙';
            }
        });
    }

    // --- 2. شيفرة القائمة المنسدلة (Accordion) ---
    const accordions = document.querySelectorAll('.sidenav .accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    });

    // --- 3. شيفرة تفعيل أزرار المشاركة ---
    const shareSection = document.querySelector('.share-section');
    if (shareSection) {
        const pageUrl = encodeURIComponent(window.location.href);
        const pageTitle = encodeURIComponent(document.title);

        const twitterBtn = shareSection.querySelector('.share-btn.twitter');
        const facebookBtn = shareSection.querySelector('.share-btn.facebook');
        const whatsappBtn = shareSection.querySelector('.share-btn.whatsapp');
        const telegramBtn = shareSection.querySelector('.share-btn.telegram');

        if (twitterBtn) {
            twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            twitterBtn.target = '_blank';
            twitterBtn.rel = 'noopener noreferrer';
        }
        if (facebookBtn) {
            facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            facebookBtn.target = '_blank';
            facebookBtn.rel = 'noopener noreferrer';
        }
        if (whatsappBtn) {
            whatsappBtn.href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
            whatsappBtn.target = '_blank';
            whatsappBtn.rel = 'noopener noreferrer';
        }
        if (telegramBtn) {
            telegramBtn.href = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
            telegramBtn.target = '_blank';
            telegramBtn.rel = 'noopener noreferrer';
        }
    }

});