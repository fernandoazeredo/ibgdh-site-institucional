# Site Institucional do IBGDH

Site público do Instituto Brasil Global de Direitos Humanos — IBGDH, desenvolvido com React, TypeScript, Vite e Firebase.

## Objetivos do projeto

- Apresentar a identidade, a missão e as áreas de atuação do Instituto.
- Publicar projetos, conteúdos educativos e informações de transparência.
- Oferecer uma experiência responsiva, acessível e de fácil manutenção.
- Preparar uma futura área administrativa com autenticação e perfis de acesso.

## Tecnologias

- React + TypeScript
- Vite
- Firebase Hosting, Authentication e Firestore
- CSS responsivo sem dependência de biblioteca visual

## Executar localmente

Requisitos: Node.js 20 ou superior.

```bash
npm install
cp .env.example .env.local
npm run dev
```

As variáveis do Firebase são públicas por natureza no aplicativo web, mas devem ser preenchidas somente após a criação do projeto. Regras de segurança e perfis de acesso continuam sendo obrigatórios.

## Validar

```bash
npm run lint
npm run build
```

## Publicar no Firebase

1. Crie ou selecione o projeto `ibgdh-site-institucional` no Console do Firebase.
2. Cadastre um aplicativo Web e copie os valores de configuração para `.env.local`.
3. Ative o Hosting e, quando necessário, Authentication e Firestore.
4. Instale a CLI, autentique e publique:

```bash
npm install -g firebase-tools
firebase login
firebase use ibgdh-site-institucional
npm run deploy
```

O arquivo `.env.local` não deve ser enviado ao GitHub.

## Estrutura

```text
src/
  components/    componentes de navegação e apresentação
  pages/         páginas públicas e administrativa
  services/      inicialização opcional do Firebase
  content.ts     conteúdo institucional centralizado
public/          logomarca, manifesto, sitemap e arquivos públicos
```

## Situação atual

Esta é a estrutura inicial do site. Formulários, documentos e acesso administrativo permanecem desativados até que canais, responsáveis, políticas e permissões sejam formalmente definidos.
