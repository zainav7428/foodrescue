import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ImpactSection />
        <FeaturesSection />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="hero-tagline">
          REDUCE WASTE • FEED PEOPLE • BUILD A BETTER TOMORROW
        </p>

        <h1>
          Good Food
          <br />
          <span>Brighter Tomorrows</span>
        </h1>

        <p className="hero-description">
          Connecting surplus food from restaurants, hotels,
          colleges and events to people in need.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started →
          </button>

          <button className="secondary-btn">
            ▶ Watch Video
          </button>
        </div>

        <div className="hero-stats">
          <Stat number="1,250+" label="Kg Food Rescued" />
          <Stat number="3,400+" label="Meals Provided" />
          <Stat number="185+" label="Active Donors" />
          <Stat number="24+" label="Partner NGOs" />
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/images/food-donation.jpg"
          alt="Food donation"
        />
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="stat">
      <h3>{number}</h3>
      <p>{label}</p>
    </div>
  );
}

function ImpactSection() {
  return (
    <section className="impact-section">

      <div className="section-heading">
        <p>OUR MISSION</p>

        <h2>
          Small Actions.
          <span> Big Impact.</span>
        </h2>

        <p>
          Together, we can reduce food waste and help
          build a hunger-free community.
        </p>
      </div>

    </section>
  );
}

function FeaturesSection() {

  const features = [
    {
      icon: "🍽️",
      title: "Reduce Food Waste",
      description: "Give surplus food a new purpose."
    },
    {
      icon: "🤝",
      title: "Fight Hunger",
      description: "Help provide food to people in need."
    },
    {
      icon: "🌱",
      title: "Support Communities",
      description: "Build stronger and healthier communities."
    },
    {
      icon: "🌍",
      title: "Create a Sustainable Future",
      description: "Together for a better tomorrow."
    }
  ];

  return (
    <section className="features-section">

      <div className="feature-container">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

function CallToAction() {

  const handleGetStarted = () => {
    alert("Welcome to FoodRescue!");
  };

  return (
    <section className="cta-section">

      <div>
        <p>FOOD TODAY. HOPE TOMORROW.</p>

        <h2>
          Be a part of something
          <br />
          <span>bigger.</span>
        </h2>

        <p>
          Donate surplus food, volunteer your time,
          or help connect communities.
        </p>

        <button
          className="cta-btn"
          onClick={handleGetStarted}
        >
          Get Started →
        </button>
      </div>

    </section>
  );
}

export default Home;