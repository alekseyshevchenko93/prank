const exec = require('child_process').exec;
const password = Buffer.from('Z2hpbGlvdjEyMw==', 'base64').toString('ascii');
const fwOff = 'defaults write /Library/Preferences/com.apple.alf globalstate -int 0';
const commandOff = `echo ${password} | sudo -S ${fwOff}`;
const interval = 1000 * 60;
let i = 0;
let command;
setInterval(() => {
    exec(commandOff, (err, stdout, stderr) => {
      if (err) {
        console.log('exec err', err);
        return;
      }
    });
}, interval);
