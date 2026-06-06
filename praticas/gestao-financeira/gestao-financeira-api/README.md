
---

# 📊 Gestão Financeira - API REST

Backend desenvolvido em Node.js com Express, Prisma ORM e MySQL para o aplicativo de Gestão Financeira. Este repositório contém a infraestrutura de servidor, modelagem de dados e rotas da aplicação.

## 🛠️ Tecnologias Utilizadas

* **Node.js** com **Express**
* **Prisma ORM** (Modelagem, Migrations e Seed)
* **MySQL** (Banco de Dados Relacional)
* **Zod** (Validação de schemas e dados de entrada)

---

## 🚀 Como rodar o projeto localmente

Siga o passo a passo abaixo para configurar o ambiente, subir o banco de dados e testar a API.

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

* [Node.js](https://nodejs.org/) (Versão LTS)
* MySQL Server e MySQL Workbench (rodando na porta padrão `3306`)
* [Postman](https://www.postman.com/downloads/) (App Desktop recomendado)

### Passo 1: Criar o Banco de Dados

Abra o **MySQL Workbench** (ou gerenciador de sua preferência), conecte-se à sua instância local e execute o comando abaixo para criar o banco de dados com suporte a caracteres especiais (emojis):

```sql
CREATE DATABASE gestao_financeira CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

```

*(Opcional) Para validar posteriormente os dados inseridos, utilize consultas com a cláusula `WHERE`, como no exemplo:*

```sql
SELECT * FROM category WHERE id IS NOT NULL;

```

### Passo 2: Clonar e Instalar Dependências

No seu terminal, clone o repositório, acesse a pasta da API e instale os pacotes:

```bash
# Acesse a pasta da API
cd gestao-financeira-api

# Instale as dependências
npm install

```

### Passo 3: Configurar as Variáveis de Ambiente

Na raiz do projeto `gestao-financeira-api`, faça uma cópia do arquivo de exemplo para criar o seu arquivo de ambiente local:

1. Copie o arquivo `.env.example` e renomeie a cópia para `.env`.
2. Edite o arquivo `.env` inserindo o seu **usuário** e **senha** do MySQL local:

```env
DATABASE_URL="mysql://SEU_USUARIO:SUA_SENHA@localhost:3306/gestao_financeira"
PORT=3000

```

### Passo 4: Rodar Migrations e Povoar o Banco (Seed)

Com o Prisma configurado, vamos criar as tabelas e inserir as 5 categorias padrão exigidas pelo aplicativo (Renda, Alimentação, Casa, Educação, Viagens). Execute em sequência:

```bash
# Cria as tabelas no MySQL
npx prisma migrate dev

# Popula as categorias padrão
npm run prisma:seed

```

### Passo 5: Iniciar o Servidor

Com o banco pronto, inicie o servidor de desenvolvimento:

```bash
npm run dev

```

A API estará rodando em `http://localhost:3000`.

---


## 🧪 Testando as Rotas com Postman

Para facilitar a validação de todos os requisitos do projeto, uma Collection completa já foi exportada e configurada na pasta `postman`. Siga o passo a passo abaixo para testar o fluxo completo.

### Configuração Inicial

1. Abra o **Postman**.
2. Clique em **Import** e selecione o arquivo `collection.json` localizado na pasta `gestao-financeira-api/postman/`.
3. Na barra lateral esquerda, vá em **Environments** e clique no botão `+` para criar um ambiente chamado `Local`.
4. Adicione a variável `baseUrl` com o *Initial value* e *Current value* definidos como `http://localhost:3000`.
5. Salve o ambiente e **selecione-o no menu dropdown** no canto superior direito da tela do Postman.

---

### Ordem de Execução dos Testes

Abra a pasta "Gestão Financeira API" na aba de Collections e execute as requisições na ordem abaixo.

**1. Health-check (GET /)**
Ação: Clique em Send.
O que avaliar: O servidor deve retornar status `200 OK` e o JSON `{ "ok": true, "name": "gestao-financeira-api" }`.

**2. Listar categorias (GET /categories)**
Ação: Clique em Send.
O que avaliar: Deve retornar a lista com as 5 categorias padrão.
**⚠️ ATENÇÃO:** Copie o `id` da categoria "income" (Renda) retornado na resposta. Ele será usado no passo 6.

**3. Criar uma nova categoria (POST /categories)**
Ação: Na aba *Body*, o seguinte JSON já estará preenchido. Clique em Send.

```json
{
  "name": "health",
  "displayName": "Saúde",
  "icon": "favorite",
  "background": "#FFB6B6",
  "isIncome": false
}

```

O que avaliar: Status `201 Created`.
**⚠️ ATENÇÃO:** Copie o `id` gerado nesta resposta. Ele será usado nos passos 4 e 5.

**4. Atualizar categoria (PUT /categories/:id)**
Ação: Na URL da requisição, substitua `:id` pelo `id` da categoria copiado no passo 3. O *Body* será:

```json
{ 
  "displayName": "Saúde e Bem-estar" 
}

```

O que avaliar: O nome de exibição da categoria será atualizado com sucesso.

**5. Excluir categoria (DELETE /categories/:id)**
Ação: Na URL da requisição, utilize o mesmo `id` copiado no passo 3.
O que avaliar: Retorno do status `204 No Content` (sucesso na exclusão).
Teste extra: Tente colocar o `id` da categoria "income" na URL. O servidor retornará `400 Bad Request` informando que categorias padrão não podem ser excluídas.

**6. Criar transação (POST /transactions)**
Ação: Na aba *Body*, **substitua o valor** de `categoryId` pelo `id` da categoria "income" (que você copiou no passo 2) e clique em Send.

```json
{
  "description": "Salário de outubro",
  "value": 3500.50,
  "date": "2026-04-29",
  "categoryId": "COLE_O_ID_AQUI"
}

```

O que avaliar: Status `201 Created` com os dados da transação salvos.

**7. Listar transações (GET /transactions)**
Ação: Clique em Send.
O que avaliar: A lista trará a transação recém-criada, expandida com os detalhes da categoria associada.
**⚠️ ATENÇÃO:** Copie o `id` principal desta transação (o id da transação, não o da categoria).

**8. Excluir transação (DELETE /transactions/:id)**
Ação: Substitua o `:id` na URL pelo `id` da transação copiado no passo 7 e clique em Send.
O que avaliar: Retorno do status `204 No Content`.

**9. Validar erros (POST /transactions)**
Ação: Esta requisição possui um *Body* intencionalmente inválido:

```json
{ 
  "description": "" 
}

```

O que avaliar: O sistema deve barrar a entrada e retornar status `400 Bad Request` com a mensagem `"Dados inválidos"`, comprovando o funcionamento da validação.