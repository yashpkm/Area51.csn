import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "/logo-transparent.png";

const VENUE_IMAGES = {
  hero:
    "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/zedooz8h_WhatsApp%20Image%202026-03-12%20at%2019.53.jpeg",
  aboutBackdrop:
    "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/e3xojvpt_WhatsApp%20Image%202026-03-12%20at%2019.29.5j.jpeg",
  outdoorCourt:
    "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/fpyfawqe_WhatsApp%20Image%202026-03-17%20at%2017.20.33%20%281%29.jpeg",
  indoorCourt:
    "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/t2ey0bnl_WhatsApp%20Image%202026-03-17%20at%2017.20.34%20%282%29.jpeg",
  snooker:
    "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/itfzam43_WhatsApp%20Image%202026-03-17%20at%2017.20.35.jpeg",
  cafe:
    "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/bnj74xtj_WhatsApp%20Image%202026-03-12%20at%2019.29.54.jpeg",
};

const GALLERY_IMAGES = [
  {
    src: "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/do5gdinm_WhatsApp%20Image%202026-03-17%20at%2017.20.33.jpeg",
    caption: "Lantern-lit entrance lane",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/fpyfawqe_WhatsApp%20Image%202026-03-17%20at%2017.20.33%20%281%29.jpeg",
    caption: "Outdoor pickleball under lights",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/t2ey0bnl_WhatsApp%20Image%202026-03-17%20at%2017.20.34%20%282%29.jpeg",
    caption: "Indoor pickleball arena",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_8802cd2a-902b-46e1-9bc3-788961602526/artifacts/itfzam43_WhatsApp%20Image%202026-03-17%20at%2017.20.35.jpeg",
    caption: "Premium snooker area",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/rwi4h0gn_WhatsApp%20Image%202026-03-12%20at%2019.30.00.jpeg",
    caption: "Snooker space by night",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/8t05kz73_WhatsApp%20Image%202026-03-12%20at%2019.30.32.jpeg",
    caption: "Game ➜ Set ➜ Sip mood",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_classified-pages/artifacts/bnj74xtj_WhatsApp%20Image%202026-03-12%20at%2019.29.54.jpeg",
    caption: "Late-night cafe vibe",
  },
];

