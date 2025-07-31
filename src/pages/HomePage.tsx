import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import styles from './HomePage.module.css';

const PRODUCTS_PER_SLIDE = 4;

const products = [
  {
    id: 1,
    name: "Winkshine Tyre Shine Liquid – 1L",
    category: "Auto Wash",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 425,
    oldPrice: 730,
    discount: 42
  },
  {
    id: 2,
    name: "Winkshine Foam Wash Shampoo – 5L",
    category: "Car Wash",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    price: 999,
    oldPrice: 2049,
    discount: 51
  },
  {
    id: 3,
    name: "Winkshine Silky Touch Liquid Wax Polish 1L",
    category: "Cleaners",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: 635,
    oldPrice: 1090,
    discount: 42
  },
  {
    id: 4,
    name: "Winkshine Silky Touch Liquid Wax Polish 250ml",
    category: "Cleaners",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    price: 290,
    oldPrice: 445,
    discount: 35
  },
  {
    id: 5,
    name: "Winkshine Tyre Shine Liquid – 500ml",
    category: "Auto Wash",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    price: 299,
    oldPrice: 415,
    discount: 28
  },
  {
    id: 6,
    name: "Winkshine Silky Touch Liquid Wax Polish 500ml",
    category: "Cleaners",
    image: "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=400&q=80",
    price: 410,
    oldPrice: 760,
    discount: 46
  },
  {
    id: 7,
    name: "Winkshine Tyre Shine Liquid – 250ml",
    category: "Auto Wash",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    price: 240,
    oldPrice: 280,
    discount: 14
  },
  {
    id: 8,
    name: "Winkshine Dashboard Polish – 1L",
    category: "Interior Care",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 350,
    oldPrice: 500,
    discount: 30
  },
  {
    id: 9,
    name: "Winkshine Glass Cleaner – 500ml",
    category: "Glass Care",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    price: 180,
    oldPrice: 250,
    discount: 28
  },
  {
    id: 10,
    name: "Winkshine All-in-One Cleaner – 1L",
    category: "Multi-Purpose",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    price: 520,
    oldPrice: 700,
    discount: 26
  }
];

const HomePage: React.FC = () => {
  const [productSlide, setProductSlide] = useState(0);
  const productSlides = Math.ceil(products.length / PRODUCTS_PER_SLIDE);

  const handlePrev = () => setProductSlide((prev) => (prev === 0 ? productSlides - 1 : prev - 1));
  const handleNext = () => setProductSlide((prev) => (prev === productSlides - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* Left Column - Text Content */}
            <div className={styles.textColumn}>
              <div className={styles.scriptText}>premium</div>
              <h1 className={styles.mainTitle}>
                PREMIUM CAR CARE<br />
                SOLUTIONS
              </h1>
              <p className={styles.description}>
                Discover our complete range of professional car care products designed to keep your vehicle looking its best. 
                From exterior protection to interior detailing, we provide everything you need for showroom-worthy results.
              </p>
              <Link to="/products" className={styles.ctaButton}>
                SHOP NOW
              </Link>
            </div>

            {/* Right Column - Single Image with Reflective Overlay */}
            <div className={styles.imageColumn}>
              <div className={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=800&q=80" 
                  alt="Premium Car Care Products" 
                  className={styles.heroImage}
                />
                <div className={styles.reflectiveOverlay}></div>
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <div className={styles.overlayBadge}>PROFESSIONAL</div>
                    <h3 className={styles.overlayTitle}>Winkshine Expert</h3>
                    <p className={styles.overlayDescription}>
                      Trusted by car enthusiasts and professionals worldwide for premium quality results.
                    </p>
                  </div>
                </div>
                <div className={styles.decorativeElement}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original About Section */}
      <section className="aboutSection">
        <div className="aboutImage">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80" alt="Car washing at Winkshine" />
        </div>
        <div className="aboutContent">
          <h2>About Winkshine</h2>
          <p>
            Welcome to Winkshine, where innovation meets excellence in car care. We offer state-of-the-art car wash and auto detailing services, using premium products and the latest technology to give your vehicle a showroom shine.<br /><br />
            <strong>Our Journey</strong><br />
            Founded in Chapi, Gujarat, our mission is to deliver the best in car washing and detailing. Our dedicated team ensures every customer leaves with a spotless, rejuvenated vehicle and a smile.
          </p>
          <button className="aboutBtn">View More</button>
        </div>
      </section>

      {/* Original Why Choose Section */}
      <section className="whyChooseSection">
        <div className="whyChooseContent">
          <h2>Why Choose Winkshine?</h2>
          <div className="whyChooseGrid">
            <div>
              <h3>01. Commitment to Quality</h3>
              <p>Our commitment to excellence has earned us industry recognition and the trust of our valued customers.</p>
            </div>
            <div>
              <h3>02. Customer-Centric Approach</h3>
              <p>We believe in building strong, lasting relationships. Our team listens to your needs and delivers personalized service.</p>
            </div>
            <div>
              <h3>03. Sustainable Practices</h3>
              <p>We use eco-friendly products and methods to care for your car and the environment.</p>
            </div>
            <div>
              <h3>04. Modern Facilities</h3>
              <p>Our state-of-the-art equipment and skilled staff ensure your car gets the best treatment every time.</p>
            </div>
          </div>
        </div>
        <div className="whyChooseImages">
          <div className="whyChooseImgRow">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" alt="Car wash station" />
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" alt="Car wash station" />
          </div>
          <div className="whyChooseImgRow">
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" alt="Car wash station" />
            <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" alt="Car wash station" />
          </div>
        </div>
      </section>

      {/* Original Products Section */}
      <section className="productsSection">
        <h2 className="productsTitle">Winkshine Products</h2>
        <div className="productsSlider">
          <button className="productsArrow left" onClick={handlePrev}>&lt;</button>
          <div className="productsRow">
            {products.slice(productSlide * PRODUCTS_PER_SLIDE, (productSlide + 1) * PRODUCTS_PER_SLIDE).map(product => (
              <div className="productCard" key={product.id}>
                <div className="productDiscount">-{product.discount}%</div>
                <img className="productImg" src={product.image} alt={product.name} />
                <div className="productCategory">{product.category}</div>
                <div className="productName">{product.name}</div>
                <div className="productPriceRow">
                  <span className="productOldPrice">₹{product.oldPrice}</span>
                  <span className="productPrice">₹{product.price}</span>
                </div>
                                    <Link to={`/product/${product.id}`} className="detailsBtn">Details</Link>
              </div>
            ))}
          </div>
          <button className="productsArrow right" onClick={handleNext}>&gt;</button>
        </div>
        <div className="productsDots">
          {Array.from({ length: productSlides }).map((_, idx) => (
            <span
              key={idx}
              className={`dot${idx === productSlide ? ' active' : ''}`}
              onClick={() => setProductSlide(idx)}
            />
          ))}
        </div>
        <div className="viewAllProductsBtn">
          <Link to="/products" className="viewAllBtn">View All Products</Link>
        </div>
      </section>
    </>
  );
};

export default HomePage; 