## ✨ **API - Teste Backend**

<center>

### [Pré-requisitos](#💻-pré-requisitos) ▪️ [Rodando Localmente](#🏡-rodando-localmente) ▪️ [Postgres](#🐘-postgres) ▪️ [MongoDB](#🍃-mongodb) ▪️ [Build de imagem](#🐳-build-de-imagem) ▪️ [Funcionalidades](#📚-funcionalidades) ▪️ [Tecnologias](#🚀-tecnologias)

</center>

## 💻 **Pré-requisitos**
### Antes de começar, você precisará ter instaladas em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/)
### Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/)
<br />

## 🏡 **Rodando localmente**
### Para rodar o projeto localmente, siga as seguintes instruções:
<br />

Clone o projeto

```bash
git clone git@github.com:amandaureliano/users-api.git
```

Entre no diretório do projeto

```bash
cd users-api
```

Instale as dependências do projeto

```bash
npm install
```

Crie o arquivo .env que possibilita que sejam adicionadas as variáveis de ambiente do projeto

```bash
cp .env.example .env
```

Inicie o servidor do projeto

```bash
npm run dev
```
<br />

## 🐘 **Postgres**

Instale o **postgres** que vai criar e executar uma instância do banco de dados

```bash
npm run postgres:start
```

Execute o banco de dados **postgres**

```bash
npm run postgres:exec
```

Rode as migrações para o **postgres**

```bash
npm run migration:run
```
<br />

## 🍃 **MongoDB**

Instale o **mongodb** que vai criar e executar uma instância do banco de dados

```bash
npm run mongodb:start
```

Execute o banco de dados **mongodb**

```bash
npm run mongodb:exec
```

Para vermos os bancos de dados existentes, usaremos o comando:

```bash
show dbs
```
<br />

## 🐳 **Build de imagem**

### Para construir a imagem da nossa API, utilizaremos o comando:

```bash
npm run docker:build
```

### Para criar e rodar o container, usaremos o comando:

```bash
npm run docker:run
```

#### Certifique-se de ter a última versão do Docker instalada.

<br />

## 📚 **Funcionalidades**
- [x] Cadastro de usuário
- [x] Login de usuário

<br />

## 🚀 **Tecnologias**
### As seguintes ferramentas foram usadas na construção do projeto:
### [Node.js](https://nodejs.org/)
### [Knex](https://knexjs.org/)
### [Joi](https://www.npmjs.com/package/joi)
