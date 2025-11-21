import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

    skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS / SCSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Angular', level: 80 },
  { name: 'Node.js', level: 80 },
  { name: 'NestJS', level: 75 },
  { name: 'Express', level: 70 },
  { name: 'Python', level: 65 },
  { name: 'Git', level: 85 },
  { name: 'MongoDB', level: 70 },
  { name: 'Mongo Compass', level: 65 },
  { name: 'MySQL / PHPMyAdmin', level: 70 },
  { name: 'Docker', level: 60 },
  { name: 'VirtualBox / VMware', level: 60 },
  { name: 'Linux (bases)', level: 60 },
  { name: 'Windows', level: 80 },
  { name: 'Réseau (bases)', level: 60 },
  { name: 'Gestion de projet / Agile', level: 65 },
  { name: 'Scripting Kali Linux', level: 60 }
  ];

}
