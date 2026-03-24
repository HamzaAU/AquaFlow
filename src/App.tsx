import { PRICING_PLANS, WHATSAPP_NUMBER, CONTACT_PHONE } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import AreaChecker from './components/AreaChecker';
import AIChatbot from './components/AIChatbot';
import { MessageCircle, Phone, MapPin, Mail, Droplets, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AIChatbot />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-slate-50 py-10 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted by Leading Offices</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="text-xl font-black italic">TECHLOGIX</span>
              <span className="text-xl font-black italic">SYSTEMS LTD</span>
              <span className="text-xl font-black italic">ARBISOFT</span>
              <span className="text-xl font-black italic">ENGRO</span>
              <span className="text-xl font-black italic">JAZZ</span>
            </div>
          </div>
        </div>

        {/* Features / Why Us */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Offices Choose AquaFlow?</h2>
                <p className="text-lg text-slate-600 mb-10">
                  We understand that office managers have enough on their plate. We make water supply the one thing you never have to worry about.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Unmatched Reliability", desc: "Our delivery fleet is optimized for office routes. No missed deliveries, ever." },
                    { title: "Premium Quality", desc: "Multi-stage filtration and PSQCA certified. We provide lab reports on request." },
                    { title: "Smart Refills", desc: "Automated reminders via WhatsApp so you never run out of water mid-meeting." },
                    { title: "Transparent Invoicing", desc: "Simplified monthly billing for corporate accounts. No hidden charges." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" alt="Quality Control" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400" alt="Delivery Truck" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <AreaChecker />
        <Pricing />
        <Testimonials />

        {/* FAQ Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Do you provide water dispensers?", a: "Yes, we provide high-quality hot/cold dispensers. Corporate clients on Standard/Enterprise plans get free maintenance and discounted rentals." },
                { q: "What is your delivery schedule?", a: "We deliver Monday to Saturday. Depending on your plan, we can schedule weekly, bi-weekly, or daily deliveries." },
                { q: "Is there a security deposit for bottles?", a: "For corporate accounts, we often waive the security deposit based on the monthly volume. Contact us for details." },
                { q: "How do I pay?", a: "We offer cash on delivery, bank transfers, and monthly invoicing for registered companies." }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your office water?</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                  Join hundreds of offices that have said goodbye to water delivery stress. Start your 1-week free trial today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-whatsapp px-10 py-4 text-lg">
                    <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
                  </a>
                  <a href={`tel:${CONTACT_PHONE}`} className="btn-primary bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 text-lg">
                    <Phone className="w-6 h-6" /> Call +92 300 1234567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Droplets className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold text-primary">AquaFlow</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Pakistan's most reliable corporate water delivery partner. Serving Karachi, Lahore, and Islamabad with premium quality 19L bottles.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Service Areas</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Karachi (All Areas)</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lahore (All Areas)</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Islamabad & Pindi</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {CONTACT_PHONE}</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> sales@aquaflow.pk</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp Support</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2026 AquaFlow Pakistan. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <a href={`tel:${CONTACT_PHONE}`} className="flex-1 btn-primary bg-slate-900 py-3 text-sm">
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex-1 btn-whatsapp py-3 text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
