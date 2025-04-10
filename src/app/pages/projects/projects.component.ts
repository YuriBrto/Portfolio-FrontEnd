import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ProjectsCardsComponent } from './projects-cards/projects-cards.component';
import { fadeInAnimation } from '../../animations/fade-in.animations';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectsCardsComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [ fadeInAnimation ,
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
    {
      title: 'Sistema Escolar',
      description: `Painel de controle e autenticação para professores e administradores.
      Use o celular na horizontal para melhor visualização. *Em desenvolvimento:*
      software para instituições escolares com foco na solicitação de instalação de programas em laboratórios.
      Atualmente rodando com dados mockados, enquanto o backend (Java + Spring Boot) está em fase de construção.
      Planejado para ter autenticação JWT com dois tipos de usuários (professores e admin), além de hash de senha com bcrypt para segurança.`,
      image: 'software.png',
      link: 'https://software-m-front-ddb4.vercel.app/login',
      github: 'https://github.com/YuriBrto/SoftwareMFront.git'
    },
    {
      title: 'E-commerce de Equipamentos',
      description: `Utilize o celular na horizontal para melhor visualização.
      Inclui funcionalidades como adição de itens ao carrinho, roteamento entre páginas,
      finalização de compra com redirecionamento à página inicial, além de Lazy Loading,
      uso do Bootstrap para o layout responsivo e reutilização de microcomponentes para maior organização e performance.`,
      image: 'ybuy.png',
      link: 'https://y-buyy-computers-3ytu.vercel.app/produtos',
      github: 'https://github.com/YuriBrto/yBuyy-computers.git'
    }
    ,
    {
      title: 'Anime Page',
      description: 'Explore um catálogo de animes com sistema de filtros inteligentes, favoritos personalizados e uma interface responsiva. Para a melhor experiência, utilize o celular na orientação horizontal.',
      image: 'anime.png',
      link: 'https://anime-yb-fkzm.vercel.app/animes',
      github: 'https://github.com/YuriBrto/animeYB.git'
    }
  ];
}
