const express = require('express');
const bodyParser = require('body-parser');

const HTTP_SERVER_PORT = 9002;
/**
 * HTTP Server
 */
const app = express();

app.get('/', (req, res) => {
  console.log('got request', req.connection.remoteAddress);
  res.send('!')
})
app.listen(HTTP_SERVER_PORT, () => console.log('http server running on port %s', HTTP_SERVER_PORT));
