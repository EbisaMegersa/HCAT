export interface RoadmapPhase {
  phase: string;
  nodeNumber: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  status: string;
  badgeColor: string;
  accentBorder?: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
