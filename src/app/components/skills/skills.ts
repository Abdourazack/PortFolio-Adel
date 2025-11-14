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
    { name: 'Angular', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'NestJS', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'Git', level: 85 }
  ];

}
