import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      {/* Hero image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&crop=center" 
          alt="Home gym setup" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Samuel<span className="text-blue-400">Workout</span>Store
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-slate-300 mx-auto rounded-full"></div>
        </div>
        
        {/* Main headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Train Anytime,
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
            Anywhere
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your home into a premium fitness studio with our professional-grade equipment. 
          Start your fitness journey today.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg flex items-center gap-2">
            Shop Equipment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border-2 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
            Watch Demo
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50K+</div>
            <div className="text-slate-300 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-slate-300 font-medium">Home Workouts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">5★</div>
            <div className="text-slate-300 font-medium">Customer Rating</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
