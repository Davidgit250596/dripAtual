# 🛒 Digital Store – E-commerce Frontend

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

**Digital Store** é um projeto frontend de um e-commerce moderno, responsivo e visualmente atrativo. Desenvolvido com **React** e **Vite**, o sistema tem como foco a performance, organização modular e experiência do usuário.

> O projeto simula uma loja virtual com páginas promocionais, filtros de busca, vitrine de produtos e telas de login/cadastro.

---

## 🚀 Funcionalidades

- 🎯 Página inicial com carrossel e seções de destaques
- 🛍️ Listagem de produtos com imagens, descrições e preços
- 🔎 Filtros por categorias, nome e tipo
- 🧾 Página de detalhes do produto com avaliações
- 👟 Página temática da linha Air Jordan
- 🔐 Telas visuais de cadastro e login
- 📱 Layout responsivo para dispositivos móveis

---

## 🛠️ Tecnologias Utilizadas

- [**React**](https://reactjs.org/) – Biblioteca para construção de interfaces
- [**Vite**](https://vitejs.dev/) – Bundler para desenvolvimento e build
- **React Router DOM** – Gerenciamento de rotas SPA
- **CSS Modules / CSS Global** – Estilização dos componentes
- **Imagens e ícones personalizados** – Design visual customizado

---

## 📦 Instalação e Uso

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

npm install
Execute o projeto:


npm run dev
Acesse no navegador:


http://localhost:5173
🌐 Rotas Principais
Rota	Página/Componente	Descrição
/	Pagina1	Página inicial com destaques
/produtos	Pagina2	Listagem geral de produtos
/detalhes	Pagina3	Detalhes de um produto específico
/air-jordan	AirJordan	Página promocional especial
/login	Login	Tela de login do usuário
/cadastro	Cadastro	Formulário de cadastro

📁 Estrutura do Projeto

📦 root/
├── public/                 # Arquivos públicos e imagens gerais
├── src/
│   ├── assets/             # Imagens e mídias
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header/         # Cabeçalho do site
│   │   ├── footer/         # Rodapé com redes sociais
│   │   ├── card/           # Cards de produto
│   │   ├── carrossel1/     # Banner rotativo
│   │   ├── categorias/     # Filtros por categoria
│   │   ├── colecao1/2/     # Seções promocionais
│   │   ├── filtro/         # Barra lateral de filtro
│   │   ├── cadastro/       # Formulário de cadastro
│   │   └── airJordan/      # Página temática Air Jordan
│   ├── pages/              # Páginas principais do site
│   │   ├── pagina1/2/3/    # Páginas de navegação
│   │   └── login/          # Tela de login
│   ├── routes/             # Arquivo de rotas (React Router)
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Ponto de entrada do app
├── package.json            # Configuração e dependências
├── vite.config.js          # Configurações do Vite
└── README.md               # Este arquivo


👨‍💻 Autores
Projeto desenvolvido como parte da formação Geração Tech.

João Felipe

David Michael

Karol Danttas

Lannylton

📄 Licença
Este projeto está licenciado sob a licença MIT.
Consulte o arquivo LICENSE para mais detalhes.
