import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Samuel Workout Store transformed my home into a professional gym. The quality is outstanding and I've never been more consistent with my workouts. The adjustable dumbbells are a game-changer!"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Personal Trainer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As a trainer, I recommend Samuel Workout Store to all my clients. The equipment is durable, space-efficient, and delivers results. My clients love working out from home now."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Busy Mom",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "With three kids, getting to the gym was impossible. Samuel Workout Store gave me my fitness back. I can squeeze in workouts anytime, and the kids love joining me!"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Remote Worker",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working from home made me sedentary. Samuel Workout Store's equipment fits perfectly in my apartment and helps me stay active throughout the day. Best investment ever!"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Yoga Instructor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The premium yoga mat is incredible - perfect grip, cushioning, and eco-friendly. My online students always ask where I got it from. Samuel Workout Store quality is unmatched."
  },
  {
    id: 6,
    name: "David Park",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Time is precious as an entrepreneur. Samuel Workout Store eliminates travel time to the gym and gives me professional-grade equipment at home. My productivity and health both improved."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers 
            <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their fitness journey with Samuel Workout Store
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              {/* Quote icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-slate-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Customer info */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">4.9/5</div>
              <div className="text-slate-400 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">50K+</div>
              <div className="text-slate-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">99%</div>
              <div className="text-slate-400 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-slate-400 text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
