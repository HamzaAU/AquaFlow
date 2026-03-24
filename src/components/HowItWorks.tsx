import { Truck, ShieldCheck, Headphones, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: "Quick Order",
    desc: "Send us a WhatsApp message or call to select your plan."
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Our team delivers chilled, hygienic bottles to your office doorstep."
  },
  {
    icon: Headphones,
    title: "Hassle-Free Refills",
    desc: "We track your usage and send reminders for timely refills."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-blue-100 text-lg">Getting fresh water for your office is as easy as 1-2-3.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-400/30 -translate-y-1/2 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-blue-100 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
