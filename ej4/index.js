var app = require('one-liner-joke');

var getRandomJoke = app.getRandomJoke();
console.log(getRandomJoke);

getRandomJoke = app.getRandomJoke({
    'exclude_tags': ['hola, picate la cosa', 'El elefante bailarín', 'Diablos! he perdido mi ip']
  });
console.log(getRandomJoke);

var getRandomJokeWithTag = app.getRandomJokeWithTag('Chiste');
console.log(getRandomJokeWithTag);

var getRandomJoke = app.getRandomJokeWithTag('Chiste', {
  'exclude_tags': ['hola, picate la cosa', 'El elefante bailarín', 'Diablos! he perdido mi ip']})