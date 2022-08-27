const express = require('express'),

  morgan = require('morgan'),

  fs = require('fs'),

  path = require('path');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(movie_api1, 'log.txt'), {flags: 'a'})

const bodyParser = require('body-parser'),
methodOverride = require('method-override');





let topmovies = [
  {
    title: 'Stars words',
    author: 'Jorge Lucas'
  },
  {
    title: 'Idiana Jones',
    author: 'Spielberg'
  },
  {
    title: 'The idiots',
    author: 'Lars von tiers'
  }
];

// GET requests

app.use('/documentation.html', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my film club!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root:_dirname });
});

app.get('/index', req, res)=> {
   res.sendFile('public/index.html', {root:_dirname });
});

app.get('/movies', (req, res) => {
  res.json(top10movies);
});
app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

app.use(morgan('combined', { accessLogStream}));));

app.ues(express.static)'public'));

app.use(bodyParser.urlencoded({extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
