import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-black">
                Samuel<span className="text-blue-400">Workout</span>Store
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium home workout equipment for fitness enthusiasts. Transform your space into a professional gym.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Dumbbells</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Resistance Bands</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Pull-Up Bars</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Yoga Mats</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Kettlebells</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Foam Rollers</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Warranty</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-400">1-800-SAMUELFIT</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-400">support@samuelworkoutstore.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 Samuel Workout Store. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
