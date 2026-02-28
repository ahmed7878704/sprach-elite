export type Level = 'B1' | 'B2' | 'C1';
export type Skill = 'Lesen' | 'Sprechen' | 'Wortbildung';
export type Strictness = 'Moderate' | 'High' | 'Very High';

export interface SessionConfig {
  level: Level;
  skill: Skill;
  topic: string;
  strictness: Strictness;
}

export interface VocabularyWord {
  word: string;
  explanation: string;
  example: string;
}

export interface WortbildungQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  example: string;
}

export interface WortbildungData {
  nomenVerb: WortbildungQuestion[];
  adjektivNomen: WortbildungQuestion[];
  praefix: WortbildungQuestion[];
  wortfamilien: WortbildungQuestion[];
}

export interface SessionData {
  text: string;
  vocabulary: VocabularyWord[];
  questions: string[];
  stichpunkte?: string[];
  redemittel?: string[];
  wortbildung?: WortbildungData;
}

export interface EvaluationScores {
  coherence: number;
  grammar: number;
  vocabulary: number;
  structuralComplexity: number;
  argumentation: number;
}

export interface MicroDrill {
  drill: string;
  successCriteria: string;
}

export interface ArgumentStructureBreakdown {
  claimClarity: string;
  logicalFlow: string;
  evidenceQuality: string;
  counterargumentHandling: string;
}

export interface EvaluationFeedback {
  minimalCorrection: string;
  improvedVersion: string;
  nativeRefinement: string | null;
  topWeaknesses: string[];
  microDrills: MicroDrill[];
  argumentStructureBreakdown?: ArgumentStructureBreakdown;
}

export interface EvaluationResult {
  scores: EvaluationScores;
  feedback: EvaluationFeedback;
}
