# Angular With Node

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
    # isso executará o build do Angular2 e disponibilizara o projeto no browser com servidor nodejs

## Build e Deploy

    $ npm run build
    # o camonado executará o build otimizado de produção
    $ npm start
    # esse comando iniciará o servidor nodejs
    
## Login

    # para efetuar o login utilize as credenciais de exemplo `user@email.com.br` e `123456`

## Build e deploy

    $ npm install
    # isso instalará todas as bibliotecas necessárias
    $ npm run build
    # isso executará o build de produção
    $ npm start
    # isso iniciará o servidor no ambiente

## Notas

- [Angular2](/notes/angular2.md)
- [API](/notes/server/api.md)
- [Servidor nodejs](/notes/server.md)
- [Watson conversation](/notes/watson-conversation.md)


