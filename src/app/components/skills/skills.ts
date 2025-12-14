import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
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
        'React (en cours d’apprentissage)'
      ]
    },
    {
      title: 'Back-end',
      skills: [
        'Node.js',
        'Express.js',
        'NestJS',
        'API REST',
        'Architecture MVC'
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
        'Environnements virtualisés'
      ]
    },
    {
      title: 'Méthodologies',
      skills: [
        'Méthodologie Agile',
        'Travail en équipe',
        'Gestion de projet'
      ]
    }
  ];
}

