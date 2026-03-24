import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, MessageCircle, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { WHATSAPP_NUMBER } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the AquaFlow Assistant, a helpful AI for AquaFlow Pakistan, the leading office water delivery service.
Your goal is to answer questions about AquaFlow and encourage users to contact us on WhatsApp for orders.

Key Information:
- Service: 19L gallon water delivery for offices.
- Cities: Karachi, Lahore, Islamabad, Rawalpindi.
- Pricing:
    - Basic: Rs. 220/bottle (min 5 bottles/month)
    - Standard: Rs. 195/bottle (min 15 bottles/month) - Most Popular
    - Enterprise: Rs. 175/bottle (min 50 bottles/month)
- Quality: PSQCA certified, lab tested, multi-stage filtration.
- Benefits: Same-day delivery, no advance payment, bulk discounts, smart refills via WhatsApp, monthly invoicing for corporate accounts.
- Equipment: We provide hot/cold dispensers. Maintenance is free for Standard/Enterprise plans.
- Contact: WhatsApp (+923001234567), Phone (+923001234567), Email (sales@aquaflow.pk).
- Delivery: Monday to Saturday.

Tone: Professional, helpful, and slightly localized (use Roman Urdu phrases like "Pani ki tension khatam" or "On-time delivery" where appropriate).

Always include a suggestion to "Chat on WhatsApp" for ordering or detailed inquiries.
If a user asks to order, provide the WhatsApp link: https://wa.me/${WHATSAPP_NUMBER}
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<Message[]>([
    { role: 'model', text: 'Salam! I am your AquaFlow Assistant. How can I help you with your office water needs today?' }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Please try again or contact us on WhatsApp.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting. Please chat with us on WhatsApp for immediate help!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-[60] md:bottom-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-[350px] sm:w-[400px] h-[500px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">AquaFlow Assistant</p>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest">Online • AI Powered</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "flex",
                    msg.role === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                  <div 
                    className={cn(
                      "max-w-[85%] p-3 rounded-2xl text-sm shadow-sm",
                      msg.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-white text-slate-700 rounded-tl-none border border-slate-100"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask about pricing, delivery..." 
                  className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-3 flex justify-center">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold text-secondary flex items-center gap-1 hover:underline"
                >
                  <MessageCircle className="w-3 h-3" /> Prefer WhatsApp? Chat with us directly
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95",
          isOpen ? "bg-slate-900 text-white rotate-90" : "bg-primary text-white"
        )}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>
    </div>
  );
}

// Helper function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
