const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const app = express();
app.use(bodyParser.json);


let users = [
    {
      name: 'Isabel',
      favmovie: ['The girl with the Pearl Earring']
    },
    {
      name: 'Jonathan',
      favmovie: []
    },
    {
      name: 'Paul',
      famovie: ['Pulp Fiction']
    }
  ];
  
  let movies = [
    {
      "Title": "The Girl with a Pearl Earring",
      "Description":"A young peasant maid working in the house of painter Johannes Vermeer becomes his talented assistant and the model for one of his most famous works.",
  
      "Genre": {
      "Name":"Drama",
      "Description": "In film and television, drama is a category or genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular super-genre, macro-genre, or micro-genre.  To these ends, a primary element in a drama is the occurrence of conflict—emotional, social, or otherwise—and its resolution in the course of the storyline.",
    },
  
      "Director": {
        "Name":"Peter Webber",
        "Bio":"Webber estrenó su primer cortometraje, The Zebra Man, sobre la vida del artista friki Horace Ridler, protagonizad por Minnie Driver. En 2012 regresó a la gran pantalla con el drama bélico Emperor, con Tommy Lee Jones como protagonista. En 2016 dirigió la miniserie Tutankhamun, protagonizada por Sam Neill. En 2018 se trasladó a Bogotá, Colombia, para rodar la película Pickpockets. El director ya había visitado Colombia en 2009 para filmar el documental The Sand and the Rain sobre la tribu amazónica Macuna. En 2019 inició el rodaje de una película de suspenso titulada Fremason para Lionsgate.",
        "Birth": 1968
    },
        "imageURl":"https://www.google.com/search?q=Peter+Webber&sxsrf=ALiCzsbH3y2fQ0qkbccGy-0rm4QUs3SwPg:1662127610542&source=lnms&tbm=isch&sa=X&ved=2ahUKEwifubDuo_b5AhV1XfEDHd9zBbEQ_AUoAXoECAIQAw&biw=1280&bih=623&dpr=2#imgrc=IXH_9oF5l5DJbM",
        "Featured": false
    },
  
    {
        "Title": "Pulp fiction",
        "Description": "Pulp fiction','American film written and directed by Quentin Tarantino . The script is based on stories that Tarantino himself developed in collaboration with Roger Avary during the years 1992 and 1993, including scenes that had originally been written for True Romance . Based on a non - linear narrative , the film intertwines several stories whose protagonists are members of organized crime in Los Angeles . The stylized dialogues, the mixture of humor and violence and its tone ironic set the film apart. Its name derives from the popular mid- 20th century pulp literature magazines and hard boiled graphic novels known for their graphic violence and harsh prose",
        "Genre": {
        "Name": "Action",
        "Description": "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterisation or complex plotting. The action typically involves individual efforts on the part of the hero, in contrast with most war films. The genre is closely linked with the thriller and adventure film genres."
     },
        "Director": {
         "Name": "Quetin Tarantino",
         "Bio": "In 1992 he began his career as an independent filmmaker with the premiere of Reservoir Dogs, considered by Empire magazine as 'the best independent film of all time'. His popularity only grew with his second feature film, Pulp Fiction ( 1994), a black comedy anthology that became a huge success with critics and audiences, as well as a fundamental piece of popular culture. Entertainment Weekly designated it as the best film released between 1983 and 2008, and some critics of the British Film Institute placed it at number 127 of the best films of all time.23 In Jackie Brown (1997), Tarantino paid homage to the blaxploitation genre",
         "Birth": "27-03-1963",
         "Death": ""
     },
     "ImagePath": "https://es.wikipedia.org/wiki/Pulp_Fiction#/media/Archivo:Pulp_Fiction_Logo.svg",
     "Feature": true
    },
    
    {
      "Title":"Goya's Ghost",
      "Description":"Goya's Ghosts is a 2006 biographical drama film, directed by Miloš Forman (his final directorial feature before his death in 2018), and written by him and Jean-Claude Carrière. The film stars Javier Bardem, Natalie Portman and Stellan Skarsgård, and was filmed on location in Spain during late 2005. The film was written, produced, and performed in English although it is a Spanish production. Although the historical setting of the film is authentic, the story about Goya trying to defend a model is fictional, as are the characters Brother Lorenzo and the Bilbatúa family.",
  
      "Genre": {
        "Name":"Biography",
        "Description": "A biographical film or biopic, is a film that dramatizes the life of a non-fictional or historically-based person or people. Such films show the life of a historical person and the central character's real name is used.[2] They differ from docudrama films and historical drama films in that they attempt to comprehensively tell a single person's life story or at least the most historically important years of their lives",
      },
      "Director": {
        "Name":"Miloš Forman",
        "Bio":"Jan Tomáš Miloš Forman was a Czech and American film director, screenwriter, actor, and professor who rose to fame in his native Czechoslovakia before emigrating to the United States in 1968. Forman was an important figure in the Czechoslovak New Wave. Film scholars and Czechoslovak authorities saw his 1967 film The Firemen's Ball as a biting satire on Eastern European Communism. The film was initially shown in theatres in his home country in the more reformist atmosphere of the Prague Spring. However, it was later banned by the Communist government after the invasion by the Warsaw Pact countries in 1968.[3] Forman was subsequently forced to leave Czechoslovakia for the United States, where he continued making films, gaining wider critical and financial success. In 1975, he directed One Flew Over the Cuckoo's Nest (1975) starring Jack Nicholson as a patient in a mental institution. The film received widespread acclaim, and was the second in history to win all five major Academy Awards: Best Picture, Director, Screenplay, Actor in Leading Role, and Actress in Leading Role. In 1978, he directed the anti-war musical Hair which premiered at the 1979 Cannes Film Festival. In 1981, he directed the turn of the century drama film, Ragtime, which was known for its large ensemble cast. The film went on to receive eight Academy Award nominations. His next feature was a period biographical film, Amadeus (1984), based on the life of famed classical musician Wolfgang Amadeus Mozart starring Tom Hulce, and F. Murray Abraham. The film was both a critical and financial success earning eleven nominations with eight wins including for Best Picture, and another win for Forman as Best Director. In 1996, Forman received another Academy Award nomination for Best Director for The People vs. Larry Flynt (1996). Throughout Forman's career he won two Academy Awards, three Golden Globe Awards, Grand Prix at the Cannes Film Festival, Golden Bear at the Berlin Film Festival, a British Academy Film Award, a César Award, David di Donatello Award, and the Czech Lion.[4]",
        "Birth": 1968
      },
        "imageURl":"https://www.google.com/search?q=Peter+Webber&sxsrf=ALiCzsbH3y2fQ0qkbccGy-0rm4QUs3SwPg:1662127610542&source=lnms&tbm=isch&sa=X&ved=2ahUKEwifubDuo_b5AhV1XfEDHd9zBbEQ_AUoAXoECAIQAw&biw=1280&bih=623&dpr=2#imgrc=IXH_9oF5l5DJbM",
        "Featured": false
      },
  ];

  //READ
