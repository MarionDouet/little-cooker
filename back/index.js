const express = require('express');

const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const connection = require('./conf');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post('/littlecooker/recipe', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO recipe SET ?', formData, err => {
    if (err) {
      console.log(err)
      res.status(500).send('Erreur');
    } else {
      res.status(201).send('recipe created');
    }
  });
});

app.get('/littlecooker/recipe', (req, res) => {
  connection.query('SELECT * from recipe', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

app.post('/littlecooker/type', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO type SET ?', formData, err => {
    if (err) {
      console.log(err)
      res.status(500).send('Erreur');
    } else {
      res.status(201).send('type of recipe created');
    }
  });
});


app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});