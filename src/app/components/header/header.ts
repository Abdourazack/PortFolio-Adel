import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  public animateHeader = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.animateHeader = true;
    }, 200);
  }
}

