let Twitter = require('twitter');
let config = require('./config.js');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.set('port', (process.env.PORT || 5000))
// start server
const server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
});


let T = new Twitter(config);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
T.stream('statuses/filter', {track: '@realDonaldTrump'}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log('tweet.text '+tweet.text);
    //build our reply object
    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", Would you vote for Trump?"}
            T.post('statuses/update', statusObj,  function(error, tweetReply, response){

              //if we get an error print it out
              if(error){
                console.log(error);
              }
              //print the text of the tweet we sent out
              console.log('tweetReply.text '+tweetReply.text);
            }); 
  });
  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});

