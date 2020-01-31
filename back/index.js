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

app.get('/littlecooker/recipe/dessert', (req, res) => {
  connection.query('SELECT * from recipe WHERE id_type = 3', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

app.get('/littlecooker/recipe/meal', (req, res) => {
  connection.query('SELECT * from recipe WHERE id_type = 2', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

app.get('/littlecooker/recipe/entree', (req, res) => {
  connection.query('SELECT * from recipe WHERE id_type = 1', (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

app.get('/littlecooker/recipe/:id', (req, res) => {
  const { id } = req.params
  connection.query('SELECT * from recipe WHERE id = ?',[id], (err, results) => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.json(results);
    }
  });
});

app.delete('/littlecooker/recipe/:id', (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM recipe WHERE id = ${id}`, err => {
    if (err) {
      res.status(500).send('Erreur');
    } else {
      res.status(201).send(`La recette est supprimée`);
    }
  });
});

app.put('/littlecooker/recipe/:id', (req, res) => {
  const { id } = req.params.id;
  const formData = req.body;
  connection.query(`UPDATE recipe SET ? WHERE id = ${id}`, [formData, id], err => {
    if (err) {
      res.status(500).send(`Erreur`);
    } else {
      res.status(200).send(`Modif effectuées`);
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