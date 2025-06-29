/* Fungsi untuk membuat padding top sesuai dengan kebutuhan Section Work Process. */
function updatePadding() {
  var profile = document.querySelector(".profile"); // menangkap elemen dengan class profile.
  var workProcces = document.querySelector(".work-process"); // menangkap elemen dengan class work-process.
  
  var profileHeight = profile.offsetHeight; // mendapatkan tinggi elemen profile, lalu menyimpannya ke variabel profileHeight.
  var profilePaddingValue = profileHeight * 0.2; // menghitung nilai (profileHeight * 0.2), lalu menyimpannya ke variabel profilePaddingValue
  
  workProcces.style.paddingTop = profilePaddingValue + 130 + "px"; // mengubah nilai padding-top pada elemen workProcces dengan nilai (profilePaddingValue + 130)px.
}
window.onload = updatePadding; // saat halaman selesai dimuat sepenuhnya, maka jalankan fungsi updatePadding.
window.onresize = updatePadding; // saat ukuran jendela browser diubah, maka fungsi updatePadding akan dipanggil atau dijalankan ulang.







/* Fungsi untuk menyesuaikan tinggi class item agar selalu berbentuk persegi. */
var items = document.querySelectorAll('.item'); // menangkap elemen dengan class item.
function makeSquares() {
  for (var i = 0; i < items.length; i++) { // membuat pengulangan sebanyak berapa banyak class item ada (items.length).
    var widthItems = items[i].offsetWidth; // setiap pengulangan akan mengambil lebar elemen items, lalu menyimpannya ke variabel widthItems.
    items[i].style.height = widthItems + 'px'; // setiap pengulangan akan mengubah tinggi elemen items dengan nilai (widthItems)px.
  }
}
makeSquares(); // memanggil fungsi pertama kali, untuk membuat tinggi class item sama dengan lebar nya.
window.addEventListener('resize', makeSquares); // setiap kali window di resize, jalankan fungsi makeSquares().







/* Fungsi untuk membuat Navigation Bar yang dinamis pada ukuran mobile. */
const hambMenu = document.querySelector('.hamburger-menu'); // menangkap elemen dengan class hamburger-menu.
const hambMenuIcon = document.querySelector('.hamburger-menu i'); // menangkap ikon pada class hamburger-menu
const navMenu = document.querySelector('.nav-menu'); // menangkap elemen dengan class nav-menu.
navMenu.style.height = '0px'; // mengubah tinggi elemen navMenu menjadi 0px untuk pertama kalinya.


hambMenu.addEventListener('click', function() { // jika tombol hambMenu di klik, maka jalankan fungsi berikut.
  hambMenuIcon.classList.toggle('fa-xmark'); // jika saat di klik, mengubah tampilan ikon hambMenu secara dinamis.
  if (navMenu.style.height == '0px') { // jika saat di klik, tinggi navMenu sedang dalam kondisi tinggi 0px, maka ubah tinggi navMenu menjadi setara dengan tinggi kontennya secara penuh.
    navMenu.style.height = navMenu.scrollHeight + 'px';
  } else { // jika saat di klik, tinggi navMenu sedang dalam kondisi tinggi konten secara penuh, maka ubah tinggi navMenu menjadi 0px.
    navMenu.style.height = '0px';
  }
})


function cekUkuranLayar() { // mengubah tinggi navMenu sesuai kebutuhan.
  if (window.innerWidth > 745) { // jika lebar layar lebih dari 745px, maka ubah tinggi navMenu menjadi auto dan jika ada class fa-xmark pada elemen hambMenuIcon maka akan dihapus.
    navMenu.style.height = 'auto';
    hambMenuIcon.classList.remove('fa-xmark');
  } else if (window.innerWidth <= 745 && navMenu.style.height == navMenu.scrollHeight + 'px') { // jika lebar layar kurang dari sama dengan 745px dan tinggi navMenu sesuai dengan tinggi aslinya, maka pertahankan tinggi navMenu menjadi tetap sesuai dengan tinggi aslinya.
    navMenu.style.height = navMenu.scrollHeight + 'px';
  } else { // jika tinggi navMenu 0px, maka pertahankan tinggi navMenu menjadi tetap 0px.
    navMenu.style.height = '0px';
  }
}
cekUkuranLayar(); // memanggil fungsi cekUkuranLayar untuk menerapkan perintah pertama kali terlebih dahulu.
window.addEventListener('resize', cekUkuranLayar); // jika layar di resize, maka jalankan fungsi cekUkuranLayar().







/* Fungsi untuk membuat tema dark mode dan light mode. */
const themeBtn = document.querySelector('.theme-btn'); // menangkap elemen dengan class theme-btn.
const header = document.querySelector('header'); // menangkap elemen dengan tag header.
const portfolio = document.querySelector('.portfolio'); // menangkap elemen dengan class portfolio.
const profileImg = document.querySelector('.profile-img'); // menangkap elemen dengan class profile-img.


