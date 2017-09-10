const app = require('express');
const axios = require('axios');
const router = app.Router();
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
  username: '<username>',
  password: '<password>',
  version_date: ConversationV1.VERSION_DATE_2017_05_26
});

router.get('/', (req, res) => {
  res.json({ message: 'Olá! bem vindo a API do Watson' });
});

router.all('/conversation', (req, res) => {
    /*conversation.message({
    input: { text: 'What\'s the weather?' },
    workspace_id: '<workspace id>'
    }, function(err, response) {
        if (err) {
        console.error(err);
        } else {
        console.log(JSON.stringify(response, null, 2));
        }
    });*/
    res.status(200).json({ message: 'Olá eu sou o Watson!' });
});

module.exports = router;