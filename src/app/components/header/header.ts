import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  // Pour contrôler les animations
  public animateHeader: boolean = false;

  ngOnInit(): void {
    // Déclenche l'animation après le chargement
    setTimeout(() => {
      this.animateHeader = true;
    }, 200);
  }
}
