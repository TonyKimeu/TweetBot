##Twitter Bot
This bot listen to Tweets sent to Trump and sends a reply to that tweet.
- Go to the Twitter API and create a new application.
- git clone
-Create config.js file and fill in your API key info

```js
/config.js

module.exports = {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  }
```
- npm install
- node app.js from terminal

A demo of the production code is has been for Saka Keja. Tweet @SaKaKeja and it will reply with a list of available houses from there database   