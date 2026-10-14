import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  
  readonly aluno = 'Gabriel Robe Giza';
  readonly disciplina = 'Ciência da Computação';

  readonly tecnologias = ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Node.js', 'Visual Studio Code'];

  readonly funcoes = [
    { titulo: 'Componentes', texto: 'Dividem a interface em partes reutilizáveis (menu, card de jogo e páginas).' },
    { titulo: 'Rotas', texto: 'Controlam a navegação entre as páginas sem recarregar o navegador.' },
    { titulo: 'Services', texto: 'Centralizam e compartilham os dados dos jogos entre os componentes por injeção de dependência.' },
  ];
}
