const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    // Menambah/menghapus class 'active' pada ul.nav-links
    navLinks.classList.toggle('active');
    
    // Animasi simpel ganti ikon (opsional)
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});
