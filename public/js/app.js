


// //when the doc loads run all these function
// $(document).ready(function() {
    
   

// var loadGames = []; // array that the songs will go into
 
 
  
//   $.get('/api/games', function(games){
    

//     games.forEach(function(game, index){
//       renderGame(game);
//       buildGameHtml(game.name);
//     });
    
//   });
 
 
//   //grab the form data and serialize it
  
//  $('#singlebutton').on("click", function(e){
//     e.preventDefault();
//     var serialData = $("#game-form").find("select,textarea, input").serialize();
//     console.log("serialData: " + serialData);
//     var inputFields = $("#game-form").find("select,textarea, input");
    


    
  
//     $.ajax({
//       url: 'http://localhost:3000/api/games',
//       type: 'POST',
//       data: serialData 
      
//     })
//     .done(function(){
    
//         $.get('/api/games', function(res){
//           res.forEach(function(thisGame){
//             renderGame(thisGame);
           
//           });
//         });
        
//     });

//   }); //Submit button 
// $('#games').on('click', '.add-game', function(e) {
//     var id= $(this).parents('.game').data('game-id');
//     $('#gameModal').data('game-id', id);
//     $('#gameModal').modal();
//   });

//   $('#gameSong').on('click', handleNewGameSubmit);

// });

// $('#gameModal').modal();






// // adds new song 
// function handleNewGameSubmit(e) {
//   var gameId = $('#gameModal').data('game-id');
//   var gameName = $('#gameName').val();
 

//   var updateGame = {
//     name: gameName,
//   };

//   var stringForPost = '/api/games/' + gameId + '/games';
  

//   $.post(stringForPost, updateGame)
//     .success(function(game) {
//       // re-get full album and render on page
//       $.get('/api/games/' + gameId).success(function(game) {
//         //remove the old album so there arent 2 on the page
//         $('[data-game-id='+ gameId + ']').remove();
//         renderAlbum(game);
//       });


// //this clears the songname text input with an empty string
      
//       $('#gameName').val('');

//       $('#gameModal').modal('hide');

//     });
// }


//   var buildGamesHtml = function(games) {
//   var eachGame = " -- ";

//   games.forEach(function(game) {

//     eachGame = eachGame + " " + game.name + " -- ";
//   });
//   var gamesHtml  =
//    "<li class='list-group-item'>" +
//    "<h4 class='inline-header'>Games:</h4>" +
//    "<span>" + eachGame + "</span>" +
//    "</li>";
//   return gamesHtml;
// };

// // this function takes a single album and renders it to the page
// function renderGame(game) {
 

//   var gameHtml =
//   "        <!-- one album -->" +
//   "        <div class='row album' data-album-id='" + game._id + "'>" +
//   "          <div class='col-md-10 col-md-offset-1'>" +
//   "            <div class='panel panel-default'>" +
//   "              <div class='panel-body'>" +
//   "              <!-- begin album internal row -->" +
//   "                <div class='row'>" +
//   "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
//   "                     <img src='" + "http://placehold.it/400x400'" +  " alt='album image'>" +
//   "                  </div>" +
//   "                  <div class='col-md-9 col-xs-12'>" +
//   "                    <ul class='list-group'>" +
//   "                      <li class='list-group-item'>" +
//   "                        <h4 class='inline-header'>Album Name:</h4>" +
//   "                        <span class='album-name'>" + game.name + "</span>" +
//   "                      </li>" +
//   // "                      <li class='list-group-item'>" +
//   // "                        <h4 class='inline-header'>Artist Name:</h4>" +
//   // "                        <span class='artist-name'>" + album.artistName + "</span>" +
//   // "                      </li>" +
//   // "                      <li class='list-group-item'>" +
//   // "                        <h4 class='inline-header'>Released date:</h4>" +
//   // "                        <span class='album-name'>" + album.releaseDate + "</span>" +
//   // "                      </li>" +

//                                 buildGamesHtml(game.name) +


//   "                    </ul>" +
//   "                  </div>" +
//   "                </div>" +
//   "                <!-- end of game internal row -->" +

//   "              </div>" + // end of panel-body

//   "              <div class='panel-footer'>" +
//   "                <button class='btn btn-primary add-song'>Add Game</button>" +
//   "              </div>" +

//   "            </div>" +
//   "          </div>" +
//   "          <!-- end one album -->";
 
  
//   //grab #albums id and add albumHtml to it
//   $('#games').append(gameHtml);

