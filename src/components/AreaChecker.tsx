import React from 'react';
import { MapPin, Search, CheckCircle, XCircle } from 'lucide-react';

const cities = [
  { name: 'Karachi', areas: ['DHA', 'Clifton', 'PECHS', 'Gulshan', 'Nazimabad', 'Korangi', 'SITE'] },
  { name: 'Lahore', areas: ['Gulberg', 'DHA', 'Model Town', 'Johar Town', 'Cantt', 'Faisal Town'] },
  { name: 'Islamabad', areas: ['F-6', 'F-7', 'F-8', 'G-9', 'G-10', 'E-7', 'I-8', 'Blue Area'] },
  { name: 'Rawalpindi', areas: ['Bahria Town', 'Saddar', 'Satellite Town', 'Westridge'] }
];

export default function AreaChecker() {
  const [query, setQuery] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'available' | 'unavailable'>('idle');

  const checkArea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    
    const isAvailable = cities.some(city => 
      city.areas.some(area => area.toLowerCase().includes(query.toLowerCase())) ||
      city.name.toLowerCase().includes(query.toLowerCase())
    );

    setStatus(isAvailable ? 'available' : 'unavailable');
  };

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-secondary text-xs font-bold mb-6 uppercase tracking-wider">
          <MapPin className="w-3 h-3" /> Coverage Checker
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Is AquaFlow available in your area?</h2>
        <p className="text-slate-600 mb-10">We are rapidly expanding across Pakistan's major business hubs.</p>

        <form onSubmit={checkArea} className="relative max-w-md mx-auto mb-8">
          <input 
            type="text" 
            placeholder="Enter your area (e.g. DHA Phase 6, Gulberg...)" 
            className="w-full pl-12 pr-32 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setStatus('idle');
            }}
          />
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <button 
            type="submit"
            className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <Search className="w-4 h-4" /> Check
          </button>
        </form>

        {status === 'available' && (
          <div className="flex items-center justify-center gap-2 text-secondary font-bold animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle className="w-5 h-5" /> Yes! We deliver to {query}.
          </div>
        )}
        {status === 'unavailable' && (
          <div className="flex flex-col items-center gap-2 text-slate-500 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 text-red-500 font-bold">
              <XCircle className="w-5 h-5" /> Area not yet covered.
            </div>
            <p className="text-sm">But we're coming soon! Leave your number on WhatsApp to get notified.</p>
          </div>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-400">
          <span>KARACHI</span>
          <span>•</span>
          <span>LAHORE</span>
          <span>•</span>
          <span>ISLAMABAD</span>
          <span>•</span>
          <span>RAWALPINDI</span>
        </div>
      </div>
    </section>
  );
}
