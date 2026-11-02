# Practice Software Testing — Arquitetura E2E (POM, Fixture de Sessão e Data-Driven)

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Playwright** e **TypeScript** para a plataforma **Practice Software Testing (Toolshop)**, aplicando os padrões de arquitetura:

- **Page Object Model (POM)** com injeção de dependência estrita e separação total entre interações e asserções.
- **Fixture de Sessão Autenticada (`auth.fixture.ts`)** injetando a área restrita (`DashboardPage`) pronta para uso sem repetição de login nos testes.
- **Data-Driven Testing (`usuarios.data.ts`)** com contrato fortemente tipado em TypeScript e geração dinâmica de testes via `for...of`.

---

## 🌐 Plataforma Homologada Escolhida

- **Aplicação:** Practice Software Testing (Toolshop v5)
- **URL Base:** [https://practicesoftwaretesting.com](https://practicesoftwaretesting.com)
- **Rota de Login:** `https://practicesoftwaretesting.com/auth/login`
- **Rota da Área Logada (Painel do Cliente):** `https://practicesoftwaretesting.com/account`

---

## 🔑 Credenciais Públicas de Teste Adotadas

| Cenário | E-mail (`usuario`) | Senha (`senha`) | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **Cliente Válido 1 (Jane Doe)** | `customer@practicesoftwaretesting.com` | `welcome01` | Redireciona para `/account` e exibe `Jane Doe` no menu |
| **Cliente Válido 2 (Jack Howe)** | `customer2@practicesoftwaretesting.com` | `welcome01` | Redireciona para `/account` e exibe `Jack Howe` no menu |
| **Senha Incorreta** | `customer@practicesoftwaretesting.com` | `SenhaIncorreta999!` | Permanece em `/auth/login` e exibe `Invalid email or password` |
| **Usuário Não Cadastrado / Restrito** | `bloqueado.inexistente@practicesoftwaretesting.com` | `welcome01` | Permanece em `/auth/login` e exibe `Invalid email or password` |

---

## 📂 Estrutura Canônica do Projeto

```text
Practice Software Testing/
├── data/
│   └── usuarios.data.ts            # Matriz de cenários tipados (Data-Driven)
├── pages/
│   ├── LoginPage.ts                # Page Object da tela de Login
│   └── DashboardPage.ts            # Page Object da Área Restrita / Painel (/account)
├── fixtures/
│   └── auth.fixture.ts             # Custom test com estado autenticado injetado (dashboardPage)
├── tests/
│   ├── dashboard-sessao.spec.ts    # Testes que iniciam direto na área logada via fixture
│   └── login-data-driven.spec.ts   # Testes dinâmicos parametrizados com loop for...of
├── playwright.config.ts            # Configuração do Playwright
├── package.json                    # Dependências e scripts NPM
└── README.md                       # Documentação do projeto
```

---

## 🚀 Como Instalar e Executar a Suíte

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) (v18 ou superior)
- Navegador Google Chrome ou Chromium instalado

### 2. Instalação das dependências
No terminal, dentro da pasta do projeto:

```bash
npm install
```

*(Opcional)* Caso necessário instalar os navegadores do Playwright:
```bash
npx playwright install chromium
```

### 3. Executar todos os testes (Headless)
```bash
npx playwright test
```
Ou via script NPM:
```bash
npm test
```

### 4. Executar os testes com navegador visível (Headed)
```bash
npm run test:headed
```

### 5. Abrir o relatório HTML da execução
```bash
npm run report
```
