import { LucideIcon } from 'lucide-react';

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BonusItem {
  id: number;
  title: string;
  value: string;
  description: string;
}

export interface Mentor {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
