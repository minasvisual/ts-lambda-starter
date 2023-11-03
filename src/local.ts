import Fastify from 'fastify' 
import { handler } from '@/lambdas/example'

const fastify = Fastify({
  logger: true
})

const start = async function (): Promise<void> {
  try {
    await fastify.listen({ port:3333 })
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

fastify.get('/', async function(req, res){
  const output = await handler({
    body: JSON.stringify({
      name: 'John Doe',
      document: '999.999.999-99'
    })
  } as unknown)
  res.send(output)
})

fastify.post('/', async function(req, res){
  const output = await handler({
    body: JSON.stringify({})
  } as unknown)
  res.send(output)
})


start()