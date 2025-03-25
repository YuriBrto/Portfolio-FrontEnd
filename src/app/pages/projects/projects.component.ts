import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    { title: 'Projeto 1', description: 'Descrição do projeto 1', image: 'https://via.placeholder.com/300', link: '#' },
    { title: 'Projeto 2', description: 'Descrição do projeto 2', image: 'https://via.placeholder.com/300', link: '#' },
    { title: 'Projeto 3', description: 'Descrição do projeto 3', image: 'https://via.placeholder.com/300', link: '#' }
  ];
}
