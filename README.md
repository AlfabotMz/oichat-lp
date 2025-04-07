# OiChat Landing Page

Landing page moderna e otimizada para o OiChat, uma solução de atendimento automatizado via WhatsApp.

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- PostCSS
- CSSNano

## Requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/oichat-lp.git
cd oichat-lp
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run format` - Formata o código com Prettier

## Otimizações Implementadas

- Lazy loading de componentes
- Otimização de imagens
- Minificação de CSS
- Remoção de console.logs em produção
- Otimização de importações de pacotes
- Cache de build
- Compressão de assets

## Estrutura do Projeto

```
oichat-lp/
├── app/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Emotional.tsx
│   │   └── WhatsAppSVG.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── styles/
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
└── package.json
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 