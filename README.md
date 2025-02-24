# CI/CD Pipeline com GitHub Actions

Este repositório contém um pipeline de CI/CD utilizando o GitHub Actions para automatizar a construção, testes, análise estática e implantação da aplicação.

## Requisitos

Antes de rodar o pipeline, certifique-se de que possui os seguintes requisitos instalados:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **SonarQube Scanner** (para análise estática)
- **GitHub CLI** (opcional, para gerenciamento de secrets via CLI)

## Estrutura do Projeto

```
📦 seu-repositorio  
 ┣ 📂 .github/workflows (arquivos do GitHub Actions)  
 ┣ 📂 custom-actions/lint-validator (ação personalizada)  
 ┣ 📜 build.config.json (arquivo de configuração obrigatório)  
 ┣ 📜 package.json (dependências do projeto)  
 ┣ 📜 sonar-project.properties (configuração do SonarQube)  
 ┗ 📜 README.md (este arquivo)  
```

## Secrets Necessários

Os seguintes secrets devem ser configurados no repositório para que o pipeline funcione corretamente:

| Nome do Secret | Descrição |
|---------------|-----------|
| `SONAR_TOKEN` | Token de autenticação do SonarQube |
| `GITHUB_TOKEN` | Token do GitHub para criação de releases |
| `EMAIL_USER` | Usuário do e-mail para notificações |
| `EMAIL_PASSWORD` | Senha do e-mail para notificações |

## Como Adicionar Secrets

1. Acesse o repositório no GitHub.
2. Vá até **Settings > Secrets and variables > Actions**.
3. Clique em **New repository secret** e adicione os valores necessários.

## Como Rodar o Pipeline

O pipeline será executado automaticamente quando houver um commit na branch `main`. Para rodá-lo manualmente:

```sh
# Fazer um commit para disparar o pipeline
git add .
git commit -m "Trigger CI/CD pipeline"
git push origin main
```

