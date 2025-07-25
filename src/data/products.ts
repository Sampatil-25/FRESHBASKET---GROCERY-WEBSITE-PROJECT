
import { Product } from "@/contexts/CartContext";

export const categories = [
  {
    id: 1,
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1170&auto=format&fit=crop",
    color: "bg-grocery-primary/10",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1170&auto=format&fit=crop",
    color: "bg-grocery-secondary/10",
  },
  {
    id: 3,
    name: "Bakery",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1170&auto=format&fit=crop",
    color: "bg-grocery-accent/10",
  },
  {
    id: 4,
    name: "Meat & Seafood",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1170&auto=format&fit=crop",
    color: "bg-blue-100",
  },
  {
    id: 5,
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=1074&auto=format&fit=crop",
    color: "bg-purple-100",
  },
  {
    id: 6,
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=1170&auto=format&fit=crop",
    color: "bg-yellow-100",
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "Fruits & Vegetables",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=1170&auto=format&fit=crop",
    description: "Crisp and delicious organic apples. Perfect for snacking or baking.",
    unit: "1 kg",
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "Fruits & Vegetables",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1335&auto=format&fit=crop",
    description: "Sweet and nutritious organic bananas. Great for smoothies or as a quick energy boost.",
    unit: "1 bunch",
  },
  {
    id: 3,
    name: "Fresh Milk",
    category: "Dairy & Eggs",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1172&auto=format&fit=crop",
    description: "Farm-fresh whole milk. Rich and creamy.",
    unit: "1 L",
  },
  {
    id: 4,
    name: "Free-Range Eggs",
    category: "Dairy & Eggs",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1598965675045-45c77a5b45fa?q=80&w=1335&auto=format&fit=crop",
    description: "Farm-fresh free-range eggs from happy hens.",
    unit: "12 pcs",
  },
  {
    id: 5,
    name: "Artisan Bread",
    category: "Bakery",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?q=80&w=1170&auto=format&fit=crop",
    description: "Freshly baked artisan sourdough bread. Crispy crust and soft inside.",
    unit: "500 g",
  },
  {
    id: 6,
    name: "Chocolate Croissants",
    category: "Bakery",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1332&auto=format&fit=crop",
    description: "Buttery, flaky croissants filled with rich chocolate. Baked fresh daily.",
    unit: "4 pcs",
  },
  {
    id: 7,
    name: "Premium Chicken Breast",
    category: "Meat & Seafood",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?q=80&w=1170&auto=format&fit=crop",
    description: "High-quality boneless, skinless chicken breasts. Hormone and antibiotic-free.",
    unit: "500 g",
  },
  {
    id: 8,
    name: "Fresh Atlantic Salmon",
    category: "Meat & Seafood",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=1374&auto=format&fit=crop",
    description: "Wild-caught Atlantic salmon fillets. Rich in omega-3 fatty acids.",
    unit: "300 g",
  },
  {
    id: 9,
    name: "Organic Orange Juice",
    category: "Beverages",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1287&auto=format&fit=crop",
    description: "Freshly squeezed organic orange juice without added sugars or preservatives.",
    unit: "1 L",
  },
  {
    id: 10,
    name: "Green Tea",
    category: "Beverages",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1170&auto=format&fit=crop",
    description: "Premium green tea leaves. Rich in antioxidants and refreshing flavor.",
    unit: "20 bags",
  },
  {
    id: 11,
    name: "Mixed Nuts",
    category: "Snacks",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1606602842317-6798bec21a9c?q=80&w=1170&auto=format&fit=crop",
    description: "Premium selection of unsalted nuts, including almonds, cashews, and walnuts.",
    unit: "200 g",
  },
  {
    id: 12,
    name: "Potato Chips",
    category: "Snacks",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=1170&auto=format&fit=crop",
    description: "Crispy, kettle-cooked potato chips with a hint of sea salt.",
    unit: "150 g",
  },
];

export const featuredProducts = [1, 3, 5, 7, 9, 11].map(id => 
  products.find(product => product.id === id)
).filter(Boolean) as Product[];

export const getProductsByCategory = (categoryName: string): Product[] => {
  return products.filter(product => product.category === categoryName);
};
