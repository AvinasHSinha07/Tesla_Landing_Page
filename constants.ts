import { Zap, Thermometer, Cpu, Car, DoorOpen } from 'lucide-react';
import { CoveredItem, FaqItem, RepairCostExample } from './types';

export const REPAIR_COSTS: RepairCostExample[] = [
  { part: 'Heat Pump', cost: 2000 },
  { part: 'Infotainment', cost: 2500 },
  { part: 'Steering Rack', cost: 2000 },
  { part: 'On-board Charger', cost: 1500 },
];

export const COVERAGE_DATA: CoveredItem[] = [
  {
    category: 'Electrical & Charging',
    description: 'Common faults once factory cover ends.',
    items: ['On-board AC charger', 'Charging system components', 'Low-voltage (12V) electrical system'],
    repairCostRange: '£300 – £1,500',
    icon: Zap,
  },
  {
    category: 'Heating & Cooling',
    description: 'Essential for both battery protection and cabin comfort.',
    items: ['Heat pump', 'Air conditioning compressor', 'Coolant valves', 'Thermal management'],
    repairCostRange: '£700 – £2,000',
    icon: Thermometer,
  },
  {
    category: 'Technology & Safety',
    description: 'Electronics are reliable — but expensive when they fail.',
    items: ['Main touchscreen', 'Autopilot cameras', 'Sensors', 'ABS modules'],
    repairCostRange: '£400 – £2,500',
    icon: Cpu,
  },
  {
    category: 'Suspension & Steering',
    description: 'One of the highest real-world ownership costs.',
    items: ['Control arms', 'Bushes', 'Ball joints', 'Steering rack'],
    repairCostRange: '£800 – £2,000',
    usp: 'Wear & tear covered up to 80,000 miles',
    icon: Car,
  },
  {
    category: 'Convenience',
    description: 'Known Tesla weak points over time.',
    items: ['Door handles', 'Window regulators', 'Charge port components', 'Tailgate actuators'],
    repairCostRange: '£350 – £700',
    icon: DoorOpen,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Isn't the battery the biggest risk?",
    answer: "No. Tesla batteries and motors are among the most reliable parts of the car. Most real-world costs come from labour-intensive, non-battery repairs which this policy specifically targets.",
  },
  {
    question: "Why does labour matter so much?",
    answer: "Because Tesla main dealer labour is around £150 per hour. Even minor faults often involve diagnostics, calibration, and multiple hours of work. A single small part can become a £1,000 bill due to labour.",
  },
  {
    question: "Do you really cover wear & tear?",
    answer: "Yes. Suspension bushes and wear-and-tear items are covered up to 80,000 miles, which is a significant advantage as many standard warranties exclude these entirely.",
  },
  {
    question: "Is this worth it if nothing goes wrong?",
    answer: "Just one medium repair can exceed the cost of a full year’s cover. Most customers take this policy for peace of mind, protecting against the volatility of repair costs.",
  },
];
