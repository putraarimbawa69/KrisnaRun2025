import '../css/benefit.css'

const Benefit = () => {
  const benefits = [
    {
      icon: '🎁',
      title: 'Goodie Bag Eksklusif',
      desc: 'Paket peserta premium berisi merchandise spesial dan voucher belanja eksklusif di gerai Krisna Group'
    },
    {
      icon: '🏆',
      title: 'Medali Finisher',
      desc: 'Medali desain limited edition dengan motif ukiran Bali tradisional untuk semua finisher'
    },
    {
      icon: '🎭',
      title: 'Experiential Package',
      desc: 'Akses ke sesi foto profesional dan pertunjukan budaya eksklusif pasca-event'
    },
    {
      icon: '💧',
      title: 'Hydration Station',
      desc: 'Paket hidrasi premium dengan air mineral kemasan khusus dan snack sehat khas Bali'
    },
    {
      icon: '📸',
      title: 'Foto Profesional',
      desc: 'Dokumentasi profesional selama event dengan latar landscape alam Bali yang ikonik'
    },
    {
      icon: '🛍️',
      title: 'Krisna Voucher',
      desc: 'Voucher belanja senilai 300rb untuk semua produk di jaringan Krisna Group'
    }
  ]

  return (
    <section className="benefit-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Benefit Eksklusif</h2>
          <p className="section-subtitle">Yang Akan Anda Dapatkan</p>
        </div>
        
        <div className="benefit-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="card-header">
                <div className="icon-wrapper">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
              <p className="benefit-desc">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefit