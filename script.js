// 1. Inisialisasi AOS
AOS.init({ duration: 800, once: true, disable: 'mobile' });

// 2. Efek Mengetik
new Typed('#typing-text', {
    strings: ['NEVVO'], 
    typeSpeed: 100,      
    loop: false          
});

// 3. FIX MENU: Auto-close Navbar/Offcanvas after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvasElement = document.querySelector('.offcanvas');
        const instance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (instance) instance.hide();
    });
});

// 4. Progress Bar Scroll Animation
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('#skills');
    const bars = document.querySelectorAll('.progress-bar');
    
    if (skillsSection) {
        const pos = skillsSection.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.2;
        if (pos < screen) {
            bars.forEach(bar => {
                bar.style.width = bar.getAttribute('aria-valuenow') + '%';
            });
        }
    }
});