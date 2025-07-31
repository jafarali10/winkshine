import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Car Enthusiast",
      rating: 5,
      comment: "Winkshine products have transformed my car care routine. The quality is exceptional and the results are amazing!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Professional Detailer",
      rating: 5,
      comment: "As a professional car detailer, I trust Winkshine products for all my clients. They never disappoint!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Car Dealer",
      rating: 5,
      comment: "Winkshine has been our go-to brand for car care products. Our customers love the results!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const features = [
    {
      icon: "🚗",
      title: "Premium Quality",
      description: "All our products are made with the finest ingredients and advanced formulations"
    },
    {
      icon: "🛡️",
      title: "Protection Guaranteed",
      description: "Our products provide long-lasting protection for your vehicle's surfaces"
    },
    {
      icon: "✨",
      title: "Professional Results",
      description: "Get salon-quality results at home with our easy-to-use products"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "We care for the environment with our biodegradable and safe formulations"
    },
    {
      icon: "⚡",
      title: "Fast Acting",
      description: "Quick and efficient products that save your time and effort"
    },
    {
      icon: "💎",
      title: "Value for Money",
      description: "Premium quality at competitive prices for every car owner"
    }
  ];

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Winkshine</h1>
          <p className={styles.heroSubtitle}>
            Your trusted partner in premium car care solutions since 2010
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Who We Are Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} data-text="who we are">Who We Are</h2>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <p>
                  Winkshine is a leading manufacturer and supplier of premium car care products, 
                  established with a vision to revolutionize the automotive care industry. 
                  We are passionate about providing car enthusiasts, professionals, and everyday 
                  drivers with the highest quality products that deliver exceptional results.
                </p>
                <p>
                  With over a decade of experience in the industry, we have built a reputation 
                  for innovation, quality, and customer satisfaction. Our team of experts 
                  continuously researches and develops new formulations to meet the evolving 
                  needs of modern vehicles.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className={styles.section}>
            <div className={styles.missionVisionGrid}>
              <div className={styles.missionCard}>
                <div className={styles.cardIcon}>🎯</div>
                <h3 className={styles.cardTitle}>Our Mission</h3>
                <p className={styles.cardDescription}>
                  To provide innovative, high-quality car care solutions that enhance the 
                  appearance and protection of vehicles while making car maintenance 
                  accessible and enjoyable for everyone.
                </p>
              </div>
              <div className={styles.visionCard}>
                <div className={styles.cardIcon}>🔮</div>
                <h3 className={styles.cardTitle}>Our Vision</h3>
                <p className={styles.cardDescription}>
                  To become the most trusted and preferred brand in the automotive care 
                  industry, known for excellence, innovation, and commitment to customer 
                  satisfaction worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Our History Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} data-text="our history">Our History</h2>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.historyContent}>
              <div className={styles.historyImage}>
                <img 
                  src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=800&q=80" 
                  alt="Winkshine Car Care Products" 
                />
              </div>
              <div className={styles.historyText}>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>2010</div>
                    <div className={styles.timelineContent}>
                      <h4>Foundation</h4>
                      <p>Winkshine was founded in Chapi, Gujarat with a small team and big dreams</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>2015</div>
                    <div className={styles.timelineContent}>
                      <h4>Expansion</h4>
                      <p>Launched our first premium product line and expanded to 10 states</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>2018</div>
                    <div className={styles.timelineContent}>
                      <h4>Innovation</h4>
                      <p>Introduced eco-friendly formulations and won industry awards</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineYear}>2023</div>
                    <div className={styles.timelineContent}>
                      <h4>Leadership</h4>
                      <p>Became the leading car care brand with presence across India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} data-text="why choose us">Why Choose Us</h2>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Our Clients Say Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle} data-text="what our clients say">What Our Clients Say</h2>
              <div className={styles.titleUnderline}></div>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className={styles.testimonialAvatar}
                    />
                    <div className={styles.testimonialInfo}>
                      <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                      <p className={styles.testimonialPosition}>{testimonial.position}</p>
                      <div className={styles.testimonialRating}>
                        <span className={styles.stars}>{renderStars(testimonial.rating)}</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.testimonialComment}>{testimonial.comment}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle} data-text="ready to experience">Ready to Experience Premium Car Care?</h2>
              <p>Join thousands of satisfied customers who trust Winkshine for their vehicle care needs</p>
              <div className={styles.ctaButtons}>
                <a href="/products" className={styles.ctaBtn}>Explore Products</a>
                <a href="/contact" className={styles.ctaBtnSecondary}>Contact Us</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 