# Bankline

Este projeto foi desenvolvido no decorrer da Santander Dev Week da <a href="https://www.dio.me/dev-week/santander/bootcamps" target="_blank">DIO</a>, ele consiste em uma simulação de um sistema de extrato bancário implementando as tecnologias mais utilizadas no mercado atual, abaixo segue uma descrição resumida das tecnologias:

## **Backend**

- Linguagem de programação: Java 17
- Framework: Spring Boot 2.6.x
- Projeto em camadas
  - Controladores REST
  - Serviços
  - Acesso a dados (Repository)
- Padrão DTO

**Implantação e CI/CD**

- CI/CD
  - Heroku

## **Frontend**

- Linguagem de programação: Typescript
- Framework: Angular

**Layout e navegação**

- HTML
- CSS
  - Flexbox
  - Bootstrap
  - Responsividade
- Layout responsivo
- Components
- Services
- Routes

**Integração com API**

- HttpClient

## Imagens o projeto

1. Página - Listagem de transações

![Transctions list](/images/page-list-transactions.png)

2. Página - Adicionar transação

![Add transaction](/images/page-new-transaction.png)

3. Página - Adicionar correntista

![Add account holder](/images/page-new-account-holder.png)

## Link do projeto implantado (Frontend - Netlify / Backend - Heroku)

<a href="https://acsousa-bankline.netlify.app/" target="_blank">Bankline</a>

**Observação**

Pelo fato do backend estar implantado no Heroku no modo free, pode levar um tempo para aparecer as listagens, isso ocorre porque o servidor hiberna se ficar inativo por alguns minutos.
