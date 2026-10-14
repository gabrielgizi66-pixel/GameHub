import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JogoService } from '../../services/jogo.service';
import { CATEGORIAS } from '../../models/jogo.model';

@Component({
  selector: 'app-cadastrar-jogo',
  imports: [FormsModule],
  templateUrl: './cadastrar-jogo.html',
  styleUrl: './cadastrar-jogo.css',
})
export class CadastrarJogo {
  private readonly service = inject(JogoService);
  private readonly router = inject(Router);

  readonly categorias = CATEGORIAS;

  nome = '';
  descricao = '';
  categoria = CATEGORIAS[0];
  preco: number | null = null;
  avaliacao: number | null = null;
  imagem = '';
  disponivel = true;

  enviado = false;

  salvar(form: NgForm): void {
    this.enviado = true;

    if (form.invalid || this.nome.trim() === '' || this.preco === null || this.avaliacao === null) {
      form.control.markAllAsTouched();
      return;
    }

    const novo = this.service.adicionar({
      nome: this.nome.trim(),
      descricao: this.descricao.trim() || 'Sem descrição informada.',
      categoria: this.categoria,
      preco: this.preco,
      avaliacao: this.avaliacao,
      imagem: this.imagem.trim() || 'img/padrao.svg',
      disponivel: this.disponivel,
    });

    // O catálogo é atualizado automaticamente (signal no Service), sem recarregar a página.
    this.router.navigate(['/jogos', novo.id]);
  }
}