function applyTheme(theme) { // fungsi untuk mengaplikasikan tema, fungsi ini menyediakan satu parameter yang diwakili dengan nama theme.
  if (theme == 'light') { // jika parameter theme berisi nilai 'light' maka jalankan fungsi berikut.
    document.documentElement.style.setProperty('--gray', '#ebecee'); // mengubah nilai variabel CSS gray menjadi #ebecee.
    document.documentElement.style.setProperty('--white', '#fff'); // mengubah nilai variabel CSS white menjadi #fff.
    document.documentElement.style.setProperty('--black', '#111'); // mengubah nilai variabel CSS black menjadi #111.
    document.documentElement.style.setProperty('--nav-line', '#f5f5f5');
    document.documentElement.style.setProperty('--color-shadow', '17, 17, 17'); // mengubah nilai variabel CSS color-shadow menjadi 17, 17, 17.
    header.style.backgroundImage = 'linear-gradient(to top, #d1d6da, #dfe4e8, #ececec)'; // mengubah warna background header menjadi linear-gradient(to top, #d1d6da, #dfe4e8, #ececec).
    portfolio.style.backgroundImage = 'url(./Media/portfolio-light-bg.jpg)'; // mengubah gambar background portfolio menjadi portfolio-light-bg.jpg.
    profileImg.style.backgroundImage = 'url(./Media/profile-light.jpg)'; // mengubah gambar background profileImg menjadi profile-light.jpg.
  } 
  
  else { // jika parameter theme berisi nilai 'dark' maka jalankan fungsi berikut.
    document.documentElement.style.setProperty('--gray', '#1f1f1f'); // mengubah nilai variabel CSS gray menjadi #1f1f1f.
    document.documentElement.style.setProperty('--white', '#111'); // mengubah nilai variabel CSS white menjadi #111.
    document.documentElement.style.setProperty('--black', '#fff'); // mengubah nilai variabel CSS black menjadi #fff.
    document.documentElement.style.setProperty('--nav-line', '#1a1a1a');
    document.documentElement.style.setProperty('--color-shadow', '255, 255, 255'); // mengubah nilai variabel CSS color-shadow menjadi 255, 255, 255.
    header.style.backgroundImage = 'linear-gradient(to top, #121212, #1a1a1a, #1f1f1f)'; // mengubah warna background header menjadi linear-gradient(to top, #121212, #1a1a1a, #1f1f1f).
    portfolio.style.backgroundImage = 'url(./Media/portfolio-dark-bg.jpg)'; // mengubah gambar background portfolio menjadi portfolio-dark-bg.jpg.
    profileImg.style.backgroundImage = 'url(./Media/profile-dark.jpg'; // mengubah gambar background profileImg menjadi profile-dark.jpg.
  }
}


function applyThemeClass(theme) { // fungsi untuk mengaplikasikan tombol tema dark mode dan light mode, fungsi ini menyediakan satu parameter yang diwakili dengan nama theme.
  if (theme == 'light') { // jika parameter theme berisi nilai 'light' maka jalankan fungsi berikut.
    themeBtn.classList.add('fa-sun'); // class fa-sun ditambahkan ke elemen themeBtn.
    themeBtn.classList.remove('fa-moon'); // class fa-moon dihapus dari elemen themeBtn.
  } 
  
  else { // jika parameter theme berisi nilai 'dark' maka jalankan fungsi berikut.
    themeBtn.classList.add('fa-moon'); // class fa-moon ditambahkan ke elemen themeBtn.
    themeBtn.classList.remove('fa-sun'); // class fa-sun dihapus dari elemen themeBtn.
  }
}


themeBtn.addEventListener('click', function(e) { // tombol dengan event listener untuk mengubah tema, jika themeBtn diklik maka jalankan fungsi berikut.
  e.preventDefault(); // mencegah aksi bawaan dari elemen anchor pada themeBtn, yaitu navigasi ke URL yang ada di atribut href.

  const currentTheme = localStorage.getItem('theme') || 'light'; // mengambil nilai 'theme' dari localStorage, jika belum ada nilainya maka default nilainya adalah light. Jadi saat halaman pertama kali dibuka dan belum pernah memilih tema sebelumnya, tema yang digunakan adalah light. Setelah itu nilai 'theme' disimpan ke variabel currentTheme.
  const newTheme = currentTheme == 'light' ? 'dark' : 'light'; // jika nilai currentTheme adalah light ubah ke dark, jika nilai currentTheme adalah dark ubah ke light. Setelah itu hasil nilainya disimpan ke variabel newTheme.

  applyTheme(newTheme); // jika themeBtn diklik maka akan menjalankan fungsi applyTheme() dengan argumen newTheme yang diambil dari variabel newTheme.
  applyThemeClass(newTheme); // jika themeBtn diklik maka akan menjalankan fungsi applyThemeClass() dengan argumen newTheme yang diambil dari variabel newTheme.
  localStorage.setItem('theme', newTheme); // menyimpan nilai tema baru (newTheme) ke dalam localStorage browser dengan key bernama 'theme'.
})


window.addEventListener('DOMContentLoaded', function() { // saat seluruh struktur HTML selesai dimuat, jalankan fungsi berikut. Event listener ini akan menjalankan fungsi di dalamnya saat seluruh struktur HTML (DOM) selesai dimuat. Ini terjadi sebelum gambar, video dan resource besar lainnya selesai dimuat.
  const savedTheme = localStorage.getItem('theme') || 'light'; // mengambil data tema terakhir yang pernah disimpan ke localStorage dengan key 'theme'. Jika belum ada data pada 'theme', misalnya saat pertama kali membuka web nya, maka nilai defaultnya adalah light.
  applyTheme(savedTheme); // memanggil fungsi applyTheme() untuk mengubah warna dan gambar latar sesuai dengan nilai pada variabel savedTheme.
  applyThemeClass(savedTheme); // memanggil fungsi applyThemeClass() untuk mengatur ikon tombol tema, misalnya ikon matahari untuk light mode dan ikon bulan untuk dark mode.
}) // Kalau tidak ada bagian ini, maka setiap kali halaman dibuka ulang, tema akan selalu balik ke default (light mode), dan itu menghilangkan fungsi dari penyimpanan localStorage.