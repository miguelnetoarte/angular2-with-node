# Angular2 With Node

A aplicação utiliza o framework Angular CLI (https://angular.io/guide/quickstart) com servidor nodejs configurado

## Pré-requisitos

  - Node.js 6+ (https://nodejs.org/en/)
  - Typescript (https://www.typescriptlang.org)

## Instalação no Ubuntu

    # Instalar Node
    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | bash
    # reiniciar o terminal ou rodar `source ~/.bashrc`
    $ nvm install 6
    # isso vai instalar e configurar o Node v6+ (ou superior)
    $ npm install -g typescript
    # isso vai instalar o typescript
    $ npm install -g @angular/cli
    # isso vai instalar o angular CLI

## Instalação no Windows

    # Instalar Node
    $ https://nodejs.org/en/download/
    # Instalar Git bash
    $ https://git-for-windows.github.io/
    # Após instalar o git abra o terminal bash e execute os seguintes comandos
    $ npm install -g typescript
    # isso vai instalar o typescript
    $ npm install -g @angular/cli
    # isso vai instalar o angular CLI
    
## Após clonar o repositório execute os seguintes comandos

    $ npm install
    # isso irá instalar todas as dependências do projeto

## Desenvolvimento local

    $ npm run serve
    # isso executará o build do Angular2 e disponibilizara o projeto no browser com servidor node
    $ ng serve
    # isso executará o build padrão do Angular e disponibilizará o projeto no browser sem o servidor node

## Build e deploy

    $ npm install
    # isso instalará todas as bibliotecas necessárias
    $ npm run build
    # isso executará o build de produção
    $ npm start
    # isso iniciará o servidor no ambiente

## Notas

- [Watson conversation](notes/ibm.md)

    
## Desenvolvimento com Angular CLI

    Execute `ng serve` para o servidor local. Navegue em `http://localhost:4200/`. O app atualiza a página automaticamente quando um arquivo é alterado

    ## Code scaffolding

    Execute `ng generate component component-name` para gerar um novo componente. Você pode usar também `ng generate directive|pipe|service|class|guard|interface|enum|module`.

    ## Build

    Execute `ng build` para gerar o build do projeto de desenvolvimento. Os artefatos de construção serão armazenados no diretório `dist /`. Use o sinalizador `-prod` para uma compilação de produção.

    ## Running unit tests

    Execute `ng test` para testes unitários com [Karma](https://karma-runner.github.io).

    ## Running end-to-end tests


    Execute `ng e2e` para executar os testes de ponta a ponta através de [Protractor] (http://www.protractortest.org/).
    Antes de executar os testes, verifique se você está servindo o aplicativo via `ng serve`.

    ## Further help

    Para obter mais ajuda sobre a Angular CLI use `ng help` ou vá verificar o  [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


