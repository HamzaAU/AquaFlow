import { PricingPlan, Testimonial } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Office',
    pricePerBottle: 220,
    minBottles: 5,
    features: [
      'Weekly Delivery',
      'Standard Support',
      'No Security Deposit*',
      'Pay per Delivery'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Corporate',
    pricePerBottle: 195,
    minBottles: 15,
    features: [
      'Bi-weekly Delivery',
      'Priority Support',
      'Free Dispenser Maintenance',
      'Monthly Billing',
      'Dedicated Account Manager'
    ],
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Bulk',
    pricePerBottle: 175,
    minBottles: 50,
    features: [
      'Daily/On-demand Delivery',
      '24/7 VIP Support',
      'Free Dispenser (2 Units)',
      'Customized Invoicing',
      'Emergency Same-day Refills'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Khan',
    role: 'HR Manager',
    company: 'TechSolutions Karachi',
    city: 'Karachi',
    content: 'Pani ki tension khatam! AquaFlow is extremely reliable. We used to have missed deliveries with local suppliers, but these guys are always on time.'
  },
  {
    id: '2',
    name: 'Sara Malik',
    role: 'Procurement Officer',
    company: 'BlueChip Lahore',
    city: 'Lahore',
    content: 'The quality is top-notch. Our staff noticed the difference immediately. The WhatsApp ordering system makes it so easy to manage refills.'
  },
  {
    id: '3',
    name: 'Zubair Qureshi',
    role: 'Admin Lead',
    company: 'Creative Hub Islamabad',
    city: 'Islamabad',
    content: 'Transparent pricing and great service. Highly recommended for any office looking for a professional water partner in Rawalpindi/Islamabad.'
  }
];

export const WHATSAPP_NUMBER = "+923001234567";
export const CONTACT_PHONE = "+923001234567";
