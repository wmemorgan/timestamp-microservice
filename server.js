const express = require('express'),
      app = express(),
      port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is live on port:", port);
})