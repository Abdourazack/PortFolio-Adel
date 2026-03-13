import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class Skills {
  skillGroups = [
    {
      title: 'Front-end',
      skills: [
        'HTML5 / CSS3 / SCSS',
        'JavaScript (ES6+)',
        'TypeScript',
        'Angular (Standalone Components)',
        'React (en cours d’apprentissage)',
        'Next.js',
        'Responsive Design',
        'UI/UX Integration',
        'Animations (Framer Motion, CSS, scroll effects)',
        'Vite (build & optimisation)'
      ]
    },

    {
      title: 'Back-end',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'API REST (CRUD, pagination, architecture structurée)',
        'Architecture MVC',
        'Séparation des couches (Controller / Service / Route)',
        'Gestion des requêtes HTTP',
        'Conception et structuration logique d’applications'
      ]
    },

    {
      title: 'Bases de données',
      skills: [
        'MySQL',
        'MongoDB (NoSQL)',
        'TiDB Cloud (MySQL compatible)',
        'Modélisation de données',
        'Collections & relations',
        'Conception de structures de données pour applications web'
      ]
    },

    {
      title: 'Outils & Déploiement',
      skills: [
        'Git / GitHub (versioning, branches, push, collaboration)',
        'Docker (conteneurisation)',
        'Netlify (déploiement front-end)',
        'Render (déploiement API)',
        'npm / gestion des dépendances',
        'Déploiement de sites statiques et applications web'
      ]
    },

    {
      title: 'Cloud & Veille Technologique',
      skills: [
        'Cloud Computing : notions IaaS / PaaS / SaaS',
        'Architectures cloud-native et multi-cloud',
        'Sécurité cloud : IAM, Zero Trust, chiffrement, posture',
        'Conformité RGPD et souveraineté numérique',
        'FinOps et gouvernance des coûts',
        'Green IT et durabilité',
        'IA & services managés',
        'Veille technologique structurée et analyse de sources'
      ]
    },

    {
      title: 'Méthodes, Analyse & Documentation',
      skills: [
        'Recherche et sélection de sources fiables',
        'Synthèse d’informations techniques',
        'Structuration de contenus pédagogiques et techniques',
        'Documentation de projet',
        'Google Sheets / organisation de veille',
        'Capacité d’analyse transversale',
        'Rédaction de livrables académiques et web'
      ]
    },

    {
      title: 'State Management & Stockage',
      skills: [
        'LocalStorage',
        'Context API (React)',
        'Gestion d’état côté client',
        'Manipulation du DOM moderne'
      ]
    },

    {
      title: 'Méthodologies & Soft Skills',
      skills: [
        'Méthodologie Agile',
        'Travail en équipe',
        'Organisation et gestion de projet',
        'Autonomie',
        'Apprentissage continu',
        'Résolution de problèmes',
        'Esprit de synthèse',
        'Capacité d’adaptation'
      ]
    }
  ];
}