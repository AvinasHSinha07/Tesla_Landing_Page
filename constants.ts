import { Zap, Thermometer, Cpu, Car, DoorOpen, AlertCircle } from 'lucide-react';
import { CoveredItem, FaqItem, RepairCostExample } from './types';

export const REPAIR_COSTS: RepairCostExample[] = [
  { part: 'Heat Pump', cost: 2000 },
  { part: 'Infotainment Screen', cost: 2500 },
  { part: 'Steering Rack', cost: 2000 },
  { part: 'On-board Charger', cost: 1500 },
];

export const COVERAGE_DATA: CoveredItem[] = [
  {
    category: 'Electrical & Charging',
    description: 'Common faults once factory cover ends.',
    items: [
      'On-board AC charger', 
      'Charging system components', 
      'Low-voltage (12V) electrical system'
    ],
    repairCostRange: '£300 – £1,500',
    icon: Zap,
  },
  {
    category: 'Heating & Cooling',
    description: 'Essential for battery protection and comfort.',
    items: [
      'Heat pump', 
      'AC compressor', 
      'Coolant valves', 
      'Thermal management'
    ],
    repairCostRange: '£700 – £2,000',
    icon: Thermometer,
  },
  {
    category: 'Technology & Safety',
    description: 'Electronics are reliable — but expensive.',
    items: [
      'Main touchscreen / MCU', 
      'Autopilot cameras', 
      'Sensors', 
      'ABS modules'
    ],
    repairCostRange: '£400 – £2,500',
    icon: Cpu,
  },
  {
    category: 'Suspension & Steering',
    description: 'One of the highest real-world ownership costs.',
    items: [
      'Control arms', 
      'Bushes', 
      'Ball joints', 
      'Steering rack'
    ],
    repairCostRange: '£800 – £2,000',
    usp: 'Wear & Tear Covered up to 80,000 Miles',
    icon: Car,
  },
  {
    category: 'Convenience',
    description: 'Known Tesla weak points over time.',
    items: [
      'Door handles', 
      'Window regulators', 
      'Charge port', 
      'Tailgate actuators'
    ],
    repairCostRange: '£350 – £700',
    icon: DoorOpen,
  },
];

export const EXCLUSIONS = [
  { item: "High-voltage battery pack", reason: "Covered by Tesla (8yr/100k+ miles)" },
  { item: "Drive unit / motors", reason: "Covered by Tesla (8yr/100k+ miles)" },
  { item: "Tyres, brake pads, discs", reason: "Consumable items" },
  { item: "Cosmetic trim, paint, upholstery", reason: "Non-mechanical" },
  { item: "Accident damage or misuse", reason: "Insurance matter" },
  { item: "Software updates", reason: "Non-hardware" },
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
