const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', function(data){
    console.log("Got stdout data..."); 
});

ls.stderr.on('data', function(data){
    console.log(data);
});

ls.on('close', function (code){
  console.log(`child process exited with code ${code}`);
});