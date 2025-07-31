import React, { useState } from 'react';
import styles from './FAQPage.module.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How do I use Winkshine Tyre Shine Liquid?",
    answer: "Clean your tyres thoroughly first, then apply the Tyre Shine Liquid evenly using a clean cloth or applicator. Allow it to dry for 10-15 minutes. For best results, apply in a well-ventilated area and avoid contact with brake discs.",
    category: "Product Usage"
  },
  {
    id: 2,
    question: "What's the difference between 1L and 500ml products?",
    answer: "The main difference is quantity and value for money. 1L products are more economical for regular use or larger vehicles, while 500ml is perfect for occasional use or smaller cars. Both provide the same quality and performance.",
    category: "Product Information"
  },
  {
    id: 3,
    question: "How long does shipping take?",
    answer: "Standard shipping takes 3-5 business days within India. Express shipping (1-2 days) is available for select locations. International shipping may take 7-14 business days depending on the destination.",
    category: "Shipping & Delivery"
  },
  {
    id: 4,
    question: "Can I return products if I'm not satisfied?",
    answer: "Yes, we offer a 30-day return policy for unused products in original packaging. Contact our customer service team to initiate a return. Return shipping costs may apply.",
    category: "Returns & Refunds"
  },
  {
    id: 5,
    question: "Are Winkshine products safe for all car surfaces?",
    answer: "Our products are formulated to be safe for most car surfaces. However, we recommend testing on a small, inconspicuous area first. Avoid using on hot surfaces or in direct sunlight.",
    category: "Product Safety"
  },
  {
    id: 6,
    question: "How often should I apply car wax?",
    answer: "For optimal protection, apply car wax every 2-3 months or after 6-8 washes. Frequency may vary based on weather conditions, driving habits, and environmental factors.",
    category: "Product Usage"
  },
  {
    id: 7,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries. International shipping rates and delivery times vary by location. Contact us for specific shipping information to your country.",
    category: "Shipping & Delivery"
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets including Paytm, PhonePe, and Google Pay. All transactions are secure and encrypted.",
    category: "Payment & Billing"
  },
  {
    id: 9,
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email and SMS. You can track your order on our website or through the courier partner's website.",
    category: "Shipping & Delivery"
  },
  {
    id: 10,
    question: "Are your products eco-friendly?",
    answer: "We're committed to environmental responsibility. Our products are formulated to be biodegradable where possible and we use eco-friendly packaging materials.",
    category: "Product Information"
  }
];

const categories = ["All", "Product Usage", "Product Information", "Shipping & Delivery", "Returns & Refunds", "Product Safety", "Payment & Billing"];

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className={styles.faqPage}>
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Find answers to common questions about our car care products and services
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Category Filter */}
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

          {/* FAQ Items */}
          <div className={styles.faqContainer}>
            {filteredFAQs.map(item => (
              <div key={item.id} className={styles.faqItem}>
                <button
                  className={`${styles.faqQuestion} ${openItems.includes(item.id) ? styles.open : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <span className={styles.arrow}>
                    {openItems.includes(item.id) ? '−' : '+'}
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${openItems.includes(item.id) ? styles.open : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3>Still have questions?</h3>
            <p>Can't find what you're looking for? Our customer service team is here to help!</p>
            <div className={styles.contactButtons}>
              <a href="/contact" className={styles.contactBtn}>
                Contact Us
              </a>
              <a href="tel:+919724698607" className={styles.phoneBtn}>
                Call Us: +91 9724698607
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage; 