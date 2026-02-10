// 1. Inisialisasi AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    disable: 'mobile' // Matikan animasi di HP jika ingin performa lebih ringan
});

// 2. Efek Mengetik (Typed.js) - Versi Nama NEVVO
var typed = new Typed('#typing-text', {
    strings: ['NEVVO'], 
    typeSpeed: 120,      
    showCursor: true,
    cursorChar: '|',
    loop: false          
});

// 3. Smooth Scroll & Navbar Auto-close & Progress Bar Trigger
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Tutup navbar mobile jika terbuka (Offcanvas Bootstrap 5)
        const offcanvasElement = document.querySelector('.offcanvas');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (bsOffcanvas) {
            bsOffcanvas.hide();
        }

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 4. Logic untuk mengisi Progress Bar saat di-scroll
window.addEventListener('scroll', function() {
    const skillsSection = document.querySelector('#skills');
    const bars = document.querySelectorAll('.progress-bar');
    
    if (skillsSection) {
        const pos = skillsSection.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.1;

        if (pos < screen) {
            bars.forEach(bar => {
                const val = bar.getAttribute('aria-valuenow');
                bar.style.width = val + '%';
            });
        }
    }
});