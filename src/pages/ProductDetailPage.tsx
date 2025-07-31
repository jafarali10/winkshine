import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  description: string;
  features: string[];
  sizes: string[];
  detailedDescription: string;
  specifications: { [key: string]: string };
  usageInstructions: string[];
  safetyWarnings: string[];
  images: string[];
}

// Sample product data - in a real app, this would come from an API
const products: Product[] = [
  {
    id: 1,
    name: "Winkshine Tyre Shine Liquid",
    category: "Auto Wash",
    subcategory: "Tyre Care",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    price: 425,
    oldPrice: 730,
    discount: 42,
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    isBestSeller: true,
    description: "Professional tyre shine liquid that provides long-lasting protection and brilliant shine.",
    features: ["Long-lasting shine", "UV protection", "Easy application", "Safe for all tyre types"],
    sizes: ["250ml", "500ml", "1L"],
    detailedDescription: "Winkshine Tyre Shine Liquid is a premium formulation designed to provide exceptional shine and protection for all types of vehicle tyres. Our advanced formula creates a protective barrier that shields tyres from harmful UV rays, road grime, and environmental contaminants while maintaining a brilliant, long-lasting shine that enhances your vehicle's overall appearance.",
    specifications: {
      "Volume": "1L",
      "Type": "Liquid",
      "Finish": "High Gloss",
      "Drying Time": "5-10 minutes",
      "Protection Duration": "Up to 2 weeks",
      "Coverage": "Up to 20 tyres per bottle",
      "Suitable For": "All tyre types"
    },
    usageInstructions: [
      "Clean tyres thoroughly with Winkshine Tyre Cleaner",
      "Ensure tyres are completely dry before application",
      "Apply evenly using a clean applicator or cloth",
      "Allow to dry for 5-10 minutes",
      "Buff with a clean microfiber cloth for maximum shine"
    ],
    safetyWarnings: [
      "Keep out of reach of children",
      "Avoid contact with eyes and skin",
      "Use in well-ventilated area",
      "Do not apply to hot tyres",
      "Store in a cool, dry place"
    ],
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    id: 2,
    name: "Winkshine Foam Wash Shampoo",
    category: "Car Wash",
    subcategory: "Exterior Care",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    price: 999,
    oldPrice: 2049,
    discount: 51,
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    isNew: true,
    description: "Premium foam wash shampoo that gently cleans while protecting your car's paint.",
    features: ["pH balanced", "Foam technology", "Paint protection", "Streak-free finish"],
    sizes: ["1L", "5L"],
    detailedDescription: "Winkshine Foam Wash Shampoo is a revolutionary car cleaning solution that combines advanced foam technology with gentle yet effective cleaning power. Our pH-balanced formula ensures your vehicle's paint and clear coat remain protected while delivering a streak-free, showroom-worthy finish.",
    specifications: {
      "Volume": "5L",
      "Type": "Foam Shampoo",
      "pH Level": "7.0 (Neutral)",
      "Foam Quality": "High Density",
      "Dilution Ratio": "1:100",
      "Coverage": "Up to 50 washes",
      "Suitable For": "All paint types"
    },
    usageInstructions: [
      "Dilute 1 part shampoo with 100 parts water",
      "Apply using a foam cannon or bucket method",
      "Work from top to bottom of vehicle",
      "Rinse thoroughly with clean water",
      "Dry with microfiber towels"
    ],
    safetyWarnings: [
      "Keep out of reach of children",
      "Avoid contact with eyes",
      "Rinse thoroughly after use",
      "Store in original container",
      "Do not mix with other chemicals"
    ],
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === parseInt(id || '1'));
  
  if (!product) {
    return (
      <div className={styles.notFound}>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products" className={styles.backBtn}>Back to Products</Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className={styles.productDetailPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <Link to="/">Home</Link> &gt; 
        <Link to="/products">Products</Link> &gt; 
        <Link to={`/products?category=${product.category}`}>{product.category}</Link> &gt; 
        <span>{product.name}</span>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.productGallery}>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.name} />
            {product.isNew && <span className={styles.newBadge}>NEW</span>}
            {product.isBestSeller && <span className={styles.bestsellerBadge}>BEST SELLER</span>}
          </div>
          <div className={styles.thumbnailImages}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productHeader}>
            <div className={styles.productCategory}>{product.category} &gt; {product.subcategory}</div>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.productRating}>
              <span className={styles.stars}>{renderStars(product.rating)}</span>
              <span className={styles.reviewCount}>({product.reviews} reviews)</span>
            </div>
          </div>

          <div className={styles.productPrice}>
            <span className={styles.currentPrice}>₹{product.price}</span>
            <span className={styles.oldPrice}>₹{product.oldPrice}</span>
            <span className={styles.discount}>{product.discount}% OFF</span>
          </div>

          <div className={styles.productDescription}>
            <p>{product.detailedDescription}</p>
          </div>

          <div className={styles.productFeatures}>
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.sizeSelection}>
            <h3>Available Sizes</h3>
            <div className={styles.sizeOptions}>
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${selectedSize === size ? styles.selected : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.stockStatus}>
            <span className={`${styles.status} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
              {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
            </span>
          </div>

          <div className={styles.productActions}>
            <button className={styles.wishlistBtn}>❤️ Add to Wishlist</button>
            <button className={styles.shareBtn}>📤 Share Product</button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className={styles.productTabs}>
        <div className={styles.tabContent}>
          <div className={styles.tabSection}>
            <h3>Specifications</h3>
            <div className={styles.specifications}>
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className={styles.specRow}>
                  <span className={styles.specKey}>{key}:</span>
                  <span className={styles.specValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.tabSection}>
            <h3>Usage Instructions</h3>
            <ol className={styles.instructions}>
              {product.usageInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <div className={styles.tabSection}>
            <h3>Safety Warnings</h3>
            <ul className={styles.warnings}>
              {product.safetyWarnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className={styles.relatedProducts}>
        <h2>Related Products</h2>
        <div className={styles.relatedGrid}>
          {products.filter(p => p.id !== product.id).slice(0, 3).map(relatedProduct => (
            <div key={relatedProduct.id} className={styles.relatedCard}>
              <img src={relatedProduct.image} alt={relatedProduct.name} />
              <h4>{relatedProduct.name}</h4>
              <div className={styles.relatedPrice}>
                <span>₹{relatedProduct.price}</span>
                <span className={styles.oldPrice}>₹{relatedProduct.oldPrice}</span>
              </div>
              <Link to={`/product/${relatedProduct.id}`} className={styles.viewDetailsBtn}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 