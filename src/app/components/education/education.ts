import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {

  formations = [
    {
      title: 'Bachelier en Informatique',
      status: 'En cours – dernière année',
      details: [
        'Développement d’applications web full stack',
        'Conception et implémentation d’APIs REST',
        'Projets académiques proches de cas réels',
        'Travail en équipe avec méthodologie Agile',
        'Utilisation d’outils modernes (Git, Docker, bases de données)'
      ]
    }
  ];
}

