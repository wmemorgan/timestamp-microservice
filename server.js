const express = require('express'),
      // url = require('url'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log("Server is listening on port:", port);

})