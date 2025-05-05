import { v4 as uuidv4 } from 'uuid';

// Mock genetic diseases data with descriptions
const generateDiseaseRisks = () => {
  return [
    {
      id: uuidv4(),
      label: 'BRCA-related Cancer',
      value: Math.floor(Math.random() * 30) + 5, // 5-35%
      description: 'Mutations in BRCA1 and BRCA2 genes affecting breast, ovarian, and other cancer risks.'
    },
    {
      id: uuidv4(),
      label: 'Cystic Fibrosis',
      value: Math.floor(Math.random() * 15) + 2, // 2-17%
      description: 'Genetic condition affecting the lungs and digestive system due to CFTR gene mutations.'
    },
    {
      id: uuidv4(),
      label: 'Type 1 Diabetes',
      value: Math.floor(Math.random() * 25) + 10, // 10-35%
      description: 'Autoimmune condition affecting insulin production with genetic predisposition factors.'
    },
    {
      id: uuidv4(),
      label: 'Type 2 Diabetes',
      value: Math.floor(Math.random() * 40) + 20, // 20-60%
      description: 'Metabolic disorder affecting insulin sensitivity with strong genetic and lifestyle components.'
    },
    {
      id: uuidv4(),
      label: 'Sickle Cell Anemia',
      value: Math.floor(Math.random() * 10) + 1, // 1-11%
      description: 'Blood disorder causing abnormal hemoglobin and sickle-shaped red blood cells.'
    },
    {
      id: uuidv4(),
      label: 'Huntington\'s Disease',
      value: Math.floor(Math.random() * 8) + 1, // 1-9%
      description: 'Progressive brain disorder caused by a single gene mutation affecting movement and cognition.'
    },
    {
      id: uuidv4(),
      label: 'Duchenne Muscular Dystrophy',
      value: Math.floor(Math.random() * 7) + 1, // 1-8%
      description: 'Genetic disorder causing progressive muscle degeneration due to dystrophin gene mutations.'
    },
    {
      id: uuidv4(),
      label: 'Tay-Sachs Disease',
      value: Math.floor(Math.random() * 5) + 1, // 1-6%
      description: 'Rare genetic disorder causing neurodegeneration, more common in specific populations.'
    },
    {
      id: uuidv4(),
      label: 'Hemophilia',
      value: Math.floor(Math.random() * 12) + 2, // 2-14%
      description: 'Blood clotting disorder caused by mutations in genes that produce clotting factors.'
    },
    {
      id: uuidv4(),
      label: 'Spinal Muscular Atrophy',
      value: Math.floor(Math.random() * 9) + 1, // 1-10%
      description: 'Genetic disorder affecting motor neurons and causing muscle weakness and atrophy.'
    },
    {
      id: uuidv4(),
      label: 'Phenylketonuria (PKU)',
      value: Math.floor(Math.random() * 11) + 1, // 1-12%
      description: 'Metabolic disorder affecting phenylalanine processing, requiring dietary restrictions.'
    },
    {
      id: uuidv4(),
      label: 'Fragile X Syndrome',
      value: Math.floor(Math.random() * 14) + 1, // 1-15%
      description: 'Genetic condition causing intellectual disability and developmental issues.'
    }
  ];
};

// Mock fitness traits data
const generateFitnessTraits = () => {
  return {
    vo2max: {
      value: Math.floor(Math.random() * 25) + 35, // 35-60 ml/kg/min
      average: 45
    },
    endurance: {
      value: Math.floor(Math.random() * 40) + 40, // 40-80%
      average: 50
    },
    muscleFiber: {
      slowTwitch: Math.floor(Math.random() * 30) + 35, // 35-65%
      fastTwitch: 0 // Will be calculated as complement
    },
    power: {
      value: Math.floor(Math.random() * 50) + 30, // 30-80%
      average: 50
    },
    testosterone: {
      value: Math.floor(Math.random() * 40) + 40, // 40-80%
      average: 50
    },
    metabolicRate: {
      value: Math.floor(Math.random() * 600) + 1500, // 1500-2100 kcal/day
      average: 1800
    },
    vitaminD: {
      value: Math.floor(Math.random() * 50) + 30, // 30-80%
      average: 50
    },
    vitaminB12: {
      value: Math.floor(Math.random() * 50) + 30, // 30-80%
      average: 50
    }
  };
};

