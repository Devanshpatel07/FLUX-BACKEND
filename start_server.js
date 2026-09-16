const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'server_output.log');
const out = fs.openSync(logFile, 'w');
const err = fs.openSync(logFile, 'w');

const child = spawn(process.execPath, [path.join(__dirname, 'server.js')], {
  cwd: __dirname,
  detached: true,
  stdio: ['ignore', out, err]
});

child.unref();
console.log('Backend server running successfully with PID:', child.pid);
