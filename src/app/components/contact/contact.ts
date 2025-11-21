import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

    email: string = 'adelhared123@gmail.com.com';
  linkedInUrl: string = 'https://www.linkedin.com/in/adel-abdourazack-hared-8295781b3/';
  message: string = '';

  // Fonction pour gérer le clic sur LinkedIn
  visitLinkedIn() {
    this.message = 'Vous allez être redirigé vers LinkedIn...';
    window.open(this.linkedInUrl, '_blank');
  }

  // Fonction pour copier l'email
  copyEmail() {
    navigator.clipboard.writeText(this.email)
      .then(() => this.message = 'Email copié dans le presse-papiers !')
      .catch(() => this.message = 'Impossible de copier l’email.');
  }
}
