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
        'Animations (Framer Motion, CSS)',
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
        'Gestion des requêtes HTTP (Axios)'
      ]
    },

    {
      title: 'Bases de données',
      skills: [
        'MySQL',
        'MongoDB (NoSQL)',
        'TiDB Cloud (MySQL compatible)',
        'Modélisation de données',
        'Collections & relations'
      ]
    },

    {
      title: 'Outils & DevOps',
      skills: [
        'Git / GitHub (versioning & branches)',
        'Docker (conteneurisation)',
        'Netlify (déploiement front-end)',
        'Render (déploiement API)',
        'npm / gestion des dépendances'
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
        'Résolution de problèmes'
      ]
    }

  ];
}
