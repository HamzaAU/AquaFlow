import { PRICING_PLANS, WHATSAPP_NUMBER } from '../constants';
import { Check, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Transparent Corporate Plans</h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Choose a plan that fits your office size. Save more with monthly subscriptions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl border transition-all duration-300",
                plan.isPopular 
                  ? "bg-white border-primary shadow-xl scale-105 z-10" 
                  : "bg-white border-slate-200 hover:border-primary/50"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">Rs. {plan.pricePerBottle}</span>
                  <span className="text-slate-500 font-medium">/bottle</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">Min. {plan.minBottles} bottles / month</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the ${plan.name} plan for my office.`}
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2",
                  plan.isPopular
                    ? "bg-primary text-white hover:bg-blue-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                )}
              >
                <MessageCircle className="w-5 h-5" /> Get This Plan
              </a>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-slate-500 text-sm italic">
          *Security deposit may apply for new dispensers. Custom quotes available for 100+ bottles.
        </p>
      </div>
    </section>
  );
}
