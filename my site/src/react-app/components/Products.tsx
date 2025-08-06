import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Adjustable Dumbbells Set",
    price: "$299",
    originalPrice: "$399",
    image: "https://images.unsplash.com/photo-1606889803413-6d3f1b8a4c1b?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 1247,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Resistance Bands Kit",
    price: "$49",
    originalPrice: "$79",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 892,
    badge: "Popular"
  },
  {
    id: 3,
    name: "Pull-Up Bar Pro",
    price: "$129",
    originalPrice: "$179",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 634,
    badge: "New"
  },
  {
    id: 4,
    name: "Yoga Mat Premium",
    price: "$89",
    originalPrice: "$120",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 1156,
    badge: "Eco-Friendly"
  },
  {
    id: 5,
    name: "Kettlebell Set",
    price: "$199",
    originalPrice: "$259",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 743,
    badge: "Heavy Duty"
  },
  {
    id: 6,
    name: "Foam Roller Elite",
    price: "$69",
    originalPrice: "$95",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 521,
    badge: "Recovery"
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Best-Selling 
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent"> Equipment</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional-grade fitness equipment trusted by thousands of home gym enthusiasts worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
              {/* Product badge */}
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'
                      }`} />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                  <span className="text-lg text-slate-500 line-through">{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                    Save {Math.round((1 - parseInt(product.price.slice(1)) / parseInt(product.originalPrice.slice(1))) * 100)}%
                  </span>
                </div>
                
                {/* Add to cart button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
