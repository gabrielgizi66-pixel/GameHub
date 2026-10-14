/** Interface que padroniza os objetos de jogo da aplicação. */
export interface Jogo {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  avaliacao: number;
  imagem: string;
  disponivel: boolean;
}

/** Categorias disponíveis no catálogo e no formulário de cadastro. */
export const CATEGORIAS: string[] = [
  'Ação',
  'Aventura',
  'RPG',
  'Estratégia',
  'Esporte',
  'Corrida',
  'Puzzle',
];
