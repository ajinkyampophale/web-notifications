const express = require('express'),
  webpush = require('web-push'),
  app = express();

require('./startup/static_info')(app);

const publicVapidKey = "";
const privateVapidKey = "";

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

app.get('/', (req, res) => {
  res.render('index');
});

app.post("/subscribe", (req, res) => {

  const subscribe = req.body;

  const payload = JSON.stringify({title: "Push Notification Test", body: "Notification Body Test"});

  webpush.sendNotification(subscribe, payload).catch(err => console.log(err));
});

const PORT = 5000;
app.listen(PORT, (err) => {
  if(err){
    console.log(err);
    process.exit(0);
  }

  console.log(`App Listening on Port => ${PORT}`);
});