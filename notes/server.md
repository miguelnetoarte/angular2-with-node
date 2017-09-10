## Server

O servidor node da aplicação pode ser iniciado através dos comandos `node server.js` ou `npm run serve`.

## Diferença dos comandos

O comando `node server.js` apenas inicia o servidor. Já o comando  `npm run serve` compila o projeto e inicia o servidor em uma porta disponível. Caso não queira executar o servidor node, você pode utilizar `ng serve` do próprio Angular2 para trabalhar nos componentes do seu projeto.

## API's do sistema

O carregamento das API's estão no arquivo `server.js`.
Caso não queira utilizar nenhuma das API's basta remover as seguintes linhas deste arquivo:

```js
//API atual do app
const api = require('./server/routes/api');
app.use('/api', api);
```

```js
//Orquestrador do Watson conversation
const watson = require('./server/ibm/watson/conversation/orquestrador');
app.use('/watson', watson);
```