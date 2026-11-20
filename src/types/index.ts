export type ConfidenceLevel = 'level1' | 'level2' | 'level3' | 'level4';

export interface ConfidenceBadgeInfo {
  level: ConfidenceLevel;
  code: string;
  name: string;
  shortLabel: string;
  badgeClass: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  description: string;
}

export const CONFIDENCE_BADGES: Record<ConfidenceLevel, ConfidenceBadgeInfo> = {
  level1: {
    level: 'level1',
    code: 'POZIOM 1',
    name: 'Konsensus Empiryczny',
    shortLabel: 'Konsensus',
    badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    borderClass: 'border-emerald-500/40',
    bgClass: 'bg-emerald-500/10',
    textClass: 'text-emerald-400',
    description: 'Dane potwierdzone wielokrotnie w paleogenetyce, neuroobrazowaniu, anatomii porównawczej lub replikowalnych metaanalizach.'
  },
  level2: {
    level: 'level2',
    code: 'POZIOM 2',
    name: 'Wiodąca Hipoteza Naukowa',
    shortLabel: 'Wiodąca Hipoteza',
    badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    borderClass: 'border-amber-500/40',
    bgClass: 'bg-amber-500/10',
    textClass: 'text-amber-400',
    description: 'Silny model teoretyczny z poważnym zapleczem badawczym, nadal aktywnie testowany w środowisku akademickim.'
  },
  level3: {
    level: 'level3',
    code: 'POZIOM 3',
    name: 'Koncepcja Sporna / Zweryfikowana Krytycznie',
    shortLabel: 'Koncepcja Sporna',
    badgeClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    borderClass: 'border-rose-500/40',
    bgClass: 'bg-rose-500/10',
    textClass: 'text-rose-400',
    description: 'Głośne hipotezy zakwestionowane lub obalone empirycznie; prezentowane jako lekcja krytycznego myślenia naukowego.'
  },
  level4: {
    level: 'level4',
    code: 'POZIOM 4',
    name: 'Horyzont Prognostyczny / Trend',
    shortLabel: 'Horyzont 2050+',
    badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    borderClass: 'border-purple-500/40',
    bgClass: 'bg-purple-500/10',
    textClass: 'text-purple-400',
    description: 'Ostrożna ekstrapolacja obecnych trendów demograficznych, neurokognitywnych i makroekonomicznych.'
  }
};

export interface HominidSpecies {
  id: string;
  name: string;
  commonName: string;
  epochRange: string;
  yearsAgoRange: [number, number]; // in thousands of years
  brainCapacityCm3: { min: number; max: number; avg: number };
  estimatedGroupSize: { min: number; max: number };
  geographicRange: string;
  discoveryInfo: string;
  cranialAndAnatomyFeatures: string[];
  toolIndustry: string;
  dietAndSurvivalStrategy: string;
  boundaryBehaviors: {
    careDescription: string;
    violenceAndCooperation: string;
    keyFossilEvidence: string;
  };
  paleogeneticsAndHybridization: string;
  extinctionOrFateHypothesis: string;
  confidenceLevel: ConfidenceLevel;
  bioNeuroHighlights: {
    corticalEncephalization: string;
    socialBrainRatio: string;
    vocalAndSymbolicSubstrate: string;
  };
}

export interface PairwiseComparisonData {
  pairId: string;
  speciesAId: string;
  speciesBId: string;
  title: string;
  subtitle: string;
  dailyEcology: {
    speciesA: {
      dailyCaloriesKcal: string;
      huntingAndDietDetail: string;
      shelterAndMobility: string;
      childhoodAndLifespan: string;
      skeletalTraumaPattern: string;
    };
    speciesB: {
      dailyCaloriesKcal: string;
      huntingAndDietDetail: string;
      shelterAndMobility: string;
      childhoodAndLifespan: string;
      skeletalTraumaPattern: string;
    };
  };
  spatiotemporalEncounter: {
    coexistenceStatus: 'direct_overlap' | 'contact_zone' | 'ancestor_descendant' | 'no_overlap';
    coexistenceLabel: string;
    keyGeographicZones: string[];
    datingOverlap: string;
    archaeologicalSites: string[];
    encounterNarrative: string;
  };
  displacementMechanisms: {
    winnerSpeciesId?: string;
    primaryHypothesis: string;
    demographicDensity: string;
    tradeAndMaterialNetworks: string;
    climaticEnergeticCost: string;
    dietaryBroadness: string;
    socialCohesionAndDomestication: string;
  };
  geneticLegacy: {
    introgressionRate: string;
    introgressedTraits: string[];
    hybridFitnessAndInfertility: string;
    keyGenesIdentified: string[];
    paleogeneticSummary: string;
  };
  confidenceLevel: ConfidenceLevel;
}

