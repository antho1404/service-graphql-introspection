const mesg = require('mesg-js').service()

mesg.listenTask({
  introspect: require('./tasks/introspect')
})
  .on('error', (err) => {
    console.error(err)
    process.exit(1)
  })
