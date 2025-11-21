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
      title: 'API REST - Gestion des Articles',
      description: `API REST complète pour la gestion des articles, construite avec une architecture MVC moderne.
  Cette API permet de créer, lire, mettre à jour et supprimer des articles, avec une interface dynamique EJS pour la visualisation côté serveur.
  La base de données MySQL assure une gestion fiable des données, et l’application est déployée en production sur Alwaysdata.`,
      technologies: ['Express.js', 'Node.js', 'MySQL', 'EJS', 'MVC'],
      code: 'https://github.com/Abdourazack/gestion-article-mvc.git',
      link: 'https://gestionarticle.alwaysdata.net/'
    },
    {
      title: 'Site Vitrine - Bistrot de Quartier',
      description: `Site vitrine simple pour un bistrot de quartier, réalisé dans le cadre de la première année en HTML et CSS. 
      Le site présente l'accueil, le menu, les horaires et les contacts du bistrot, avec une mise en page responsive et un design convivial.`,
      technologies: ['HTML', 'CSS', 'Responsive Design, Bootstrap'],
      code: 'https://github.com/Abdourazack/L-Endroit.git',
      link: 'https://lapasserelle.netlify.app'
    },

    {
      title: 'API REST - Gestion Librairie',
      description: `API REST complète pour la gestion d'une librairie, construite avec NestJS. 
  Cette API permet de gérer les livres, auteurs et utilisateurs avec des opérations CRUD, 
  et expose des endpoints sécurisés et structurés pour l'accès aux données. 
  La base de données MongoDB (NoSQL) est organisée en collections pour une gestion flexible des données. 
  Docker est utilisé pour le déploiement et l'isolation de l'environnement, et MongoDB Compass sert d'interface graphique pour la visualisation et la gestion de la base de données.`,
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'MongoDB Compass', 'REST API', 'NoSQL', 'CRUD'],
      code: 'https://github.com/Abdourazack/Librairie.git'
    }
  ];
}
