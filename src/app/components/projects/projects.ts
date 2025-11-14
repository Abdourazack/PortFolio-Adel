import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  code?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],  // <-- pour *ngFor
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Portfolio Personnel',
      description: 'Mon site pour présenter mes projets et mon CV interactif.',
      technologies: ['Angular', 'Bootstrap', 'SCSS'],
      link: 'https://abdourazack.github.io/CV/'
    },
    {
      title: 'API REST Étudiante',
      description: 'API sécurisée avec JWT réalisée avec NestJS et Node.js.',
      technologies: ['NestJS', 'Node.js', 'MongoDB'],
      code: 'https://github.com/abdourazack/api-projet'
    }
  ];
}
