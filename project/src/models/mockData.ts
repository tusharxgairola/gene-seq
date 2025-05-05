import type { DiseaseRisk, Trait, FoodIntolerance, GenomicData } from '../types';

// Mock disease risk data
export const mockDiseaseRisks: DiseaseRisk[] = [
  { name: 'BRCA-related Cancers', risk: 12, description: 'Mutations in BRCA1 and BRCA2 genes that increase risk of breast and ovarian cancers.' },
  { name: 'Cystic Fibrosis', risk: 2, description: 'Genetic disorder affecting lungs, digestive system, and other organs.' },
  { name: 'Diabetes (Type 1)', risk: 8, description: 'Autoimmune condition where the pancreas produces little or no insulin.' },
  { name: 'Diabetes (Type 2)', risk: 15, description: 'Condition that affects how the body processes blood sugar.' },
  { name: 'Sickle Cell Anemia', risk: 0.5, description: 'Inherited red blood cell disorder.' },
  { name: 'Huntington\'s Disease', risk: 1, description: 'Progressive brain disorder caused by a defective gene.' },
  { name: 'Duchenne Muscular Dystrophy', risk: 0.8, description: 'Genetic disorder characterized by progressive muscle degeneration.' },
  { name: 'Tay-Sachs Disease', risk: 0.3, description: 'Rare inherited disorder that destroys nerve cells in the brain and spinal cord.' },
  { name: 'Hemophilia', risk: 1.2, description: 'Bleeding disorder where blood doesn\'t clot properly.' },
  { name: 'Spinal Muscular Atrophy', risk: 0.9, description: 'Genetic disease affecting motor neurons in the spinal cord.' },
  { name: 'Phenylketonuria (PKU)', risk: 0.6, description: 'Inherited disorder that increases levels of phenylalanine in the blood.' },
  { name: 'Fragile X Syndrome', risk: 1.5, description: 'Genetic condition causing intellectual disability, behavioral and learning challenges.' }
];

// Mock trait data
export const mockTraits: Trait[] = [
  { name: 'VO₂ max', value: 48, average: 42, description: 'Maximum rate of oxygen consumption during exercise.' },
  { name: 'Fast-twitch Muscle Fibers', value: 58, average: 50, description: 'Percentage of muscle fibers that contract quickly but fatigue faster.' },
  { name: 'Slow-twitch Muscle Fibers', value: 42, average: 50, description: 'Percentage of muscle fibers that contract slowly but are more resistant to fatigue.' },
  { name: 'Testosterone Metabolism', value: 55, average: 50, description: 'How efficiently your body processes testosterone.' },
  { name: 'DHT Sensitivity', value: 62, average: 50, description: 'Sensitivity to dihydrotestosterone, related to hair loss and other traits.' },
  { name: 'Metabolic Rate', value: 45, average: 50, description: 'Rate at which your body burns calories at rest.' },
  { name: 'Vitamin D Absorption', value: 38, average: 50, description: 'Efficiency of vitamin D absorption from sunlight and diet.' },
  { name: 'Vitamin B12 Absorption', value: 51, average: 50, description: 'Efficiency of vitamin B12 absorption from diet.' }
];

// Mock food intolerance data
export const mockFoodIntolerances: FoodIntolerance[] = [
  { food: 'Lactose', probability: 65, description: 'Inability to digest lactose, a sugar found in milk and dairy products.' },
  { food: 'Gluten', probability: 22, description: 'Adverse reaction to gluten, a protein found in wheat, barley, and rye.' },
  { food: 'Peanuts', probability: 5, description: 'Allergic reaction to peanuts, which can range from mild to severe.' },
  { food: 'Shellfish', probability: 8, description: 'Allergic reaction to shellfish, which can be severe.' },
  { food: 'Caffeine', probability: 35, description: 'Sensitivity to caffeine, causing symptoms like jitters, anxiety, or insomnia.' }
];

// Mock genomic data
export const getMockGenomicData = (): GenomicData => {
  return {
    diseaseRisks: mockDiseaseRisks,
    traits: mockTraits,
    foodIntolerances: mockFoodIntolerances,
    userId: `user_${Math.floor(Math.random() * 10000)}`,
    uploadDate: new Date()
  };
};