const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const submenuButtons = document.querySelectorAll('.has-submenu');

// Fungsi utama untuk Toggle (Buka/Tutup) Menu Samping
function toggleMenu() {
  menuBtn.classList.toggle('active'); 
  menu.classList.toggle('active'); 
  overlay.classList.toggle('active');
}

// Fungsi untuk menutup menu saat area di luar (overlay) diklik
function closeMenu() {
  menuBtn.classList.remove('active'); 
  menu.classList.remove('active'); 
  overlay.classList.remove('active');
}

// Logika untuk Dropdown / Submenu
submenuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Menambah/menghapus class 'active' untuk memutar ikon panah & memunculkan submenu
    btn.classList.toggle('active');
  });
});
