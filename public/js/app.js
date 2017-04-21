
$(document).ready(function(){
  console.log('app.js is loaded');
  $.get('/api/games').sucess(function(games) {
    game.forEach(function(game){
      renderGame(games);
    });
  });
});




var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&search=zelda",
  "method": "GET",
  "headers": {
    "x-mashape-key": "M9QdsmWTjWmshwsnh753JGwNcc0xp19CEBGjsnzIgxA8jC9jUD",
    "accept": "application/json",
    "cache-control": "no-cache",
    "postman-token": "1ce6fbe3-fd37-a352-bb91-eb86ebe90252"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});