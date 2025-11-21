import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

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
      link: 'https://cv-dev-web-fullstack-junoir.netlify.app/',
      code: 'https://github.com/Abdourazack/PortFolio-Adel.git'
    },
    {
      title: 'API REST Étudiante - Gestion Étudiants',
      description: `API REST complète pour la gestion des étudiants, construite avec une architecture MVC moderne.
      Cette API permet de créer, lire, mettre à jour et supprimer des étudiants, avec une interface dynamique EJS pour la visualisation côté serveur.
      La base de données MySQL assure une gestion fiable des données et l'application est déployée en production sur Alwaysdata.`,
      technologies: ['Express.js', 'Node.js', 'MySQL', 'EJS', 'MVC', 'JWT'],
      code: 'https://github.com/Abdourazack/gestion-article-mvc.git',
      link: 'https://gestionarticle.alwaysdata.net/'
    },
  {
  title: 'Site Vitrine - Bistrot de Quartier',
  description: `Site vitrine simple pour un bistrot de quartier, réalisé dans le cadre de la première année en HTML et CSS. 
  Le site présente l'accueil, le menu, les horaires et les contacts du bistrot, avec une mise en page responsive et un design convivial.`,
  technologies: ['HTML', 'CSS', 'Responsive Design'],
  code: 'https://github.com/Abdourazack/L-Endroit.git',
  link: 'https://lapasserelle.netlify.app'
}

  ];
}
