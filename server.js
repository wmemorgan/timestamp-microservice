const express = require('express'),
      app = express(),
      path = require('path'),
      port = process.env.PORT || 8080;

const getTimeStamp = (time) => {
  return Date.parse(time);
}

const monthName = (date) => {
  mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return mlist[date.getMonth()];
};

const getTimeObj = (time) => {
  if (time[0].match(/[A-Za-z]/g)) {
    let date = new Date(getTimeStamp(time));
    return {
      unix: getTimeStamp(time),
      natural: time
    }
  } else {
    let date = new Date(parseInt(time));
    return {
      unix: time,
      natural: monthName(date) + ' ' + date.getDate() + ', ' + date.getFullYear()
    }
  }

}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/:time', (req, res) => {

  let urlObject = req.url,
    urlTime = urlObject.slice(1).replace(/%20/g, " "),
    result = getTimeObj(urlTime);

  res.send(result);

})

app.listen(port, () => {
  console.log("Server is listening on port:", port);

})