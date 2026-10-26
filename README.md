# 🌐 Programação Web

Repositório da disciplina de **Programação Web**, onde reúno as receitas e exercícios do curso do professor Fabrício Vale. Cada pasta guarda o projeto de uma receita, na ordem em que foram estudadas.

---

## 📌 Sobre o Repositório

O objetivo é consolidar o que aprendi em aula, indo de HTML, CSS e JavaScript puros até aplicações em React e Next.js que consomem APIs externas, e praticar o versionamento com Git e GitHub.

---

## 🛠️ Tecnologias & Ferramentas

| Categoria       | Tecnologias                    |
| :-------------- | :----------------------------- |
| **Front-end**   | HTML5, CSS3, JavaScript        |
| **Frameworks**  | React, Next.js (App Router)    |
| **Dados**       | Consumo de API REST (OMDb API) |
| **Ferramentas** | Git, GitHub, VS Code, npm      |

---

## 📂 Estrutura de Pastas

| Pasta                                                  | O que tem                    |
| :----------------------------------------------------- | :--------------------------- |
| [`Html, css e JavaScript`](<./Html, css e JavaScript>) | Exercícios de base da web    |
| `react_example_receita_9` a `12`                       | Receitas de React            |
| `next0_receita_13`                                     | Primeiro projeto com Next.js |
| `next0_receita_14`                                     | Rotas no Next.js             |
| `next0_receita_15`                                     | Layouts e links              |
| `next0_receita_16`                                     | Data fetching com a OMDb API |

---

## 🎬 Destaque: receitas 16 e 17

Páginas em Next.js que consultam a [OMDb API](https://www.omdbapi.com/) no servidor e mostram título, ano, pôster, elenco, sinopse e avaliações de um filme.

- `/movies`: exibe um filme. Aceita `?titleSearchKey=<título>` e `?year=<ano>`; sem parâmetros, mostra um filme padrão.
- `/movieSearch`: formulário (`next/form`) que envia a pesquisa para `/movies`.

---

## ▶️ Como rodar um projeto

Entre na pasta da receita, instale as dependências e inicie o servidor:

```bash
cd next0_receita_16
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### 🔑 Chave da API (receitas 16 e 17)

A chave da OMDb não está no repositório. Gere uma gratuita em https://www.omdbapi.com/apikey.aspx e crie o arquivo `.env.local` dentro da pasta do projeto:

```
OMDB_API_KEY=sua_chave_aqui
```

Reinicie o servidor depois de criar o arquivo.

---

## 👤 Autor

**Jezreel Asaias**, estudante da UFRN (CERES, Caicó).
GitHub: [@Jezreel-Asaias](https://github.com/Jezreel-Asaias)
