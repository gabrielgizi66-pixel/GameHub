import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Jogos } from './pages/jogos/jogos';
import { JogoDetalhes } from './pages/jogo-detalhes/jogo-detalhes';
import { CadastrarJogo } from './pages/cadastrar-jogo/cadastrar-jogo';
import { Sobre } from './pages/sobre/sobre';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', component: Home, title: 'GameHub | Início' },
  { path: 'jogos', component: Jogos, title: 'GameHub | Catálogo' },
  { path: 'jogos/:id', component: JogoDetalhes, title: 'GameHub | Detalhes' },
  { path: 'cadastrar', component: CadastrarJogo, title: 'GameHub | Cadastrar' },
  { path: 'sobre', component: Sobre, title: 'GameHub | Sobre' },
  { path: '**', component: NaoEncontrado, title: 'GameHub | Página não encontrada' },
];
