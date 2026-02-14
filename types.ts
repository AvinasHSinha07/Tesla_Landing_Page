import { LucideIcon } from 'lucide-react';

export interface CoveredItem {
  category: string;
  description: string;
  items: string[];
  repairCostRange: string;
  icon: LucideIcon;
  usp?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RepairCostExample {
  part: string;
  cost: number;
}
