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
  imports: [CommonModule],
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
      title: 'Projet de Veille Technologique – Cloud Computing',
      description: `Site de diffusion web conçu pour présenter une veille technologique complète sur le cloud computing, réalisée dans un cadre académique.

Le projet met en avant les grandes tendances du cloud sur la période du 09/09/2025 au 12/02/2026, avec une approche structurée autour de plusieurs axes :
- architectures cloud-native et multi-cloud
- sécurité cloud (Zero Trust, IAM, chiffrement, posture)
- conformité, RGPD et souveraineté
- FinOps et gouvernance des coûts
- Green IT et durabilité
- IA et services managés

Fonctionnalités et points techniques :
- interface moderne et responsive
- mode clair / sombre
- navigation fluide avec ancres
- barre de progression de lecture
- animations d’apparition au scroll
- mise en page orientée diffusion de contenu technique
- déploiement statique sur Netlify
- versionnée avec Git et GitHub

Ce projet démontre ma capacité à transformer un dossier académique structuré en support web professionnel, clair, esthétique et accessible.`,
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design',
        'Dark Mode',
        'UI/UX Design',
        'Git',
        'GitHub',
        'Netlify'
      ],
      link: 'https://veille-technologiques.netlify.app/',
      code: 'https://github.com/Abdourazack/veille-technologique'
    },
    {
      title: 'API REST - Gestion des Articles',
      description: `API REST complète dédiée à la gestion des articles, développée selon une architecture MVC moderne et structurée.

L’application permet de créer, lire, mettre à jour et supprimer des articles (CRUD), avec un rendu dynamique côté serveur grâce à EJS.

La persistance des données est assurée par une base de données MySQL compatible hébergée sur TiDB Cloud, garantissant scalabilité et haute disponibilité.

L’API est déployée en production sur Render avec intégration continue via GitHub.`,
      technologies: ['Node.js', 'Express.js', 'EJS', 'MySQL (TiDB Cloud)', 'Architecture MVC', 'Render'],
      code: 'https://github.com/Abdourazack/Gestion-des-articles',
      link: 'https://gestion-des-articles.onrender.com/'
    },
    {
      title: 'Site Vitrine - Bistrot de Quartier',
      description: `Site vitrine simple réalisé en HTML et CSS.
Présentation de l'accueil, menu, horaires et contacts avec un design responsive.`,
      technologies: ['HTML', 'CSS', 'Responsive Design', 'Bootstrap'],
      code: 'https://github.com/Abdourazack/L-Endroit.git',
      link: 'https://lapasserelle.netlify.app'
    },
    {
      title: 'API REST - Gestion Librairie',
      description: `API REST développée avec NestJS pour la gestion d'une librairie.
Gestion des livres, auteurs et utilisateurs via endpoints sécurisés.
MongoDB utilisé en base NoSQL avec Docker pour le déploiement.`,
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'REST API', 'NoSQL', 'CRUD'],
      code: 'https://github.com/Abdourazack/Librairie.git'
    },
    {
      title: 'Trusticket - Billetterie Événementielle',
      description: `Projet de billetterie développé en Next.js et React avec TypeScript.
Gestion du panier, modification des tickets et sauvegarde via LocalStorage.
Animations réalisées avec Framer Motion.
Déploiement sur Netlify.`,
      technologies: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'LocalStorage', 'Netlify'],
      code: 'https://github.com/Abdourazack/trusticket-demo.git',
      link: 'https://trusticket-demo.netlify.app/'
    },
    {
      title: 'AnimeWorld - Catalogue & Bibliothèque d’Animes',
      description: `Application web moderne permettant d'explorer un catalogue d'animes via API publique.

Fonctionnalités principales :
- Pagination dynamique
- Consultation des détails (synopsis, genres, stats)
- Ajout / suppression dans une bibliothèque personnelle
- Sauvegarde locale via LocalStorage
- Mode sombre dynamique
- Architecture multi-pages optimisée avec Vite

Le projet est déployé en production sur Netlify avec build Vite.`,
      technologies: [
        'JavaScript ES6',
        'Vite',
        'Axios',
        'SweetAlert2',
        'LocalStorage',
        'REST API',
        'Netlify',
        'Responsive Design'
      ],
      code: 'https://github.com/Abdourazack/AnimeWorld-main-main',
      link: 'https://amine-world.netlify.app/'
    }
  ];
}