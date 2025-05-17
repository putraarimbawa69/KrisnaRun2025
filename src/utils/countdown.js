// src/utils/countdown.js
// Fungsi untuk menghitung mundur ke 28 Juni 2025 06:00:00
export default function startCountdown() {
  // Tentukan tanggal target: 28 Juni 2025 06:00:00
  const targetDate = new Date('2025-06-28T06:00:00').getTime();

  // Dapatkan referensi ke elemen-elemen countdown di DOM
  const daysEl = document.querySelector('.countdown-days');
  const hoursEl = document.querySelector('.countdown-hours');
  const minutesEl = document.querySelector('.countdown-minutes');
  const secondsEl = document.querySelector('.countdown-seconds');

  // Fungsi untuk memperbarui sisa waktu setiap detik
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      // Jika waktu countdown telah berakhir, hentikan interval
      clearInterval(intervalId);
      return;
    }
    // Hitung sisa hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Perbarui konten teks pada elemen countdown di halaman
    if (daysEl) daysEl.textContent = String(days);
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  // Jalankan sekali segera agar tampilan awal tidak kosong
  updateCountdown();
  // Perbarui setiap 1000ms (1 detik)
  const intervalId = setInterval(updateCountdown, 1000);
  return intervalId; // Kembalikan ID interval untuk pembersihan jika perlu
}
