import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JogoService } from '../../services/jogo.service';
import { JogoCard } from '../../components/jogo-card/jogo-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, JogoCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly service = inject(JogoService);

  readonly nome = 'GameHub';
  readonly total = computed(() => this.service.totalJogos());
  readonly gratuitos = computed(() => this.service.totalGratuitos());
  readonly destaques = computed(() => this.service.destaques(3));
}
