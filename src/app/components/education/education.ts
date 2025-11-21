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
      status: 'En dernière année',
      details: [
        'Projets full stack : Angular, Node.js, Express, NestJS',
        'Développement front-end et back-end',
        'Bases en Python et scripting Kali Linux',
        'Gestion de bases de données : MySQL, MongoDB',
        'Utilisation de Docker, VirtualBox, VMware',
        'Notions de réseaux et administration système',
        'Méthodologie Agile pour la gestion de projets'
      ]
    }
  ];
}
