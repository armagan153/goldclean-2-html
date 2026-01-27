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
});
