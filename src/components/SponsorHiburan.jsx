import '../css/sponsorhiburan.css'

const SponsorHiburan = () => {
  const sponsors = [
    { logo: '/assets/sponsors/krisna-group.png', alt: 'Krisna Group' },
    { logo: '/assets/sponsors/bali-gov.png', alt: 'Pemprov Bali' },
    { logo: '/assets/sponsors/garuda.png', alt: 'Garuda Indonesia' },
    { logo: '/assets/sponsors/aqua.png', alt: 'Aqua' },
    { logo: '/assets/sponsors/gojek.png', alt: 'Gojek' },
    { logo: '/assets/sponsors/ultra-milk.png', alt: 'Ultra Milk' },
    { logo: '/assets/sponsors/kawara.png', alt: 'kawara' },
    { logo: '/assets/sponsors/bonk.png', alt: 'bonk' }
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