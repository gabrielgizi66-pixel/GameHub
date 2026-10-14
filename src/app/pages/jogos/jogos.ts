import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JogoService } from '../../services/jogo.service';
import { JogoCard } from '../../components/jogo-card/jogo-card';
import { CATEGORIAS } from '../../models/jogo.model';

@Component({
  selector: 'app-jogos',
  imports: [FormsModule, JogoCard],
  templateUrl: './jogos.html',
  styleUrl: './jogos.css',
})
export class Jogos {
  private readonly service = inject(JogoService);

  readonly categorias = CATEGORIAS;
  readonly busca = signal('');
  readonly categoria = signal('Todas');

  /** Resultado combinando busca por nome e filtro por categoria. */
  readonly filtrados = computed(() => {
    const cat = this.categoria();
    const base = cat === 'Todas' ? this.service.listar() : this.service.filtrarPorCategoria(cat);
    const idsPorNome = new Set(this.service.buscarPorNome(this.busca()).map((j) => j.id));
    return base.filter((j) => idsPorNome.has(j.id));
  });

  limparFiltros(): void {
    this.busca.set('');
    this.categoria.set('Todas');
  }
}
