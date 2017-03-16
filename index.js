var express=require('express');
var app=express();
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'yE8hGtdMfvbK5ksBqfG7CL88V',
  consumer_secret:      '1AgSNDzitI0Ij7mKJj1tgr0BwRDyCnK8FyiJY515CiqjfpJkvG',
  access_token:         '3623333233-VCYcuYVAjrwIf7vjqxryoUIqr5x3PBGKguv9gsL',
  access_token_secret:  'cT2ay8IzbMdeGdpBShCbmnA2NgWevmNKE5KXz0TMU9XSK',
//  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
//twitt something you want!!
var content={ status: 'hey world! How is u doing man?' };
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
