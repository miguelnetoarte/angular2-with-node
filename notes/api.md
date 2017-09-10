# API Routes

Você pode utilizar o arquivo `server/routes/api.js` para mapear as url's de comunicação com sua base de dados ou até mesmo serviços de terceiros.

## Base de dados

As configurações de banco de dados são carregadas pelo arquivo `server/routes/db.js`

```js
const dbConfig = require('./db');
```
Você pode usar o arquivo `db.js` para configurar sua base de dados:

```js
const configDb = {
    'mongodb': {
        'host': '',
        'database': '',
        'key': ''
    },
    'postgress': {
        'host': '',
        'user': '',
        'password': ''
    },
    'mysql': {
        'host': '',
        'user': '',
        'password': ''
    }
};
```
