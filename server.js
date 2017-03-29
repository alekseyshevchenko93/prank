const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;

const HTTP_SERVER_PORT = 9001;
/**
 * HTTP Server
 */
const app = express();

app.use(bodyParser.urlencoded());

app.post('/command', (req, res) => {
  let command = req.body.command;
  executeCommand(command);
  res.send(':)');
});

app.listen(HTTP_SERVER_PORT, () => {
  console.log('http server running on port %s', HTTP_SERVER_PORT)
});
/**
 * Execute command
 */
 function executeCommand(command) {
   exec(command, (err, stdout, stderr) => {
     if (err) {
       console.log('exec err', err);
       return;
     }
   });
 }
