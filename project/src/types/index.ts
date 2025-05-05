export interface DiseaseRisk {
  name: string;
  risk: number;
  description: string;
}

export interface Trait {
  name: string;
  value: number;
  average: number;
  description: string;
}

export interface FoodIntolerance {
  food: string;
  probability: number;
  description: string;
}

export interface GenomicData {
  diseaseRisks: DiseaseRisk[];
  traits: Trait[];
  foodIntolerances: FoodIntolerance[];
  userId: string;
  uploadDate: Date;
}

export type FileStatus = "idle" | "uploading" | "processing" | "success" | "error";