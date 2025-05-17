import { useState, useEffect } from 'preact/hooks'
import '../css/countdownCTA.css'

const CountdownCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const countdownDate = new Date('June 29, 2025 07:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    const timer = setInterval(updateCountdown, 1000)
    updateCountdown()
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown-section">
      <div className="pattern-overlay" />
      
      <div className="container">
        <div className="countdown-container">
          <h3 className="countdown-title">Event Dimulai Dalam:</h3>
          
          <div className="countdown-grid">
            <div className="countdown-item">
              <div className="countdown-number">{timeLeft.days}</div>
              <div className="countdown-label">Hari</div>
            </div>
            
            <div className="countdown-item">
              <div className="countdown-number">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="countdown-label">Jam</div>
            </div>

            <div className="countdown-item">
              <div className="countdown-number">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="countdown-label">Menit</div>
            </div>

            <div className="countdown-item">
              <div className="countdown-number">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="countdown-label">Detik</div>
            </div>
          </div>
        </div>

        <div className="cta-container">
          <h2 className="cta-title">Jangan Ketinggalan!</h2>
          <p className="cta-text">
            Daftar sekarang dan dapatkan harga spesial early bird!<br />
            Kuota terbatas untuk 100 peserta pertama
          </p>
          
          <a 
            href="https://eventbrite.com/krisna-run-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Daftar Sekarang!
          </a>
          
          <div className="cta-closing">
            Pendaftaran ditutup 25 Juni 2025
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountdownCTA