import React from 'react';
import { Phone, MessageCircle, Droplets, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_PHONE } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-primary">AquaFlow</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary">Reviews</a>
            <div className="flex items-center gap-4">
              <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-1 text-sm font-semibold text-slate-900">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi AquaFlow, I want to inquire about office water delivery.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp py-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <a href={`tel:${CONTACT_PHONE}`} className="p-2 text-primary">
                <Phone className="w-6 h-6" />
              </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-6 space-y-4">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Features</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Pricing</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-900">Reviews</a>
          <div className="pt-4 space-y-3">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
