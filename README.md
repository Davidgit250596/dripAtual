 #🛒 Digital Store – E-commerce Frontend

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
![Status](https://img.shields.io/badge/status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-green)

Projeto frontend de um e-commerce moderno, responsivo e visualmente atrativo. Desenvolvido com *React* usando *Vite* para otimização de performance e organização modular por componentes.  

> O sistema simula uma loja virtual com páginas, filtros, seções promocionais e tela de cadastro/login.

---



---

## 🚀 Funcionalidades

- 🎯 Página inicial com carrossel e destaques
- 🛍 Listagem de produtos com imagens e descrição
- 🔎 Filtros por categorias, nome e tipo
- 🧾 Página de produto com avaliação
- 👟 Página temática da linha Air Jordan
- 🔐 Tela de cadastro e login (visual)
- 📱 Layout responsivo

---

## 🛠 Tecnologias Utilizadas

- *[React](https://reactjs.org/)* – Biblioteca principal
- *[Vite](https://vitejs.dev/)* – Bundler para build e dev
- *React Router Dom* – Roteamento SPA
- *CSS Modules / CSS Global* – Estilização
- *Imagens e ícones customizados* – Ilustrações personalizadas

---

## 📦 Instalação

1. Clone o projeto:

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:


npm install
Execute em modo desenvolvimento:


npm run dev
A aplicação estará disponível em http://localhost:5173.

🌐 Rotas Principais
Rota	Componente/Página	Descrição
/	Pagina1	Página inicial
/produtos	Pagina2	Listagem de produtos
/detalhes	Pagina3	Página de detalhes do produto
/air-jordan	AirJordan	Página promocional temática
/login	Login	Tela de login
/cadastro	Cadastro	Formulário de criação de conta

## 📁 Estrutura do Projeto

📦 root/
├── public/ # Arquivos públicos e imagens gerais
├── src/
│ ├── assets/ # Imagens e mídias
│ ├── components/ # Componentes reutilizáveis
│ │ ├── header/ # Cabeçalho do site
│ │ ├── footer/ # Rodapé com redes sociais
│ │ ├── card/ # Cards de produto
│ │ ├── carrossel1/ # Banner rotativo
│ │ ├── categorias/ # Filtros por categoria
│ │ ├── colecao1/2/ # Seções promocionais de coleções
│ │ ├── filtro/ # Barra lateral de filtro
│ │ ├── cadastro/ # Formulário de cadastro
│ │ └── airJordan/ # Página especial Air Jordan
│ ├── pages/ # Páginas principais do site
│ │ ├── pagina1/2/3/ # Landing pages e página de produto
│ │ └── login/ # Página de login
│ ├── routes/ # Rotas do React Router
│ ├── App.jsx # Arquivo principal da aplicação
│ └── main.jsx # Ponto de entrada
├── package.json # Dependências e scripts
├── vite.config.js # Configurações do Vite
└── README.md



👨‍💻 Autores
Projeto desenvolvido por alunos da formação Geração Tech.

João Felipe

David Michael

Karol Danttas

Lannylton

📄 Licença
Este projeto está sob a Licença MIT. Veja mais em LICENSE.