// Mock food intolerance data
const generateFoodIntolerances = () => {
  return {
    common: [
      {
        id: uuidv4(),
        label: 'Lactose Intolerance',
        value: Math.floor(Math.random() * 60) + 20, // 20-80%
        description: 'Difficulty digesting lactose, the sugar found in milk and dairy products.'
      },
      {
        id: uuidv4(),
        label: 'Gluten Sensitivity',
        value: Math.floor(Math.random() * 40) + 5, // 5-45%
        description: 'Immune reaction to gluten, a protein found in wheat, barley, and rye.'
      },
      {
        id: uuidv4(),
        label: 'Caffeine Sensitivity',
        value: Math.floor(Math.random() * 50) + 30, // 30-80%
        description: 'Heightened response to caffeine due to slower metabolism of the compound.'
      }
    ],
    allergies: [
      {
        id: uuidv4(),
        label: 'Peanut Allergy Risk',
        value: Math.floor(Math.random() * 25) + 5, // 5-30%
        description: 'Genetic factors associated with immune responses to peanut proteins.'
      },
      {
        id: uuidv4(),
        label: 'Shellfish Sensitivity',
        value: Math.floor(Math.random() * 30) + 10, // 10-40%
        description: 'Predisposition to immune reactions from proteins in shellfish.'
      },
      {
        id: uuidv4(),
        label: 'Tree Nut Allergy Risk',
        value: Math.floor(Math.random() * 20) + 5, // 5-25%
        description: 'Genetic factors linked to potential allergic responses to tree nuts.'
      }
    ],
    metabolism: [
      {
        id: uuidv4(),
        label: 'Alcohol Metabolism',
        value: Math.floor(Math.random() * 60) + 20, // 20-80%
        description: 'Efficiency of alcohol processing enzymes affecting tolerance and response.'
      },
      {
        id: uuidv4(),
        label: 'Carbohydrate Sensitivity',
        value: Math.floor(Math.random() * 40) + 30, // 30-70%
        description: 'Genetic factors affecting insulin response and carbohydrate processing.'
      },
      {
        id: uuidv4(),
        label: 'Fat Metabolism Efficiency',
        value: Math.floor(Math.random() * 50) + 30, // 30-80%
        description: 'Ability to process and utilize dietary fats based on genetic factors.'
      },
      {
        id: uuidv4(),
        label: 'Bitter Taste Sensitivity',
        value: Math.floor(Math.random() * 70) + 20, // 20-90%
        description: 'Genetic variations affecting taste receptors and perception of bitter compounds.'
      }
    ],
    recommendations: [
      'Focuses on whole, unprocessed foods',
      'Includes a variety of colorful fruits and vegetables',
      'Moderates dairy consumption based on lactose tolerance',
      'Includes regular protein sources appropriate for your sensitivities',
      'Limits simple carbohydrates and added sugars',
      'Incorporates healthy fats from sources like olive oil and avocados'
    ]
  };
};

export const generateMockAnalysisData = () => {
  const fitnessTraits = generateFitnessTraits();
  
  // Calculate fast twitch as the complement of slow twitch
  fitnessTraits.muscleFiber.fastTwitch = 100 - fitnessTraits.muscleFiber.slowTwitch;
  
  return {
    id: uuidv4(),
    timestamp: new Date().toISOString(),
    diseaseRisks: generateDiseaseRisks(),
    fitnessTraits,
    foodIntolerances: generateFoodIntolerances()
  };
};