export interface BrainStructure {
  id: string;
  name: string;
  latinName: string;
  anatomicalLocation: string;
  evolutionaryOrigin: string;
  primaryFunction: string;
  pleistoceneContext: string;
  digitalAndAiEraMismatch: string;
  associatedNeurotransmitters: string[];
  primaryCognitiveSystem: string;
  keyResearchers: string[];
  confidenceLevel: ConfidenceLevel;
  svgCoordinates: { cx: number; cy: number; r: number; labelX: number; labelY: number };
}

export interface PrimateTestesData {
  speciesName: string;
  latinName: string;
  bodyWeightKg: number;
  testesWeightG: number;
  testesToBodyRatioPercent: number;
  matingSystem: string;
  spermCompetitionLevel: string;
  socialStructure: string;
  description: string;
}

export interface EvoPsychModel {
  id: string;
  title: string;
  subtitle: string;
  historicalContext: string;
  coreHypothesis: string;
  bioNeuroSubstrate: string;
  modernImplication: string;
  confidenceLevel: ConfidenceLevel;
  keyResearchers: string[];
  evidenceSummary: string;
  interactiveComponentType: 'partible_paternity' | 'attractiveness_anatomy' | 'dunbar_circles' | 'goodness_paradox' | 'reverse_dominance' | 'compassion_archeology' | 'behavioral_immune' | 'life_history';
}

export interface EffectRealWorldExample {
  antiquityOrHistory: string;
  laboratoryOrFieldStudy: string;
  modernDailyOrDigitalEconomy: string;
}

export interface PsychologicalEffect {
  id: string;
  name: string;
  subtitle: string;
  category: 'Pamiec_i_Poznanie' | 'Spoleczne_i_Reputacyjne' | 'Rozrod_i_Relacje' | 'Status_i_Ekonomia' | 'Bodzce_i_Media';
  categoryLabel: string;
  classicExperiment: string;
  academicDefinition: string;
  neurobiologicalSubstrate: string;
  pleistoceneFunction: string;
  modernCapitalismAndDigitalNetwork: string;
  empiricalExamples: EffectRealWorldExample;
  keyResearchers: string[];
  confidenceLevel: ConfidenceLevel;
  methodologicalNote?: string;
}

export type EpochId = 'pleistocene' | 'neolithic' | 'antiquity' | 'industrial' | 'late_capitalism' | 'forecast_2050';

export interface EpochState {
  epochId: EpochId;
  epochName: string;
  shortLabel: string;
  timeframe: string;
  socialSetting: string;
  phenotypeExpression: string;
  socialConstraintLevel: number; // 0 - 100
  statusEconomicPremium: number; // 0 - 100
  cohesionMentalHealthCost: number; // 0 - 100
  systemicMechanism: string;
  empiricalExamples: string[];
}

export type TraitPlasticityLevel = 'ultrakonserwatywna' | 'umiarkowanie_konserwatywna' | 'plastyczna' | 'hiperplastyczna';

export interface TraitTransformationPath {
  id: string;
  traitName: string;
  subtitle: string;
  biologicalAnchor: string;
  bioNeuroSubstrate: string;
  plasticityIndex: {
    level: TraitPlasticityLevel;
    label: string;
    description: string;
    score: number; // 1 to 4
  };
  confidenceLevel: ConfidenceLevel;
  epochs: Record<EpochId, EpochState>;
  emergingPhenomenaAndConsequences: string;
  keyResearchers: string[];
}

