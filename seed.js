// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var games_list = [
    {
    "name": "Halo 5: Guardians"
  },
  {
    "name": "Halo: Combat Evolved"
  },
  {
    "name": "Halo Wars 2"
  },
  {
    "name": "Halo: Combat Evolved Anniversary"
  },
  {
    "name": "Halo: The Master Chief Collection"
  },
  {
    "name": "Halo Wars: Definitive Edition"
  },
  {
    "name": "Halo 2"
  },
  {
    "name": "Halo: Spartan Strike"
  },
  {
    "name": "Halo 4"
  },
  {
    "name": "Halo 3"
  },
  {
    "name": "The Legend of Zelda: Twilight Princess"
  },
  {
    "name": "The Legend of Zelda: Breath of the Wild"
  },
  {
    "name": "The Legend of Zelda: Ocarina of Time"
  },
  {
    "name": "The Legend of Zelda: A Link to the Past"
  },
  {
    "name": "Zelda II: The Adventure of Link"
  },
  {
    "name": "The Legend of Zelda: Skyward Sword"
  },
  {
    "name": "The Legend of Zelda: A Link Between Worlds"
  },
  {
    "name": "The Legend of Zelda: Majora's Mask"
  },
  {
    "name": "The Legend of Zelda: The Wind Waker"
  },
  {
    "name": "The Legend of Zelda: The Minish Cap"
  }
];






   db.Game.remove({}, function(err, games) {
  console.log('removed all games');
  db.Game.create(games_list, function(err, games){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all games');
    console.log("created", games.length, "games");
       
          });
        });
