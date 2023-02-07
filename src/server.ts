import fastify from 'fastify'
import { env } from './config'

const app = fastify()

app.get('/hello', () => {
  return 'Hello Node!'
})

app
  .listen({
    port: env.httpServer.port,
  })

  .then(() => {
    console.log('HTTP server listening on port ' + env.httpServer.port)
  })
