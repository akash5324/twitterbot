var express=require('express');
var app=express();
var Twit = require('twit');
var T = new Twit({
  consumer_key:         '##############',
  consumer_secret:      '########################################',
  access_token:         '###########################################',
  access_token_secret:  '####################################',
//  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
//twitt something you want!!
var content={ status: 'hey world! How is u doing man? well bro? Im a fine and running' };
T.post('statuses/update',content , function(err, data, response) {
  if(err)
  {
    console.log("oops! you done something wrong and it is" +"\n" + err.message);
  }
  else
{
  console.log("twit posted !!");
}
});


var name={
  screen_name: 'amytRkPatel'
};
T.get('followers/ids', name,  function (err, data, response) {
  console.log(data)
})
console.log('your bot is healthy and running');
