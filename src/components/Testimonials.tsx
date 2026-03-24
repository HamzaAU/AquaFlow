import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Office Admins</h2>
          <p className="text-lg text-slate-600">Join 500+ businesses across Pakistan who trust AquaFlow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100 -z-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role} • {t.company}</p>
                <p className="text-[10px] font-semibold text-primary mt-1 uppercase tracking-wider">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
