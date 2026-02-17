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
  imports: [CommonModule],  // pour *ngFor
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
      description: `API REST complète dédiée à la gestion des articles, développée selon une architecture MVC moderne et structurée.

L’application permet de créer, lire, mettre à jour et supprimer des articles (CRUD), avec un rendu dynamique côté serveur grâce à EJS.

La persistance des données est assurée par une base de données MySQL compatible hébergée sur TiDB Cloud (service externe managé), garantissant scalabilité et haute disponibilité.

L’API est déployée en production sur Render, assurant un hébergement cloud moderne et une intégration continue avec GitHub.`,
      technologies: ['Node.js', 'Express.js', 'EJS', 'MySQL (TiDB Cloud)', 'Architecture MVC', 'Render'],
      code: 'https://github.com/Abdourazack/Gestion-des-articles',
      link: 'https://gestion-des-articles.onrender.com/'
    }
    ,
    {
      title: 'Site Vitrine - Bistrot de Quartier',
      description: `Site vitrine simple pour un bistrot de quartier, réalisé dans le cadre de la première année en HTML et CSS. 
Le site présente l'accueil, le menu, les horaires et les contacts du bistrot, avec une mise en page responsive et un design convivial.`,
      technologies: ['HTML', 'CSS', 'Responsive Design', 'Bootstrap'],
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
    },
    // Nouveau projet Trusticket reformulé
    {
      title: 'Trusticket - Billetterie Événementielle',
      description: `Projet de billetterie événementielle développé en Next.js et React avec TypeScript.
Ce projet permet de gérer un panier, modifier les tickets et sauvegarder les choix localement dans le navigateur.
L'API est simulée côté client pour cette démo, car je continue d'apprendre et de progresser sur la gestion back-end.
Animations et transitions ajoutées avec Framer Motion pour une meilleure UX.
Déploiement réalisé sur Netlify pour montrer le résultat final accessible en ligne.`,
      technologies: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'LocalStorage', 'Netlify'],
      code: 'https://github.com/Abdourazack/trusticket-demo.git',
      link: 'https://trusticket-demo.netlify.app/'
    }
  ];
}