# Lista de Tarefas - TODO API

API REST de gerenciamento de tarefas,
com criação, atualização, exclusão e controle de status,
desenvolvida com Node.js, Express, MySQL e tratamento de erros robusto.

---

## 🎯 Objetivo do Projeto

Este projeto foi criado com o objetivo de **estudar e aplicar boas práticas
de desenvolvimento de APIs REST**, abordando conceitos como:

- Organização em camadas (controllers, services, models)
- Tratamento e manipulação de erros customizados
- Validação de dados com middlewares
- Padrões de resposta consistentes
- Segurança com validação de entrada
- Documentação clara da API

O projeto tem foco educacional e de portfólio, demonstrando
uma arquitetura bem estruturada e escalável.

---

## 🧱 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- dotenv (variáveis de ambiente)
- Nodemon (desenvolvimento)
- Git

---

## 🗂️ Estrutura do Projeto

```bash
├── app.js                  # Arquivo principal da aplicação
├── package.json            # Dependências do projeto
├── .env                    # Variáveis de ambiente
├── Controllers/            # Camada responsável pelas requisições HTTP
├── Services/               # Regras de negócio da aplicação
├── Model/                  # Definição das entidades e conexão do BD
├── Routes/                 # Definição das rotas da API
├── Middlewares/            # Validações e tratamento de erros
│   ├── errorMiddleware.js          # Tratamento centralizado de erros
│   ├── tarefaMiddleware.js         # Validação de tarefas
│   ├── statusMiddleware.js         # Validação de status
│   ├── updateMiddleware.js         # Validação de atualização
│   └── idMiddleware.js             # Validação de ID
└── errors/                 # Classes de erro customizadas
    └── AppError.js         # Classe base de erros
```

A estrutura segue o princípio de **separação de responsabilidades**,
facilitando manutenção, testes e evolução do sistema.

---

## 📦 Dependências Utilizadas

### Dependências principais

```json
{
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "mysql2": "^3.16.1"
}
```

### Dependências de desenvolvimento

```json
{
  "nodemon": "^3.1.11"
}
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/lista-de-tarefas.git
cd lista-de-tarefas
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=lista_tarefas
DB_PORT=3306
NODE_ENV=development
```

### 4️⃣ Criar o banco de dados

Execute as queries SQL necessárias no MySQL:

```sql
CREATE DATABASE lista_tarefas;

USE lista_tarefas;

CREATE TABLE tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  status ENUM('pendente', 'em_progresso', 'concluida') DEFAULT 'pendente',
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 5️⃣ Iniciar a aplicação

```bash
npm run dev
```

---

### A API estará disponível em:

```bash
http://localhost:3000
```

---

## 🔐 Funcionalidades

- ✅ Criar tarefas
- ✅ Listar todas as tarefas
- ✅ Listar tarefa por ID
- ✅ Atualizar dados da tarefa
- ✅ Atualizar status da tarefa
- ✅ Deletar tarefa
- ✅ Validação robusta de entrada
- ✅ Tratamento centralizado de erros

---

## 📡 Rotas / Endpoints

### 📝 Tarefas

| Método | Rota           | Descrição                      |
| ------ | -------------- | ------------------------------ |
| POST   | `/tarefas`     | Criar nova tarefa              |
| GET    | `/tarefas`     | Listar todas as tarefas        |
| GET    | `/tarefas/:id` | Obter tarefa por ID            |
| PATCH  | `/tarefas/:id` | Atualizar tarefa               |
| PATCH  | `/tarefas/:id/status` | Alterar status da tarefa |
| DELETE | `/tarefas/:id` | Deletar tarefa                 |

---

## 🚀 Exemplo de Uso

### Criar uma tarefa

```bash
POST /tarefas
Content-Type: application/json

{
  "titulo": "Aprender Node.js",
  "descricao": "Estudar Express e MySQL",
  "status": "em_progresso"
}
```

### Resposta de sucesso

```json
{
  "id": 1,
  "titulo": "Aprender Node.js",
  "descricao": "Estudar Express e MySQL",
  "status": "em_progresso",
  "data_criacao": "2026-02-09T10:30:00Z",
  "data_atualizacao": "2026-02-09T10:30:00Z"
}
```

---

## 🛠️ Tratamento de Erros

A aplicação utiliza um sistema centralizado de tratamento de erros,
retornando respostas consistentes:

```json
{
  "erro": "Tarefa não encontrada",
  "status": 404
}
```

---

## 🚧 Próximos Passos

- Implementação de testes automatizados com Jest
- Autenticação de usuários
- Paginação de tarefas
- Filtros avançados
- Deploy em produção

---

## 📌 Observações

O projeto foi desenvolvido com foco em clareza de código,
organização em camadas e tratamento robusto de erros,
demonstrando boas práticas de desenvolvimento backend
e estrutura escalável para projetos futuros.