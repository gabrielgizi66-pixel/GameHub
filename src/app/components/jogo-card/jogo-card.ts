import { Component, input } from '@angular/core';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Jogo } from '../../models/jogo.model';

@Component({
  selector: 'app-jogo-card',
  imports: [RouterLink, CurrencyPipe, DecimalPipe],
  templateUrl: './jogo-card.html',
  styleUrl: './jogo-card.css',
})
export class JogoCard {
  jogo = input.required<Jogo>();

  /** Se a imagem informada falhar, usa uma imagem padrão. */
  imagemQuebrada(evento: Event): void {
    const img = evento.target as HTMLImageElement;
    if (!img.src.endsWith('img/padrao.svg')) {
      img.src = 'img/padrao.svg';
    }
  }
}
