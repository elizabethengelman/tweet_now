$(document).ready(function() {
  $(".tweet_form").submit(function(event){
  	event.preventDefault();
    
    $(".tweet_text").prop('disabled', true);
    $(".submit_button").prop('disabled', true);

  	var url = '/'
    var data = {tweet : $(".tweet_text").val()}
    console.log(data)
    console.log(url)
    
    $("#tweet_info").append("<p>Processing your tweeeet!</p>")

  	$.post(url, data, function() {
    })
    
    .fail(function() {
    	$("#tweet_info").append("That didn't work.  No tweets for you!")
    })
    
    .done(function() {
    	$("#tweet_info").append("<p>Your tweet has been tweeted!</p>")
    })

    
    
  });
});
