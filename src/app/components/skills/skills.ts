import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class Skills {

  skillGroups = [
    {
      title: 'Front-end',
      skills: [
        'HTML / CSS / SCSS',
        'JavaScript (ES6+)',
        'TypeScript',
        'Angular',
        'React (en cours d’apprentissage)',
        'Next.js (projet Trusticket Demo)',
        'Animations avec Framer Motion'
      ]
    },
    {
      title: 'Back-end',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'API REST',
        'Architecture MVC',
        'Context API React (gestion du panier côté client pour la démo)'
      ]
    },
    {
      title: 'Bases de données',
      skills: [
        'MySQL',
        'MongoDB',
        'Modélisation de données'
      ]
    },
    {
      title: 'Outils & DevOps',
      skills: [
        'Git / GitHub',
        'Docker',
        'Netlify (déploiement Next.js)',
        'LocalStorage pour sauvegarde côté client'
      ]
    },
    {
      title: 'Méthodologies',
      skills: [
        'Méthodologie Agile',
        'Travail en équipe',
        'Gestion de projet',
        'Évolution et apprentissage continu (projets personnels et démos)'
      ]
    }
  ];
}
