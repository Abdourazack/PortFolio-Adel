import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {

  email: string = 'adel.hared123@gmail.com';
  linkedInUrl: string = 'https://www.linkedin.com/in/adel-abdourazack-hared-8295781b3/';
  message: string = '';

  // Fonction pour visiter LinkedIn
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
