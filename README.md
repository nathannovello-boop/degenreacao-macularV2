# Degeneração Macular

Site educativo e interativo preparado para o GitHub Pages.

## Como publicar

1. Extraia o ZIP.
2. Envie **todos os arquivos e pastas que estão dentro dele** para a raiz do seu repositório no GitHub. A pasta `.github` também precisa ser enviada.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment → Source**, selecione **GitHub Actions**.
5. Abra a aba **Actions** e aguarde a tarefa “Publicar no GitHub Pages” terminar.

Depois disso, o endereço do site aparecerá em **Settings → Pages**.

## Testar no computador (opcional)

É necessário ter o Node.js instalado. Dentro da pasta do projeto, execute:

```bash
npm install
npm run dev
```

## Estrutura principal

- `index.html`: entrada reconhecida pelo navegador e pelo GitHub Pages;
- `main.tsx`: inicia a aplicação;
- `app/page.tsx`: conteúdo e interações;
- `app/globals.css`: aparência e responsividade;
- `.github/workflows/deploy.yml`: publicação automática;
- `dist/`: versão estática criada pelo comando `npm run build`.