export interface ContemporarySelectionTrackItem {
  id: string;
  title: string;
  subtitle: string;
  mechanism: string;
  empiricalEvidence: string;
  selectiveDirection: 'positive' | 'negative' | 'stabilizing' | 'mismatch';
  selectiveDirectionLabel: string;
  darwinianFitnessVsStatus: string;
  gwasCitations?: string[];
}

export interface PhenomenonAutopsy {
  id: string;
  title: string;
  subtitle: string;
  category: 'zdrowie_psychiczne' | 'relacje' | 'praca_i_status' | 'poznanie_i_media';
  categoryLabel: string;
  bioNeuroMechanism: string;
  pleistoceneFunction: string;
  historicalShift: string; // Antiquity & Industrial
  modernOverdrive: string;
  mitigationProtocol: {
    individual: string[];
    environmental: string[];
    scientificRationale: string;
  };
  keySources: string[];
}

export interface ScientificResearcher {
  id: string;
  name: string;
  years: string;
  discipline: 'Paleoantropologia i Paleogenetyka' | 'Biologia i Neurobiologia Ewolucyjna' | 'Psychologia Ewolucyjna i Antropologia Społeczna' | 'Psychologia Poznawcza i Społeczna' | 'Kognitywistyka Religii i Filozofia Umysłu';
  affiliation: string;
  coreThesis: string;
  magnumOpus: string;
  keyContributions: string[];
  primaryQuote?: string;
}

export interface AcademicDebate {
  id: string;
  title: string;
  shortTopic: string;
  field: string;
  positionA: {
    proponents: string[];
    argument: string;
    falsificationCondition: string;
  };
  positionB: {
    proponents: string[];
    argument: string;
    falsificationCondition: string;
  };
  currentEmpiricalConsensus: string;
  confidenceLevel: ConfidenceLevel;
}

export interface PseudoscienceChecklistItem {
  id: string;
  number: number;
  principleTitle: string;
  academicStandard: string;
  popularFallacyTrap: string;
  diagnosticQuestions: string[];
  practicalExample: string;
}

// Module 7 Types
export interface ReligionTimelineStage {
  id: string;
  stageNumber: number;
  name: string;
  timeframe: string;
  coreMilestone: string;
  cognitiveSubstrate: string;
  archaeologicalProof: string;
  socialScale: string;
  ritualMode: string;
  confidenceLevel: ConfidenceLevel;
}

export interface CSRTopic {
  id: string;
  name: string;
  acronym?: string;
  coreConcept: string;
  pleistoceneRoots: string;
  modernEchoes: string;
  bioNeuroSubstrate: string;
  keyResearchers: string[];
  confidenceLevel: ConfidenceLevel;
}

export interface JaynesVsFrithData {
  title: string;
  leftColumnJaynes: {
    thesisTitle: string;
    badge: ConfidenceLevel;
    authorAndYear: string;
    coreClaim: string;
    homericEvidence: string;
    neurologicalSpeculation: string;
    whyRejectedBiologically: string;
    culturalValueRetained: string;
  };
  rightColumnFrithConsensus: {
    thesisTitle: string;
    badge: ConfidenceLevel;
    primaryResearchers: string[];
    corollaryDischargeMechanism: string;
    sourceMonitoringFailure: string;
    neuroanatomyEvidence: string;
    dennettCulturalSoftwareView: string;
  };
}

export interface SacredMigrationItem {
  id: string;
  evolutionaryModule: string;
  pleistoceneSacredState: string;
  antiquityAndTraditionalState: string;
  modern21stSecularMetamorphosis: string;
  underlyingPsychologicalNeed: string;
  riskOrPathology: string;
}

export interface ModuleCitation {
  id: string;
  moduleId: number;
  moduleName: string;
  apaString: string;
  doiOrUrl?: string;
  keyConcept: string;
  peerReviewedJournal: string;
}
