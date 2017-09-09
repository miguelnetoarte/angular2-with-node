const app = require('express');
const axios = require('axios');
const router = app.Router();
const dbConfig = require('./db');
//const MongoClient = require('mongodb').MongoClient;
//app.keys = [dbConfig.mongodb.key];

//console.log(process.env.NODE_ENV);

const API = 'https://jsonplaceholder.typicode.com';

router.get('/', (req, res) => {
  res.json({ message: 'Olá! bem vindo a API do kukac student' });
});

router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

/*router.all('/analysis', (req, res) => {
    
});*/


module.exports = router;