---

# 📱 Money - Gestão Financeira App

Aplicativo móvel desenvolvido em **React Native com Expo** para o gerenciamento de finanças pessoais. Este projeto consome uma API RESTful (Node.js + MySQL) para persistência de dados e implementa funcionalidades avançadas de usabilidade, filtros dinâmicos e gráficos.

## ✨ Funcionalidades Implementadas (Requisitos do Projeto)

* **Autenticação:** Tela de login com validação de acesso e mensagem de boas-vindas com o nome do usuário.
* **Gestão de Transações:** Cadastro, listagem, edição e exclusão de receitas e despesas.
* **Gestão de Categorias Customizadas:** Categorias trazidas dinamicamente do banco de dados para o formulário.
* **Filtros Inteligentes:** Filtro por Mês/Ano tanto na tela de listagem quanto no resumo.
* **Dashboard Visual:** Gráfico de Pizza (*Pie Chart*) exibindo o balanço de gastos do mês selecionado, atrelado ao cálculo dinâmico de Saldo Final.
* **UX Avançada:** Interação de exclusão e edição via toque longo (*Long Press*) e teclado que não cobre os formulários (*KeyboardAvoidingView*).
* **Estado Global:** Gerenciamento da comunicação com a API utilizando a Context API.

---

## 🚀 Como executar o projeto na sua máquina

Para que o aplicativo funcione perfeitamente, o **Backend (API)** precisa estar rodando localmente na sua máquina antes de iniciar o Frontend.

### Passo 1: Subir a API (Backend)

Siga as instruções do `README.md` da pasta `gestao-financeira-api` para iniciar o servidor Node.js e o banco de dados MySQL na porta `3000`.

### Passo 2: Configurar o IP do Aplicativo

Como o celular/emulador roda em uma rede separada, ele não reconhece `localhost`. Você precisa apontar o aplicativo para o IP da sua máquina.

1. Abra o arquivo `src/services/api.js`.
2. Altere o valor da constante `BASE_URL` para o IP da sua máquina na rede local:

```javascript
// Exemplo se estiver rodando no celular físico via Wi-Fi:
const BASE_URL = "http://192.168.0.X:3000"; 

// DICA: Se estiver testando EXCLUSIVAMENTE no Emulador do Android Studio, você pode usar:
const BASE_URL = "http://10.0.2.2:3000"; 

```

### Passo 3: Instalar as dependências e iniciar

Abra o terminal na pasta raiz deste aplicativo (`gestao-financeira-app`) e execute:

```bash
# Instala todas as dependências do projeto
npm install

# Inicia o servidor do Expo limpando o cache (recomendado)
npx expo start -c

```

Pressione a tecla **`a`** no terminal para abrir no emulador Android, ou escaneie o QR Code com o aplicativo Expo Go no seu celular.

---

## 🔐 Credenciais de Acesso (Teste)

Para passar pela tela de validação inicial do aplicativo, utilize:

* **Nome:** *Qualquer nome com mais de 2 letras* (ex: Professor)
* **Senha:** `123456`

---

## ⚠️ Atenção: Avaliação e Testes (Expo Go vs. APK)

Este projeto foi construído utilizando a versão mais recente do **Expo SDK**. Dependendo da versão do aplicativo **Expo Go** instalada no seu dispositivo físico ou emulador (Android Studio), você pode se deparar com o erro: *"Project is incompatible with this version of Expo Go"*.

Para garantir uma avaliação sem interrupções, ofereço duas alternativas:

**Alternativa 1: Teste Nativo via APK (Recomendado)**
Na pasta raiz deste repositório foi disponibilizado o arquivo compilado `gestao-financeira.apk`.

* **No Android Studio:** Com o emulador aberto, clique no arquivo `.apk`, arraste e solte dentro da tela do emulador. O app será instalado nativamente em segundos, ignorando qualquer conflito do Expo Go.
* **No Celular:** Baixe o arquivo e instale diretamente.

**Alternativa 2: Rodando via CLI (`npx expo start`)**
Se preferir rodar o código-fonte e o erro de incompatibilidade ocorrer no emulador do Android Studio:

1. No emulador, desinstale o aplicativo "Expo Go" antigo.
2. No terminal do projeto, rode `npx expo start -c` e pressione `a`. O Expo baixará a versão correta e abrirá o projeto automaticamente.

---

## 📁 Estrutura do Projeto

O projeto segue a arquitetura de roteamento baseada em arquivos do **Expo Router**:

```text
src/
 ├─ app/                 # Rotas e Telas da aplicação (Login, Abas)
 │   ├─ (tabs)/          # Telas internas (Lista, Formulário, Resumo)
 │   ├─ _layout.jsx      # Layout raiz (Provider do Contexto)
 │   └─ login.jsx        # Tela de Autenticação
 ├─ components/          # Componentes reutilizáveis (Inputs, Botões, Cards)
 ├─ contexts/            # Gerenciamento de Estado Global (AuthContext, MoneyContext)
 └─ services/            # Configuração e chamadas da API REST (api.js)

```

---

*Desenvolvido como projeto prático da disciplina de Programação para Dispositivos Móveis.*