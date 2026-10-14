import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { JogoService } from '../../services/jogo.service';

@Component({
  selector: 'app-jogo-detalhes',
  imports: [RouterLink, CurrencyPipe, DecimalPipe],
  templateUrl: './jogo-detalhes.html',
  styleUrl: './jogo-detalhes.css',
})
export class JogoDetalhes {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(JogoService);

  /** ID lido do parâmetro da rota (/jogos/:id). */
  private readonly id = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: NaN },
  );

  readonly jogo = computed(() => this.service.buscarPorId(this.id()));

  imagemQuebrada(evento: Event): void {
    const img = evento.target as HTMLImageElement;
    if (!img.src.endsWith('img/padrao.svg')) {
      img.src = 'img/padrao.svg';
    }
  }
}