// Get all users
app.get('/movies', (req, res) => {
   res.status(200).json(movies)
})
//READ
app.get('/movies/:title', (req, res) => {
    const { title } = req.params;
    const movie = movies.find( movie.Title == title );
     
    if(movie) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie'); 
    }
    
})

app.get('/movies/genre/:genreName', (req, res) => {
    const { genreName } = req.params;
    const genre = movies.find( movie => movie.Genre.Name == genreName ).Genre;
      
    if(genre) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('no such   genre'); 
    }
    
})
app.get('/directors/:name', (req, res) => {
  let responseText = 'Returns a JSON object of a movie-director by name';
  res.send(responseText);
});

app.post('/users', (req, res) => {
  let newUser = req.body;
  
  if(!newUser.name) {
    const message = 'Missing name in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    usersList.push(newUser);
    res.status(201).send(newUser);
  }
});

app.post('/users/:id/:title', (req, res) => {
  let responseText = `Adds a movie to a user's list of "favorites", then gives an acknowledgement`;
  res.send(responseText);
});
// Removes a movie from a user's list of favorites, then gives an acknowledgement
app.delete('/users/:id/:title', (req, res) => {
  let responseText = `Removes a movie from a user's list of favorites, then gives an acknowledgement`;
  res.send(responseText);
});



app.listen(8080,() => console.log('listen on 8080'))



