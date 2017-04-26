// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var reviews = [];

reviews.push({ name: 'Good'
});

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
  },
  {
    "name": "Super Mario World"
  },
  {
    "name": "Super Mario Bros."
  },
  {
    "name": "Super Mario Bros. 3"
  },
  {
    "name": "Super Mario 64"
  },
  {
    "name": "Super Mario All-Stars"
  },
  {
    "name": "Super Mario Run"
  },
  {
    "name": "Mario Golf: Toadstool Tour"
  },
  {
    "name": "Super Mario Odyssey"
  },
  {
    "name": "Mario & Luigi: Partners in Time"
  },
  {
    "name": "Mario Super Sluggers"
  },
  {
    "name": "Super Smash Bros. for Wii U"
  },
  {
    "name": "Super Smash Bros. Melee"
  },
  {
    "name": "Super Smash Bros. Brawl"
  },
  {
    "name": "Super Smash Bros. for Wii U - duplicate"
  },
  {
    "name": "Super Smash Bros."
  },
  {
    "name": "Super Smash Bros for Nintendo 3DS"
  },
  {
    "name": "Super Mario Bros."
  },
  {
    "name": "Super Mario Bros. 3"
  },
  {
    "name": "Super Mario World"
  },
  {
    "name": "Smash + Grab"
  },
   {
    "name": "The Witcher 3: Wild Hunt"
  },
  {
    "name": "Gwent: The Witcher Card Game"
  },
  {
    "name": "The Witcher"
  },
  {
    "name": "The Witcher: Enhanced Edition"
  },
  {
    "name": "The Witcher 2: Assassins of Kings"
  },
  {
    "name": "The Witcher Battle Arena"
  },
  {
    "name": "The Witcher 3: Wild Hunt - Game of the Year Edition"
  },
  {
    "name": "The Witcher 3: The Wild Hunt - Hearts of Stone"
  },
  {
    "name": "Gears of War 4"
  },
  {
    "name": "Gears of War"
  },
  {
    "name": "Gears of War 2"
  },
  {
    "name": "Gears of War: Ultimate Edition"
  },
  {
    "name": "Gears of War 3"
  },
  {
    "name": "Gears of War: Judgment"
  },
  {
    "name": "Gears of War 3: Fenix Rising"
  },
  {
    "name": "Gears of War 2: Dark Corners"
  },
  {
    "name": "Gears of War 3: RAAM’s Shadow"
  },
  {
    "name": "God of War"
  }
];


games_list.forEach(
  function(eachGame, index){
  eachGame.reviews = reviews;
  

});
var i;
for (i = 0; i < games_list.length; ++i) {
      console.log(games_list[i].reviews);
    }



   db.Game.remove({}, function(err, games) {
  console.log('removed all games');
  db.Game.create(games_list, function(err, games){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all games');
    console.log("created", games.length, "games");

    process.exit();
       
          });
        });
