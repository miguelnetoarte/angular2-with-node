## Watson Conversation

Foi utilizado a biblioteca (https://github.com/watson-developer-cloud/node-sdk) como base 
para o conversation, as configurações estão no arquivo `server/ibm/watson/conversation/api.js`

## Configuração

```js
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
  username: '<username>',
  password: '<password>',
  version_date: ConversationV1.VERSION_DATE_2017_05_26
});
```

## Enviando mensagem

```js
conversation.message({
  input: { text: 'What\'s the weather?' },
  workspace_id: '<workspace id>'
 }, function(err, response) {
     if (err) {
       console.error(err);
     } else {
       console.log(JSON.stringify(response, null, 2));
     }
});
```

