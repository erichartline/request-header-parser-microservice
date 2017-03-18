const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send({
    ipaddress: req.header('x-forwarded-for'),
    language: req.header('accept-language').split(',')[0],
    software: req.header('user-agent').split(/[()]+/)[1]
  });
});

// start up the server
app.listen(port, function() {
  console.log('Server is running');
});
