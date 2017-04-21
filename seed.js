// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var games_list = [
  {
    name: 'Zelda'
  },
  {
    name: 'Halo',
  },
  {
    name: "Don't Starve"
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
