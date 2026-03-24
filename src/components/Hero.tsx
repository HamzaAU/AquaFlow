import { motion } from 'motion/react';
import { MessageCircle, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0066cc,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" /> PSQCA Certified & Lab Tested
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Pani ki tension khatam. <br />
              <span className="text-primary">On-time delivery, har dafa.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Reliable 19L gallon water delivery for offices in Karachi, Lahore, and Islamabad. No more last-minute shortages or unreliable suppliers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi AquaFlow, I want to start a monthly subscription for my office.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp text-lg px-8 py-4"
              >
                <MessageCircle className="w-6 h-6" /> Order on WhatsApp
              </a>
              <a 
                href="#pricing"
                className="btn-primary bg-slate-900 hover:bg-slate-800 text-lg px-8 py-4"
              >
                View Monthly Plans
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle className="w-5 h-5 text-secondary" /> Same-day Delivery
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle className="w-5 h-5 text-secondary" /> No Advance Payment
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle className="w-5 h-5 text-secondary" /> Bulk Discounts
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800" 
                alt="Office Water Dispenser"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-sm font-medium opacity-80">Serving</p>
                  <p className="text-2xl font-bold">500+ Offices</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 text-white text-sm font-bold">
                  Karachi • Lahore • Islamabad
                </div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 z-20 glass-card p-4 rounded-xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs font-bold text-slate-900">Fast Support</p>
              </div>
              <p className="text-[10px] text-slate-500">Dedicated account manager for every corporate client.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
