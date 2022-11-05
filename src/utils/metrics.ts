import express from 'express'
import client from 'prom-client'

const app = express()

const startMerticsServer = () => {
  const collectDefaultMetrics = client.collectDefaultMetrics

  collectDefaultMetrics()

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType)
    return res.send(await client.register.metrics())
  })

  app.listen(9100, () => {
    console.log(`Metrics Server Started `)
  })
}

export default startMerticsServer
