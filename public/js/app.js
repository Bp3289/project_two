// var game = require('./game');


// $(document).ready(function(){
//   console.log('app.js is loaded');
//   $.get('/api/games').sucess(function(games) {
//     game.forEach(function(game){
//       renderGame(games);
//     });
//   });
// });




// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&search=zelda",
//   "method": "GET",
//   "headers": {
//     "x-mashape-key": "M9QdsmWTjWmshwsnh753JGwNcc0xp19CEBGjsnzIgxA8jC9jUD",
//     "accept": "application/json",
//     "cache-control": "no-cache",
//     "postman-token": "1ce6fbe3-fd37-a352-bb91-eb86ebe90252"
//   }
// };

// $('#search').on("click", function(e){
//     e.preventDefault();
//     var serialData = $("#search").find("select,textarea, input").serialize();
//     console.log("serialData: " + serialData);
//     var inputFields = $("#search").find("select,textarea, input");

//   });

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

$(document).ready(function(){
  $('form#search').on('submit', sendOurDataViaAJAX);
  getGame();
});

function sendOurDataViaAJAX(e){
  e.preventDefault();

  // our API uses JSON, so we need to make a javascript object! There are a lot of ways to do this, this just a basic example.
  var game = {
    name: $('form#search input#game-name').val()
  };

  // create a new AJAX request
  $.post('https://ga-cat-rescue.herokuapp.com/api/cats', JSON.stringify(cat))
    .done(function(data){
      addCat(JSON.parse(data));
    });

  // clear our input box!
  $('form#new-cat input#cat-name').val(null);
}

function getCats(){
  var cats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
    .done(function(data){
      console.log(data);
      JSON.parse(data).forEach(function(cat){
        console.log(cat);
        addCat(cat);
      });
    });
}

function addCat(cat) {
  $("ul#cats").prepend("<li>" + cat.name + " - <em>" + cat.note + "</em></li>");
}

