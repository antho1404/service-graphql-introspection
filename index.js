const liteflow = new (require('@liteflow/service'))()

liteflow.listenTask({
  introspect: require('./tasks/introspect')
})
  .on('error', (err) => {
    console.error(err)
    process.exit(1)
  })
