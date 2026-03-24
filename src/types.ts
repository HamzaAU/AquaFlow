export interface PricingPlan {
  id: string;
  name: string;
  pricePerBottle: number;
  minBottles: number;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  city: string;
}

export interface ServiceArea {
  city: string;
  areas: string[];
}