const AMENITIES = [
  {
    title: "Pickleball Indoor & Outdoor",
    description:
      "Fast games in an indoor arena plus open-air night sessions under lit courts.",
    image: VENUE_IMAGES.outdoorCourt,
    imagePosition: "center 78%",
  },
  {
    title: "All-Day & Late-Night Cafe",
    description:
      "Post-game hangs, conversations, and chill seating that keeps the vibe alive.",
    image: VENUE_IMAGES.cafe,
  },
  {
    title: "Snooker Area",
    description:
      "Dedicated snooker space with a focused, premium setup for long sessions.",
    image: VENUE_IMAGES.snooker,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "First time I came here was after a QR scan. Now this is our fixed night spot.",
    by: "Student group, CSN",
  },
  {
    quote:
      "You won’t expect this vibe so close to town. Hidden, but worth every visit.",
    by: "Weekend players",
  },
  {
    quote:
      "Pickleball + cafe + snooker in one place feels unfairly good for nearby folks.",
    by: "Area 51 regular",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hey Area 51, I want to visit and check availability.",
);
const WHATSAPP_LINK = `https://wa.me/918888921338?text=${whatsappMessage}`;
const INSTAGRAM_LINK =
  "https://www.instagram.com/area51_csn?igsh=MWVmbTBibjU3Nm00dA==";
const MAP_LINK = "https://maps.app.goo.gl/kh2vxng3qoN6iKJ66";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="area51-page" data-testid="area51-page">
      <div className="noise-layer" data-testid="area51-noise-layer" />

      <nav className="top-nav" data-testid="top-navigation">
        <div className="content-wrap nav-inner">
          <a href="#hero" className="logo-tag" data-testid="nav-logo-link">
            AREA 51
          </a>
          <div className="top-nav-links" data-testid="top-navigation-links">
            <a href="#about" data-testid="nav-about-link">
              About
            </a>
            <a href="#amenities" data-testid="nav-amenities-link">
              Amenities
            </a>
            <a href="#gallery" data-testid="nav-gallery-link">
              Gallery
            </a>
            <a href="#contact" data-testid="nav-contact-link">
              Contact
            </a>
          </div>
          <a
            className="nav-whatsapp"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-whatsapp-link"
          >
            <MessageCircle size={16} /> Chat
          </a>
        </div>
      </nav>

      <header className="hero-section" id="hero" data-testid="hero-section">
        <img
          src={VENUE_IMAGES.hero}
          alt="Area 51 entrance sign"
          className="hero-background"
          data-testid="hero-background-image"
        />
        <div className="hero-overlay" data-testid="hero-overlay" />
        <div className="content-wrap hero-content">
          <motion.img
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={LOGO_URL}
            alt="Area 51 Play Chill logo"
            className="hero-logo"
            data-testid="hero-logo-image"
          />
          <p className="class-label" data-testid="hero-classified-label">
            CLASSIFIED LOCATION • NEAR TOWN • CSN
          </p>
          <h1 data-testid="hero-main-heading">Area 51</h1>
          <p className="hero-subtext" data-testid="hero-sub-heading">
            A secret spot near town where games, cafe nights, and after-hours
            vibes meet. If you haven’t been here yet, you’re already missing the
            story.
          </p>
          <div className="hero-ctas" data-testid="hero-cta-group">
            <Button
              asChild
              className="btn-primary-a51"
              data-testid="hero-whatsapp-cta-button"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-whatsapp-cta-link"
              >
                <MessageCircle size={18} /> Message on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="btn-secondary-a51"
              data-testid="hero-gallery-cta-button"
            >
              <a href="#gallery" data-testid="hero-gallery-cta-link">
                See the vibe <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
          <div className="hero-points" data-testid="hero-key-points">
            <span data-testid="hero-point-pickleball">Indoor & Outdoor Courts</span>
            <span data-testid="hero-point-cafe">All Day + Late Night Cafe</span>
            <span data-testid="hero-point-snooker">Snooker Area</span>
          </div>
        </div>
      </header>

      <div className="restricted-strip" data-testid="restricted-strip">
        <Marquee speed={40} gradient={false}>
          <span className="restricted-copy" data-testid="restricted-strip-text">
            RESTRICTED AREA • AUTHORIZED VIBE ONLY • PLAY • CHILL • VIBE & REPEAT
            •
          </span>
        </Marquee>
      </div>

      <main data-testid="main-content">
        <motion.section
          id="about"
          className="section about-section-themed"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          data-testid="about-section"
        >
          <img
            src={VENUE_IMAGES.aboutBackdrop}
            alt="Area 51 ambience lights"
            className="about-background-image"
            data-testid="about-background-image"
          />
          <div className="about-background-overlay" data-testid="about-background-overlay" />

          <div className="content-wrap about-grid">
            <div className="about-copy">
              <p className="section-kicker" data-testid="about-kicker">
                SECRET SPOT NEAR THE TOWN
              </p>
              <h2 data-testid="about-heading">Not too far. Not too obvious.</h2>
              <p data-testid="about-description">
                Area 51 is built for curious people who want more than another
                ordinary hangout. Scan. Discover. Pull up with friends.
              </p>
              <p className="about-note" data-testid="about-fomo-note">
                Everyone will ask where this place was when they see your stories.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="amenities"
          className="section"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          data-testid="amenities-section"
        >
          <div className="content-wrap">
            <p className="section-kicker" data-testid="amenities-kicker">
              WHAT AREA 51 OFFERS
            </p>
            <h2 data-testid="amenities-heading">Amenities you actually want</h2>

            <div className="amenity-grid" data-testid="amenities-grid">
              {AMENITIES.map((amenity, index) => (
                <motion.article
                  whileHover={{ y: -4 }}
                  key={amenity.title}
                  className="amenity-card"
                  data-testid={`amenity-card-${index + 1}`}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    style={
                      amenity.imagePosition
                        ? { objectPosition: amenity.imagePosition }
                        : undefined
                    }
                    data-testid={`amenity-image-${index + 1}`}
                  />
                  <div className="amenity-content">
                    <h3 data-testid={`amenity-title-${index + 1}`}>{amenity.title}</h3>
                    <p data-testid={`amenity-description-${index + 1}`}>
                      {amenity.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="gallery"
          className="section"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          data-testid="gallery-section"
        >
          <div className="content-wrap">
            <p className="section-kicker" data-testid="gallery-kicker">
              REAL SHOTS
            </p>
            <h2 data-testid="gallery-heading">What your night can look like</h2>
            <div className="gallery-grid" data-testid="gallery-grid">
              {GALLERY_IMAGES.map((item, index) => (
                <figure
                  className="gallery-item"
                  key={item.src}
                  data-testid={`gallery-item-${index + 1}`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    data-testid={`gallery-image-${index + 1}`}
                  />
                  <figcaption data-testid={`gallery-caption-${index + 1}`}>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          className="section"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          data-testid="testimonials-section"
        >
          <div className="content-wrap">
            <p className="section-kicker" data-testid="testimonials-kicker">
              CONFIDENTIAL REVIEWS
            </p>
            <h2 data-testid="testimonials-heading">Heard from people who found it</h2>
            <div className="testimonial-grid" data-testid="testimonials-grid">
              {TESTIMONIALS.map((item, index) => (
                <article
                  key={item.quote}
                  className="testimonial-card"
                  data-testid={`testimonial-card-${index + 1}`}
                >
                  <p data-testid={`testimonial-quote-${index + 1}`}>{item.quote}</p>
                  <span data-testid={`testimonial-author-${index + 1}`}>{item.by}</span>
                </article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section section-contact"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          data-testid="contact-section"
        >
          <div className="content-wrap contact-grid">
            <div className="contact-card" data-testid="contact-info-card">
              <p className="section-kicker" data-testid="contact-kicker">
                FIND THE SPOT
              </p>
              <h2 data-testid="contact-heading">Ready to unlock Area 51?</h2>

              <div className="contact-line" data-testid="contact-address-row">
                <MapPin size={18} />
                <p data-testid="contact-address-text">
                  Area 51, A-14, near Railway Station MIDC, CSN, Maharashtra
                  431005
                </p>
              </div>

              <div className="contact-line" data-testid="contact-timing-row">
                <Clock3 size={18} />
                <p data-testid="contact-timing-text">Open till late nights</p>
              </div>

              <div className="contact-line" data-testid="contact-instagram-row">
                <Instagram size={18} />
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="contact-instagram-link"
                >
                  @area51_csn
                </a>
              </div>

              <div className="contact-actions" data-testid="contact-actions-group">
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action"
                  data-testid="contact-map-link"
                >
                  Open Location <ArrowUpRight size={15} />
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action"
                  data-testid="contact-whatsapp-link"
                >
                  WhatsApp +91 8888921338 <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className="contact-photo" data-testid="contact-photo-card">
              <img
                src={VENUE_IMAGES.cafe}
                alt="Area 51 outdoor cafe lights"
                data-testid="contact-photo-image"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle size={18} />
        Book on WhatsApp
      </a>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
