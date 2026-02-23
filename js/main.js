document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.getElementById('mobile-menu-trigger');
    const close = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    function toggleMenu() {
        const isHidden = menu.classList.contains('translate-x-full');
        if (isHidden) {
            menu.classList.remove('translate-x-full');
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            menu.classList.add('translate-x-full');
            overlay.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (trigger) trigger.addEventListener('click', toggleMenu);
    if (close) close.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Optional: Hide/Show button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.pointerEvents = 'none';
            }
        });

        // Initial state
        scrollToTopBtn.style.transition = 'opacity 0.3s ease';
        if (window.scrollY <= 300) {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.pointerEvents = 'none';
        }
    }


    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-fade-up, .reveal-scale, .fade-in-section').forEach(section => {
        observer.observe(section);
    });
});
