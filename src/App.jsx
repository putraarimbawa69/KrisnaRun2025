import Header from './components/Header';
import PosterSection from './components/PosterSection';
import CountdownCTA from './components/CountdownCTA';
import BenefitSection from './components/Benefit';
import SponsorHiburan from './components/SponsorHiburan';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="container">
          <PosterSection />
          <CountdownCTA />
          <BenefitSection />
          <SponsorHiburan />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;