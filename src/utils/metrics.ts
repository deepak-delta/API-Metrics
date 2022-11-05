import express from 'express'
import client from 'prom-client'

const app = express()

const startMerticsServer = () => {
  const collectDefaultMetrics = client.collectDefaultMetrics

  app.listen(9100, () => {
    console.log(`Metrics Server Started `)
  })
}

export default startMerticsServer
