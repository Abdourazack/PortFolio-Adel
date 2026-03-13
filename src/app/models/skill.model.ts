export interface Skill {
  name: string;
  level: number; // 0 à 100 pour barre de progression
  category: 'Front-end' | 'Back-end' | 'Autres';
}
