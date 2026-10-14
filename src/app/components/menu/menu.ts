import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  aberto = signal(false);

  alternar(): void {
    this.aberto.update((v) => !v);
  }

  fechar(): void {
    this.aberto.set(false);
  }
}
