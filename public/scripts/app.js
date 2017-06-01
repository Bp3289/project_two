


//when the doc loads run all these function
$(document).ready(function() {

  var eachGamesReviews = [];

  var reviewsVar = "";

  $.get('/api/games', function(games){
    games.forEach(function(eachGame, index){
      renderGame(eachGame);
       buildReviewsHtml(eachGame.reviews);
    });
    
  });
 
 
  //grab the form data and serialize it
  $('#singlebutton').on("click", function(e){
    e.preventDefault();
    var serialData = $("#game-form").find("select,textarea, input").serialize();
    console.log("serialData: " + serialData);
    var inputFields = $("#game-form").find("select,textarea, input");
  
    $.ajax({
      url: 'http://localhost:3000/api/games',
      type: 'POST',
      data: serialData 
      
    })
    .done(function(){
    
        $.get('/api/games', function(res){
          res.forEach(function(thisGame){
            renderGame(thisGame);
          });
        });
    });
  }); 

  //Submit button click action
  $('#games').on('click', '.review-game', function(e) {
      var id= $(this).parents('.game').data('game-id');
      $('#reviewModal').data('game-id', id);
      $('#reviewModal').modal();
  });

  //delete button click action
  $('#games').on('click', '.delete-game', function(e) {
    
    var id = $(this).parents('.game').data('game-id');


    $(this).parents('.game').remove();

    
      //Delete Route
    $.ajax({
      url: 'http://localhost:3000/api/games/'+ id,
      type: 'DELETE'
    })


    .done(function(){
        $.get('/api/games', function(res){
        });
    });
    //------------------------
  });

  $('#saveReview').on('click', handleNewReviewSubmit);

});

$('#reviewModal').modal();

// adds new review
function handleNewReviewSubmit(e) {
  var gameId = $('#reviewModal').data('game-id');
  var reviewName = $('#reviewName').val();
 

  var updateReview = {
    name: reviewName,
  };

  var stringForPost = '/api/games/' + gameId + '/reviews';
  

  $.post(stringForPost, updateReview)
    .success(function(review) {
      // re-get full game and render on page
      $.get('/api/games/' + gameId).success(function(game) {
        //remove the old game so there arent 2 on the page
        $('[data-game-id='+ gameId + ']').remove();
        renderGame(game);
      });


      //this clears the reviewname text input with an empty string
      
      $('#reviewName').val('');

      $('#reviewModal').modal('hide');

  });
}


//Function that builds the review window
var buildReviewsHtml = function(reviews) {
  var eachReview = " -- ";
  reviews.forEach(function(review) {

    eachReview = eachReview + review.name + " -- ";
  });
  var reviewsHtml  =
   "<li class='list-group-item'>" +
   "<h4 class='inline-header'>Reviews:</h4>" +
   "<span>" + eachReview + "</span>" +
   "</li>";
  return reviewsHtml;
};

// this function takes a single game and renders it to the page
function renderGame(game) {

 
  var gameHtml =
  "        <!-- one game -->" +
  "        <div class='row game' data-game-id='" + game._id + "'>" +
  "          <div class='col-md-10 col-md-offset-1'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin game internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail game-art'>" +
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='game image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Game Name:</h4>" +
  "                        <span class='game-name'>" + game.name + "</span>" +
  "                      </li>" +                   

                                buildReviewsHtml(game.reviews) +


  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of game internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "                <button class='btn btn-primary review-game'>Update Game Reviews</button>" +
  "                <button class='btn btn-primary delete-game'>Delete Game</button>" +
  "             </div>" + 

          


  "            </div>" +
  "          </div>" +
  "          <!-- end one game -->";


 
  
  //grab #games id and add gameHtml to it
  $('#games').prepend(gameHtml);


  $( ".delete-button" ).click(function() {
  $( "game-id" ).remove();
    });

  

}




