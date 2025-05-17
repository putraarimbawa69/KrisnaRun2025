// src/components/PosterSection.jsx
// PosterSection: menampilkan gambar poster utama acara
const PosterSection = () => {
  return (
    <section id="home">
      {/* Gambar poster acara - asumsikan file 'poster.jpg' ada di public/assets/ */}
      <img src="/assets/poster.jpg" alt="Poster KrisnaRun 2025" className="poster-image" style={{ width: '100%', height: 'auto' }} />
    </section>
  );
};

export default PosterSection;
