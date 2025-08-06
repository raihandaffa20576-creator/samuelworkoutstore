import { Clock, Home, DollarSign, Users, Target, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "No commute, no waiting for equipment. Start your workout instantly and fit fitness into your busy schedule."
  },
  {
    icon: Home,
    title: "Comfort & Privacy",
    description: "Work out in your own space, at your own pace. No judgment, no crowds - just you and your fitness goals."
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Skip expensive gym memberships. One-time investment in quality equipment pays for itself within months."
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Share equipment with family members. Get everyone active and create healthy habits together at home."
  },
  {
    icon: Target,
    title: "Consistent Results", 
    description: "No excuses or barriers. Having equipment at home increases workout consistency by 300% on average."
  },
  {
    icon: Zap,
    title: "Energy Boost",
    description: "Quick workouts throughout the day boost energy and productivity. Perfect for remote workers and busy professionals."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent"> Home Fitness?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your lifestyle with the convenience and effectiveness of working out from home
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-slate-600 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Statistics section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Home Fitness by the Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300%</div>
              <div className="text-blue-200">More Consistent Workouts</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$1,200</div>
              <div className="text-blue-200">Average Annual Gym Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">45min</div>
              <div className="text-blue-200">Daily Time Saved</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Workout Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
