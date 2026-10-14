# 🎮 GameHub – Plataforma de Catálogo de Jogos

Aplicação web desenvolvida em **Angular** que simula uma plataforma de catálogo de jogos eletrônicos.
Funciona **sem bancos de dados**: todos os dados ficam em memória, centralizados em um Service.

## Funcionalidades

| Rota | Página | O que faz |
|------|--------|-----------|
| `/` | Início | Apresentação, total de jogos, jogos gratuitos e destaques |
| `/jogos` | Catálogo | Listagem, busca por nome, filtro por categoria e mensagem de "nenhum resultado" |
| `/jogos/:id` | Detalhes | Exibe o jogo pelo ID da rota ou "Jogo não encontrado" |
| `/cadastrar` | Cadastro | Formulário com validações; o novo jogo aparece no catálogo sem recarregar a página |
| `/sobre` | Sobre | Descrição, aluno, disciplina, tecnologias e função de componentes, rotas e serviços |
| `**` | Erro 404 | Página para endereços inexistentes |

### Validações do cadastro
- Nome obrigatório
- Preço somente positivo
- Avaliação entre 0 até 5

## Conteúdos de Angular utilizados
Componentes standalone · Interpolação `{{ }}` · Property Binding `[ ]` · Event Binding `( )` ·
Two-way Binding `[(ngModel)]` · `@if / @else` · `@for` · `@switch` · Rotas e `routerLink` ·
`ActivatedRoute` · Services e injeção de dependência · Interfaces TypeScript · CSS responsivo.

## Tecnologias
Angular 20 · TypeScript · HTML5 · CSS · Node.js · Visual Studio Code

## Estrutura

```
src/app/
  components/menu/        components/jogo-card/
  pages/home/  pages/jogos/  pages/jogo-detalhes/
  pages/cadastrar-jogo/  pages/sobre/  pages/nao-encontrado/
  models/jogo.model.ts
  services/jogo.service.ts
  app.routes.ts  app.config.ts  app.ts  app.html
```

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org) 20.19+ (ou 22+) e npm.

```bash
# 1. Instale o Angular CLI (uma única vez)
npm install -g @angular/cli

# 2. Instale as dependências do projeto
npm install

# 3. Rode o servidor de desenvolvimento
ng serve
# ou: npm start
```

Abra **http://localhost:4200** no navegador.

Para gerar a versão de produção: `ng build`

## Identificação
Edite o nome do aluno e da disciplina em `src/app/pages/sobre/sobre.ts`.
