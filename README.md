# Arion — Site Estático

Versão estática (HTML + CSS + JS puro), pronta para publicar no **GitHub Pages**.

## 📁 Estrutura de pastas

```
arion/
├── index.html          ← página principal (entrada do site)
├── css/
│   └── styles.css      ← todos os estilos
├── js/
│   └── main.js         ← partículas, scroll ativo, carrossel
└── images/             ← todas as imagens (PNG/JPG)
    ├── hero-scene.png
    ├── arion-portrait.png
    ├── lumina-star.png
    ├── icon-swords.png
    ├── icon-map.png
    ├── icon-character.png
    ├── icon-spellbook.png
    ├── gallery-1.png … gallery-5.png
    ├── cta-background.jpg
    └── mage.png
```

> ⚠️ **Importante:** mantenha exatamente esses nomes de pastas (`css/`, `js/`, `images/`) e arquivos. O `index.html` referencia caminhos **relativos** (ex.: `images/hero-scene.png`), então qualquer renomeação quebra o site.

## 🚀 Publicando no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `arion-site`).
2. Suba TODO o conteúdo desta pasta para a raiz do repositório (o `index.html` precisa ficar na raiz, **não** dentro de uma subpasta).
3. No repositório, vá em **Settings → Pages**.
4. Em *Source*, selecione **Deploy from a branch** → branch `main` → pasta `/ (root)` → **Save**.
5. Em ~1 minuto seu site estará no ar em `https://SEU-USUARIO.github.io/arion-site/`.

## 🧪 Testando localmente

Abra o `index.html` direto no navegador, ou rode um servidor simples:

```bash
# Python 3
python3 -m http.server 8000
# Depois abra http://localhost:8000
```

## ✏️ Onde editar o quê

- **Textos / seções** → `index.html`
- **Cores, fontes, layout** → `css/styles.css` (variáveis no topo, em `:root`)
- **Animações / interações** → `js/main.js`
- **Imagens** → substitua os arquivos em `images/` mantendo o mesmo nome
