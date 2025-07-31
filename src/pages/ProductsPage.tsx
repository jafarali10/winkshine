import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductsPage.module.css';

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
}

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
    sizes: ["250ml", "500ml", "1L"]
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
    sizes: ["1L", "5L"]
  },
  {
    id: 3,
    name: "Winkshine Silky Touch Liquid Wax Polish",
    category: "Cleaners",
    subcategory: "Wax & Polish",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    price: 635,
    oldPrice: 1090,
    discount: 42,
    rating: 4.7,
    reviews: 1893,
    inStock: true,
    isBestSeller: true,
    description: "Advanced liquid wax that provides deep shine and long-lasting protection.",
    features: ["Deep shine", "Long protection", "Easy application", "Water repellent"],
    sizes: ["250ml", "500ml", "1L"]
  },
  {
    id: 4,
    name: "Winkshine Dashboard Polish",
    category: "Interior Care",
    subcategory: "Dashboard Care",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    price: 350,
    oldPrice: 500,
    discount: 30,
    rating: 4.6,
    reviews: 892,
    inStock: true,
    description: "Specialized polish for dashboard and interior plastic surfaces.",
    features: ["Anti-static", "UV protection", "Non-greasy", "Pleasant fragrance"],
    sizes: ["500ml", "1L"]
  },
  {
    id: 5,
    name: "Winkshine Glass Cleaner",
    category: "Glass Care",
    subcategory: "Glass Cleaners",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    price: 290,
    oldPrice: 445,
    discount: 35,
    rating: 4.5,
    reviews: 756,
    inStock: true,
    description: "Professional glass cleaner for crystal clear visibility.",
    features: ["Streak-free", "Anti-fog", "Safe for tinted glass", "Quick drying"],
    sizes: ["500ml", "1L"]
  },
  {
    id: 6,
    name: "Winkshine Leather Conditioner",
    category: "Interior Care",
    subcategory: "Leather Care",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    price: 480,
    oldPrice: 680,
    discount: 29,
    rating: 4.8,
    reviews: 634,
    inStock: false,
    description: "Premium leather conditioner that restores and protects leather surfaces.",
    features: ["Leather restoration", "UV protection", "Anti-cracking", "Natural finish"],
    sizes: ["250ml", "500ml"]
  },
  {
    id: 7,
    name: "Winkshine Wheel Cleaner",
    category: "Auto Wash",
    subcategory: "Wheel Care",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    price: 520,
    oldPrice: 780,
    discount: 33,
    rating: 4.7,
    reviews: 445,
    inStock: true,
    description: "Powerful wheel cleaner that removes brake dust and road grime.",
    features: ["Brake dust removal", "Safe for alloys", "Acid-free formula", "Long-lasting"],
    sizes: ["500ml", "1L"]
  },
  {
    id: 8,
    name: "Winkshine Microfiber Cloth Set",
    category: "Accessories",
    subcategory: "Cleaning Tools",
    image: "https://images.unsplash.com/photo-1464013778555-8e723c2f01f8?auto=format&fit=crop&w=400&q=80",
    price: 180,
    oldPrice: 280,
    discount: 36,
    rating: 4.9,
    reviews: 1123,
    inStock: true,
    isBestSeller: true,
    description: "Professional microfiber cloth set for scratch-free cleaning.",
    features: ["Scratch-free", "High absorbency", "Reusable", "Multiple sizes"],
    sizes: ["3-piece set", "5-piece set", "10-piece set"]
  }
];

const categories = ["All", "Auto Wash", "Car Wash", "Cleaners", "Interior Care", "Glass Care", "Accessories"];
const subcategories = ["All", "Tyre Care", "Exterior Care", "Wax & Polish", "Dashboard Care", "Glass Cleaners", "Leather Care", "Wheel Care", "Cleaning Tools"];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesSubcategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className={styles.productsPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Premium Car Care Products</h1>
          <p className={styles.heroSubtitle}>
            Discover our complete range of professional car care solutions designed for excellence
          </p>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>🔍</button>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Filters and Controls */}
          <div className={styles.controlsSection}>
            <div className={styles.filtersRow}>
              <div className={styles.categoryFilter}>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className={styles.viewControls}>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  ⊞
                </button>
                <button
                  className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  ☰
                </button>
                <button
                  className={styles.filterBtn}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  ⚙️ Filters
                </button>
              </div>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className={styles.advancedFilters}>
                <div className={styles.filterGroup}>
                  <label>Subcategory:</label>
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                    className={styles.filterSelect}
                  >
                    {subcategories.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
                
                <div className={styles.filterGroup}>
                  <label>Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="discount">Biggest Discount</option>
                  </select>
                </div>
                
                <div className={styles.filterGroup}>
                  <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className={styles.priceSlider}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results Info */}
          <div className={styles.resultsInfo}>
            <p>Showing {sortedProducts.length} of {products.length} products</p>
          </div>

          {/* Products Grid/List */}
          <div className={`${styles.productsContainer} ${styles[viewMode]}`}>
            {sortedProducts.map(product => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                  {product.isNew && <span className={styles.newBadge}>NEW</span>}
                  {product.isBestSeller && <span className={styles.bestsellerBadge}>BEST SELLER</span>}
                  {!product.inStock && <span className={styles.outOfStockBadge}>OUT OF STOCK</span>}
                  <div className={styles.productActions}>
                    <button className={styles.actionBtn}>❤️</button>
                    <button className={styles.actionBtn}>👁️</button>
                  </div>
                </div>
                
                <div className={styles.productInfo}>
                  <div className={styles.productCategory}>{product.category}</div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  
                  <div className={styles.productRating}>
                    <span className={styles.stars}>{renderStars(product.rating)}</span>
                    <span className={styles.reviewCount}>({product.reviews})</span>
                  </div>
                  
                  <div className={styles.productFeatures}>
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className={styles.featureTag}>{feature}</span>
                    ))}
                  </div>
                  
                  <div className={styles.productSizes}>
                    {product.sizes.map(size => (
                      <span key={size} className={styles.sizeTag}>{size}</span>
                    ))}
                  </div>
                  
                  <div className={styles.productPrice}>
                    <span className={styles.currentPrice}>₹{product.price}</span>
                    <span className={styles.oldPrice}>₹{product.oldPrice}</span>
                    <span className={styles.discount}>{product.discount}% OFF</span>
                  </div>
                  
                  <Link 
                    to={`/product/${product.id}`}
                    className={`${styles.detailsBtn} ${!product.inStock ? styles.disabled : ''}`}
                  >
                    {product.inStock ? 'View Details' : 'Out of Stock'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {sortedProducts.length > 0 && (
            <div className={styles.loadMoreSection}>
              <button className={styles.loadMoreBtn}>
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 