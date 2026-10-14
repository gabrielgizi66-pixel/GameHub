import { Injectable, signal } from '@angular/core';
import { Jogo } from '../models/jogo.model';

/**
 * Service único e compartilhado (injeção de dependência) que centraliza
 * os jogos em memória. Usa signal, então qualquer componente que leia
 * os dados é atualizado automaticamente quando um jogo é adicionado.
 */
@Injectable({ providedIn: 'root' })
export class JogoService {
  private readonly jogos = signal<Jogo[]>([
    {
      id: 1,
      nome: 'Shadow Blade',
      descricao: 'Um ninja luta contra clãs rivais em combates rápidos e fases repletas de sombras e segredos.',
      categoria: 'Ação',
      preco: 89.9,
      avaliacao: 4.5,
      imagem: 'img/jogo-1.svg',
      disponivel: true,
    },
    {
      id: 2,
      nome: 'Mystic Realms',
      descricao: 'RPG de mundo aberto com magia, masmorras, missões épicas e escolhas que mudam a história.',
      categoria: 'RPG',
      preco: 149.9,
      avaliacao: 4.8,
      imagem: 'img/jogo-2.svg',
      disponivel: true,
    },
    {
      id: 3,
      nome: 'Turbo Racers',
      descricao: 'Corridas arcade em pistas malucas, com turbo, atalhos e multiplayer local para até quatro jogadores.',
      categoria: 'Corrida',
      preco: 0,
      avaliacao: 4.0,
      imagem: 'img/jogo-3.svg',
      disponivel: true,
    },
    {
      id: 4,
      nome: 'Kingdom Tactics',
      descricao: 'Construa seu reino, treine exércitos e vença batalhas por turnos usando estratégia e planejamento.',
      categoria: 'Estratégia',
      preco: 79.9,
      avaliacao: 4.3,
      imagem: 'img/jogo-4.svg',
      disponivel: true,
    },
    {
      id: 5,
      nome: 'Pixel Quest',
      descricao: 'Aventura retrô em pixel art com puzzles, chefões criativos e uma trilha sonora marcante.',
      categoria: 'Aventura',
      preco: 0,
      avaliacao: 4.2,
      imagem: 'img/jogo-5.svg',
      disponivel: true,
    },
    {
      id: 6,
      nome: 'Goal Masters',
      descricao: 'Simulador de futebol com times customizáveis, modo carreira e campeonatos online.',
      categoria: 'Esporte',
      preco: 199.9,
      avaliacao: 3.9,
      imagem: 'img/jogo-6.svg',
      disponivel: false,
    },
    {
      id: 7,
      nome: 'Puzzle Garden',
      descricao: 'Quebra-cabeças relaxantes em jardins coloridos. Ideal para partidas curtas e para relaxar.',
      categoria: 'Puzzle',
      preco: 19.9,
      avaliacao: 4.6,
      imagem: 'img/jogo-7.svg',
      disponivel: true,
    },
    {
      id: 8,
      nome: 'Dragon Oath',
      descricao: 'Jure lealdade a um dragão ancestral e explore reinos em chamas neste RPG de ação cinematográfico.',
      categoria: 'RPG',
      preco: 129.9,
      avaliacao: 4.7,
      imagem: 'img/jogo-8.svg',
      disponivel: true,
    },
    {
      id: 9,
      nome: 'Space Raiders',
      descricao: 'Pilote naves, enfrente piratas espaciais e salve colônias em batalhas intensas pela galáxia.',
      categoria: 'Ação',
      preco: 59.9,
      avaliacao: 4.1,
      imagem: 'img/jogo-9.svg',
      disponivel: true,
    },
    {
      id: 10,
      nome: 'Sky Islands',
      descricao: 'Explore ilhas flutuantes, construa aeronaves e descubra tesouros em uma aventura cooperativa.',
      categoria: 'Aventura',
      preco: 39.9,
      avaliacao: 4.4,
      imagem: 'img/jogo-10.svg',
      disponivel: false,
    },
  ]);

  /** Retorna todos os jogos. */
  listar(): Jogo[] {
    return this.jogos();
  }

  /** Localiza um jogo pelo ID. */
  buscarPorId(id: number): Jogo | undefined {
    return this.jogos().find((j) => j.id === id);
  }

  /** Cadastra um novo jogo (o ID é gerado pelo Service). */
  adicionar(dados: Omit<Jogo, 'id'>): Jogo {
    const proximoId = this.jogos().reduce((maior, j) => Math.max(maior, j.id), 0) + 1;
    const novo: Jogo = { ...dados, id: proximoId };
    this.jogos.update((lista) => [...lista, novo]);
    return novo;
  }

  /** Retorna os jogos de uma categoria. */
  filtrarPorCategoria(categoria: string): Jogo[] {
    return this.jogos().filter((j) => j.categoria === categoria);
  }

  /** Pesquisa jogos pelo nome (ignora maiúsculas e acentos). */
  buscarPorNome(nome: string): Jogo[] {
    const termo = this.normalizar(nome);
    return this.jogos().filter((j) => this.normalizar(j.nome).includes(termo));
  }

  /** Quantidade de jogos cadastrados. */
  totalJogos(): number {
    return this.jogos().length;
  }

  /** Quantidade de jogos gratuitos. */
  totalGratuitos(): number {
    return this.jogos().filter((j) => j.preco === 0).length;
  }

  /** Jogos disponíveis com as melhores avaliações. */
  destaques(quantidade = 3): Jogo[] {
    return [...this.jogos()]
      .filter((j) => j.disponivel)
      .sort((a, b) => b.avaliacao - a.avaliacao)
      .slice(0, quantidade);
  }

  private normalizar(texto: string): string {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
