export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  count: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  weight: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
