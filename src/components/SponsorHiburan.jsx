import '../css/sponsorhiburan.css'

const SponsorHiburan = () => {
  const base = import.meta.env.BASE_URL;
  const sponsors = [
  { logo: `${base}assets/sponsors/krisna-group.png`, alt: 'Krisna Group' },
  { logo: `${base}assets/sponsors/bali-gov.png`, alt: 'Pemprov Bali' },
  { logo: `${base}assets/sponsors/garuda.png`, alt: 'Garuda Indonesia' },
  { logo: `${base}assets/sponsors/aqua.png`, alt: 'Aqua' },
  { logo: `${base}assets/sponsors/gojek.png`, alt: 'Gojek' },
  { logo: `${base}assets/sponsors/ultra-milk.png`, alt: 'Ultra Milk' },
  { logo: `${base}assets/sponsors/kawara.png`, alt: 'Kawara' },
  { logo: `${base}assets/sponsors/bonk.png`, alt: 'Bonk' },
  ]

  const entertainments = [
    { icon: '🎵', title: 'Live Music' },
    { icon: '💃', title: 'Tari Kecak' },
    { icon: '🎭', title: 'Tari Barong' },
    { icon: '🥁', title: 'Gamelan Show' },
    { icon: '🎤', title: 'Standup Comedy' },
    { icon: '📸', title: 'Photo Booth' }
  ]

  return (
    <section className="sponsor-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sponsor & Hiburan</h2>
          <p className="section-subtitle">Didukung oleh mitra terbaik</p>
        </div>

        {/* Sponsor Grid */}
        <div className="sponsor-grid">
          {sponsors.map((sponsor, index) => (
            <div className="sponsor-card" key={index}>
              <img 
                src={sponsor.logo} 
                alt={sponsor.alt} 
                className="sponsor-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Hiburan Section */}
        <div className="entertainment-section">
          <h3 className="entertainment-title">Hiburan Spesial</h3>
          <div className="entertainment-grid">
            {entertainments.map((item, index) => (
              <div className="entertainment-card" key={index}>
                <span className="entertainment-icon">{item.icon}</span>
                <span className="entertainment-text">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorHiburan