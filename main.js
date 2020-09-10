var express = require('express');
var app = express();

app.use(express.static("views"));

app.listen(8002, ()=> {
  console.log('Express Server 02');
});
