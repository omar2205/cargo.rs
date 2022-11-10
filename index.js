const exec = require('child_process').exec

const cmd = 'curl https://sh.rustup.rs -sSf | sh'

exec(cmd, (err, stdout, stderr) => {
  console.log('installing rust..\n')
  console.log(stdout)
})
